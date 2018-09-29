import { Injectable } from '@angular/core';

@Injectable()
export class EventProvider {

  constructor() {
    console.log('Hello EventProvider Provider');
  }

  all(): any {
    const events = 
    [{"id": "1", "name": "average wind speed at sea", "severity": "Moderate", "description": "L\u00f6rdag kv\u00e4ll tillf\u00e4lligt sydv\u00e4st 14 m/s."}, {"id": "2", "name": "heavy snow SMHI-B", "description": "L\u00f6rdag sent eftermiddag och kv\u00e4ll, i den v\u00e4stra och nordligaste delen, sn\u00f6 eller bl\u00f6tsn\u00f6 som kan ge 1-4 cm. I \u00f6vriga delar faller nederb\u00f6rden mest som regn eller sn\u00f6blandat regn.", "severity": "Hazardous"}]
    return events;
  }

  show(id: number) {
    return this.all().filter((instance)=> instance.id == id)
  }


}
