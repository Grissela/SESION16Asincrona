import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uruguay',
  templateUrl: './uruguay.component.html',
  styleUrls: ['./uruguay.component.css']
})
export class UruguayComponent implements OnInit {

  pais:string="Uruguay"
  constructor() { }

  ngOnInit(): void {
  }

}
