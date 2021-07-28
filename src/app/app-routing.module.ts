import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotlistViewComponent } from './hotlist-view/hotlist-view.component';
import { ScreenerComponent } from './screener/screener.component';
import { SearchComponent } from './search/search.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hotlist', component: HotlistViewComponent },
  { path: 'screener', component: ScreenerComponent },
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
