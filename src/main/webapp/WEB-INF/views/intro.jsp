<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<jsp:include page='header.jsp' flush="false"/>

<script type="text/javascript" src="/resources/js/intro.js"></script>

	<div id="slide">
		<ul class="cnt">
			<li>
				Map
				<p><button type="button" onClick="fnMovePage('/hsw/exp/mapVw.do');">View the Map&#8594;</button>
			</li>
			<li>
				list
				<p><button type="button" onClick="fnMovePage('/hsw/exp/listVw.do');">Write the expense&#8594;</button>
			</li>
		</ul>
		
	</div>
	
	<div class="indicator">
		<span onclick="fnMoveBanner(this)" class="active"></span>
		<span onclick="fnMoveBanner(this)"></span>
	</div>
	
<jsp:include page="bottom.jsp" flush="false"/>