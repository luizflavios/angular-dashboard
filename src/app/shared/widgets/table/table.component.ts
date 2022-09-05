import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data = [];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.data;
  }

}
