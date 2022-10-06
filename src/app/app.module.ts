import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodosPageComponent} from './components/todos-page/todos-page.component';
import {CssLayoutPageComponent} from './components/css-layout-page/css-layout-page.component';
import {FilterSubpageComponent} from './components/filter-subpage/filter-subpage.component';
import {FilteredSubpageComponent} from './components/filtered-subpage/filtered-subpage.component';
import {environment} from "../environments/environment";
import {ENVIRONMENT} from "./services/environment.service";
import {HttpClientModule} from "@angular/common/http";
import { TodosTableComponent } from './components/todos-table/todos-table.component';
import { TableNavigationComponent } from './components/table-navigation/table-navigation.component';
import { TodosTableWrapperComponent } from './components/todos-table-wrapper/todos-table-wrapper.component';

@NgModule({
    declarations: [
        AppComponent,
        TodosPageComponent,
        CssLayoutPageComponent,
        FilterSubpageComponent,
        FilteredSubpageComponent,
        TodosTableComponent,
        TableNavigationComponent,
        TodosTableWrapperComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [{provide: ENVIRONMENT, useValue: environment}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
