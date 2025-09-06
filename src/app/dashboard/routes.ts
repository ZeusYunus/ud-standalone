import { Route } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { TodayComponent } from "./today/today.component";

export const DASBOARD_ROUTE: Route[] = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'today',
        component: TodayComponent
    }
];