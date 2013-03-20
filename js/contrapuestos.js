




function updatePartitions() {
	var mid = $("#middlebar").offset()["top"] + ($("#middlebar").height()/2);
	$("#topframe").height(mid);
	$("#bottomframe").height($(window).height() - mid);
} 

function init() {
	$("#middlebar").draggable({ axis:"y", containment:"parent", cursor:"move", drag:updatePartitions, iframeFix:true }); 
	updatePartitions();
	$(window).resize(updatePartitions);
}

