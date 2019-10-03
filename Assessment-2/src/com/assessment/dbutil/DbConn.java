/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.assessment.dbutil;

import java.sql.Connection;
import java.sql.DriverManager;

/**
 *
 * @author sdas301
 */
public class DbConn {

    public static Connection getConnection() {
        try {
            Class.forName("oracle.jdbc.OracleDriver");
            Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:xe", "dxc", "pass");
            System.out.println("connected");
            return conn;
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }

    }

}
