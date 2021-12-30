import { ComponentType } from 'react';
import { Location } from 'history';
export interface WithPermissionsProps {
    authParams?: object;
    component?: ComponentType<any>;
    location?: Location;
    staticContext?: object;
    [key: string]: any;
}
declare const _default: ComponentType<WithPermissionsProps>;
export default _default;
