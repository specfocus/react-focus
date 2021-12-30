/// <reference types="react" />
import { DatagridProps, Identifier } from '../../app';
export interface ReviewListDesktopProps extends DatagridProps {
    selectedRow?: Identifier;
}
declare const ReviewListDesktop: ({ selectedRow, ...props }: ReviewListDesktopProps) => JSX.Element;
export default ReviewListDesktop;
