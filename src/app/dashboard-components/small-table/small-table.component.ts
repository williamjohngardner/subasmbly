import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-table',
  templateUrl: './small-table.component.html',
  styleUrls: ['./small-table.component.css']
})
export class SmallTableComponent implements OnInit {
  @Input() componentHeight: string;
  @Input() numberOfRows: number;

  public data: Array<object> = [
    {
      header1: 'Assembly 1',
      header2: 345
    },
    {
      header1: 'Assembly 2',
      header2: 7688
    },
    {
      header1: 'Assembly 3',
      header2: 7598
    },
    {
      header1: 'Assembly 4',
      header2: 121
    },
    {
      header1: 'Assembly 5',
      header2: 34521
    },
    {
      header1: 'Assembly 6',
      header2: 25436
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
