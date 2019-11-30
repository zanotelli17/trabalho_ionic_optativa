import { Component, OnInit  } from '@angular/core';
import { BolosService } from '../services/bolos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  public bolos: any[];
  constructor( public bolosService: BolosService, private router: Router ) {
    
  }

  ngOnInit() {
    this.bolosService.getBolos()
      .subscribe ( res => {
        this.bolos = res;
      });
  }

  abrirView(idBolo:number) {
    this.router.navigate(['/bolo',idBolo]);
  }
}
