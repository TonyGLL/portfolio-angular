// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ContactComponent } from './pages/contact/contact.component';

// Routes
const appRoutes: Routes = [

  {
    path: 'about',
    loadChildren: () => import('src/app/about/about-routing.module').then(m => m.AboutRoutingModule)
  },

  { path: 'skills', component: SkillsComponent },

  { path: 'projects', component: ProjectsComponent },

  { path: 'contact', component: ContactComponent },

  { path: 'item/:id', component: ItemComponent },

  { path: 'search/:term', component: SearchComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'about' }

];

@NgModule({

  imports: [

    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [

    RouterModule
  ]
})

export class AppRoutingModule { }
