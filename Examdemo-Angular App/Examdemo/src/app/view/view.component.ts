import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private es:ExamService) { this.viewdata();}
  
  data1:any;
  ngOnInit(): void {}
      viewdata()
      { 
      this.es.viewqp().subscribe(
        (res)=>{this.data1=res}
      );
    }
      }
    
