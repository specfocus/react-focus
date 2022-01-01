/// <reference types="react" />
import { Customer, Review } from '../db/types';
interface Props {
    reviews?: Review[];
    customers?: {
        [key: string]: Customer;
    };
    nb?: number;
}
declare const PendingReviews: ({ reviews, customers, nb }: Props) => JSX.Element;
export default PendingReviews;
