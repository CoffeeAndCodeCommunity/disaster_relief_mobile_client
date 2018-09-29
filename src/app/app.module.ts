import { ProfilePage } from './../pages/profile/profile';
import { TrackedServiceRequestListPage } from './../pages/tracked-service-request-list/tracked-service-request-list';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { EventProvider } from '../providers/event-request/event-request';
import { QuickViewPage } from '../pages/quick-view/quick-view';
import { SwingModule } from 'angular2-swing';
import { ServiceRequestShowPage } from './../pages/ServiceRequestShow/service-request-show';

import { TabsPage } from '../pages/tabs/tabs';
import { TrackedServiceRequestProvider } from '../providers/tracked-service-request/tracked-service-request';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import { UserProvider } from '../providers/user/user';

@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    QuickViewPage,
    TrackedServiceRequestListPage,
    ServiceRequestShowPage,
    TabsPage,
    ProfilePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    RouterModule,
    SwingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    QuickViewPage,
    TabsPage,
    TrackedServiceRequestListPage,
    ServiceRequestShowPage,
    ProfilePage
  ],
  providers: [
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    EventProvider,
    TrackedServiceRequestProvider,
    SplashScreen,
    UserProvider
  ]
})
export class AppModule {}
