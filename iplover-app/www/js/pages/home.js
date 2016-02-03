
$(document).ready(function() {



    $("#logout").click(function(){
        message = 'Are you sure you want to logout?\n' +
                'You will not be able to login again unless you have an internet connection.';
        if(confirm(message)){
            iplover.auth.logout();
        }
    });
	syncPopUp();
	
});

//$("#dialog").dialog({
//    autoOpen: false,
//    resizable: false,
//    draggable: false,
//    modal: true,
//    buttons: {
//        "Sync": function() {
//        $( this ).dialog( "close" );
//        }
//      },
//    show: {
//        duration: 0
//    },
//    hide: {
//		duration: 0
//    }
//});

function daysBetweenDates(d1,d2){
	var diff = d1 - d2;
//	return diff / (1000 * 60 * 60 * 24);
	//CURRENTLY MINUTES.
	return Math.round(diff / (1000 * 60));
}

function syncPopUp() {
	var tmp = iplover.data.getChangedRecords();
	
//	if(tmp.length < 1){return;}
//	var entry = tmp[0];
	var currTime = Date.now();

	var response = popUp();
//	$("#dialog").dialog("open");
	if(response){
		window.location.replace("synchronize.html");
		iplover.data.autoSyncOn();
	}
	return;
	//DO AFTER 2 days, every 12 hours? 
	//Ensure that last edited field is pushed to db.
	//
//	var numDaySinceLastSync = daysBetweenDates(currTime,entry.last_edited_calculations);
//	alert(numDaySinceLastSync + " minutes");
//	if(numDaySinceLastSync > 1){
//	if(true){
//		var response = confirm("It has been " + numDaySinceLastSync + " days since you last synced your data. \n Would you like to sync now?");
//		var response = confirm("It has been " + -1 + " days since you last synced your data. \n Would you like to sync now?");
//		if(response){
//			window.location.replace("synchronize.html");			
//			$('#sync_button').click();
//		}
//	}
	
//    confirm("Getting changed records: " + entry.location_timestamp + " " + entry.changes_synced + " " + entry.on_server + " " + entry.last_edited_timestamp);

	
//	return;
};

function popUp() {
	var response = confirm("It has been " + -1 + " days since you last synced your data. \n Would you like to sync now?");
	return response;
};

