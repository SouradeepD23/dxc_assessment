import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Wallet } from 'src/app/wallet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private rout: Router) { }

  
 

  ngOnInit() {
    if(localStorage.getItem("login")==="")
    {
      this.rout.navigateByUrl('/login');
    }
  }

  logout()
  {
    localStorage.setItem("login","");
  }
}
