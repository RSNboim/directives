import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/s/counter.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public svc:CounterService) { }

  ngOnInit(): void {
  }

}
