/**
 * Because final-form removes undefined and empty string values completely
 * (the key for the empty field is removed from the values), we have to check
 * whether this value was initially provided so that it is correctly sent to
 * the backend.
 * @see https://github.com/final-form/react-final-form/issues/130#issuecomment-493447888
 *
 * @param initialValues The initial values provided to the form
 * @param values The current form values
 */
declare const sanitizeEmptyValues: (initialValues: object, values: object) => object;
export default sanitizeEmptyValues;
