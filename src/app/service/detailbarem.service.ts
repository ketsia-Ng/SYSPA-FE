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
export class DetailbaremService {


    constructor(
        private http:HttpClient,
        private configservice:ConfigService
      ) { }
      baseurl:string=`${this.configservice.baseUrl()}/detailbarem`;
      create(data:any){
        return this.http.post(this.baseurl+`/create`,data,{ responseType: 'text'});
      }
      collectionsdetailbarems(search:any,codebarem:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsdetailbarems/${search}/${codebarem}/${page}/${size}`,head);
      }
      supprimerdetailbarem(id:any):Observable<any>{
        return this.http.get(this.baseurl+`/supprimerdetailbarem/${id}`,head);
        }
        changerstatut(id:any):Observable<any>{
            return this.http.get(this.baseurl+`/changerstatut/${id}`,head);
            }
}
