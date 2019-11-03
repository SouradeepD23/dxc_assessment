import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Wallet } from 'src/app/wallet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  errorMessage="";
  constructor(private walletserv:WalletService,private rout:Router) { }


  wallet:Wallet={"name":"","email":"","shortId":"","balance":0,"password":"","kycStatus":0,"securityQuestionOne":"","securityQuestionTwo":"","answerOne":"","answerTwo":"","transact":[]};
    ngOnInit() {
  }

  validate()
  {
    const emailCheck = /@dxc.com/;
    if ( this.email.search(emailCheck) === -1) {
      this.errorMessage += ' invalid email';
            alert(this.errorMessage);
    }
    if(this.email==='admin@dxc.com' && this.password==='admin')
    {
      localStorage.setItem("email",this.email);
      localStorage.setItem("login","true");
      this.rout.navigateByUrl('admin');
    }
    else
    {

    this.walletserv.getDetail(this.email).subscribe(
      data=>{this.wallet=data;

    if(!this.wallet.email.match(this.email))
    {
      this.errorMessage+="Invalid Email";
      alert(this.errorMessage);
    }
    if(!this.wallet.password.match(this.password))
    {
  this.errorMessage+="Invalid Password";
  alert(this.errorMessage);
    }
    else
    {
      localStorage.setItem("email",this.email);
      localStorage.setItem("login","true");
      this.rout.navigateByUrl('user-home');
    }



      },
      error=>console.log(error)
    );

    }
  }


}
