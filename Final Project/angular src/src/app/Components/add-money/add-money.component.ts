import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { LoginComponent } from '../login/login.component';
import { Wallet } from 'src/app/wallet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.component.html',
  styleUrls: ['./add-money.component.css']
})
export class AddMoneyComponent implements OnInit {

  constructor(private walletserv:WalletService,private rout:Router) { }

  ngOnInit() {
    if(localStorage.getItem("login")==="")
    {
      this.rout.navigateByUrl('/login');
    }
  }

  login:LoginComponent;
  email:string;
  balance:number;
  wallet:Wallet;
  to:string="registered bank account";

  addMoney()
  {
    if (this.balance <= 0) {
      alert("Enter valid amount");
    }
    else {
      this.email = localStorage.getItem("email");
      console.log(this.email);
      this.walletserv.updateMoney(this.email, this.balance, this.wallet).subscribe(
        error => console.log(error)
      );
      this.walletserv.updatePassbook(this.email, this.to, this.balance, this.wallet).subscribe(
        error => console.log(error)
      );
      this.rout.navigateByUrl('user-home');
    }


  }

}
