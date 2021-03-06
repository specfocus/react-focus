/// <reference types="react" />
import { CreateControllerProps } from './useCreateController';
/**
 * Context to store the result of the useCreateController() hook.
 *
 * Use the useCreateContext() hook to read the context. That's what the Create components do in ../../app.
 *
 * @example
 *
 * import { useCreateController, CreateContextProvider } from '../../../core';
 *
 * const Create = props => {
 *     const controllerProps = useCreateController(props);
 *     return (
 *         <CreateContextProvider value={controllerProps}>
 *             ...
 *         </CreateContextProvider>
 *     );
 * };
 */
export declare const CreateContext: import("react").Context<CreateControllerProps<import("../..").Record>>;
