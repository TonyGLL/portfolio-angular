import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';

import { faCircle, faSquare } from '@fortawesome/free-solid-svg-icons';
import { faCircle as farCircle, faSquare as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { InfoPage } from 'src/app/interfaces/info-page.interface';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  public info: InfoPage = {};

  year: number = new Date().getFullYear();

  public version = environment.version;

  constructor(
    private infoPageService: InfoPageService
  ) { }

  ngOnInit(): void {
    this.getInfo();
  }

  private getInfo(): void {
    this.infoPageService.loadInfo().pipe(take(1)).subscribe(({
      next: (data) => {
        this.info = data;
      }
    }))
  }

}
