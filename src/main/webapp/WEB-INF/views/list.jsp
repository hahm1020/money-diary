<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<jsp:include page='header.jsp' flush="false"/>

	<script type="text/javascript" src="/resources/js/list.js"></script>
	<script>
	</script>
	
	<form id="listForm">
	
		<input type="hidden" name="delList" id="delList">
	
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
		<!--             <tr> -->
		<!--                 <td><input type="checkbox"></td> -->
		<!--                 <td>1</td> -->
		<!--                 <td>test1</td> -->
		<!--                 <td>test1</td> -->
		<!--             </tr>                    -->
		<!--             <tr> -->
		<!--                 <td><input type="checkbox"></td> -->
		<!--                 <td>2</td> -->
		<!--                 <td>test2</td> -->
		<!--                 <td>test2</td> -->
		<!--             </tr>                    -->
		<!--             <tr> -->
		<!--                 <td><input type="checkbox"></td> -->
		<!--                 <td>3</td> -->
		<!--                 <td>test3</td> -->
		<!--                 <td>test3</td> -->
		<!--             </tr> -->
					<c:forEach var="i" items="${expenseVO}" varStatus="status">
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
	</form>

<jsp:include page="bottom.jsp" flush="false"/>