import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

   getAllEnable=false;
   getByIdEnable=false;
   myJSON = "";

   displayedColumns: string[] = ['id','first_name', 'last_name', 'email', 'password','contact_number','updated_by'];

   dataSource = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}
   ];

	constructor(public rest:RestService){}

    ngOnInit(): void
    {

    // 	let check = this.rest.extractData();
    // 	console.log(check);


    //   let products = [];
   
  	}

    getAll()
    {

      console.log("INNNNNNNNNNNNNNNN");
          this.getAllEnable=true;
      this.getByIdEnable=false;
    this.dataSource = [
                {"id":"19",  "first_name":"Akash","last_name":"Suewase","email":"akashdudhade@gmail.com","password":"512121we","contact_number":"96570286355","updated_by":0},
                {"id":"20","first_name":"Deva","last_name":"Surwase","email":"dev@gmail.com","password":"123456789","contact_number":"444444444","updated_by":0},
                {"id":"21","first_name":"Anand","last_name":"Chavan","email":"anand@gmail.com","password":"6598456789","contact_number":"25981256","updated_by":0},
                {"id":"22",  "first_name":"Amol","last_name":"kale","email":"amol@gmail.com","password":"44455574","contact_number":"85555555","updated_by":0},
                {"id":"23","first_name":"yuva","last_name":"jadhav","email":"yuva@gmail.com","password":"9852","contact_number":"444444444","updated_by":0},
                {"id":"24","first_name":"Man","last_name":"ahuja","email":"man@gmail.com","password":"965452","contact_number":"5544455","updated_by":0},
              ];
 
    }

    getById()
    {
      this.getAllEnable=false;
      this.getByIdEnable=true;
      this.rest.extractData().subscribe((data: {}) => {
          
          // console.log(data);
          this.createDatasource(data);
          
      });
    }

    createDatasource(data)
    {
      console.log(data.data[0].id);
      // 
      this.myJSON = JSON.stringify(data.data[0]);
      console.log(this.myJSON);
    //   console.log(typeof(myJSON));
    //   console.log(myJSON[0]);
      // this.dataSource=data.data[0];
      let key = Object.keys(data.data[0]);
      let value = Object.values(data.data[0]);
      var d={}
      for(var i = 0; i < key.length; i++)
      { 
        d[key[i]] = value[i]; 
      } 
      this.dataSource  = [d];
      console.log(typeof(this.dataSource));
    }

    applyFilter(event: Event) 
    {
     var dataSource = new MatTableDataSource(this.dataSource);
     var filterValue = (event.target as HTMLInputElement).value;
     dataSource.filter = filterValue.trim().toLowerCase();
    }

}