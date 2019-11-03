import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Wallet } from 'src/app/wallet.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email:string;
  checkEmail=false;
  ansOne:string;
  ansTwo:string;
  newPassword:string;
  cnfPassword:string;
  wallet:Wallet={"name":"","email":"","shortId":"","balance":0,"password":"","kycStatus":0,"securityQuestionOne":"","securityQuestionTwo":"","answerOne":"","answerTwo":"","transact":[]}; 
  constructor(private walletserv:WalletService) { }

  ngOnInit() {
  }
  
  validate()
  {
    //console.log(this.email);
    this.walletserv.getDetail(this.email).subscribe(
      data=>this.wallet=data,
      error=>console.log(error)
    );
   // console.log(this.wallet.email );
    this.checkEmail=true;
    
  }

  updatePass()
  {
    if(this.ansOne===this.wallet.answerOne && this.ansTwo===this.ansTwo)
    {
      if(this.newPassword.length==0 || this.cnfPassword.length==0)
      {
        alert("Empty new password");
      }
      else
      {
        if(this.newPassword===this.cnfPassword)
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
      alert("Wrong Answer!")
    }
  }

}
