import { Component, Input, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  @Input('contentText') contentText;
  banners = [
    {
      name: 'assets/images/banner-mobile.png'
    },
    {
      name: 'assets/images/slider2.jpg'
    },
    {
      name: 'assets/images/slider3.jpg'
    },
  ]

  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  
  constructor(
  ) { }

  ngOnInit(): void {
  }


}
