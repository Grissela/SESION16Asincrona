import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chile',
  templateUrl: './chile.component.html',
  styleUrls: ['./chile.component.css']
})
export class ChileComponent implements OnInit {

  pais:string="Chile"
  constructor() { }

  ngOnInit(): void {
  }

}
