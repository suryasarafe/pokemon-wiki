import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent implements OnInit {
  overlay: boolean = false
  isClosed: boolean = false
  constructor() { }

  ngOnInit() {}

  toogleMenu() {
    if (this.isClosed) {
      this.overlay = false
      this.isClosed = false;
    } else {
      this.overlay = true
      this.isClosed = true;
    }
  }
}
