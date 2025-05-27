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
export class PositionService {

    constructor(
        private http:HttpClient,
        private configservice:ConfigService
      ) { }
      baseurl:string=`${this.configservice.baseUrl()}/position`;
      create(data:any){
        return this.http.post(this.baseurl+`/create`,data,{ responseType: 'text'});
      }
      collectionsposition(search:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsposition/${search}/${page}/${size}`,head);
      }
      changerstatut(id:any):Observable<any>{
        return this.http.get(this.baseurl+`/changeretat/${id}`,head);
        }
        collectionallposition():Observable<any>{
            return this.http.get(this.baseurl+`/collectionallposition`,head);
            }
}
