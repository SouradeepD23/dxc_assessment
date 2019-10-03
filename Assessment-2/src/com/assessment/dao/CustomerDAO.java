/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assessment.dao;

import com.assessment.dbutil.DbConn;
import com.assessment.pojos.Customer;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author sdas301
 */
public class CustomerDAO {

    public String saveCustomer(Customer cust) {
        try {
            Connection conn = DbConn.getConnection();
            int nextSeqVal = 0;
            String sql = "select genid.nextval from DUAL";
            PreparedStatement ps = conn.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            if (rs.next()) {
                nextSeqVal = rs.getInt(1);
            }

            sql = "insert into Customer values(?,?,?,?)";

            PreparedStatement stat = conn.prepareStatement(sql);

            stat.setString(1, cust.getFname());
            stat.setString(2, cust.getLname());
            String id = null;

            if (nextSeqVal < 10) {
                id = "00" + nextSeqVal;
            } else if (nextSeqVal >= 10 && nextSeqVal < 100) {
                id = "0" + nextSeqVal;
            } else {
                id = "" + nextSeqVal;
            }

            id = cust.getFname().substring(0, 2) + cust.getLname().substring(0, 2) + id;
            cust.setCustomerID(id);
            
            stat.setString(3, cust.getCustomerID());
            stat.setString(4, cust.getAddress());

            int res = stat.executeUpdate();
            if (res > 0) {
                return "Customer saved";
            }

        } catch (Exception e) {
            e.printStackTrace();
        }

        return "Cannot save Customer";

    }

}
