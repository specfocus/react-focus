import React from 'react';
import { InferredElementDescription } from '../../core';
import { FieldConfiguration, ResourceConfigurationMap } from '../ResourceConfiguration';
export declare const getInputFromFieldDefinition: (definition: FieldConfiguration | InferredElementDescription, resources: ResourceConfigurationMap, keyPrefix?: string | undefined) => React.ReactNode;
