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
export class IdentificationService {

    constructor(
        private http:HttpClient,
        private configservice:ConfigService
      ) { }
      baseurl:string=`${this.configservice.baseUrl()}/identification`;

      create(data:any){
        return this.http.post(this.baseurl+`/create`,data,{ responseType: 'text'});
      }

      collectionsidentifications(search:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsidentifications/${search}/${page}/${size}`,head);
      }
      collectionsidentificationvalidation(search:any,validation:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsidentificationvalidation/${search}/${validation}/${page}/${size}`,head);
      }
      collectionsidentificationadminsection(search:any,codeentite:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsidentificationadminsection/${search}/${codeentite}/${page}/${size}`,head);
      }
      collectionsidentificationconsultationavance(search:any,codesection:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsidentificationconsultationavance/${search}/${codesection}/${page}/${size}`,head);
      }
      afficheridentifications(identifiant:any):Observable<any>{
        return this.http.get(this.baseurl+`/afficheridentifications/${identifiant}`,head);
      }
}
