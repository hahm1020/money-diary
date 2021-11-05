package com.hsw.exp.service.impl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hsw.exp.service.expenseVO;

@Repository("expDAO")
public class expDAO {
	
	@Autowired
	private SqlSession sqlSession;

	public int insertWrite(expenseVO vo) {
		return sqlSession.insert("expDAO.insertWrite", vo);
	}

	public List<expenseVO> selectExpList(expenseVO vo) {
		return sqlSession.selectList("expDAO.selectExpList", vo);
	}

	public void deleteList(String[] param) {
		sqlSession.delete("expDAO.deleteList", param);
	}

}
