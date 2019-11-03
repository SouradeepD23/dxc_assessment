import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Wallet } from 'src/app/wallet.model';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private walletserv:WalletService,private rout:Router) { }
  wallet:Wallet={"name":"","email":"","shortId":"","balance":0,"password":"","kycStatus":0,"securityQuestionOne":"","securityQuestionTwo":"","answerOne":"","answerTwo":"","transact":[]};  
  check=false;

  ngOnInit() {
    if(localStorage.getItem("login")==="")
    {
      this.rout.navigateByUrl('/login');
    }
  }

  search()
  {
    this.walletserv.getDetail(this.wallet.email).subscribe(
      data=>this.wallet=data,
      error=>console.log(error)
    );

    console.log(this.wallet.email);
    if(this.wallet.name!="")
    {
      this.check=true;
    }
  }

  deleteUser()
  {
    this.walletserv.delete(this.wallet.email).subscribe(
      data=>console.log(data),
      error=>console.log(error)
    );
    alert("User Deleted");
    this.rout.navigateByUrl('admin');
    
  }

}
