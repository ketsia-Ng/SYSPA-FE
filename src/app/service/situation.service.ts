import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config/config.service';
import { Observable } from 'rxjs';
const head={
    headers:new HttpHeaders ({
      'content-type':'application/json'
    })
  }
@Injectable({
  providedIn: 'root'
})
export class SituationService {

    constructor(
        private http:HttpClient,
        private configservice:ConfigService
      ) { }
      baseurl:string=`${this.configservice.baseUrl()}/situation`;
      create(data:any){
        return this.http.post(this.baseurl+`/create`,data,{ responseType: 'text'});
      }
      collectionssituations(identifiant:any,validation:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionssituations/${identifiant}/${validation}/${page}/${size}`,head);
      }
      collectionssituationsection(identifiant:any,codesection:any,validation:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionssituationsection/${identifiant}/${codesection}/${validation}/${page}/${size}`,head);
      }
      collectionsadminsituationsection(identifiant:any,codeentite:any,validation:any,page:any,size:any):Observable<any>{
        return this.http.get(this.baseurl+`/collectionsadminsituationsection/${identifiant}/${codeentite}/${validation}/${page}/${size}`,head);
      }
      validationsituations(idsituation:any,validation:any):Observable<any>{
        return this.http.get(this.baseurl+`/validationsituations/${idsituation}/${validation}`,head);
      }
      impressionlistidentifsection(codesection:any):Observable<any>{
        return this.http.get(this.baseurl+`/impressionlistidentifsection/${codesection}`,head);
      }
      impressionlistidentifentite(codeentite:any):Observable<any>{
        return this.http.get(this.baseurl+`/impressionlistidentifentite/${codeentite}`,head);
      }
      impressionpersidentifsection(codesection:any,identifiant:any):Observable<any>{
        return this.http.get(this.baseurl+`/impressionpersidentifsection/${codesection}/${identifiant}`,head);
      }
      impressionpersidentifentite(codeentite:any,identifiant:any):Observable<any>{
        return this.http.get(this.baseurl+`/impressionpersidentifentite/${codeentite}/${identifiant}`,head);

    }
    affichersituation(id:any):Observable<any>{
        return this.http.get(this.baseurl+`/affichersituation/${id}`,head);

    }
}
