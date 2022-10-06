import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosPageComponent } from './components/todos-page/todos-page.component';
import { CssLayoutPageComponent } from './components/css-layout-page/css-layout-page.component';
import { FilterSubpageComponent } from './components/filter-subpage/filter-subpage.component';
import { FilteredSubpageComponent } from './components/filtered-subpage/filtered-subpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosPageComponent,
    CssLayoutPageComponent,
    FilterSubpageComponent,
    FilteredSubpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
