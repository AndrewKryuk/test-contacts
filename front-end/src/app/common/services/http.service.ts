import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';


type RequestParams = Record<string, any>;


@Injectable({
  providedIn: 'root',
})
export class HttpService {

  constructor(
    private http: HttpClient,
  ) {}


  get$<T>(
    url: string,
    params?: RequestParams,
    options?: RequestParams,
  ) {
    return this.http.get<ApiResponse<T>>(environment.apiUrl + url, { params, ...options });
  }

  post$<T>(
    url: string,
    payload?: RequestParams,
    params?: RequestParams,
  ) {
    return this.http.post<ApiResponse<T>>(environment.apiUrl + url, payload, { params });
  }

  put$<T>(
    url: string,
    payload?: RequestParams,
    params?: RequestParams,
  ) {
    return this.http.put<ApiResponse<T>>(environment.apiUrl + url, payload, { params });
  }

  patch$<T>(
    url: string,
    payload?: RequestParams,
    params?: RequestParams,
  ) {
    return this.http.patch<ApiResponse<T>>(environment.apiUrl + url, payload, { params });
  }

  delete$<T>(
    url: string,
    params?: RequestParams,
  ) {
    return this.http.delete<ApiResponse<T>>(environment.apiUrl + url, { params });
  }
}
