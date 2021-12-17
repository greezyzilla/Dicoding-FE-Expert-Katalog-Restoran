const CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_SM: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_MD: 'https://restaurant-api.dicoding.dev/images/medium/',
  BASE_IMAGE_URL_LG: 'https://restaurant-api.dicoding.dev/images/large/',
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: `restologue-${new Date().toISOString()}`,
  DATABASE_NAME: 'restologue-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

export default CONFIG;
