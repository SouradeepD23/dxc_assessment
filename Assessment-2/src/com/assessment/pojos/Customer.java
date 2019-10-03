/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assessment.pojos;

/**
 *
 * @author sdas301
 */
public class Customer {

    private String fname;
    private String lname;
    private String customerID;
    private String address;

    public Customer() {
    }

    public Customer(String fname, String lname, String address) {
        this.fname = fname;
        this.lname = lname;
        this.address = address;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Name: " + fname + " " + lname + ";   " + "Customer ID: " + customerID + ";   " + "Address: " + address;
    }

}
