import { Component, OnInit } from '@angular/core';
import { BolosService } from '../services/bolos.service';

@Component({
  selector: 'app-bolo',
  templateUrl: './bolo.page.html',
  styleUrls: ['./bolo.page.scss'],
})
export class BoloPage implements OnInit {
  bolo: any;
  constructor(private boloService: BolosService) { 
    this.bolo = boloService.getBoloId();
  }

  ngOnInit() {
  }

}
