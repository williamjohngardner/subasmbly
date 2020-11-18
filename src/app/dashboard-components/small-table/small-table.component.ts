import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-table',
  templateUrl: './small-table.component.html',
  styleUrls: ['./small-table.component.css']
})
export class SmallTableComponent implements OnInit {
  @Input() compHeight: string;
  
  public data: Array<object> = [
    { header1: 'Assembly 1',
      header2: 345
    },
    { header1: 'Assembly 2',
      header2: 7688
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
