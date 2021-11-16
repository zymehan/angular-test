import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'sdate-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomepageComponent implements OnInit {

  constructor() { }
  imageObjects = [
    {
      brand: '../assets/images/carBrand1.png',
      title: 'Petrol',
      image: '../assets/images/car1.png',
      searched: '7.5k',
      visited: '17.2k',
      sold: '1.k',
    },
    {
      brand: '../assets/images/carBrand1.png',
      title: 'Petrol',
      image: '../assets/images/car1.png',
      searched: '7.5k',
      visited: '17.2k',
      sold: '1.k',
    },
    {
      brand: '../assets/images/carBrand2.png',
      title: 'Petrol',
      image: '../assets/images/car2.png',
      searched: '7.5k',
      visited: '17.2k',
      sold: '1.k',
    },
    {
      brand: '../assets/images/carBrand1.png',
      title: 'Petrol',
      image: '../assets/images/car1.png',
      searched: '7.5k',
      visited: '17.2k',
      sold: '1.k',
    },
    {
      brand: '../assets/images/carBrand2.png',
      title: 'Petrol',
      image: '../assets/images/car2.png',
      searched: '7.5k',
      visited: '17.2k',
      sold: '1.k',
    },
    {
      brand: '../assets/images/carBrand1.png',
      title: 'Petrol',
      image: '../assets/images/car1.png',
      searched: '7.5k',
      visited: '17.2k',
      sold: '1.k',
    },
    {
      brand: '../assets/images/carBrand1.png',
      title: 'Petrol',
      image: '../assets/images/car1.png',
      searched: '7.5k',
      visited: '17.2k',
      sold: '1.k',
    },
    {
      brand: '../assets/images/carBrand1.png',
      title: 'Petrol',
      image: '../assets/images/car1.png',
      searched: '7.5k',
      visited: '17.2k',
      sold: '1.k',
    },
  ];
  ngOnInit(): void {
  }

}
