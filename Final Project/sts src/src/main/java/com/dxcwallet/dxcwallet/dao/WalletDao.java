package com.dxcwallet.dxcwallet.dao;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Component;

import com.dxcwallet.dxcwallet.model.Wallet;

@Component
public class WalletDao {

	@Autowired
	private MongoTemplate mongoTemplate;

	public List<Wallet> getAllUsers() {
		return mongoTemplate.findAll(Wallet.class);
	}

	public Object getUserById(String email) {
		Query query = new Query();
		//System.out.print("dao"+email);
		email=email+".com";
		query.addCriteria(Criteria.where("email").is(email));
		Wallet wal= mongoTemplate.findOne(query,Wallet.class);

		
		if(wal!=null)
		{
			return wal;
		}
		return "no data Found";
	}

	public Wallet saveUser(Wallet wallet) {
		mongoTemplate.save(wallet);
		return wallet;
	}
	public void delete(String email) {
		System.out.println(email);
		Query query = new Query();
		email = email +  ".com";
		query.addCriteria(Criteria.where("email").is(email));
		mongoTemplate.findAndRemove(query, Wallet.class);
	}
	
	public void addMoney(String email,int balance)
	{
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(email));
		Wallet wal= mongoTemplate.findOne(query,Wallet.class);
		balance=wal.getBalance()+balance;
		Update update=new Update();
		update.set("balance", balance);
		mongoTemplate.updateFirst(query, update, Wallet.class);
	}
	
	public void payMoney(String email,String shopName,int amount)
	{
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(email));
		Wallet wal= mongoTemplate.findOne(query,Wallet.class);
		amount=wal.getBalance()-amount;
		Update update=new Update();
		update.set("balance", amount);
		mongoTemplate.updateFirst(query, update, Wallet.class);
	}
	
	public void updatePassword(String email, String newPassword)
	{
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(email));
		Update update=new Update();
		update.set("password", newPassword);
		mongoTemplate.updateFirst(query, update, Wallet.class);
		
	}
		

	
	int check=0;
	public String updatePassbookDetails(String email, String to, int balance) {
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(email));
		Wallet wallet= mongoTemplate.findOne(query, Wallet.class);
		//String amount="";
		String passbookTransaction="";
		if (wallet != null) {
			if(to.equals("registered bank account"))
			{
			 
			 passbookTransaction=to+":+"+balance;
			//wallet.getTransactions().put(to+new Date().toString(), amount);
			
			}
			else
			{
				//amount="-"+balance;
				passbookTransaction=to+":-"+balance;
			//	wallet.getTransactions().put(to+new Date().toString(), amount
			}
			Update update=new Update();
			update.push("transact",passbookTransaction);
			
			mongoTemplate.updateFirst(query,update,Wallet.class);
			
			return "Key added.";
		} else {
			return "Wallet not found.";
		}
	}
	
	public String updateTransferPassbookDetails(String email, String to, int balance) {
		Query query = new Query();
		query.addCriteria(Criteria.where("email").is(email));
		Wallet wallet= mongoTemplate.findOne(query, Wallet.class);
		//String amount="";
		String passbookTransaction="";
		if (wallet != null) {
			

				//amount="-"+balance;
				passbookTransaction=to+":+"+balance;
			//	wallet.getTransactions().put(to+new Date().toString(), amount
			Update update=new Update();
			update.push("transact",passbookTransaction);
			
			mongoTemplate.updateFirst(query,update,Wallet.class);
			
			return "Key added.";
		} else {
			return "Wallet not found.";
		}
	}
}
