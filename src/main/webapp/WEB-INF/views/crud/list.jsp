<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<jsp:include page='../com/header.jsp' flush="false"/>

	<script type="text/javascript" src="/resources/js/list.js"></script>
	<script>
	</script>
	
	<form id="listForm">
	
		<input type="hidden" name="delList" id="delList">
		<input type="hidden" name="nowPage" id="nowPage" value="1">
	
		<div class="listTable">
		    <table>                
		        <thead>
		        	<tr>
						<th>#</th>                    
						<th>번호</th>                    
						<th>품목</th>                    
						<th>날짜</th>                    
		            </tr>
		        </thead>
		        <tbody> 
					<c:forEach var="i" items="${expensVOList}" varStatus="status">
						<tr>
							<td><input type="checkbox" name="chk-item"><input type="hidden" name="no" value="${i.no}"><input type="hidden" name="id" value="${i.id}"></td>
							<td>${status.index+1}</td>					
							<td>${i.item}</td>
							<td>${i.date}</td>
						</tr>
					</c:forEach>
		        </tbody>
		    </table>        
		</div>
	
		<div class="wrap_btn">
		    <button type="button" class="list_btn" onClick="fnMovePage('/hsw/exp/writeVw.do');" >write&#8594;</button>
		    <button type="button" class="list_btn" onClick="fn_deleteList('/hsw/exp/deleteList.do');" >delete&#8594;</button>
		</div>
		
		<!--paging -->
		<div id="wrap-paging" style="display: block; text-align: center;">		
		<c:if test="${expenseVO.startPage != 1 }">
			<a href="javascript:fn_pagingForm(${expenseVO.startPage - 1 });">&lt;</a>
		</c:if>
		<c:forEach begin="${expenseVO.startPage }" end="${expenseVO.endPage }" var="p">
			<c:choose>
				<c:when test="${p == expenseVO.nowPage }">
					<b>${p }</b>
				</c:when>
				<c:when test="${p != expenseVO.nowPage }">
					<a href="javascript:fn_pagingForm(${p });">${p }</a>
				</c:when>
			</c:choose>
		</c:forEach>
		<c:if test="${expenseVO.endPage != expenseVO.lastPage}">
			<a href="javascript:fn_pagingForm(${expenseVO.endPage+1 });">&gt;</a>
		</c:if>
	</div>
	</form>

<jsp:include page="../com/bottom.jsp" flush="false"/>