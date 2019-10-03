/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assessment.service;

import com.assessment.dao.CustomerDAO;
import com.assessment.pojos.Customer;

/**
 *
 * @author sdas301
 */
public class CustomerService {

    public static void main(String[] args) {

        //Customer cust1 = new Customer
        CustomerDAO cd = new CustomerDAO();
        //System.out.println(cd.saveCustomer(new Customer("Virat","Kohli","Delhi")));
        //System.out.println(cd.saveCustomer(new Customer("Shikhar", "Dhawan", "Delhi")));
        System.out.println(cd.saveCustomer(new Customer("Sachin", "Tendulkar", "Mumbai")));
    }

}
