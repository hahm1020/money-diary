package com.hsw.exp.service;

public class pagingVO {
	
	private int nowPage = 1;
	
	private int cntPerPage=10;
	
	private int endPage;
	private int startPage;
	private int total;
	private int lastPage;

	//query
	private int start;
	private int end;
	
	private int cntPage = 5;
	
	
	// 제일 마지막 페이지 계산
	public void calcEndPage(int total) { //11
		setLastPage((int)Math.ceil( (double)(total) / (double)cntPerPage  )); //2
	}
	
	// 시작 끝 페이지 계산
	public void calcStartEndPage() {
		setEndPage(((int)Math.ceil((double)nowPage / (double)cntPage )) * cntPage); 
		
		if(getLastPage() < getEndPage()) {
			setEndPage(getLastPage());
		}
		setStartPage(getEndPage() - cntPage + 1);
		
		if(getStartPage() < 1) {
			setStartPage(1);
		}
	}
	
	//query용 start, end
	public void calcStartEnd() {
		setEnd(nowPage * cntPerPage); 
		setStart(getEnd() - cntPerPage);  
	}
	
	
	public int getNowPage() {
		return nowPage;
	}
	public void setNowPage(int nowPage) {
		this.nowPage = nowPage;
	}
	public int getStartPage() {
		return startPage;
	}
	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}
	public int getEndPage() {
		return endPage;
	}
	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}
	public int getTotal() {
		return total;
	}
	public void setTotal(int total) {
		this.total = total;
	}
	public int getCntPerPage() {
		return cntPerPage;
	}
	public void setCntPerPage(int cntPerPage) {
		this.cntPerPage = cntPerPage;
	}
	public int getLastPage() {
		return lastPage;
	}
	public void setLastPage(int lastPage) {
		this.lastPage = lastPage;
	}
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getEnd() {
		return end;
	}
	public void setEnd(int end) {
		this.end = end;
	}

	public int getCntPage() {
		return cntPage;
	}

	public void setCntPage(int cntPage) {
		this.cntPage = cntPage;
	}
	
}
