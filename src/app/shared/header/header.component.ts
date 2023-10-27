import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subject, debounceTime, take, takeUntil } from 'rxjs';
import { InfoPage } from 'src/app/interfaces/info-page.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public search = new FormControl('');
  private subs = new Subject<void>();

  public info: InfoPage = {};

  constructor(
    public infoPageService: InfoPageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(400),
      takeUntil(this.subs)
    ).subscribe((value: string | null) => {
      if (value) this.searchProduct(value);
    });
    this.getInfo();
  }

  private searchProduct(term: string) {
    this.router.navigate(['/search', term]);
  }

  private getInfo(): void {
    this.infoPageService.loadInfo().pipe(take(1)).subscribe(({
      next: (data) => {
        this.info = data;
      }
    }))
  }

}
