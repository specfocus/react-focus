import { ComponentType } from 'react';
/**
 * Higher-Order Component for getting access to the `locale` and the `translate` function in props.
 *
 * Requires that the app is decorated by the <TranslationProvider> to inject
 * the translation dictionaries and function in the context.
 *
 * @example
 *     import * as React from "react";
 *     import { translate } from '../app';
 *
 *     const MyHelloButton = ({ translate }) => (
 *         <button>{translate('myroot.hello.world')}</button>
 *     );
 *
 *     export default translate(MyHelloButton);
 *
 * @param {*} BaseComponent The component to decorate
 */
declare const withTranslate: (BaseComponent: ComponentType) => ComponentType;
export default withTranslate;
