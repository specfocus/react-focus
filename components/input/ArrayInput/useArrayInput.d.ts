import { ArrayInputContextValue } from './ArrayInputContext';
/**
 * A hook to access an array input mutators and meta as provided by react-final-form-array.
 * Useful to create custom array input iterators.
 * @see {ArrayInput}
 * @see {@link https://github.com/final-form/react-final-form-arrays|react-final-form-array}
 */
export declare const useArrayInput: (props?: Partial<ArrayInputContextValue>) => ArrayInputContextValue;
