import { Routes } from "@angular/router";

export const DrRoutes: Routes = [
    {
        path: 'dr-dashboard',
        loadComponent: () => import("../doctors/components/dr-dashboard/dr-dashboard.component").then(m => m.DrDashboardComponent)
    }
]
