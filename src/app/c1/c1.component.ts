import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {
arr = [2,4,16,256,655536]
  constructor(private el : ElementRef) { }

  ngOnInit(): void {
  }

}
