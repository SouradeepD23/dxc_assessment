import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/wallet.model';
import { WalletService } from 'src/app/wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {


  email:string;
  amount:number;
  shopName:string;
  wallet:Wallet={"name":"","email":"","shortId":"","balance":0,"password":"","kycStatus":0,"securityQuestionOne":"","securityQuestionTwo":"","answerOne":"","answerTwo":"","transact":[]};  constructor(private walletserv:WalletService,private rout:Router) { }

  ngOnInit() {
    if(localStorage.getItem("login")==="")
    {
      this.rout.navigateByUrl('/login');
    }
  }

  payMoney()
  {
    this.email=localStorage.getItem("email");
    this.walletserv.getDetail(this.email).subscribe(
      data=>{this.wallet=data;
        if (this.amount <= 0) {
          alert("Enter valid amount");
        }
        else if (this.wallet.balance <= 0 || this.wallet.balance < this.amount) {
          alert("Garib Hai Tu!! Paisa add kar");
        }
        else {

          this.walletserv.payMoney(this.email, this.shopName, this.amount, this.wallet).subscribe(
            error => console.log(error)
          );
          this.walletserv.updatePassbook(this.email, this.shopName, this.amount, this.wallet).subscribe(
            error => console.log(error)
          );
          this.rout.navigateByUrl('user-home');
        }
      },
      error=>console.log(error)
    );
    //console.log(this.wallet.balance);
    // if(this.wallet.balance<=0 || this.wallet.balance<this.amount)
    // {
    //   alert("Garib Hai Tu!! Paisa add kar");
    // }
    // else
    // {

    //   this.walletserv.payMoney(this.email,this.shopName,this.amount,this.wallet).subscribe(
    //     error=>console.log(error)
    //   );
    //   this.walletserv.updatePassbook(this.email,this.shopName,this.amount,this.wallet).subscribe(
    //     error=>console.log(error)
    //   );
    //   this.rout.navigateByUrl('user-home');
    // }


  }

}
