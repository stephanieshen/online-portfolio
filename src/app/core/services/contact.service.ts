import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private MAIL_API = 'https://api.web3forms.com/submit';

  constructor(
    private httpClient: HttpClient
  ) { }

  postMessage(formData: any): any {
    return this.httpClient.post(`${this.MAIL_API}`, formData, {
      responseType: 'text'
    });
  }
}
