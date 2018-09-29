import { Injectable } from '@angular/core';

@Injectable()
export class ServiceRequestProvider {
	private apiUrl: string = "service_requests";
	private apiBidsUrl: string = 'service_requests/bids';
	

  constructor() {
    console.log('Hello EventProvider Provider');
  }

  all(): any {
		
  }

  
}
