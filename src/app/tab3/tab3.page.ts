import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from "../shared/authentication-service";
import { AngularFirestore } from "@angular/fire/firestore"
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {
  listings: Array<dataCatcher>;
  listingIDs: Array<dataCatcher>;
  IDs: Array<dataCatcher>;
  userLogged : boolean;
  
  constructor(public alertController: AlertController, public authService: AuthenticationService, public router: Router) {}

  ngOnInit(){
    this.listings = this.authService.pullCollectionsFromDB();
    this.userLogged = this.authService.isLoggedIn;
  }

  ionViewWillEnter(){
    this.userLogged = this.authService.isLoggedIn;
    this.listings = this.authService.pullCollectionDataFromDBForUser();
    this.listingIDs = this.authService.pullCollectionIDFromDBForUser();
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