import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

import {FormControl} from '@angular/forms';
import { FormBuilder, FormGroup } from "@angular/forms";



@Component({
  selector: 'app-typography',
  templateUrl: 'typography.component.html'
})
export class TypographyComponent implements OnInit {

  selectedElementControl = new FormControl();
  selectedElementGroup: string[] = [];
  selectedElementGroup2: any;
  selectedElementGroup3: any;
  selectedElementGroup4: any;
  selectedElementGroup5: any;
  selectedElementGroup6: any; 
  selectedElementGroup1: any;
  selectedElementGroup8: any;
  selectedElementGroup7: any;
  selectedElementGroup9: any;


  form: FormGroup;
  constructor(config: NgbModalConfig, private modalService: NgbModal,private http:HttpClient, public fb:FormBuilder) 
  { 
    config.backdrop = 'static';
    config.keyboard = false;
    this.form = this.fb.group({
      MachineName: [null],
      MachineType: [null],
      CreationDate:[null],
      ExpiryDate:[null],
      MachineDescription:[null],
      Vulnerability:[null],
      Difficulty:[null],
      Encoders:[null],
      Network:[null],
      Service:[null],
      webapp:[null],
      generator:[null],
      datastore:[null],


    })
  }
  MachineName:any;
  MachineType:any;
  CreationDate:any;
  ExpiryDate:any;
  MachineDescription:any;
  Vulnerability:any;
  Difficulty:any;

  Encoders:any;
  Network:any;
  Service:any;
  webapp:any;
  generator:any;
  datastore:any;


  onSubmit(){
var data = {'MachineName': this.MachineName,
            'MachineType':this.MachineType,
            'CreationDate':this.CreationDate,
            'ExpiryDate':this.ExpiryDate,
            'MachineDescription':this.MachineDescription,
            'Vulnerability':this.Vulnerability,
            'Difficulty':this.Difficulty,
            'Encoders':this.Encoders,
            'Network':this.Network,
            'Service':this.Service,
            'webapp':this.webapp,
            'generator':this.generator,
            'datastore':this.datastore,

          };
console.log("Value of", this.MachineName)
console.log("Value of", this.MachineType)
console.log("Value of", this.CreationDate)
console.log("Value of", this.ExpiryDate)
console.log("Value of", this.MachineDescription)
console.log("Value of", this.Vulnerability)
console.log("Value of", this.Difficulty)
console.log("Value of", this.Encoders)
console.log("Value of", this.Network)
console.log("Value of", this.Service)
console.log("Value of", this.webapp)
console.log("Value of", this.generator)
console.log("Value of", this.datastore)

var URL = 'http://127.0.0.1:8000/machinecreation'
  $.post(URL, data, function(response){
      if(response === 'success'){ alert('Yay!'); }
      else{ alert('Error! :('); }
  });  
  }
  
  
  ngOnInit(): void {
  }
}

