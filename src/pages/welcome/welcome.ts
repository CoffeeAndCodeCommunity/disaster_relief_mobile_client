import { QuickViewPage } from '../quick-view/quick-view';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams, App, AlertController } from 'ionic-angular';
import { FormsModule } from '@angular/forms';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  currentUser: any;
  email: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public app: App,
    private alertCtrl: AlertController,
  ) {}

}
