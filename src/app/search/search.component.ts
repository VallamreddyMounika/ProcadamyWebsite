import { Component, EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchValue:string="";

  @Output()
  searchEvent:EventEmitter<string>=new EventEmitter<string>();

  searchMethod(){
    this.searchEvent.emit(this.searchValue);
  }

}
