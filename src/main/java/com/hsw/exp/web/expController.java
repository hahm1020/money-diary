package com.hsw.exp.web;

import java.util.List;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.hsw.exp.service.expService;
import com.hsw.exp.service.expenseVO;

@Controller
public class expController {
	
	@Autowired
	private expService expService; 
	
	private static final Logger logger = LoggerFactory.getLogger(expController.class);
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String introVw(Locale locale, Model model) {
		return "intro";
	}
	
	@RequestMapping(value="/hsw/exp/listVw.do") 
	public String listVw(@ModelAttribute("expenseVO") expenseVO vo 
													, Model model) {
		
		List<expenseVO> expensVOList = expService.selectExpList(vo);
		model.addAttribute("expenseVO", expensVOList);
		
		return "list";
	}
	
	@RequestMapping(value="/hsw/exp/writeVw.do") 
	public String writeVw() {
		return "write";
	}
	
	@RequestMapping(value="/hsw/exp/write.do") 
	public String write(expenseVO VO) {
		
		try {
			
			if(expService.insertWrite(VO) > 0) {
				return "redirect:/hsw/exp/listVw.do";
			} else {
				return "write";
			}
			
		} catch (Exception e) {
			
			e.printStackTrace();
			
		}
		
		return "redirect:/hsw/exp/listVw.do";
		
	}
	
	@RequestMapping(value="/hsw/exp/delete.do") 
	public String delete(@RequestParam(value="delList", required = false)String[] delList) {
		
		try {
			
			expService.deleteList(delList);
			
		} catch (Exception e) {
			
			e.printStackTrace();
			
		}
		
		return "redirect:/hsw/exp/listVw.do";
	}
}
