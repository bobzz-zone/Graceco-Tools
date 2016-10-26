// Copyright (c) 2016, bobzz.zone@gmail.com and contributors
// For license information, please see license.txt

frappe.ui.form.on('Store Bin Card', {
	refresh: function(frm) {
		cur_frm.add_fetch("item_code","stock_uom","uom");
		cur_frm.add_fetch("item_code","item_name","item_name");
		cur_frm.add_fetch("item_code","description","description");
	},
	vaildate: function(frm) {
    	if (frm.doc.action == "Receipt") {
        	frm.doc.issue_item=[]
        	validated = true;
        	for (var i=0;i<frm.doc.receipt_item.length;i++){
        		if (frm.doc.receipt_item[i].ref_doc!="Opening Stock" && frm.doc.receipt_item[i].ref_no=="") {
        			validated=false;
        			msgprint("Please enter the Reference No except for the Opening Stock");
        		};
        	}
        	
    	}else{
        	frm.doc.receipt_item=[]
        	validated = true;
    	}
	}

});
