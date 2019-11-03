import { Component, OnInit } from '@angular/core';
import { Wallet } from 'src/app/wallet.model';
import { WalletService } from 'src/app/wallet.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  
  constructor(private walletserv:WalletService) { }

  ngOnInit() {
   
  }
  logout()
  {
    localStorage.setItem("login","");
  }

}
