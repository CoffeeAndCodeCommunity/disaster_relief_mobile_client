import { Injectable } from '@angular/core';

@Injectable()
export class TrackedServiceRequestProvider {
  private apiUrl: string = "tracked_service_requests";

  constructor() {
    console.log('Hello TrackedServiceRequestProvider Provider');
  }

  save_request(id): any {
  }

  fetch_list(): any {
  }

}
