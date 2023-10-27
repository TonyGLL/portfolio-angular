import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../services/info-page.service';
import { take } from 'rxjs';
import { IGetTeamResponse } from '../interfaces/info-page.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public team: IGetTeamResponse[] = [];
  public loaded = false;

  constructor(
    private infoService: InfoPageService
  ) { }

  ngOnInit(): void {
    this.getTeam();
  }

  private getTeam(): void {
    this.infoService.loadTeam().pipe(take(1)).subscribe(({
      next: (data) => {
        this.team = data;
      }
    }))
  }

}
