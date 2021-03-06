/// <reference types="react" />
import { Translate } from '../../types';
import { EditProps, EditControllerProps } from './useEditController';
interface EditControllerComponentProps extends EditControllerProps {
    translate: Translate;
}
interface Props extends EditProps {
    children: (params: EditControllerComponentProps) => JSX.Element;
}
/**
 * Render prop version of the useEditController hook
 *
 * @see useEditController
 * @example
 *
 * const EditView = () => <div>...</div>
 * const MyEdit = props => (
 *     <EditController {...props}>
 *         {controllerProps => <EditView {...controllerProps} {...props} />}
 *     </EditController>
 * );
 */
export declare const EditController: ({ children, ...props }: Props) => JSX.Element;
export {};
