import {Component, OnInit, TemplateRef} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import {not} from 'rxjs/internal-compatibility';
import * as url from 'url';




@Component({
  selector: 'app-tables',
  templateUrl: 'tables.component.html',
  providers: [NgbModalConfig, NgbModal]
})
export class TablesComponent implements OnInit {
  private ctff: Object;
  private cctf: Object;


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
  currentRate: any;
  stop_ctf(ctf_name) {
    if (ctf_name === 'ctf1') {

      if (this.ctff !== '' || this.ctff !== null || this.ctff !== undefined) {
        const abcd = [];
        abcd[0] = this.ctff.toString().split(':')[1];
        const cc = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abcd).subscribe(data => {
          const aa = data;
          // this.avail = '';
        });
        this.ctff = ''; }
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
      }}}
  open(content) {this.modalService.open(content);

  }
}


//   ngOnInit() {
//   }
//
//
// // ***************************************** API FOR DVWA ************************//
//   run_machines(machine_name) {
//     console.log('here');
//     if (machine_name === 'DVWA') {
//
//       this.httpClient.get('http://172.16.223.23:5000/DVWA').subscribe(response => {
//         // tslint:disable-next-line:prefer-const
//         let data = response as JSON;
//         console.log(response);
//         this.avail = '';
//         this.avail = response;
//       });
//     } else if (machine_name === 'BWAPP') {
//       this.httpClient.get('http://172.16.223.23:5000/BWAPP').subscribe(response => {
//
//         // tslint:disable-next-line:prefer-const
//         let data = response as JSON;
//         console.log(response);
//         this.bwwapp = '';
//         this.bwwapp = response;
//       });
//     } else if (machine_name === 'JUICE_SHOP') {
//       this.httpClient.get('http://172.16.223.23:5000/JUICE_SHOP').subscribe(responce => {
//         // tslint:disable-next-line:prefer-const
//         let data = responce as JSON;
//         console.log(responce);
//         this.Juice_shop = '';
//         this.Juice_shop = responce;
//
//       });
//     } else if (machine_name === 'badstore') {
//       this.httpClient.get('http://172.16.223.23:5000/badstore').subscribe(responce => {
//
//         // tslint:disable-next-line:prefer-const
//         let data = responce as JSON;
//         console.log(responce);
//         this.badstoree = '';
//         this.badstoree = responce;
//       });
//     } else if (machine_name === 'gruyere') {
//       this.httpClient.get('http://172.16.223.23:5000/gruyere').subscribe(response => {
//
//         // tslint:disable-next-line:prefer-const
//         let data = response as JSON;
//         console.log(response);
//         this.gruyere = '';
//         this.gruyere = response;
//     });
//     } else if (machine_name === 'hackazone') {
//       this.httpClient.get('http://172.16.223.23:5000/hackazone').subscribe(response => {
//
//         // tslint:disable-next-line:prefer-const
//         let data = response as JSON;
//         console.log(response);
//         this.hackney = '';
//         this.hackney = response;
//
//       });
//     } else if (machine_name === 'Mutil') {
//       this.httpClient.get('http://172.16.223.23:5000/Mutil').subscribe(response => {
//
//         // tslint:disable-next-line:prefer-const
//         let data = response as JSON;
//         console.log(response);
//         this.mut = '';
//         this.mut = response;
//       });
//     } else if (machine_name === 'wackopicko') {
//       this.httpClient.get('http://172.16.223.23:5000/wackopicko').subscribe(response => {
//
//         // tslint:disable-next-line:prefer-const
//         let data = response as JSON;
//         console.log(response);
//         this.wapico = '';
//         this.wapico = response;
//       });
//     } else if (machine_name === 'XVWA') {
//       this.httpClient.get('http://172.16.223.23:5000/XVWA').subscribe(response => {
//
//         // tslint:disable-next-line:prefer-const
//         let data = response as JSON;
//         console.log(response);
//         this.xvwa = '';
//         this.xvwa = response;
//       });
//
//     } else if (machine_name === 'OWASP') {
//       this.httpClient.get('http://172.16.223.23:5000/OWASP').subscribe(response => {
//
//         // tslint:disable-next-line:prefer-const
//         let data = response as JSON;
//         console.log(response);
//         this.owasp = '';
//         this.owasp = response;
//       });
//   }}
//
//     changeBtn(id, machine_name) {
//     // debugger;
//     if (document.getElementById(id).innerText === 'Off') {
//       document.getElementById(id).innerText = 'On';
//       document.getElementById(id).classList.add('btn-success');
//       document.getElementById(id).classList.remove('btn-danger');
//       this.run_machines(machine_name);
//     } else {
//       this.socket = null;
//       document.getElementById(id).innerText = 'Off';
//       document.getElementById(id).classList.add('btn-danger');
//       document.getElementById(id).classList.remove('btn-success');
//       // to off machine call function here
//       this.stopMachine(machine_name);
//     }
//   }
//
//   stopMachine(machine_name) {
//     // debugger;
//     if (machine_name === 'DVWA') {
//
//       if (this.avail !== '' || this.avail !== null || this.avail !== undefined) {
//         const abcd = [];
//         abcd[0] = this.avail.toString().split(':')[1];
//         const cc = 123;
//         const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abcd).subscribe(data => {
//           const aa = data;
//          // this.avail = '';
//         });
//         this.avail = ''; }
//     } else if (machine_name === 'BWAPP') {
//
//         if (this.bwwapp !== '' || this.bwwapp !== null || this.bwwapp !== undefined) {
//           const abd = [];
//           abd[0] = this.bwwapp.toString().split(':')[1];
//           const cd = 123;
//           const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abd).subscribe(data => {
//             const ab = data;
//             this.bwwapp = '';
//           });
//           this.bwwapp = '';
//         }
//     } else if (machine_name === 'JUICE_SHOP') {
//
//           if (this.Juice_shop !== '' || this.Juice_shop !== null || this.Juice_shop !== undefined) {
//             const abde = [];
//             abde[0] = this.Juice_shop.toString().split(':')[1];
//             const cde = 123;
//             // tslint:disable-next-line:no-shadowed-variable
//             const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abde).subscribe(data => {
//               const ac = data;
//             });
//             this.Juice_shop = '';
//           }
//     } else if (machine_name === 'badstore') {
//             if (this.badstoree !== '' || this.badstoree !== null || this.badstoree !== undefined) {
//               const abdf = [];
//               abdf[0] = this.badstoree.toString().split(':')[1];
//               const cdf = 123;
//               const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abdf).subscribe(data => {
//                 const ad = data;
//               });
//               this.badstoree = '';
//             }
//     } else if (machine_name === 'gruyere') {
//               if (this.gruyere !== '' || this.gruyere !== null || this.gruyere !== undefined) {
//                 const abdg = [];
//                 abdg[0] = this.gruyere.toString().split(':')[1];
//                 const cdg = 123;
//                 const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abdg).subscribe(data => {
//                   const a = data;
//                 });
//                 this.gruyere = '';
//               }
//     } else if (machine_name === 'hackazone') {
//       if (this.hackney !== '' || this.hackney !== null || this.hackney !== undefined) {
//         const aab = [];
//         aab[0] = this.mut.toString().split(':')[1];
//         const cc = 123;
//         const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', aab).subscribe(data => {
//           const dat = data;
//         });
//         this.hackney = '';
//       }
//     } else if (machine_name === 'Mutil') {
//       if (this.mut !== '' || this.mut !== null || this.mut !== undefined) {
//         const ab = [];
//         ab[0] = this.mut.toString().split(':')[1];
//         const cc = 123;
//         const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', ab).subscribe(data => {
//           const dat = data;
//         });
//         this.mut = '';
//
//       } else if (machine_name === 'wackopicko') {
//         if (this.wapico !== '' || this.wapico !== null || this.wapico !== undefined) {
//           const asb = [];
//           asb[0] = this.wapico.toString().split(':')[1];
//           const cpa = 123;
//           const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', asb).subscribe(data => {
//             const dat = data;
//           });
//           this.wapico = '';
//         }
//       //  else {
//       // }
//     } else if (machine_name === 'XVWA') {
//       if (this.xvwa !== '' || this.xvwa !== null || this.xvwa !== undefined) {
//         const asdf = [];
//         asdf[0] = this.xvwa.toString().split(':')[1];
//         const cat = 123;
//         const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', asdf).subscribe(data => {
//           const dat = data;
//         });
//         this.xvwa = '';
//       }}
//     //  else {
//     // }
//   }}
//   open(content) {this.modalService.open(content);
//
//   }
// }
// ------------------------- example code for --------------------- //

// this.httpClient.post('http//:172.16.221.101:5000/stop', {port: 'avail'}).subscribe(data => {
//    //this.postid = data.avail;
//   console.log(data);
// });
