/// <reference types="react" />
import { EditControllerProps } from './useEditController';
/**
 * Context to store the result of the useEditController() hook.
 *
 * Use the useEditContext() hook to read the context. That's what the Edit components do in ../../app.
 *
 * @example
 *
 * import { useEditController, EditContextProvider } from '../../../core';
 *
 * const Edit = props => {
 *     const controllerProps = useEditController(props);
 *     return (
 *         <EditContextProvider value={controllerProps}>
 *             ...
 *         </EditContextProvider>
 *     );
 * };
 */
export declare const EditContext: import("react").Context<EditControllerProps<import("../..").Record>>;
