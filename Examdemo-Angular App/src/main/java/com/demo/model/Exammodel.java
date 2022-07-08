package com.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Exammodel 
{
    @Id
    private int qpno;
    private String qpname;
    private int qptotal;
   
	public Exammodel() {
		super();
		
	}
	public Exammodel(int qpno, String qpname, int qptotal) {
		super();
		this.qpno = qpno;
		this.qpname = qpname;
		this.qptotal = qptotal;
	}
	public int getQpno() {
		return qpno;
	}
	public void setQpno(int qpno) {
		this.qpno = qpno;
	}
	public String getQpname() {
		return qpname;
	}
	public void setQpname(String qpname) {
		this.qpname = qpname;
	}
	public int getQptotal() {
		return qptotal;
	}
	public void setQptotal(int qptotal) {
		this.qptotal = qptotal;
	}
	@Override
	public String toString() {
		return "Exammodel [qpno=" + qpno + ", qpname=" + qpname + ", qptotal=" + qptotal + "]";
	}
    
    
}
