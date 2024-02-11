import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  expandedBox: string = 'middle';

  constructor() { }

  ngOnInit(): void {
    console.log('view consoles')
  }
  toggleBox(box: string): void {
    if (this.expandedBox === box) {
      this.expandedBox = 'middle';
    } else {
      this.expandedBox = box;
    }
  }
  onChange($event: Event){
    console.log('called')
  }
}
