import * as _ from "lodash";

import { FieldValidator } from "final-form";
import { Moment } from "moment";

export const requiredField: FieldValidator<string | number | Moment | null> = (value) => {
    return !_.isNil(value) ? undefined : "Field is empty or invalid";
};
