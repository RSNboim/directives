import { Directive, Input, ElementRef, OnInit, HostListener, Output, EventEmitter, HostBinding } from '@angular/core';

@Directive({
  selector: '[appShowcase]'
})
export class ShowcaseDirective implements OnInit{

el:HTMLElement
  constructor(elRef:ElementRef) {
    this.el = elRef.nativeElement
    this.el.style.color = this.color
  
  }




  @Input('clickCountColor') color : string

  @HostListener ('click') click(){
    alert(`my color is ${this.color}`)
    this.clickCountChange.emit(`my color is ${this.color} clicked`)
  
  this.clicked =!this.clicked
}
@Output() clickCountChange  = new EventEmitter<string>();
  ngOnInit(): void {
  this.el.style.color = this.color
  }
  @HostBinding('class.clicked') clicked : boolean;

}
