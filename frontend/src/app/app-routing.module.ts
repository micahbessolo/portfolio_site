import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactSuccessComponent } from './contact-success/contact-success.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'skills', component: SkillsComponent},
  { path: 'portfolio', component: PortfolioComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'contact-success', component: ContactSuccessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
