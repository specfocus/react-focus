import * as React from 'react';
import { ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ToolbarProps } from '@mui/material';
import { Exporter } from '../../core';
export interface ListToolbarProps extends Omit<ToolbarProps, 'classes' | 'onSelect'> {
    actions?: ReactElement | false;
    filters?: ReactElement | ReactElement[];
    exporter?: Exporter | false;
}
declare const _default: React.MemoExoticComponent<{
    (props: ListToolbarProps): JSX.Element;
    propTypes: {
        filters: PropTypes.Requireable<PropTypes.ReactElementLike | (PropTypes.ReactElementLike | null | undefined)[]>;
        actions: PropTypes.Requireable<boolean | PropTypes.ReactElementLike>;
        exporter: PropTypes.Requireable<boolean | ((...args: any[]) => any)>;
    };
}>;
export default _default;