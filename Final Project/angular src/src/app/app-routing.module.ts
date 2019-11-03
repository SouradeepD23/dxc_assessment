import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Components/registration/registration.component';
import { LoginComponent } from './Components/login/login.component';
import { UserHomeComponent } from './Components/user-home/user-home.component';
import { UserProfileComponent } from './Components/user-profile/user-profile.component';
import { AdminComponent } from './Components/admin/admin.component';
import { AddMoneyComponent } from './Components/add-money/add-money.component';
import { CurrentBalanceComponent } from './Components/current-balance/current-balance.component';
import { PayComponent } from './Components/pay/pay.component';
import { PassbookComponent } from './Components/passbook/passbook.component';
import { TransferComponent } from './Components/transfer/transfer.component';
import { AllUserDetailsComponent } from './Components/all-user-details/all-user-details.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';

const routes: Routes = [
  {path:'',
  redirectTo:'login',
  pathMatch:'full'
  },
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotPasswordComponent},
  {path:'registration',component:RegistrationComponent },
  {
    path:'user-home',component:UserHomeComponent,
    children:[
      {path:'',
        redirectTo:'user-home/current-balance',
        pathMatch:'full'
      },
      {path:'user-home/current-balance',component:CurrentBalanceComponent},
      {path:'user-home/addmoney',component:AddMoneyComponent},
      {path:'user-home/pay',component:PayComponent},
      {path:'user-home/passbook',component:PassbookComponent},
      {path:'user-home/transfer',component:TransferComponent}
    ]},
  {path:'profile',component:UserProfileComponent},
  {path:'admin',component:AdminComponent,
  children:[
    {
      path:'admin/getAllUsers', component:AllUserDetailsComponent
    },
    {path:'admin/delete',component:DeleteComponent}
  ]}
];

// {
//   path:'services',component:OurservicesComponent,
//   children:[
//     {path:'services/laundry',component:LaundryComponent},
//     {path:'services/resturant',component:ResturantComponent}
//   ]
// }

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
