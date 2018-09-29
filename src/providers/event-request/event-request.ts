import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EventProvider {

  constructor(public http: Http) {
    console.log('Hello EventProvider Provider');

  }

  all(): any {
    const events =
      [
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Lördag kväll tillfälligt sydväst 14 m/s.",
          "id": 1,
          "imageUrl": "https://media.phillyvoice.com/media/images/05152018_lightning_stock_Pexels.2e16d0ba.fill-735x490.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Från lördag kväll sydväst 14-17 m/s. Avtagande sent söndag eftermiddag.",
          "id": 2,
          "imageUrl": "https://d1u4oo4rb13yy8.cloudfront.net/article/71489-klgwvidznp-1508409046.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Lördag sent eftermiddag och kväll sydväst 14-17 m/s. Avtagande natt mot söndag.",
          "id": 3,
          "imageUrl": "https://media.phillyvoice.com/media/images/05152018_lightning_stock_Pexels.2e16d0ba.fill-735x490.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Från natt till söndag sydväst ca 15 m/s. Avtagande sent söndag eftermiddag.",
          "id": 4,
          "imageUrl": "http://cdn.video.nationalgeographic.com/45/af/7613e67c456588dedde7d7da0fae/nw-dly-ds1702001-238-tornado-storm-chasing-vin-spd-op-p170629.jpg"
        },
        {
          "name": "Varning klass 1 snöfall",
          "severity": "Moderate",
          "description": "Lördag sent eftermiddag och kväll, i den västra och nordligaste delen, snö eller blötsnö som kan ge 1-4 cm. I övriga delar faller nederbörden mest som regn eller snöblandat regn.",
          "id": 5,
          "imageUrl": "https://d1u4oo4rb13yy8.cloudfront.net/article/71489-klgwvidznp-1508409046.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Lördag sent eftermiddag tillfälligt sydväst ca 15 m/s.",
          "id": 6,
          "imageUrl": "https://d1u4oo4rb13yy8.cloudfront.net/article/71489-klgwvidznp-1508409046.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Sydväst ca 15 m/s. Avtagande söndag morgon.",
          "id": 7,
          "imageUrl": "https://media.phillyvoice.com/media/images/05152018_lightning_stock_Pexels.2e16d0ba.fill-735x490.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Lördag kväll tillfälligt sydväst 14 m/s.",
          "id": 8,
          "imageUrl": "http://cdn.video.nationalgeographic.com/45/af/7613e67c456588dedde7d7da0fae/nw-dly-ds1702001-238-tornado-storm-chasing-vin-spd-op-p170629.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Natt mot söndag, norr om Bornholm, sydväst ca 15 m/s. Avtagande söndag morgon.",
          "id": 9,
          "imageUrl": "https://media.phillyvoice.com/media/images/05152018_lightning_stock_Pexels.2e16d0ba.fill-735x490.jpg"
        },
        {
          "name": "Varning klass 1 högt vattenstånd",
          "severity": "Moderate",
          "description": "Vattenståndet stiger i norra delen och når under kvällen ca 80 cm över medelvattenstånd. Under söndagen åter sjunkande.",
          "id": 10,
          "imageUrl": "http://cdn.video.nationalgeographic.com/45/af/7613e67c456588dedde7d7da0fae/nw-dly-ds1702001-238-tornado-storm-chasing-vin-spd-op-p170629.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Lördag sent eftermiddag och kväll sydväst 15 m/s. Avtagande natt mot söndag.",
          "id": 11,
          "imageUrl": "http://cdn.video.nationalgeographic.com/45/af/7613e67c456588dedde7d7da0fae/nw-dly-ds1702001-238-tornado-storm-chasing-vin-spd-op-p170629.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Från natt mot söndag sydväst ca 15 m/s. Avtagande söndag förmiddag.",
          "id": 12,
          "imageUrl": "https://media.phillyvoice.com/media/images/05152018_lightning_stock_Pexels.2e16d0ba.fill-735x490.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Från lördag kväll sydväst 14-17 m/s. Avtagande sent söndag eftermiddag.",
          "id": 13,
          "imageUrl": "http://cdn.video.nationalgeographic.com/45/af/7613e67c456588dedde7d7da0fae/nw-dly-ds1702001-238-tornado-storm-chasing-vin-spd-op-p170629.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Från lördag kväll sydväst 14-17 m/s. Avtagande sent söndag eftermiddag.",
          "id": 14,
          "imageUrl": "http://cdn.video.nationalgeographic.com/45/af/7613e67c456588dedde7d7da0fae/nw-dly-ds1702001-238-tornado-storm-chasing-vin-spd-op-p170629.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Lördag sent eftermiddag, i östra delen, tillfälligt sydväst ca 15 m/s.",
          "id": 15,
          "imageUrl": "https://d1u4oo4rb13yy8.cloudfront.net/article/71489-klgwvidznp-1508409046.jpg"
        },
        {
          "name": "Varning klass 1 kuling (14-17 m/s)",
          "severity": "Moderate",
          "description": "Sydväst 14-17 m/s. Avtagande söndag morgon.",
          "id": 16,
          "imageUrl": "https://d1u4oo4rb13yy8.cloudfront.net/article/71489-klgwvidznp-1508409046.jpg"
        }
      ]
    let url = 'https://hack-disaster-relief.herokuapp.com/smhi'

    // this.http.get(url).map(res => res.json())
    return events;
  }

  show(id: number) {
    // return this.all().filter((instance)=> instance.id == id)
    return {
      "name": "Varning klass 1 högt vattenstånd",
      "severity": "Moderate",
      "description": "Vattenståndet stiger i norra delen och når under kvällen ca 80 cm över medelvattenstånd. Under söndagen åter sjunkande.",
      "id": 10,
      "imageUrl": "http://cdn.video.nationalgeographic.com/45/af/7613e67c456588dedde7d7da0fae/nw-dly-ds1702001-238-tornado-storm-chasing-vin-spd-op-p170629.jpg"
    }

  }


}
