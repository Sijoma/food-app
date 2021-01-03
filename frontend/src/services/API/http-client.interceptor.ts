
import { AxiosError, AxiosResponse } from 'axios';
import HttpClientBase from './http-client.base';

export class HttpError extends Error {
  httpError: AxiosError
  constructor(httpError: AxiosError, message?: string)  {
      super(message);
      this.name = HttpError.name; 
      this.httpError = httpError
  }
}
declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient extends HttpClientBase {
  public constructor(baseURL: string) {
    super(baseURL)

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: AxiosError) => {
    let errorObj = new HttpError(error);
    if(error.code === '500'){
      errorObj.message = 'There was an internal server error. ';
    } else {
      errorObj.message = 'We are not sure what the error is :/';
    }
    throw errorObj
  }
}

export default HttpClient