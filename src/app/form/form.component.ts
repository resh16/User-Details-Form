import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { FormControl,FormGroup,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {


  ngOnInit(): void {
  }

  @Output() Employee:any=new EventEmitter<{firstName:string,lastName:string,phoneNo:number,emailId:string,address:string,country:string,state:string}>();

  fName = '';
  lName = '';
  email = '';
  phnNo = 0;
  country = '';
  state = '';
  address = '';

  onAddEmployee()
  {

  }

  employeeForm = new FormGroup
  ({
      firstName : new FormControl('',Validators.required),
      lastName : new FormControl('',Validators.required),
      address : new FormControl('',Validators.required),
      phnNo : new FormControl('',[Validators.required,Validators.pattern('[- +()0-9]+')]),
      email : new FormControl('',[
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      country : new FormControl('',Validators.required),
      state : new FormControl('',Validators.required)
  })

  states: Array<any> = [];
  selectedCountry: String = "--Choose Country--";

  Countries: Array<any> = [
		{ name: 'Germany', states:  ['Saxony', 'Berlin']},
		{ name: 'Spain', states:  [{name: 'Palencia'} , {name : 'Avila'}] },
		{ name: 'USA', states: [{name: 'Texas'},{name : 'California'}] },
		{ name: 'Mexico', states:  [{name: 'Colima'} ,{name : 'Tabasco'}]},
		{ name: 'India', states:  [{name: 'Tamilnadu'} ,{name : 'Bangalore' },{name:'Andhra Pradesh'},{name:'Kerla'},{name:'Delhi'}]}
	];

  changeCountry(country: any) 
  { 
		this.states = this.Countries.find(con => con.name == country.target.value).states; 
	}
  
  onSubmit(form : any)
  {
    this.fName = '';
    this.lName = '';
    this.phnNo = 0;
    this.email = '';
    this.state = '';
    this.country = '';
    this.address = '';
    this.Employee.emit(this.employeeForm.value)
    {
      console.log(this.employeeForm.value);
    }
  }
}

  
