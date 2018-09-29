import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { EventProvider } from "./../../providers/event-request/event-request";

@Component({
  selector: "page-sr-show",
  templateUrl: "event-show.html"
})
export class EventShowPage {
  service_request: any;
  canRender: boolean = false;
  serviceId: number;
  bgImage: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eventProvider: EventProvider,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.serviceId = this.navParams.get("event_id");
    this.renderMe();
  }

  renderMe() {
    this.canRender = true;
  }

  ionViewDidLoad() {
    this.bgImage = 'https://www.worldvision.org/corporate/wp-content/uploads/sites/2/2017/05/Disaster-Relief-Mobile-reduced.jpg'
    console.log("ionViewDidLoad EventShowPage");
  }

  
}
