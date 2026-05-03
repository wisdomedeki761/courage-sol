// Mock hls.js module for @react-three/drei
export const Events = {
  MANIFEST_PARSED: 'hlsManifestParsed',
  LEVEL_LOADED: 'hlsLevelLoaded',
  ERROR: 'hlsError',
};

export default {
  Events,
  isSupported: () => false,
  on: () => {},
  off: () => {},
  loadSource: () => {},
  attachMedia: () => {},
  destroy: () => {},
};