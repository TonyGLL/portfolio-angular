import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skills } from '../interfaces/skills.interface';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  skills: Skills[] = [];

  constructor(private http: HttpClient) {

    this.loadSkills();
  }

  loadSkills() {

    this.http.get('https://angular-html-a7dde.firebaseio.com/skills.json')
      .subscribe((resp: Skills[]) => {
        this.skills = resp;
      });
  }
}
