import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosPageComponent} from "./components/pages/todos-page/todos-page.component";
import {CssLayoutPageComponent} from "./components/pages/css-layout-page/css-layout-page.component";
import {FilterSubpageComponent} from "./components/pages/_subpages/filter-subpage/filter-subpage.component";
import {FilteredSubpageComponent} from "./components/pages/_subpages/filtered-subpage/filtered-subpage.component";
import {AuthGuard} from "./guards/auth.guard";
import {TodosSubpageComponent} from "./components/pages/_subpages/todos-subpage/todos-subpage.component";


const routes: Routes = [
    {
        path: 'home',
        canActivate: [AuthGuard],
        component:  TodosPageComponent,
        children: [
            {
                path:'',
                redirectTo: 'todos',
                pathMatch: 'full'
            },
            {
                path: 'todos',
                component: TodosSubpageComponent
            },
            {
                path: 'filter-form',
                component: FilterSubpageComponent
            },
            {
                path: 'filtered',
                component: FilteredSubpageComponent
            }
        ]
    },
    { path: 'css-layout', component: CssLayoutPageComponent },
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
