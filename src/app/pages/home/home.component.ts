import { Component, OnInit } from '@angular/core';
import { HomeService } from './shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lugares: any[] = []
  constructor(readonly homeService: HomeService) { 
    homeService.recuperarLugares().subscribe(res => {
      console.log(res)
      this.lugares = res.body.lugares
    })
  }

  ngOnInit(): void {
  }


}
