import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddMoneyComponent } from './Components/add-money/add-money.component';
import { CurrentBalanceComponent } from './Components/current-balance/current-balance.component';
import { PayComponent } from './Components/pay/pay.component';
import { PassbookComponent } from './Components/passbook/passbook.component';
import { TransferComponent } from './Components/transfer/transfer.component';
import { AllUserDetailsComponent } from './Components/all-user-details/all-user-details.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './Components/delete/delete.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { TransactionPipe } from './Components/transaction.pipe';
import { BalancePipe } from './Components/balance.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    UserHomeComponent,
    UserProfileComponent,
    AdminComponent,
    AddMoneyComponent,
    CurrentBalanceComponent,
    PayComponent,
    PassbookComponent,
    TransferComponent,
    AllUserDetailsComponent,
    DeleteComponent,
    ForgotPasswordComponent,
    TransactionPipe,
    BalancePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
