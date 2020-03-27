import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'in28minutes';
  password = '';
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  constructor(private router:Router,
    private HardcodedAuthenticationService: HardcodedAuthenticationService
    ) { }

  ngOnInit() {
  }

  handleLogin(){
     // console.log(this.username);
      if (this.HardcodedAuthenticationService.authenticate(this.username,this.password)){
        this.router.navigate(['welcome',this.username])
        this.invalidLogin = false;
      }else {
       this.invalidLogin = true; 
      }

  }


}
