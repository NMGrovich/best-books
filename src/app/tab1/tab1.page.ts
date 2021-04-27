import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFirestore } from "@angular/fire/firestore"
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
  listings: Array<dataCatcher>;
  listingIDs: Array<dataCatcher>;
  IDs: Array<dataCatcher>;
  
  constructor(public alertController: AlertController, public authService: AuthenticationService, public router: Router) {}

  ngOnInit(){
    this.listings = this.authService.pullCollectionsFromDB();
  }

  deleteListing(i) {
    var listingID = this.listingIDs[i];
    console.log(listingID);
    this.authService.deleteListing(listingID);
  }
  
}

interface dataCatcher {
  [key: string]: any
}