import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  APIENDPOINT = {
    BASE_URL : "http://172.16.100.87:1234/api",
    DELETE_ASSET : "/deleteAsset",
    EDIT_ASSET : "/editAsset",
    EDIT_TAG : "/editTag",
    DELETE_TAG : "/deleteTag",
  }
 

  constructor(private http: HttpClient) { }

  editAsset(asset : any) {
    return new Observable(observer => {
      this.http.post(this.APIENDPOINT.BASE_URL+this.APIENDPOINT.EDIT_ASSET,asset).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        err => {
          observer.next(err);
          observer.complete();
        }
      );      
    });
  }

  deleteAsset(asset : any) {
    return new Observable(observer => {
      this.http.post(this.APIENDPOINT.BASE_URL+this.APIENDPOINT.DELETE_ASSET,asset).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        err => {
          observer.next(err);
          observer.complete();
        }
      );      
    });
  }

  deleteTag(tag : any) {
    return new Observable(observer => {
      this.http.post(this.APIENDPOINT.BASE_URL+this.APIENDPOINT.DELETE_TAG,tag).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        err => {
          observer.next(err);
          observer.complete();
        }
      );      
    });
  }

  editTag(tag : any) {
    return new Observable(observer => {
      this.http.post(this.APIENDPOINT.BASE_URL+this.APIENDPOINT.EDIT_TAG,tag).subscribe(
        data => {
          observer.next(data);
          observer.complete();
        },
        err => {
          observer.next(err);
          observer.complete();
        }
      );      
    });
  }
}
