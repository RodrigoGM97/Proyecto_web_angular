import { Component, AfterViewInit, Directive, TemplateRef, ElementRef, Input, ContentChildren, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {AnimationPlayer, AnimationBuilder, AnimationFactory, animate, style} from '@angular/animations'

@Directive({
  selector: '[carouselItem]'
})
export class CarouselItemDirective {

  constructor( public tpl : TemplateRef<any> ) {
  }

}

@Directive({
  selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {

  @ContentChildren(CarouselItemDirective) items : QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements : QueryList<ElementRef>;
  carouselWrapperStyle = {}

  @ViewChild('Carousel', { read: true, static: false }) private Carousel : ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player : AnimationPlayer;
  private itemWidth : number;
  private currentSlide = 0;

  ngAfterViewInit() {
    this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    this.carouselWrapperStyle = {
      width: `${this.itemWidth}px`
    }
  }

  constructor( private builder : AnimationBuilder ) {
  }
  
  next() {
    if( this.currentSlide + 1 === this.items.length ) return;

    this.currentSlide = (this.currentSlide + 1) % this.items.length;

    const offset = this.currentSlide * this.itemWidth;

    const myAnimation : AnimationFactory = this.builder.build([
       animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);

    this.player = myAnimation.create(this.Carousel.nativeElement);
    this.player.play();
  }

  prev() {
    if( this.currentSlide === 0 ) return;
 
     this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
     const offset = this.currentSlide * this.itemWidth;
 
     const myAnimation : AnimationFactory = this.builder.build([
       animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
     ]);
 
     this.player = myAnimation.create(this.Carousel.nativeElement);
     this.player.play();
   }
}
