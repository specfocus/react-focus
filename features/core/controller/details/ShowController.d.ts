/// <reference types="react" />
import { ShowProps, ShowControllerProps } from './useShowController';
import { Translate } from '../../types';
interface ShowControllerComponentProps extends ShowControllerProps {
    translate: Translate;
}
interface Props extends ShowProps {
    children: (params: ShowControllerComponentProps) => JSX.Element;
}
/**
 * Render prop version of the useShowController hook
 *
 * @see useShowController
 * @example
 *
 * const ShowView = () => <div>...</div>
 * const MyShow = props => (
 *     <ShowController {...props}>
 *         {controllerProps => <ShowView {...controllerProps} {...props} />}
 *     </ShowController>
 * );
 */
export declare const ShowController: ({ children, ...props }: Props) => JSX.Element;
export {};
