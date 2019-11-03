import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/wallet.service';
import { Route, Router } from '@angular/router';
import { Wallet } from 'src/app/wallet.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private walletserv:WalletService,private rout:Router) { }

userName: string;
email: string;
shortId: string;
password: string;
passwordConfirm: string;
securityQuestionOne:string;
securityQuestionTwo:string;
answerOne:string;
answerTwo:string;
errorMessage = '';


wallet:Wallet;
transact:string[];
validateForm() {
  this.wallet={"name":this.userName,"email":this.email,"shortId":this.shortId,"balance":0,"password":this.password,"kycStatus":0,"securityQuestionOne":this.securityQuestionOne,"securityQuestionTwo":this.securityQuestionTwo,"answerOne":this.answerOne,"answerTwo":this.answerTwo,"transact":this.transact};
  const userNameCheck = /^[a-zA-Z\s]+$/;
  const emailCheck = /@dxc.com/;

  if (!this.userName.match(userNameCheck)) {
    this.errorMessage = ' Invalid Username ';
  }

  if (this.shortId.length < 8) {
    this.errorMessage = ' Invalid short Id ';
  }

  if ( this.password !== this.passwordConfirm) {
    this.errorMessage +=  ' Password mismatch ';
  }

  if ( this.email.search(emailCheck) === -1) {
    this.errorMessage += ' Pnvalid email ';

  }

  if(this.securityQuestionOne===this.securityQuestionTwo){
    console.log(this.securityQuestionOne);
    console.log(this.securityQuestionTwo);
    this.errorMessage+=' Select Different Security Question ';
  }

  if ( this.errorMessage.length > 0) {
    window.alert(this.errorMessage);
    //this.rout.navigateByUrl('registration');
  }

  else{
  
     this.walletserv.saveDetails(this.wallet).subscribe(
       data=>console.log(data),
       error=>console.log(error)
     );
       this.rout.navigateByUrl('login');

  }





}



  ngOnInit() {
  }

}