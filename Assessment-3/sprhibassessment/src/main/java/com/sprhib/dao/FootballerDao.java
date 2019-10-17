package com.sprhib.dao;

import java.util.ArrayList;

import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.sprhib.model.Footballer;

@Component
public class FootballerDao {
	
	@Autowired
	SessionFactory sessionFactory;
	
	
	//Save Footballer Method
	@Transactional
	public void saveFootballer(Footballer footballer) {
		Session session = sessionFactory.getCurrentSession();
		session.save(footballer);
	}
	
	//Get all Footballers
	@Transactional
	public  ArrayList<Footballer> getFootballers()
	{
	Session session=sessionFactory.getCurrentSession();
	ArrayList<Footballer> footballers=(ArrayList<Footballer>) session.createQuery("from Footballer").list();
	return footballers;
	}
	
	//Get Footballer by Name
	@Transactional
	public  Footballer getFootballer(String playerName)
	{
	Session session=sessionFactory.getCurrentSession();
	Footballer footballer=(Footballer) session.get(Footballer.class, playerName);
	return footballer;
	}
	
	
	
	//Delete Footballer
	@Transactional
	public  String deleteFootballer(String playerName)
	{
	Session session=sessionFactory.getCurrentSession();
	Footballer footballer=getFootballer(playerName);
	session.delete(footballer);
	return "Footballer Removed";
	}
	
	//Update Footballer
	@Transactional
	public  String updateFootballer(Footballer footballer)
	{
	Session session=sessionFactory.getCurrentSession();
	session.update(footballer);
	return "Footballer Profile Updated";
	}
	
	
	
	
	
	
	//Constructors
	public FootballerDao(SessionFactory sessionFactory) {
		super();
		this.sessionFactory = sessionFactory;
	}
	
	
	public FootballerDao() {
		}
	
}
