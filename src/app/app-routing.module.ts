import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosPageComponent} from "./components/pages/todos-page/todos-page.component";
import {CssLayoutPageComponent} from "./components/pages/css-layout-page/css-layout-page.component";
import {FilterSubpageComponent} from "./components/pages/_subpages/filter-subpage/filter-subpage.component";
import {FilteredSubpageComponent} from "./components/pages/_subpages/filtered-subpage/filtered-subpage.component";
import {AuthGuard} from "./guards/auth.guard";


const routes: Routes = [
    {
        path: 'todos',
        component:  TodosPageComponent,
        children: [
            {
                path: 'filter-form',
                canActivate: [AuthGuard],
                component: FilterSubpageComponent
            },
            {
                path: 'filtered',
                canActivate: [AuthGuard],
                component: FilteredSubpageComponent
            }
        ]
    },
    { path: 'css-layout', component: CssLayoutPageComponent },
    { path: '**', redirectTo: 'todos' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
