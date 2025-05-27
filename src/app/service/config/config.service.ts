import { Injectable } from '@angular/core';
import { urlModel } from 'src/app/models/config/urlModel';
import monurl from 'src/assets/url.json';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
urls:urlModel[]=monurl;
url:string="";
  constructor() {
    this.urls.forEach((item)=>{
      this.url=item.url;
        });
  }
  baseUrl():string{
//console.log(this.url)
    return this.url;
  }
}
