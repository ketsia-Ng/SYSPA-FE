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
export class BaremService {

    constructor(
        private http:HttpClient,
        private configservice:ConfigService
      ) { }
      baseurl:string=`${this.configservice.baseUrl()}/barem`;
      create(data:any){
        return this.http.post(this.baseurl+`/create`,data,{ responseType: 'text'});
      }
      collectionsbarems(search:any,codefonction:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsbarems/${search}/${codefonction}/${page}/${size}`,head);
      }
      changerstatut(id:any):Observable<any>{
        return this.http.get(this.baseurl+`/changerstatut/${id}`,head);
        }
        collectionsallbarems(codefonction:any):Observable<any>{
            return this.http.get(this.baseurl+`/collectionsallbarems/${codefonction}`,head);
        }
}
