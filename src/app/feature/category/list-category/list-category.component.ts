import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  categoryList = ['Crime', 'Graphic Novel', 'History', 'Journal', 'Horror']
  constructor() { }

  ngOnInit() {
  }

}
