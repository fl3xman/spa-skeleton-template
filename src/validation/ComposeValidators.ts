import { FieldValidator } from "final-form";

export const composeValidators = (
    ...validators: Array<FieldValidator<any>>
): FieldValidator<any> => (
    value,
    allValues,
    meta,
) => validators.reduce((error, validator) => error || validator(value, allValues, meta), undefined);
