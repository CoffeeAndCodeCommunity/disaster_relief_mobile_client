import { ProfilePage } from './../profile/profile';
import { QuickViewPage } from '../quick-view/quick-view';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrackedServiceRequestListPage } from '../tracked-service-request-list/tracked-service-request-list';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = QuickViewPage;
  tab2Root = TrackedServiceRequestListPage;
  tab3Root = ProfilePage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
}
