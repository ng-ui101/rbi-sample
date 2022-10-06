import {HttpParams} from "@angular/common/http";
import {ITodoSearchParams} from "../interfaces/ITodoSearchParams";

export function setTodosFilterParams(params: ITodoSearchParams) {
    let httpParams = new HttpParams()
        .set('_page', params.page)
        .set('_limit', params.limit)

    if (params.title) {
        httpParams = httpParams.append('title_like', params.title);
    }

    if (params.completed) {
        httpParams = httpParams.append('completed', params.completed);
    }

    return httpParams;
}
