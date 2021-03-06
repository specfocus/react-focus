import { Record } from '../../types';
export declare type LinkToFunctionType = (record: Record, reference: string) => string;
export declare type LinkToType = string | boolean | LinkToFunctionType;
interface Option {
    source: string;
    reference: string;
    resource: string;
    basePath?: string;
    record?: Record;
    link?: LinkToType;
    /**
     * @deprecated use link instead
     */
    linkType?: LinkToType;
}
/**
 * Get the link toward the referenced resource
 *
 * @example
 *
 * const linkPath = getResourceLinkPath({
 *      basePath: '/comments',
 *      link: 'edit',
 *      reference: 'users',
 *      record: {
 *          userId: 7
 *      },
 *      resource: 'comments',
 *      source: 'userId',
 * }); // '/users/7'
 *
 * @param {Object} option
 * @param {string} option.basePath basepath to current resource
 * @param {string | false | LinkToFunctionType} option.link="edit" The link toward the referenced record. 'edit', 'show' or false for no link (default to edit). Alternatively a function that returns a string
 * @param {string | false | LinkToFunctionType} [option.linkType] DEPRECATED : old name for link
 * @param {string} option.reference The linked resource name
 * @param {Object} option.record The current resource record
 * @param {string} option.resource The current resource name
 * @param {string} option.source The key of the linked resource identifier
 *
 * @returns {string | false} The link to the reference record
 */
declare const getResourceLinkPath: ({ resource, source, reference, link, record, basePath, linkType, }: Option) => string | false;
export default getResourceLinkPath;
