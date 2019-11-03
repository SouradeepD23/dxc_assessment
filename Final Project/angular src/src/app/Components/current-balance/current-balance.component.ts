import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Wallet } from 'src/app/wallet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-balance',
  templateUrl: './current-balance.component.html',
  styleUrls: ['./current-balance.component.css']
})
export class CurrentBalanceComponent implements OnInit {

  constructor(private walletserv:WalletService,private rout: Router) { }

  email:string;

  wallet:Wallet={"name":"","email":"","shortId":"","balance":0,"password":"","kycStatus":0,"securityQuestionOne":"","securityQuestionTwo":"","answerOne":"","answerTwo":"","transact":[]};
  ngOnInit() {
    if(localStorage.getItem("login")==="")
    {
      this.rout.navigateByUrl('/login');
    }
    else
    {
      this.email=localStorage.getItem("email");
    this.walletserv.getDetail(this.email).subscribe(
      data=>this.wallet=data,
      error=>console.log(error)
    );
    }
    
  }

}
