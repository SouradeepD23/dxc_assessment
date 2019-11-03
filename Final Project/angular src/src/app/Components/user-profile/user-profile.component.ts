import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/wallet.model';
import { WalletService } from 'src/app/wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  email:string;
  currentPassword:string;
  newPassword:string;
  confirmNewPassword:string;
  wallet:Wallet={"name":"","email":"","shortId":"","balance":0,"password":"","kycStatus":0,"securityQuestionOne":"","securityQuestionTwo":"","answerOne":"","answerTwo":"","transact":[]};  
  constructor(private walletserv:WalletService,private rout: Router) { }

  ngOnInit() {
    if(localStorage.getItem("login")==="")
    {
      this.rout.navigateByUrl('/login');
    }
    this.email=localStorage.getItem("email");
    this.walletserv.getDetail(this.email).subscribe(
      data=>this.wallet=data,
      error=>console.log(error)
    );
  }
  logout()
  {
    localStorage.setItem("login","");
  }

  updatePassword()
  {
    if(this.wallet.password===this.currentPassword)
    {
      if(this.newPassword.length==0 || this.confirmNewPassword.length==0)
      {
        alert("Empty new password");
      }
      else
      {
        if(this.newPassword===this.confirmNewPassword)
        {
          this.walletserv.updatePassword(this.email,this.newPassword,this.wallet).subscribe(
            error=>console.log(error)
          );
          alert("Password Successfully Changed!!");
        }
        else
        {
          alert(" New Password Mismatch")
        }
      }
    }
    else
    {
      alert("Invalid Current Password");
    }
  }

}
