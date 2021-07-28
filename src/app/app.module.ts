import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HotlistComponent } from './hotlist-sidebar/hotlist-sidebar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { HomeService } from './home.service';
import { ScreenerComponent } from './screener/screener.component';
import { HotlistViewComponent } from './hotlist-view/hotlist-view.component';
import { CustomPipe } from './pipes/custom-pipes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HotlistComponent,
    AboutComponent,
    SearchComponent,
    ScreenerComponent,
    HotlistViewComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HomeService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
