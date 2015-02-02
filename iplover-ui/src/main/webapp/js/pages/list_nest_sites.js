$(document).ready(function() {
    $('#collection_group').html(iplover.data.collection_group);
    
    //code to population buttons
    var sites = iplover.data.getRecords();
    
    for(var i = sites.length-1; i >= 0; i--){
        
        if(i == sites.length-1){
            var label = sites[i].site_id;
            populate_button(sites[i], $('#site_button'));
        }else{
            //TODO: Add code to link to in-development edit page
            var tmp = $('#site_button').clone();
            populate_button(sites[i], tmp);
            $('#edit_section').append(tmp);
        }
    }
    
});


var populate_button = function(site, button){
    var label = site.site_id;
    button.html(label);
    
    if(site.store_state == 'unsynced'){
        button.addClass('unsynced');
    }else{
        button.removeClass('unsynced');
    }
}

