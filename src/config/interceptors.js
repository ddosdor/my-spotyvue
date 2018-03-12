import errorsMap from './errors.map';

/**
 * Authorization interceptor
 * 
 * @param {any} config 
 * @returns 
 */
export const authInterceptor = (config) => {
  const jwtToken = tokenStorage.getItem('token');
  let _config = config;
  if (jwtToken) _config.headers.Authorization = `Bearer ${jwtToken}`;
  return _config;  
}

export const errorHandlerInterceptor = (error) => {
  /**
   * handle error notyfication here. For exmaple notyfications for Element.UI
   * 
   * Notification.error({
   *    title: 'Error',
   *    message: errorsMap[error.response.status],
   * })
   */
  return Promise.reject(error);
}