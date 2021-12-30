/// <reference types="react" />
import { EditProps } from '../../app';
interface Props extends EditProps {
    onCancel: () => void;
}
declare const ReviewEdit: ({ onCancel, ...props }: Props) => JSX.Element | null;
export default ReviewEdit;
