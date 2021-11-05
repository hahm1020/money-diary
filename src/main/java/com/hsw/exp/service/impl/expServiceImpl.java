package com.hsw.exp.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ImportResource;
import org.springframework.stereotype.Service;

import com.hsw.exp.service.expService;
import com.hsw.exp.service.expenseVO;

@Service
public class expServiceImpl implements expService {
	
	@Autowired
	private expDAO expDAO;

	@Override
	public int insertWrite(expenseVO vo) {
		
		vo.setId("hahm");
		
		return expDAO.insertWrite(vo);
	}

	@Override
	public List<expenseVO> selectExpList(expenseVO vo) {
		return expDAO.selectExpList(vo);
	}

	@Override
	public void deleteList(String[] param) {
		expDAO.deleteList(param);
	}

}
