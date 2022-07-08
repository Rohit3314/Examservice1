import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private es:ExamService) { }

  ngOnInit(): void {
  }
  deletedata(deleteform:any)
  {
     this.es.deleteqp(deleteform.value).subscribe();
  }

}
