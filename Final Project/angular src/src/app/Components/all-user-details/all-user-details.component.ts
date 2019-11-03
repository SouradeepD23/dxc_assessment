import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Wallet } from 'src/app/wallet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-user-details',
  templateUrl: './all-user-details.component.html',
  styleUrls: ['./all-user-details.component.css']
})
export class AllUserDetailsComponent implements OnInit {

  constructor(private walletserv:WalletService,private rout: Router) { }

  wallets:Wallet[]=[];
  ngOnInit() {
    if(localStorage.getItem("login")==="")
    {
      this.rout.navigateByUrl('/login');
    }
    
      this.walletserv.getAllDetails().subscribe(
        data =>this.wallets=data,
        error=>console.log(error)
      );
    
  }

}
