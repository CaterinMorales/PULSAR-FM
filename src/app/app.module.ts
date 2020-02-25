import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AppCenterPush } from '@ionic-native/app-center-push/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';

import { NativeAudio } from '@ionic-native/native-audio/ngx';


@NgModule({
  declarations: [
    MyApp,
    // Aquí se importan los pages
    HomePage,
    Tab1Page,
    Tab2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Tab1Page,
    Tab2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    NativeAudio,
    BackgroundMode,
    AppCenterPush,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
