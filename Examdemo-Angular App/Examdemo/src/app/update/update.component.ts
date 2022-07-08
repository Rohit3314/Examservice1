import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private es :ExamService) { }

  ngOnInit(): void {
  }

  updatedata(updateform:any)
  {
    this.es.updatedetail(updateform.value).subscribe();
  }

}
