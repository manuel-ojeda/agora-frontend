import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaderResponse } from '@angular/common/http/src/response';
import 'rxjs/add/operator/map';

@Injectable()
export class B2cprofileService {
  b2cProfilesUrl = 'http://192.168.50.40:8085/business/api/v1/b2cprofiles/';
  b2cProfiles: Array<B2cprofile>;
  private headers = new HttpHeaders();
  private httpOptions = {};

  constructor(
    private http: HttpClient
  ) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');

    this.headers = headers;
  }

  /** GET heroes from the server */
  getb2cProfiles(): Observable<B2cprofile[]> {
    console.log('getting b2cprofiles');
    const b2cProfiles =
      this.http.get<B2cprofile[]>(this.b2cProfilesUrl, { headers: this.headers })
        .map(response => {
          const result = response;
          return result;
        });

    return b2cProfiles;
  }
}
