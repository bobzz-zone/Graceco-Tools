// Copyright (c) 2016, bobzz.zone@gmail.com and contributors
// For license information, please see license.txt

frappe.query_reports["Expense Claim Report"] = {
	"filters": [
		"filters": [
        {
                        fieldname: "from_date",
                        label: __("From Date"),
                        fieldtype: "Date",
                },
        {
                        fieldname: "to_date",
                        label: __("To Date"),
                        fieldtype: "Date",
                },
        {
                        fieldname: "approver",
                        label: __("Approver"),
                        fieldtype: "Link",
                        options: "User",
                },
        {
                        fieldname: "expense_type",
                        label: __("Expense Claim Type"),
                        fieldtype: "Link",
                        options: "Expense Claim Type",
                },
	]
	]
}
