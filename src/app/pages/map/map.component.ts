import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';

declare const google: any;

interface Marker {
lat: number;
lng: number;
label?: string;
draggable?: boolean;
}

@Component({
  selector: 'app-map',
  templateUrl: 'map.component.html'
})
export class MapComponent implements OnInit {

  addcon = false;
  shop: any;
  currentRate = 8;
  socket: any;   // Mutilidae//
  data: any;
  avail: any;     // DVWA //
  // tslint:disable-next-line:variable-name
  Juice_shop: any;  // juice_shop //
  badstoree: any;  // badstore //
  bwwapp: any;
  gruyere: any; //   gruyere //
  hackney: any; // HACKZXONE APP //
  mut: any;
  postid: any;
  wapico: any;
  xvwa: any;
  owasp: any;

  constructor(config: NgbModalConfig, private httpClient: HttpClient, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

// ***************************************** API FOR MUtilidae ************************//
//   Mutila(id) {
//     console.log('here');
//     // tslint:disable-next-line:no-debugger
//     debugger;
//
//     this.httpClient.get('http://172.16.221.101:5000/Mutil').subscribe(response => {
//
//       // tslint:disable-next-line:prefer-const
//       let data = response as JSON;
//       console.log(response);
//       this.socket = '';
//       this.socket = response;
//
//     });
//
//   }

// ***************************************** API FOR DVWA ************************//
  run_machines(machine_name) {
    console.log('here');
    if (machine_name === 'DVWA') {

      this.httpClient.get('http://172.16.223.23:5000/DVWA').subscribe(response => {
        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.avail = '';
        this.avail = response;
      });
    } else if (machine_name === 'BWAPP') {
      this.httpClient.get('http://172.16.223.23:5000/BWAPP').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.bwwapp = '';
        this.bwwapp = response;
      });
    } else if (machine_name === 'JUICE_SHOP') {
      this.httpClient.get('http://172.16.223.23:5000/JUICE_SHOP').subscribe(responce => {
        // tslint:disable-next-line:prefer-const
        let data = responce as JSON;
        console.log(responce);
        this.Juice_shop = '';
        this.Juice_shop = responce;

      });
    } else if (machine_name === 'badstore') {
      this.httpClient.get('http://172.16.223.23:5000/badstore').subscribe(responce => {

        // tslint:disable-next-line:prefer-const
        let data = responce as JSON;
        console.log(responce);
        this.badstoree = '';
        this.badstoree = responce;
      });
    } else if (machine_name === 'gruyere') {
      this.httpClient.get('http://172.16.223.23:5000/gruyere').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.gruyere = '';
        this.gruyere = response;
      });
    } else if (machine_name === 'hackazone') {
      this.httpClient.get('http://172.16.223.23:5000/hackazone').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.hackney = '';
        this.hackney = response;

      });
    } else if (machine_name === 'Mutil') {
      this.httpClient.get('http://172.16.223.23:5000/Mutil').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.mut = '';
        this.mut = response;
      });
    } else if (machine_name === 'wackopicko') {
      this.httpClient.get('http://172.16.223.23:5000/wackopicko').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.wapico = '';
        this.wapico = response;
      });
    } else if (machine_name === 'XVWA') {
      this.httpClient.get('http://172.16.223.23:5000/XVWA').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.xvwa = '';
        this.xvwa = response;
      });

    } else if (machine_name === 'OWASP') {
      this.httpClient.get('http://172.16.223.23:5000/OWASP').subscribe(response => {

        // tslint:disable-next-line:prefer-const
        let data = response as JSON;
        console.log(response);
        this.owasp = '';
        this.owasp = response;
      });
    }}

  changeBtn(id, machine_name) {
    // debugger;
    if (document.getElementById(id).innerText === 'APPROVE') {
      document.getElementById(id).innerText = 'NOT APPROVE';
      document.getElementById(id).classList.add('btn-success');
      document.getElementById(id).classList.remove('btn-danger');
      this.run_machines(machine_name);
    } else {
      this.socket = null;
      document.getElementById(id).innerText = 'APPROVE';
      document.getElementById(id).classList.add('btn-danger');
      document.getElementById(id).classList.remove('btn-success');
      // to off machine call function here
      this.stopMachine(machine_name);
    }
  }

  stopMachine(machine_name) {
    // debugger;
    if (machine_name === 'DVWA') {

      if (this.avail !== '' || this.avail !== null || this.avail !== undefined) {
        const abcd = [];
        abcd[0] = this.avail.toString().split(':')[1];
        const cc = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abcd).subscribe(data => {
          const aa = data;
          // this.avail = '';
        });
        this.avail = ''; }
    } else if (machine_name === 'BWAPP') {

      if (this.bwwapp !== '' || this.bwwapp !== null || this.bwwapp !== undefined) {
        const abd = [];
        abd[0] = this.bwwapp.toString().split(':')[1];
        const cd = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abd).subscribe(data => {
          const ab = data;
          this.bwwapp = '';
        });
        this.bwwapp = '';
      }
    } else if (machine_name === 'JUICE_SHOP') {

      if (this.Juice_shop !== '' || this.Juice_shop !== null || this.Juice_shop !== undefined) {
        const abde = [];
        abde[0] = this.Juice_shop.toString().split(':')[1];
        const cde = 123;
        // tslint:disable-next-line:no-shadowed-variable
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abde).subscribe(data => {
          const ac = data;
        });
        this.Juice_shop = '';
      }
    } else if (machine_name === 'badstore') {
      if (this.badstoree !== '' || this.badstoree !== null || this.badstoree !== undefined) {
        const abdf = [];
        abdf[0] = this.badstoree.toString().split(':')[1];
        const cdf = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abdf).subscribe(data => {
          const ad = data;
        });
        this.badstoree = '';
      }
    } else if (machine_name === 'gruyere') {
      if (this.gruyere !== '' || this.gruyere !== null || this.gruyere !== undefined) {
        const abdg = [];
        abdg[0] = this.gruyere.toString().split(':')[1];
        const cdg = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', abdg).subscribe(data => {
          const a = data;
        });
        this.gruyere = '';
      }
    } else if (machine_name === 'hackazone') {
      if (this.hackney !== '' || this.hackney !== null || this.hackney !== undefined) {
        const aab = [];
        aab[0] = this.mut.toString().split(':')[1];
        const cc = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', aab).subscribe(data => {
          const dat = data;
        });
        this.hackney = '';
      }
    } else if (machine_name === 'Mutil') {
      if (this.mut !== '' || this.mut !== null || this.mut !== undefined) {
        const ab = [];
        ab[0] = this.mut.toString().split(':')[1];
        const cc = 123;
        const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', ab).subscribe(data => {
          const dat = data;
        });
        this.mut = '';

      } else if (machine_name === 'wackopicko') {
        if (this.wapico !== '' || this.wapico !== null || this.wapico !== undefined) {
          const asb = [];
          asb[0] = this.wapico.toString().split(':')[1];
          const cpa = 123;
          const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', asb).subscribe(data => {
            const dat = data;
          });
          this.wapico = '';
        }
        //  else {
        // }
      } else if (machine_name === 'XVWA') {
        if (this.xvwa !== '' || this.xvwa !== null || this.xvwa !== undefined) {
          const asdf = [];
          asdf[0] = this.xvwa.toString().split(':')[1];
          const cat = 123;
          const isValid = this.httpClient.post('http://172.16.223.23:5000/stopMachine', asdf).subscribe(data => {
            const dat = data;
          });
          this.xvwa = '';
        }}
      //  else {
      // }
    }}
  open(content) {this.modalService.open(content);

  }
}
// ------------------------- example code for --------------------- //

// this.httpClient.post('http//:172.16.221.101:5000/stop', {port: 'avail'}).subscribe(data => {
//    //this.postid = data.avail;
//   console.log(data);
// });




// ngOnInit() {
  //
  //       const myLatlng = new google.maps.LatLng(33.70797050000001, 73.0287094);
  //       const mapOptions = {
  //           zoom: 13,
  //           center: myLatlng,
  //           scrollwheel: false, // we disable de scroll over the map, it is a really annoing when you scroll through page
  //           styles: [{
  //               elementType: 'geometry',
  //               stylers: [{
  //                 color: '#1d2c4d'
  //               }]
  //             },
  //             {
  //               elementType: 'labels.text.fill',
  //               stylers: [{
  //                 color: '#8ec3b9'
  //               }]
  //             },
  //             {
  //               elementType: 'labels.text.stroke',
  //               stylers: [{
  //                 color: '#1a3646'
  //               }]
  //             },
  //             {
  //               featureType: 'administrative.country',
  //               elementType: 'geometry.stroke',
  //               stylers: [{
  //                 color: '#4b6878'
  //               }]
  //             },
  //             {
  //               featureType: 'administrative.land_parcel',
  //               elementType: 'labels.text.fill',
  //               stylers: [{
  //                 color: '#64779e'
  //               }]
  //             },
  //             {
  //               featureType: 'administrative.province',
  //               elementType: 'geometry.stroke',
  //               stylers: [{
  //                 color: '#4b6878'
  //               }]
  //             },
  //             {
  //               featureType: 'landscape.man_made',
  //               elementType: 'geometry.stroke',
  //               stylers: [{
  //                 color: '#334e87'
  //               }]
  //             },
  //             {
  //               featureType: 'landscape.natural',
  //               elementType: 'geometry',
  //               stylers: [{
  //                 color: '#023e58'
  //               }]
  //             },
  //             {
  //               featureType: 'poi',
  //               elementType: 'geometry',
  //               stylers: [{
  //                 color: '#283d6a'
  //               }]
  //             },
  //             {
  //               featureType: 'poi',
  //               elementType: 'labels.text.fill',
  //               stylers: [{
  //                 color: '#6f9ba5'
  //               }]
  //             },
  //             {
  //               featureType: 'poi',
  //               elementType: 'labels.text.stroke',
  //               stylers: [{
  //                 color: '#1d2c4d'
  //               }]
  //             },
  //             {
  //               featureType: 'poi.park',
  //               elementType: 'geometry.fill',
  //               stylers: [{
  //                 color: '#023e58'
  //               }]
  //             },
  //             {
  //               featureType: 'poi.park',
  //               elementType: 'labels.text.fill',
  //               stylers: [{
  //                 color: '#3C7680'
  //               }]
  //             },
  //             {
  //               featureType: 'road',
  //               elementType: 'geometry',
  //               stylers: [{
  //                 color: '#304a7d'
  //               }]
  //             },
  //             {
  //               featureType: 'road',
  //               elementType: 'labels.text.fill',
  //               stylers: [{
  //                 color: '#98a5be'
  //               }]
  //             },
  //             {
  //               featureType: 'road',
  //               elementType: 'labels.text.stroke',
  //               stylers: [{
  //                 color: '#1d2c4d'
  //               }]
  //             },
  //             {
  //               featureType: 'road.highway',
  //               elementType: 'geometry',
  //               stylers: [{
  //                 color: '#2c6675'
  //               }]
  //             },
  //             {
  //               featureType: 'road.highway',
  //               elementType: 'geometry.fill',
  //               stylers: [{
  //                 color: '#9d2a80'
  //               }]
  //             },
  //             {
  //               featureType: 'road.highway',
  //               elementType: 'geometry.stroke',
  //               stylers: [{
  //                 color: '#9d2a80'
  //               }]
  //             },
  //             {
  //               featureType: 'road.highway',
  //               elementType: 'labels.text.fill',
  //               stylers: [{
  //                 color: '#b0d5ce'
  //               }]
  //             },
  //             {
  //               featureType: 'road.highway',
  //               elementType: 'labels.text.stroke',
  //               stylers: [{
  //                 color: '#023e58'
  //               }]
  //             },
  //             {
  //               featureType: 'transit',
  //               elementType: 'labels.text.fill',
  //               stylers: [{
  //                 color: '#98a5be'
  //               }]
  //             },
  //             {
  //               featureType: 'transit',
  //               elementType: 'labels.text.stroke',
  //               stylers: [{
  //                 color: '#1d2c4d'
  //               }]
  //             },
  //             {
  //               featureType: 'transit.line',
  //               elementType: 'geometry.fill',
  //               stylers: [{
  //                 color: '#283d6a'
  //               }]
  //             },
  //             {
  //               featureType: 'transit.station',
  //               elementType: 'geometry',
  //               stylers: [{
  //                 color: '#3a4762'
  //               }]
  //             },
  //             {
  //               featureType: 'water',
  //               elementType: 'geometry',
  //               stylers: [{
  //                 color: '#0e1626'
  //               }]
  //             },
  //             {
  //               featureType: 'water',
  //               elementType: 'labels.text.fill',
  //               stylers: [{
  //                 color: '#4e6d70'
  //               }]
  //             }
  //           ]
  //       };
  //       const map = new google.maps.Map(document.getElementById('map'), mapOptions);
  //
  //       const marker = new google.maps.Marker({
  //           position: myLatlng,
  //           title: 'MY CURRENT LOCATION!'
  //       });
  //
  //       // To add the marker to the map, call setMap();
  //       marker.setMap(map);
  // }

