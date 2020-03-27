import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // isUserLoggedIn: boolean = false;
  constructor(private hardcodedAuthenticationService 
    : HardcodedAuthenticationService) { }

  ngOnInit() {
  
    // this.isUserLoggedIn =  this.hardcodedAuthenticationService.isUserLoggedIn();
  
  }

}
