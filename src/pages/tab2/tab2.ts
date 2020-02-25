import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


/**
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tab2',
  templateUrl: 'tab2.html',
})
export class Tab2Page {

  audio = new Audio();
  constructor(private iab: InAppBrowser) {

  }

  cargarStreaming(){
    const browser = this.iab.create('http://streaming.comunicacioneschile.net:9300/stream/1/', '_blank', 'location=no');
  }

  play(){
    // Show loading animation.
    this.audio.src = "http://streaming.comunicacioneschile.net:9952/stream/1/;";
    var playPromise = this.audio.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Automatic playback started!
        // Show playing UI.
      })
      .catch(error => {
        // Auto-play was prevented
        // Show paused UI.
      });
    }
  }

  pause(){
    this.audio.pause();
  }


}
