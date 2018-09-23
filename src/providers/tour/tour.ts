import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

/*
  Generated class for the TourProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TourProvider {
  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {
    console.log('Hello TourProvider Provider');
  }



}
