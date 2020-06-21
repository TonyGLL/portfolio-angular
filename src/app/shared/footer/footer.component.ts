import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

import { faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle, faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faCircle = faCircle;
  farCircle = farCircle;

  faSquare = faSquare;
  farSquare = farSquare;

  faStackOverflow = faStackOverflow;
  faGithub = faGithub;
  faMedium = faMedium;

  year: number = new Date().getFullYear();

  constructor( public _service: InfoPageService ) { }

  ngOnInit(): void {
  }

}
