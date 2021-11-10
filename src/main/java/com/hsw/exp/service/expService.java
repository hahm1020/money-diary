package com.hsw.exp.service;

import java.util.List;

public interface expService {
	int insertWrite(expenseVO VO);
	
	List<expenseVO> selectExpList(expenseVO vo);
	
	List<expenseVO> selectMapList(expenseVO vo);
	
	void deleteList(String[] param);
}
