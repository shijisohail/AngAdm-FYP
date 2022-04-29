import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


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

  ngOnInit(): void {
  }
}

