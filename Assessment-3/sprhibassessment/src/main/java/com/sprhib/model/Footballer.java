package com.sprhib.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Footballer {

	@Id
	String playerName;
	public String getPlayerName() {
		return playerName;
	}
	public void setPlayerName(String playerName) {
		this.playerName = playerName;
	}
	public String getClubName() {
		return clubName;
	}
	public void setClubName(String clubName) {
		this.clubName = clubName;
	}
	public String getPosition() {
		return position;
	}
	public void setPosition(String position) {
		this.position = position;
	}
	public int getJerseyNo() {
		return jerseyNo;
	}
	public void setJerseyNo(int jerseyNo) {
		this.jerseyNo = jerseyNo;
	}
	String clubName;
	String position;
	int jerseyNo;
	
	@Override
	public String toString() {
		return "Player name: "+getPlayerName()+" "+getJerseyNo()+"   Club name: "+getClubName()+"   Position: "+getPosition();
	}
}
