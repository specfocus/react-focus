"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetResourceLabel = void 0;
const inflection_1 = __importDefault(require("inflection"));
const react_redux_1 = require("react-redux");
const reducer_1 = require("../reducer");
const i18n_1 = require("../i18n");
/**
 * A hook which returns function to get a translated resource name. It will use the label option of the `Resource` component if it was provided.
 *
 * @returns {GetResourceLabel} A function which takes a resource name and an optional number indicating the number of items (used for pluralization) and returns a translated string.
 * @example
 * const Menu = () => {
 *     const resources = useSelector(getResources, shallowEqual);
 *     const getResourceLabel = useGetResourceLabel();
 *
 *     return (
 *         <ul>
 *             {resources.map(resource => (
 *                 <li key={resource.name}>
 *                     {getResourceLabel(resource.name, 2)}
 *                 </li>
 *             ))}
 *         </ul>
 *     )
 * }
 */
const useGetResourceLabel = () => {
    const store = (0, react_redux_1.useStore)();
    const translate = (0, i18n_1.useTranslate)();
    return (resource, count = 2) => {
        const resourceDefinition = (0, reducer_1.getResources)(store.getState()).find(r => (r === null || r === void 0 ? void 0 : r.name) === resource);
        const label = translate(`resources.${resource}.name`, {
            smart_count: count,
            _: resourceDefinition &&
                resourceDefinition.options &&
                resourceDefinition.options.label
                ? translate(resourceDefinition.options.label, {
                    smart_count: count,
                    _: resourceDefinition.options.label,
                })
                : inflection_1.default.humanize(count > 1
                    ? inflection_1.default.pluralize(resource)
                    : inflection_1.default.singularize(resource)),
        });
        return label;
    };
};
exports.useGetResourceLabel = useGetResourceLabel;
