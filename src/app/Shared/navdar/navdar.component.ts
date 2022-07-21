import { Component, OnInit } from '@angular/core';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navdar',
  templateUrl: './navdar.component.html',
  styleUrls: ['./navdar.component.scss']
})
export class NavdarComponent implements OnInit {
  filmIcon = faFilm;
  constructor() { }

  ngOnInit(): void {
  }

}
