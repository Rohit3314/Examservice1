import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../exam.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private es : ExamService) { }

  ngOnInit(): void {
  }

  insertdata(insertform: any)
  {
      this.es.insertqp(insertform.value).subscribe();
  }

}
