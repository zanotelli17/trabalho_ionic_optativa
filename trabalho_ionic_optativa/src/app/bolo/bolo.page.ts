import { Component, OnInit } from '@angular/core';
import { BolosService } from '../services/bolos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bolo',
  templateUrl: './bolo.page.html',
  styleUrls: ['./bolo.page.scss'],
})
export class BoloPage implements OnInit {
  
  bolo: any;
  idBolo: number;

  constructor(private boloService: BolosService,private route: ActivatedRoute,private router: Router) { 
    
  }

  ngOnInit() {
    this.idBolo = parseInt(this.route.snapshot.paramMap.get('idBolo'));
    if( this.idBolo != null ) {
      this.boloService.getBoloId(this.idBolo)
        .subscribe ( res => {
          this.bolo = res;
        })
    }
  }

  adicionarCarrinho( idBolo: number ){
    this.router.navigate(['carrinho', idBolo]);
  }

}
