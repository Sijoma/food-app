
import { AxiosError, AxiosResponse } from 'axios';
import HttpClientBase from './http-client.base';

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
    if(error.code === '500'){
      // could setup some handling - STUB
    }
    throw error;
  }
}

export default HttpClient