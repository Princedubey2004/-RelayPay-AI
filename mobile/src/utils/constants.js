// ============================================
// Prince Dubey AI - Constants
// mobile/src/utils/constants.js
// ============================================
// App-wide constants — API URL, status maps, etc.

import { Platform } from 'react-native';

// Backend API base URL
// Android emulator uses 10.0.2.2 to reach host machine
const LOCAL_API_HOST = Platform.OS === 'android' ? '10.0.2.2' : 'localhost';

export const API_BASE_URL = __DEV__
  ? `https://lgowt-2409-40c4-e9-694b-e1ab-c184-716b-42f9.free.pinggy.net/api`
  : 'https://your-production-url.com/api';

// Payment status display config
export const PAYMENT_STATUS = {
  created: { label: 'Pending', color: '#FFB300' },
  authorized: { label: 'Authorized', color: '#448AFF' },
  captured: { label: 'Completed', color: '#00E676' },
  failed: { label: 'Failed', color: '#FF5252' },
  refunded: { label: 'Refunded', color: '#5A6378' },
  expired: { label: 'Expired', color: '#5A6378' },
};

// Queue status display config
export const QUEUE_STATUS = {
  queued: { label: 'Queued', color: '#FFB300', icon: 'clock' },
  processing: { label: 'Processing', color: '#448AFF', icon: 'sync' },
  synced: { label: 'Synced', color: '#00E676', icon: 'check-circle' },
  failed: { label: 'Failed', color: '#FF5252', icon: 'alert-circle' },
  cancelled: { label: 'Cancelled', color: '#5A6378', icon: 'x-circle' },
};

// Risk level display config
export const RISK_LEVELS = {
  low: { label: 'Low Risk', color: '#00E676' },
  medium: { label: 'Medium Risk', color: '#FFB300' },
  high: { label: 'High Risk', color: '#FF5252' },
  critical: { label: 'Critical', color: '#D50000' },
};

// AsyncStorage keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: '@princedubey_auth_token',
  USER_DATA: '@princedubey_user_data',
  OFFLINE_QUEUE: '@princedubey_offline_queue',
};
