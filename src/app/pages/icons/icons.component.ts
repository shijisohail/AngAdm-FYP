import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {AccordionModule} from 'primeng/accordion';


@Component({
  selector: 'app-icons',
  templateUrl: 'icons.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class IconsComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {config.backdrop = 'static';
                                                                       config.keyboard = false;}

  ngOnInit() {}

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
