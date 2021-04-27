import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../shared/authentication-service";

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.page.html',
  styleUrls: ['./passwordreset.page.scss'],
})
export class  PasswordresetPage implements OnInit {

  constructor(public authService: AuthenticationService) { }

  ngOnInit() {
  }

}