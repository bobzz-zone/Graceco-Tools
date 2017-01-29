# Copyright (c) 2013, bobzz.zone@gmail.com and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	#Item Code	Asset Name	Asset Catergory	Warehouse	Purchase Date	Value (After Depreciation)
	columns, data = ["Item Code:Link/Item:150","Asset Name::150","Asset Category:Link/Asset Category:150","Warehouse:Link/Warehouse:150","Purchase Date:Date:150","Book Value:Currency:200","Gross Purchase Amount:Currency:200"], []
	where=""
	if filters.get("asset_category"):
		where = """ and asset_category = "{}" """.format(filters.get("asset_category"))
	data = frappe.db.sql("""select item_code,name,asset_category,warehouse,purchase_date,value_after_depreciation,gross_purchase_amount 
		from tabAsset where docstatus=1 {}""".format(where),as_list=1)
	return columns, data
