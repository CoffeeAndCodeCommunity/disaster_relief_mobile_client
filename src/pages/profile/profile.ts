import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  canRender: boolean = false;
  userId: number;
  userProfile: any;
  languages: any[];
  language: any;

  constructor(
    public navCtrl: NavController,
    private userProvider: UserProvider,
  ) {
  }

  ngOnInit() {
    this.renderMe();
  }

  renderMe() {
    this.canRender = true;
  }

}
