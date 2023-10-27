import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGetTeamResponse, InfoPage } from '../interfaces/info-page.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;

  constructor(private http: HttpClient) {
    this.loadInfo();
  }

  public loadInfo(): Observable<InfoPage> {
    return this.http.get('assets/data/data-page.json');
  }

  public loadTeam(): Observable<IGetTeamResponse[]> {
    return this.http.get<IGetTeamResponse[]>('https://angular-html-a7dde.firebaseio.com/team.json');
  }
}
