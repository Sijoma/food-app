import axios, { AxiosInstance } from 'axios';

abstract class HttpClientBase {
  protected readonly instance: AxiosInstance;

  public constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL,
    });
  }
}

export default HttpClientBase