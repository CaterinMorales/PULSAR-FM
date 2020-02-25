import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AppCenterPush } from '@ionic-native/app-center-push/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tabHome: any = HomePage;
  selectedIndex: number = 0;
  tabHomeClickEvent: any; //for home tab click event
  reproduciendo:boolean = true;


  tab1: any;
  tab2: any;
  audio = new Audio();

  constructor(private iab: InAppBrowser, private backgroundMode: BackgroundMode, private appCenterPush: AppCenterPush, private local: LocalNotifications) {
    this.tab1 = Tab1Page;
    this.tab2 = Tab2Page;
    this.audio.src = "http://streaming.comunicacioneschile.net:9952/stream/1/;";
    this.audio.load();
    this.audio.play()
    this.reproduciendo = true;
  }

  cargarStreaming(){
    const browser = this.iab.create('http://streaming.comunicacioneschile.net:9300/stream/1/', '_blank', 'location=no');
  }

  play(){
    // Show loading animation.
    // this.audio.src = "http://streaming.comunicacioneschile.net:9952/stream/1/;";
    this.audio.load()
    this.audio.play();
    this.reproduciendo = true;
  }

  pause(){
    this.audio.pause();
    this.reproduciendo = false;
  }





}
