const mongoose = require('mongoose');
const Staff_Schema=new mongoose.Schema({
	Joiningdate:{
	  	           type:String,
	               required:[true,'Date is required']
               },
	StaffName:{
	  	           type:String,
	               required:[true,'Staff Name is required'],
	               trim: true 
                  },
	MobileNo:{
	  	           type:String,
	               required:[true,'Mobile No. is required'],
	               match:[/^\d{10}$/,'Mobile number must be exactly 10 digits']
                  },    
     Address:{
                   type:String,
                   required:[true,'Address is required'],
                   trim: true 
                   },          
	State:   {
	  	           type:String,
	               required:[true,'State is required'],
	               trim: true 
                  },
	City:{
	  	           type:String,
	               required:[true,'City is required'],
	               trim: true 
                  },
	Email:{
	  	           type:String,
	  	           trim: true   
                  },
	PanNo:{
	  	           type:String,
	               required:[true,'Pan No. is required'],
	               trim: true 
                  },
	AadharNo:{
	  	           type:String,
	               required:[true,'Aadhar No. is required']
                  },
   AccountNo:     {
                  type:String,
                  required:[true,'Account No. is required'],
                  match:[/^\d{10}$/,'Account number must be exactly 10 digits']
                  },
   Designation: {
                  type:String,
                  required:[true,'Designation is required'],
                  trim: true 
                  
                }

})
module.exports=mongoose.model("Staff_Masters",Staff_Schema);
	