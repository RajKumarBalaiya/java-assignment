import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

const localUrl = 'http://localhost:8080/java-assignment';
@Injectable({
  providedIn: 'root'
})
export class JavaServiceService {
  
  constructor(private http: HttpClient) { }

  getAnagrams(AnagramsList: string):Observable<any> {
    const opts = { params: new HttpParams({fromString: "anagramsList="+AnagramsList}) };
    return this.http.get(<any>localUrl+"/anagrams?",opts);
  }
  
  getPhoneDirectory(searchWord: string):Observable<any> {
    const opts = { params: new HttpParams({fromString: "searchWord="+searchWord}) };
    return this.http.get<any>(localUrl+"/phone-directory-search?",opts);
  }
  getPhoneDirectoryList():Observable<any> {
    return this.http.get<any>(localUrl+"/phone-directory")
  }
}
