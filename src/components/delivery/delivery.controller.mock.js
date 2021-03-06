'use strict';

angular.module('deliveryMock', [])
  .constant('FACILITY_ID', '00adca90da3e44c4fff1166a2b146662')
  .constant('dailyDeliveryMock', {
    "_id": "d8006b0524473a0a4a60b7749766a11d",
    "_rev": "5-fda8a9891698cfb1beff7a06c78470cb",
    "doc_type": "dailyDelivery",
    "version": "1.0.0",
    "deliveryRoundID": "d8006b0524473a0a4a60b7749766a11e",
    "driverID": "abdullahi.ahmed@example.com",
    "date": "2015-01-24",
    "facilityRounds": [
      {
        "drop": 1,
        "facility": {
          "id": "00adca90da3e44c4fff1166a2b146662",
          "name": "Galadimawa Health Post",
          "lga": "Galadimawa Health Post",
          "zone": "Nassarawa",
          "ward": "Nassarawa",
          "contact": "Anantu Bayati",
          "phoneNo": "08035272613"
        },
        "status": "pending",
        "window": "",
        "cancelReport": {},
        "arrivedAt": "",
        "departedAt": "",
        "packedProduct": [
          {
            "productID": "BCG",
            "expectedQty": 70,
            "storageID": "product-storage/frozen"
          },
          {
            "productID": "Men-A",
            "expectedQty": 150,
            "storageID": "product-storage/dry"
          },
          {
            "productID": "OPV",
            "expectedQty": 34,
            "storageID": "product-storage/frozen"
          }
        ],
        "facilityKPI": {
          "outreachSessions": 0,
          "notes": "",
          "antigensKPI": [
            {
              "productID": "BCG",
              "noImmuized": 0
            },
            {
              "productID": "Men-A",
              "noImmuized": 0
            },
            {
              "productID": "OPV",
              "noImmuized": 0
            }
          ]
        }
      },
      {
        "drop": 2,
        "facility": {
          "id": "59feeb58df154a5f9d4641e46d8d0b71",
          "name": "Danja",
          "zone": "Nassarawa",
          "ward": "Ketawa",
          "lga": "Gezawa",
          "contact": "Tijjani Rabiu",
          "phoneNo": "08052808146"
        },
        "status": "pending",
        "cancelReport": {},
        "arrivedAt": "",
        "departedAt": "",
        "packedProduct": [
          {
            "productID": "BCG",
            "expectedQty": 70,
            "storageID": "product-storage/frozen"
          },
          {
            "productID": "Men-A",
            "expectedQty": 150,
            "storageID": "product-storage/dry"
          },
          {
            "productID": "OPV",
            "expectedQty": 34,
            "storageID": "product-storage/frozen"
          }
        ],
        "facilityKPI": {
          "outreachSessions": 0,
          "notes": "",
          "antigensKPI": [
            {
              "productID": "BCG",
              "noImmuized": 0
            },
            {
              "productID": "Men-A",
              "noImmuized": 0
            },
            {
              "productID": "OPV",
              "noImmuized": 0
            }
          ]
        }
      },
      {
        "drop": 3,
        "facility": {
          "id": "120bb6044ac34de9d950dcee9f571ea9",
          "name": "Gwammaja MCH",
          "lga": "Dala",
          "zone": "Nassarawa",
          "contact": "Rabi Dahiru",
          "phoneNo": "07035243034",
          "ward": "Gwammaja"
        },
        "status": "pending",
        "cancelReport": {},
        "arrivedAt": "",
        "departedAt": "",
        "packedProduct": [
          {
            "productID": "BCG",
            "expectedQty": 70,
            "storageID": "product-storage/frozen"
          },
          {
            "productID": "Men-A",
            "expectedQty": 150,
            "storageID": "product-storage/dry"
          },
          {
            "productID": "OPV",
            "expectedQty": 34,
            "storageID": "product-storage/frozen"
          }
        ],
        "facilityKPI": {
          "outreachSessions": 0,
          "notes": "",
          "antigensKPI": [
            {
              "productID": "BCG",
              "noImmuized": 0
            },
            {
              "productID": "Men-A",
              "noImmuized": 0
            },
            {
              "productID": "OPV",
              "noImmuized": 0
            }
          ]
        }
      }
    ],
    "packingList": [
      {
        "productID": "BCG",
        "expectedQty": 210,
        "storageID": "product-storage/frozen"
      },
      {
        "productID": "Men-A",
        "expectedQty": 450,
        "storageID": "product-storage/dry"
      },
      {
        "productID": "OPV",
        "expectedQty": 102,
        "storageID": "product-storage/frozen"
      }
    ]
  });
