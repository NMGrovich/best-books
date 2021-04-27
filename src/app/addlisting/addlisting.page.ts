import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-addlisting',
  templateUrl: './addlisting.page.html',
  styleUrls: ['./addlisting.page.scss'],
})
export class AddlistingPage implements OnInit {

  constructor(public authService: AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  submitNewListing(bname, bdesc, bprice) {
    this.authService.addListing(bname.value, bdesc.value, bprice.value)
    .then((res) => {
      this.router.navigate(['tabs'])
      .then(() => {
        window.location.href = window.location.protocol + '//' + window.location.host + '/tabs';
      });
    }).catch((error) => {
      window.alert(error.message)
    })
  }

}