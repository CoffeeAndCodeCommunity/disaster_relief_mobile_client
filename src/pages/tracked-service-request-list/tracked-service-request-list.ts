import { EventShowPage } from './../event-show/event-show';
import { TrackedServiceRequestProvider } from './../../providers/tracked-service-request/tracked-service-request';
import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

@Component({
  selector: "page-tracked-service-request-list",
  templateUrl: "tracked-service-request-list.html"
})
export class TrackedServiceRequestListPage {
  list: any[];
  canRender: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private trackedSRProvider: TrackedServiceRequestProvider
  ) {}

  ngOnInit(): void {
    this.trackedSRProvider.fetch_list().subscribe(
      data => {
        this.list = data.json()
        this.renderMe();
      },
      error => console.log(error)
    )
  }

  renderMe() {
    this.canRender = true;
  }

  launchEventShowPage(id) {
    this.navCtrl.push(EventShowPage, { event_id: id });
  }

  consoleLogMe() {
    console.log('You clicked me!!');
  }
}
