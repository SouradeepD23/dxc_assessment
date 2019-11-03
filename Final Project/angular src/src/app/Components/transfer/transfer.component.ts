import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/wallet.model';
import { WalletService } from 'src/app/wallet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  receiverEmail:string;
  check=false;
  name:string;
  amount:number;
  email:string;
  wallet:Wallet={"name":"","email":"","shortId":"","balance":0,"password":"","kycStatus":0,"securityQuestionOne":"","securityQuestionTwo":"","answerOne":"","answerTwo":"","transact":[]};
   constructor(private walletserv:WalletService,private rout:Router) { }

  ngOnInit() {
  }

  validate()
  {
    this.email=localStorage.getItem("email");
    this.walletserv.getDetail(this.receiverEmail).subscribe(
      data=>{this.wallet=data;
        this.name = this.wallet.name;
        console.log(this.wallet.name);
        this.check = true;
      },
      error=>console.log(error)
    );

  }

  transferMoney()
  {
    this.walletserv.getDetail(this.email).subscribe(
      data=>{this.wallet=data;
        if(this.amount <= 0) {
          alert("Enter valid amount");
        }
        else if (this.wallet.balance <= 0 || this.wallet.balance < this.amount) {
          alert("Garib Hai Tu!! Paisa add kar");
        }
        else {
          this.walletserv.payMoney(this.email, this.receiverEmail, this.amount, this.wallet).subscribe(
            error => console.log(error)
          );
          this.walletserv.updatePassbook(this.email, this.receiverEmail, this.amount, this.wallet).subscribe(
            error => console.log(error)
          );

          this.walletserv.updateMoney(this.receiverEmail, this.amount, this.wallet).subscribe(
            error => console.log(error)
          );
          this.walletserv.updateTransferPassbook(this.receiverEmail, this.email, this.amount, this.wallet).subscribe(
            error => console.log(error)
          );
          this.rout.navigateByUrl('user-home');
        }
      },
      error=>console.log(error)
    );
    //console.log(this.email);

  }

}
