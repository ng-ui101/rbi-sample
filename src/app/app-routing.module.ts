import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TodosPageComponent} from "./components/todos-page/todos-page.component";
import {CssLayoutPageComponent} from "./components/css-layout-page/css-layout-page.component";
import {FilterSubpageComponent} from "./components/filter-subpage/filter-subpage.component";
import {FilteredSubpageComponent} from "./components/filtered-subpage/filtered-subpage.component";

const routes: Routes = [
    {
        path: 'todos',
        component:  TodosPageComponent,
        children: [
            { path: 'filter-form', component: FilterSubpageComponent },
            { path: 'filtered', component: FilteredSubpageComponent }
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
