/// <reference types="react" />
import { InferredType } from './types';
declare class InferredElement {
    private type?;
    private props?;
    private children?;
    constructor(type?: InferredType | undefined, props?: any, children?: any);
    getElement(props?: {}): import("react").DetailedReactHTMLElement<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> | undefined;
    getProps(): any;
    isDefined(): boolean;
    getRepresentation(): string | undefined;
}
export default InferredElement;
