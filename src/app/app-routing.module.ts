import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContentsComponent } from './pages/contents/contents.component';
import { HomeComponent } from './pages/contents/home/home.component';

const routes: Routes = [
  // { path: '', redirectTo: 'singin', pathMatch: 'full' },
  { path: 'singin', component: SigninComponent },
  {
    path: '', component: ContentsComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
