import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  table(): any {
    return [
      {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
      {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
      {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
      {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
      {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
    ];
  }

pie(): any {
  return [{
    name: 'Brands',
    colorByPoint: true,
    data: [{
      name: 'Chrome',
      y: 70.67,
      sliced: true,
      selected: true
    }, {
      name: 'Edge',
      y: 14.77
    }, {
      name: 'Firefox',
      y: 4.86
    }, {
      name: 'Safari',
      y: 2.63
    }, {
      name: 'Internet Explorer',
      y: 1.53
    }, {
      name: 'Opera',
      y: 1.40
    }, {
      name: 'Sogou Explorer',
      y: 0.84
    }, {
      name: 'QQ',
      y: 0.51
    }, {
      name: 'Other',
      y: 2.6
    }]
  }];
}

bigChart() : any {
  return [{
    name: 'Oceans transport',
    data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
}, {
    name: 'Households',
    data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

}, {
    name: 'Agriculture and hunting',
    data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
}, {
    name: 'Air transport',
    data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

}, {
    name: 'Construction',
    data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
}];
}

cards(): any {
  return [71, 78, 39, 66];
}

}
