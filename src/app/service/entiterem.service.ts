import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config/config.service';
const head={
    headers:new HttpHeaders({
      'content-type':'application/json'

    })
  }
@Injectable({
  providedIn: 'root'
})
export class EntiteremService {


    constructor(
        private http:HttpClient,
        private configservice:ConfigService
      ) { }
      baseurl:string=`${this.configservice.baseUrl()}/entiterem`;
      create(data:any){
        return this.http.post(this.baseurl+`/create`,data,{ responseType: 'text'});
      }
      collectionsentiterems(search:any,codesection:any,codeprovince:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsentiterems/${search}/${codesection}/${codeprovince}/${page}/${size}`,head);
      }
      collectionallentiterem(codesection:any,codeprovince:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionallentiterem/${codesection}/${codeprovince}`,head);
      }
      changerstatut(id:any):Observable<any>{
        return this.http.get(this.baseurl+`/changerstatut/${id}`,head);
        }
        collectionallentiteremunere(search:any,codesection:any,codeprovince:any,page:any,size:any):Observable<any>{
            return this.http.get(this.baseurl+`/collectionallentiteremunere/${search}/${codesection}/${codeprovince}/${page}/${size}`,head);
         }
}
