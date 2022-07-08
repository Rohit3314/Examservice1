import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { InsertComponent } from './insert/insert.component';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ExamService {

  url ="http://localhost:9001/insert";
  url1 = "http://localhost:9001/view";
  url2 = "http://localhost:9001/update";
  url3 = "http://localhost:9001/delete";
  constructor(private http :HttpClient) { }

  public insertqp(data: any)
  {
    return this.http.post(this.url,data); 
  }
  public viewqp()
  {
    return this.http.get(this.url1);
  }
 public updatedetail(data: any)
 {
  return this.http.post(this.url2,data);
 }

  public deleteqp(data:any)
  {
    return this.http.post(this.url3,data);
  }
}
