package com.dxcwallet.dxcwallet.model;

import java.util.HashMap;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document
public class Wallet {

	
	private String email;
	private String name;
	private String password;
	private String shortId;
	private int balance;
	private String securityQuestionOne;
	private String securityQuestionTwo;
	private String answerOne;
	private String answerTwo;
	private String transact[];
	public String[] getTransact() {
		return transact;
	}
	public void setTransact(String[] transact) {
		this.transact = transact;
	}
	public String getSecurityQuestionOne() {
		return securityQuestionOne;
	}
	public void setSecurityQuestionOne(String securityQuestionOne) {
		this.securityQuestionOne = securityQuestionOne;
	}
	public String getSecurityQuestionTwo() {
		return securityQuestionTwo;
	}
	public void setSecurityQuestionTwo(String securityQuestionTwo) {
		this.securityQuestionTwo = securityQuestionTwo;
	}
	public String getAnswerOne() {
		return answerOne;
	}
	public void setAnswerOne(String answerOne) {
		this.answerOne = answerOne;
	}
	public String getAnswerTwo() {
		return answerTwo;
	}
	public void setAnswerTwo(String answerTwo) {
		this.answerTwo = answerTwo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getShortId() {
		return shortId;
	}
	public void setShortId(String shortId) {
		this.shortId = shortId;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int balance) {
		this.balance = balance;
	}
	
}
