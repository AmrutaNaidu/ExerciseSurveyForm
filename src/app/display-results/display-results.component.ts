import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-display-results',
  templateUrl: 'display-results.component.html',
  styles: []
})
export class DisplayResultsComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
    this.countTextFeilds();
    
  }

  @Input() masterListDisplay: any = [];

  icecreamSelected: number[] = [0,0,0,0];
  totalItemsSelected: number = 0;

  countTextFeilds() {
    let count = 0;
    let blank = 0
    console.log(this.masterListDisplay[0].icecream)
    for(let i = 0; i<this.masterListDisplay.length; i++) {
      console.log(this.masterListDisplay[i].icecream)
      if(this.masterListDisplay[i].icecream == 'Cookies and Cream') {
        this.icecreamSelected[0] = this.icecreamSelected[0]++;
        this.totalItemsSelected++;
      }
      // if(this.masterListDisplay[i].name == this.masterListDisplay[i+1].name) {
      //   console.log('in 1 ' + this.masterListDisplay[i].name);
      //   return count++;
      // } else if (this.masterListDisplay[i].name == '') {
      //   console.log('in 2');
      //   return blank++;
      // } else {
      //   console.log('in 3');
      //   return "i don't know";
      // }
    }
  }
}
