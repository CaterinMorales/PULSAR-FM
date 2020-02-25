import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';




@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  audio = new Audio();

  constructor(private iab: InAppBrowser) {

  }

  // Permite que al salir del stream pueda ejecutarse nuevamente
  // ionViewDidEnter(){
  //   this.cargarStreaming();
  // }

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
