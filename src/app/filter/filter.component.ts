import { Component,EventEmitter,Input, Output, } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all:number=0;
  @Input() free:number=0;
  @Input() pre:number=0;

  selectedButton:string='All';

  @Output()
  buttonChangeEvent:EventEmitter<string> =new EventEmitter<string>();

  buttonChangeMethod(){
    this.buttonChangeEvent.emit(this.selectedButton);
    //console.log(this.selectedButton);
  }

}
