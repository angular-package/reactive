import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-reactive',
  template: `
    <p>
      reactive works!
    </p>
  `,
  styles: [
  ]
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
