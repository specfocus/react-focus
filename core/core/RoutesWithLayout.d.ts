/// <reference types="react" />
import { AdminChildren, CustomRoutes, CatchAllComponent, TitleComponent, DashboardComponent } from '../types';
export interface RoutesWithLayoutProps {
    catchAll: CatchAllComponent;
    children: AdminChildren;
    customRoutes?: CustomRoutes;
    dashboard?: DashboardComponent;
    title?: TitleComponent;
}
declare const RoutesWithLayout: (props: RoutesWithLayoutProps) => JSX.Element;
export default RoutesWithLayout;