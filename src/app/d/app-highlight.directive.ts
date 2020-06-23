import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';
import { Element } from '@angular/compiler/src/render3/r3_ast';
import { CounterService } from '../s/counter.service';

@Directive({
  selector: '[appAppHighlight]'
})
export class AppHighlightDirective {

  constructor(private el : ElementRef , private counterSVC:CounterService) { }
  @HostListener('mouseenter') onMouseEnter() {
    // this.highlight('yellow');
    this.el.nativeElement.style.backgroundColor ='yellow';
  this.counterSVC.hoverCounter++
  
  }
  
  @HostListener('click') onMouseClick() {
    // this.highlight('yellow');
    this.el.nativeElement.style.backgroundColor ='lime';
    this.counterSVC.clickCounter++
  }


  
}
