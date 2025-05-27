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
export class FonctionService {

    constructor(
        private http:HttpClient,
        private configservice:ConfigService
      ) { }
      baseurl:string=`${this.configservice.baseUrl()}/fonction`;
      create(data:any){
        return this.http.post(this.baseurl+`/create`,data,{ responseType: 'text'});
      }
      collectionsfonctions(search:any,codesection:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsfonctions/${search}/${codesection}/${page}/${size}`,head);
      }
      changerstatut(id:any):Observable<any>{
        return this.http.get(this.baseurl+`/changerstatut/${id}`,head);
        }
        collectionallfonctions(codesection:any):Observable<any>{
            return this.http.get(this.baseurl+`/collectionallfonctions/${codesection}`,head);
        }
}
