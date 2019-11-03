import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Wallet } from 'src/app/wallet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.component.html',
  styleUrls: ['./passbook.component.css']
})
export class PassbookComponent implements OnInit {

  email:string;
  transactions:string[]=[];
  wallet:Wallet={"name":"","email":"","shortId":"","balance":0,"password":"","kycStatus":0,"securityQuestionOne":"","securityQuestionTwo":"","answerOne":"","answerTwo":"","transact":[]};
  constructor(private walletserv:WalletService,private rout : Router) { }

  ngOnInit() {
    if(localStorage.getItem("login")==="")
    {
      this.rout.navigateByUrl('/login');
    }
    this.email=localStorage.getItem("email");
    console.log(this.email)
    let test= this.walletserv.getDetail(this.email).subscribe(
      data=>this.wallet=data,
      error=>console.log(error)
    );
    
    
   this.transactions=this.wallet.transact;
   console.log(this.wallet.name)
  }

}
