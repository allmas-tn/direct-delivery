'use strict';

angular.module('sync')
  .constant('SYNC_DELIVERY_RND', {
    COMPLETE: 'SYNC_DELIVERY_RND_COMPLETE',
    ERROR: 'SYNC_DELIVERY_RND_ERROR',
    DENIED: 'SYNC_DELIVERY_RND_DENIED'
  })
  .constant('SYNC_DAILY_DELIVERY', {
    COMPLETE: 'SYNC_DAILY_DELIVERY_COMPLETE',
    ERROR: 'SYNC_DAILY_DELIVERY_ERROR',
    DENIED: 'SYNC_DAILY_DELIVERY_DENIED'
  })
  .constant('CORE_SYNC_DOWN', {
    COMPLETE: 'CORE_SYNC_DOWN_COMPLETE',
    ERROR: 'CORE_SYNC_DOWN_ERROR',
    DENIED: 'CORE_SYNC_DOWN_DENIED'
  })
  .constant('SYNC_DESIGN_DOC', {
    COMPLETE: 'SYNC_DESIGN_COMPLETE',
    ERROR: 'SYNC_DESIGN_ERROR',
    DENIED: 'SYNC_DESIGN_DENIED'
  })
  .constant('SYNC_STATUS', {
    IN_PROGRESS: 'inProgress',
    COMPLETE: 'complete',
    MAX_RETRY_COMPLETED: 'MAXIMUM_RETRY_COMPLETED',
    ERROR: 'SYNC_ERROR'
  });
