// @ts-ignore

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.component.html',
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class NotificationsComponent implements OnInit {
  ctff: any;
  cctf: any;
  wctf: any;
  id: any;
  // Machine_name: any;
  // Machine_type: any;
  // Launch_date: any;
  // retires_date:any;
  // Details: any;





  constructor(config: NgbModalConfig, private httpClient: HttpClient, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {}

  // tslint:disable-next-line:variable-name
  run_ctf(ctf_name) {
    console.log('here');
    if (ctf_name === 'ctf1') {

      this.httpClient.get('http://172.16.223.23:5000/ctf1').subscribe(response => {
        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.ctff = '';
        this.ctff = response;
      });
    } else if (ctf_name === 'ctf2') {

      this.httpClient.get('http://172.16.223.23:5000/ctf2').subscribe(response => {
        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.cctf = '';
        this.cctf = response;
      });
    } else if (ctf_name === 'webctf3') {

        this.httpClient.get('http://172.16.223.23:5000/webctf3').subscribe(response => {
          // tslint:disable-next-line:prefer-const
          let data = response as JSON;
          console.log(response);
          this.wctf = '';
          this.wctf = response;
        });
      }
    }


  // tslint:disable-next-line:variable-name
  changeBtn(id, ctf_name) {

    if (document.getElementById(id).innerText === 'Off') {
      document.getElementById(id).innerText = 'On';
      document.getElementById(id).classList.add('btn-success');
      document.getElementById(id).classList.remove('btn-danger');
      this.run_ctf(ctf_name);
    } else {
     // this.socket = null;
      document.getElementById(id).innerText = 'Off';
      document.getElementById(id).classList.add('btn-danger');
      document.getElementById(id).classList.remove('btn-success');
      // to off machine call function here
      this.stop_ctf(ctf_name);
    }
  }
  // tslint:disable-next-line:variable-name
  stop_ctf(ctf_name) {
    if (ctf_name === 'ctf1') {

      //     if (this.ctff !== '' || this.ctff !== null || true) {
      //       const a = [];
      //       a[0] = this.ctff.toString().split(':')[1];
      //       const cc = 123;
      //       const isValid = this.httpClient.post('http://172.16.223.23:5000/stop', a).subscribe(data => {
      //         const x = data;
      //         // this.avail = '';
      //       });
      //       this.ctff = '';
      //
      //
      //     } else if (ctf_name === 'ctf2') {
      //         if (this.cctf !== '' || this.cctf !== null || true) {
      //           const b = [];
      //           b[0] = this.cctf.toString().split(':')[1];
      //           const cc = 123;
      //           const isValid = this.httpClient.post('http://172.16.223.23:5000/stop', b).subscribe(data => {
      //             const x = data;
      //           });
      //           this.cctf = '';
      //       }
      //     }
      //   }
      // }


      if (this.ctff !== '' || this.ctff !== null || this.ctff !== undefined) {
        const abcd = [];
        abcd[0] = this.ctff.toString().split(':')[1];
        const cc = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abcd).subscribe(data => {
          const aa = data;
          // this.avail = '';
        });
        this.ctff = '';
      }
    } else if (ctf_name === 'ctf2') {

      if (this.cctf !== '' || this.cctf !== null || this.cctf !== undefined) {
        const abd = [];
        abd[0] = this.cctf.toString().split(':')[1];
        const cd = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abd).subscribe(data => {
          const ab = data;
          this.cctf = '';
        });
        this.cctf = '';
      } else if (ctf_name === 'webctf3') {

          if (this.wctf !== '' || this.wctf !== null || this.wctf !== undefined) {
            const wabd = [];
            wabd[0] = this.wctf.toString().split(':')[1];
            const cd = 123;
            const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', wabd).subscribe(data => {
              const ab = data;
              this.wctf = '';
            });
            this.wctf = '';
          }}
    }
  }
  open(content) {
    this.modalService.open(content);
  }}

// tslint:disable-next-line:class-name
