clear screen;

--drop sequence genid;
create sequence genid
    minvalue 0
    maxvalue 999
    start with 1
    increment by 1 
    nocycle;
    
--select genid.nextval from DUAL;
    

--drop table customer;

create table customer(
    fname varchar(20),
    lname varchar(20),
    CustId varchar(20),
    address varchar(20)
);

select * from customer;
