import * as _ from "lodash";

import { assertThrow } from "./AssertThrow";

export function environmentValue(name: string, fallback?: string): string {
    const value = _.get(process.env, name, fallback || "");
    if (_.isNil(fallback)) {
        assertThrow(!_.isEmpty(value), () => `${name} is not defined in .env`);
    }
    return value;
}
