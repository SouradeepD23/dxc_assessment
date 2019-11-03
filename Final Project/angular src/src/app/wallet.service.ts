import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Wallet} from './wallet.model';
import { CurrentBalanceComponent } from './Components/current-balance/current-balance.component';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  constructor(private http:HttpClient) { }

  getAllDetails()
  {
    return this.http.get<Wallet[]>('http://localhost:1001/dxcwallet');
  }

  getDetail(email:string)
  {
    return this.http.get<Wallet>(`http://localhost:1001/dxcwallet/${email}`)
  }

  delete(email:string)
  {
    return this.http.delete<Wallet>(`http://localhost:1001/dxcwallet/${email}`)
  }

  saveDetails(wallet:Wallet)
  {
    return this.http.post<any>('http://localhost:1001/dxcwallet',wallet);
  }

   updateMoney(email:string,balance:number,wallet:Wallet)
   {

    return this.http.put(`http://localhost:1001/dxcwallet/${email}/${balance}`,wallet);
   }

   payMoney(email:string,shopName:string,amount:number,wallet:Wallet)
   {
     return this.http.put(`http://localhost:1001/dxcwallet/${email}/${shopName}/${amount}`,wallet);

   }

   updatePassword(email:string,newPassword:string,wallet:Wallet)
   {
     return this.http.put(`http://localhost:1001/dxcwallet/password/${email}/${newPassword}`,wallet);
   }

   updatePassbook(email:string,to:string,balance:number,wallet:Wallet)
   {
     return this.http.put(`http://localhost:1001/dxcwallet/passbook/${email}/${to}/${balance}`,wallet)
   }
   updateTransferPassbook(email:string,to:string,balance:number,wallet:Wallet)
   {
     return this.http.put(`http://localhost:1001/dxcwallet/transferpassbook/${email}/${to}/${balance}`,wallet)
   }






}
