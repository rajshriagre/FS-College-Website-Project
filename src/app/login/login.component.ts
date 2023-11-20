import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userlogin = true;
  userregister = false;

  constructor(private router: Router)
  {

  }
  user_register()
  {
    // this.userlogin = false;
    // this.userregister = true;
  }
  user_login()
  {
    console.log("Rajshri")
    this.userlogin = true;
    if(this.userlogin==true)
    {

      this.router.navigateByUrl('/home');
    }
    else{
      this.router.navigateByUrl('/home');
    }
    // this.userregister = false;
  }
  // if (this.userRole=="Trainer") 
  // {
  //   this.authService.isLoggedIn = true;
  //   this.router.navigateByUrl('/trainerhome');

  //  } 
}
