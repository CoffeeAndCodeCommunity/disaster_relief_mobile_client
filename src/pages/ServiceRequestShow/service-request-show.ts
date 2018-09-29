import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { ServiceRequestProvider } from "./../../providers/service-request/service-request";

@Component({
  selector: "page-sr-show",
  templateUrl: "service-request-show.html"
})
export class ServiceRequestShowPage {
  service_request: any;
  canRender: boolean = false;
  serviceId: number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private serviceRequestProvider: ServiceRequestProvider,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.serviceId = this.navParams.get("service_request_id");
    this.renderMe();
  }

  renderMe() {
    this.canRender = true;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ServiceRequestShowPage");
  }

  
}
