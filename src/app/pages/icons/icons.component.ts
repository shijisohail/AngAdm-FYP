import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';
import { HttpClient } from '@angular/common/http';  
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-icons',
  templateUrl: 'icons.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class IconsComponent implements OnInit {
  form: FormGroup;
  constructor(config: NgbModalConfig, private modalService: NgbModal,private http:HttpClient, public fb:FormBuilder) 
  { 
    config.backdrop = 'static';
    config.keyboard = false;
    this.form = this.fb.group({
      AttackTitle: [''],
      AttackDescription: [null]
    })
  }
  AttackTitle:any;
  AttackDescription:any;
onSubmit(){
  
var val={
  AttackTitle:this.AttackTitle,
  AttackDescription:this.AttackDescription
};
return this.http.post('http://127.0.0.1:8000/attackinfo', val).subscribe
(
  (response) => {
  return console.log(response);
},
  (error) => console.log(error)
)


  // var formData:any = new FormData();
  // formData.append("AttackTitle",this.form.get('AttackTitle').value);
  // formData.append("AttackDescription",this.form.get('AttackDescription').value);
  
  // return this.http.post('http://127.0.0.1:8000/attackinfo', JSON.stringify(formData)).subscribe
  // (
  //     (response) => {
  //     return console.log(response);
  //   },
  //     (error) => console.log(error)
  //   )

  // this.AttackTitle=val.AttackTitle;
  // this.AttackDescription=val.AttackDescription;
  // var fd=new FormData();
  // fd.append("AttackTitle",val.AttackTitle);
  // fd.append("AttackDescription",val.AttackDescription);
  // return this.http.post('http://127.0.0.1:8000/attackinfo',fd).subscribe();
  
  // console.log(val);
}


  variable:any;
  ngOnInit():void {
    this.variable=this.http.get("http://127.0.0.1:8000/attackinfo").subscribe(
      data=>this.variable=data
    );
  }

  changeBtn(id) {
    if (document.getElementById(id).innerText === 'Off') {
      document.getElementById(id).innerText = 'On';
      document.getElementById(id).classList.add('btn-success');
      document.getElementById(id).classList.remove('btn-danger');

    } else {
      document.getElementById(id).innerText = 'Off';
      document.getElementById(id).classList.add('btn-danger');
      document.getElementById(id).classList.remove('btn-success');
    }
  }

  open(content) {this.modalService.open(content);

  }
}
