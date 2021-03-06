'use strict';

angular.module('auth')
  .service('AuthService', function AuthService($rootScope, $window, $log, $q, $localStorage, $sessionStorage, pouchDB, config, utility, $state) {
    // seed asmCrypto PRNG for better security when creating random password salts
    $window.asmCrypto.random.seed($window.crypto.getRandomValues(new Uint8Array(128)));

    var _this = this;

    var tempPassword;

    function day() {
      return utility.formatDate(new Date());
    }

    function storageKey(username) {
      return username + day();
    }

    function hash(password, salt, iterations) {
      return $window.asmCrypto.PBKDF2_HMAC_SHA256.hex(password, salt, iterations);
    }

    // cleanup and prepare auth storage
    if ($localStorage.auth) {
      var d = day();
      angular.forEach($localStorage.auth, function(value, key) {
        if (value.day !== d) {
          delete $localStorage.auth[key];
        }
      });
    } else {
      $localStorage.auth = {};
    }

    // init current user from session
    var currentUser = $sessionStorage.user || null;

    // properties
    Object.defineProperty(this, 'currentUser', {
      get: function() {
        return currentUser;
      }
    });

    Object.defineProperty(this, 'isLoggedIn', {
      get: function() {
        return !!currentUser;
      }
    });

    // methods

    _this.getTempPassword = function(){
      return tempPassword;
    };

    _this.setCurrentUser = function(user) {
      if (user !== currentUser) {
        currentUser = user;
        $sessionStorage.user = user;

        $rootScope.$emit('currentUserChanged', user);
      }
    };

    _this.offlineLogin = function(username, password) {
      var local = $localStorage.auth[storageKey(username)];
      var deferred = $q.defer();
      if (local) {
        if (hash(password, local.salt, local.iterations) === local.derived) {
          _this.setCurrentUser(local.user);
          deferred.resolve(local.user);
        } else {
          deferred.reject('authInvalid');
        }
      }else{
        deferred.reject('authInvalid');
      }
      return deferred.promise;
    };

    /**
     * used to handle Server auth error, should do the following:
     * 1. delete local credential of user with failed server auth,
     * 2. logout user.
     *
     * @param username
     * @param password
     */
    function handleUnauthourisedAccess(username, err){
      tempPassword = null;
      delete $localStorage.auth[storageKey(username)];
      return _this.logout()
        .finally(function(){
          return $q.reject(err);
        });
    }

    this.login = function(username, password) {
      if (!username || !password) {
        return $q.reject('authInvalid');
      }

      tempPassword = password;

      return this.loginToServer(username, password)
        .catch(function(err) {
          if (err.status === 401) {
            return handleUnauthourisedAccess(username, err);
          }
          return _this.offlineLogin(username, password);
        });
    };

    this.loginToServer = function(username, password) {
      if (!username || !password) {
        return $q.reject('authInvalid');
      }

      var db = pouchDB(config.db);

      return db.login(username, password)
        .then(function() {
          return db.getUser(username);
        })
        .then(function(response) {
          var salt = $window.asmCrypto.bytes_to_hex($window.crypto.getRandomValues(new Uint8Array(16)));
          var iterations = 10;
          var derived = hash(password, salt, iterations);
          var user = {
            _id: response._id,
            _rev: response._rev,
            name: response.name,
            roles: response.roles
          };

          $localStorage.auth[storageKey(username)] = {
            day: day(),
            salt: salt,
            iterations: iterations,
            derived: derived,
            user: user
          };

          _this.setCurrentUser(user);
          return user;
        }.bind(this))
        .catch(function(err) {
          if(err.name === 'unauthorized'){
            return $q.reject('authInvalid');
          }
          return $q.reject('networkError');
        });
    };

    this.logout = function() {
      _this.setCurrentUser(null);
    };

  });
