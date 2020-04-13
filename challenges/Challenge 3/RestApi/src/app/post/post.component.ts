import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit 
{
	fname = "";
	lname = "";
	email = "";
	password = "";
	updatedBy=0;
	phoneNumber = "";

    constructor(public rest:RestService){}

    ngOnInit(): void
    {
	    //   let products = [];
	    //   this.rest.postData().subscribe((data: {}) => {
	    //   console.log(data);
	    // });
  	}

  	getValue()
  	{
  		console.log("GET");
	    let postString ={"first_name":this.fname,"last_name":this.lname,"email":this.email,"password":this.password,"contact_number":this.phoneNumber,"updated_by":this.updatedBy}
	  	
	  	this.rest.postData(JSON.stringify(postString)).subscribe((data: {}) => {
	      console.log(data);
	    });
  	}

}
