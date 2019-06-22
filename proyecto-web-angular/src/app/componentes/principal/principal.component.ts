import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  constructor() { }

  ngOnInit() {
  }

}
