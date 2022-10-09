import {HttpParams, HttpResponse} from "@angular/common/http";
import {ITodoSearchParams} from "../interfaces/ITodoSearchParams";
import {ITodosRequest} from "../interfaces/ITodosRequest";

export function setTodosFilterParams(params: ITodoSearchParams) {
    let httpParams = new HttpParams();

    if (params.page && params.limit) {
        httpParams = httpParams
            .append('_page', params.page)
            .append('_limit', params.limit)
    }

    if (params.title) {
        httpParams = httpParams.append('title_like', params.title);
    }

    if (params.completed) {
        httpParams = httpParams.append('completed', params.completed);
    }

    return httpParams;
}

export function parseTodosData(request: HttpResponse<any>) {
    const result: ITodosRequest = {
        count: +request.headers.get('x-total-count'),
        data: request.body
    }

    return result;
}
