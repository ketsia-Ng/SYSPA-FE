import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { Observable } from 'rxjs';
const head={
    headers:new HttpHeaders({
      'content-type':'application/json'
    })
  }
@Injectable({
  providedIn: 'root'
})
export class BanqueService {

  constructor(
    private http:HttpClient,
    private configservice:ConfigService
  ) { }
  baseurl:string=`${this.configservice.baseUrl()}/banque`;
  create(data:any){
    return this.http.post(this.baseurl+`/create`,data,{ responseType: 'text'});
  }
  collectionsbanques(search:any,page:any,size:any):Observable<any>{
    return this.http.get(this.baseurl+`/collectionsbanques/${search}/${page}/${size}`,head);
  }
  collectionallbanques():Observable<any>{
    return this.http.get(this.baseurl+`/collectionallbanques`,head);
  }
  changerstatut(id:any):Observable<any>{
	return this.http.get(this.baseurl+`/changerstatut/${id}`,head);
	}
}
