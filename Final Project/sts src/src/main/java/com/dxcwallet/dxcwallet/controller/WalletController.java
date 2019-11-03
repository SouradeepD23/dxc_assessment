package com.dxcwallet.dxcwallet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.dxcwallet.dxcwallet.dao.WalletDao;
import com.dxcwallet.dxcwallet.model.Wallet;

@CrossOrigin
@RestController
public class WalletController {

	@Autowired
	WalletDao walletDao;
	
	@PostMapping(value="dxcwallet")
	public Wallet saveUser(@RequestBody Wallet wallet)
	{
		return walletDao.saveUser(wallet);
	}
	
	@GetMapping(value="dxcwallet")
	public List<Wallet> getAllRest()
	{
		return walletDao.getAllUsers(); 
		
	}
	
	@GetMapping(value="dxcwallet/{email}")
	public Object getUser(@PathVariable String email )
	{
		System.out.print(email);
		return walletDao.getUserById(email); 
		
	}
	
	@DeleteMapping(value="dxcwallet/{email}")
	public void deleteUser(@PathVariable String email)
	{
		walletDao.delete(email); 
		
	}
	
	@PutMapping(value="dxcwallet/{email}/{balance}")
	public void addMoney(@PathVariable String email,@PathVariable int balance)
	{
		walletDao.addMoney(email,balance);
	}
	
	@PutMapping(value="dxcwallet/{email}/{shopName}/{amount}")
	public void payMoney(@PathVariable String email,@PathVariable String shopName,@PathVariable int amount)
	{
		walletDao.payMoney(email,shopName,amount);
	}
	
	@PutMapping(value="dxcwallet/password/{email}/{newPassword}")
	public void updatePassword(@PathVariable String email, @PathVariable String newPassword)
	{
		walletDao.updatePassword(email,newPassword);
	}
	
	@PutMapping(value="dxcwallet/passbook/{email}/{to}/{balance}")
	public void updatePassbook(@PathVariable String email,@PathVariable String to,@PathVariable int balance)
	{
		walletDao.updatePassbookDetails(email, to, balance);
	}
	@PutMapping(value="dxcwallet/transferpassbook/{email}/{to}/{balance}")
	public void updateTransferPassbook(@PathVariable String email,@PathVariable String to,@PathVariable int balance)
	{
		walletDao.updateTransferPassbookDetails(email, to, balance);
	}
}
