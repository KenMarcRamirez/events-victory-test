import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { GlobalsService } from '../globals/globals.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // header = {'Content-Type' : 'application/json'}

  constructor(
    private http: HttpClient
  ) { }

  async getCongregations(type = "") {
    return this.http.get(`${GlobalsService.baseUrl}/congregations?type=${type}`).toPromise();
  }

  async getCampus() {
    return this.http.get(`${GlobalsService.baseUrl}/campus`).toPromise();
  }

  async getNation() {
    return this.http.get(`${GlobalsService.baseUrl}/countries`).toPromise();
  }

  async postOTP(data) {
    console.log(data);
    
    return this.http.post(`${GlobalsService.baseUrl}/generate_otp`, data).toPromise();
  }

  async validateOTP(data) {
    return this.http.post(`${GlobalsService.baseUrl}/validate_otp`, data).toPromise();
  }

  async validateRegistrationCode(data) {
    return this.http.post(`${GlobalsService.baseUrl}/validate_registration`, data).toPromise();
  }

  async getRegistrationInformation(code) {
    return this.http.get(`${GlobalsService.baseUrl}/view_registration?reg_code=${code}`).toPromise();
  }

  async getPaymentHistory(code) {
    return this.http.get(`${GlobalsService.baseUrl}/payment_history?reg_code=${code}&event_id=000001`).toPromise();
  }

  async processPayment(data) {
    return this.http.post(`${GlobalsService.baseUrl}/process_payment`, data).toPromise();
  }

  async register(data) {
    return this.http.post(`${GlobalsService.baseUrl}/save_registration`, data).toPromise();
  }

  


}
