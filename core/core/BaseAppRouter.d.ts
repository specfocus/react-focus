import { ComponentType } from 'react';
import { AdminChildren, CustomRoutes, CatchAllComponent, LayoutComponent, LoadingComponent, CoreLayoutProps } from '../types';
export interface AppRouterProps extends CoreLayoutProps {
    layout: LayoutComponent;
    catchAll: CatchAllComponent;
    children?: AdminChildren;
    customRoutes?: CustomRoutes;
    loading: LoadingComponent;
    ready?: ComponentType;
}
declare const BaseAppRouter: {
    (props: AppRouterProps): JSX.Element;
    defaultProps: {
        customRoutes: never[];
    };
};
export default BaseAppRouter;
