import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
  display = "none"
  constructor() { }

  ngOnInit(): void {
    

  }
  
 

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}

