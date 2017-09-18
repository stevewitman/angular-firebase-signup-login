import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyDNn0Mz3Xw2FO3j-Al3j9kV9dDwE2u0jOE",
      authDomain: "demogram-d9e9b.firebaseapp.com",
      databaseURL: "https://demogram-d9e9b.firebaseio.com",
      projectId: "demogram-d9e9b",
      storageBucket: "demogram-d9e9b.appspot.com",
      messagingSenderId: "1063434137426"
    };
    firebase.initializeApp(config);
  }
}
