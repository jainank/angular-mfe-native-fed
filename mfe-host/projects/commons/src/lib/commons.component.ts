import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-commons',
  imports: [],
  template: `
    <p>
      commons from {{source}}
    </p>
  `,
  styles: ``
})
export class CommonsComponent {
  @Input() source?: string;
}
