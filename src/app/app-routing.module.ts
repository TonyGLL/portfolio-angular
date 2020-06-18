
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';

const appRoutes: Routes = [

  { path: 'projects', component: ProjectsComponent },

  { path: 'skills', component: SkillsComponent },

  { path: 'about', component: AboutComponent },

  { path: 'item/:id', component: ItemComponent },

  { path: 'search/:term', component: SearchComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'projects' }

];

@NgModule({

  imports: [

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [

    RouterModule
  ]
})

export class AppRoutingModule {}
