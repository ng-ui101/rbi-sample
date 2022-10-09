import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TodosPageComponent} from './components/pages/todos-page/todos-page.component';
import {CssLayoutPageComponent} from './components/pages/css-layout-page/css-layout-page.component';
import {FilterSubpageComponent} from './components/pages/_subpages/filter-subpage/filter-subpage.component';
import {FilteredSubpageComponent} from './components/pages/_subpages/filtered-subpage/filtered-subpage.component';
import {environment} from "../environments/environment";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TodosTableComponent} from './components/todos-view/todos-table/todos-table.component';
import {TableNavigationComponent} from './components/todos-view/table-navigation/table-navigation.component';
import {
    NoOptimizeTodosTableWrapperComponent,
    TodosTableWrapperComponent
} from './components/todos-view/todos-table-wrapper/todos-table-wrapper.component';
import {AuthInterceptor} from "./interceptors/auth.interceptor";
import {ENVIRONMENT} from "./app-injection-tokens";
import {AuthService, FakeAuthService} from "./services/auth.service";
import {ReactiveFormsModule} from "@angular/forms";
import { TodosSubpageComponent } from './components/pages/_subpages/todos-subpage/todos-subpage.component';

@NgModule({
    declarations: [
        AppComponent,
        TodosPageComponent,
        CssLayoutPageComponent,
        FilterSubpageComponent,
        FilteredSubpageComponent,
        TodosTableComponent,
        TableNavigationComponent,
        TodosTableWrapperComponent,
        TodosSubpageComponent,
        NoOptimizeTodosTableWrapperComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [
        {provide: ENVIRONMENT, useValue: environment},
        {provide: AuthService, useClass: FakeAuthService},
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
