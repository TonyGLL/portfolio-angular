import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  loading = false;

  URI = 'https://server-potfolio.herokuapp.com/send-email';

  constructor( private http: HttpClient ) { }

  sendMessage(values) {

    console.log(values);

    return this.http.post(this.URI, values);
  }
}
