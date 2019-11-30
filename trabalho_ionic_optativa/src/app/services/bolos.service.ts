import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BolosService {

  public destroySubscription$: Subject<void> = new Subject();

  constructor(
    private http: HttpClient    
  ) { }

  getBolos(): Observable<any[] >{
    return this.http.get<any[]>('http://localhost/api/index.php');
  }

  getBoloId( idBolo: number ): Observable<any> {
    let params = new HttpParams().set('idBolo', idBolo.toString());
    
    return this.http.get<any>('http://localhost/api/index.php',{ params });
  }
}
