import * as React from "react";

import { FieldRenderProps } from "react-final-form";

import { Input } from "../input";
import { InputProps } from "../input/InputProps";

export const InputAdapter = (
    { input, meta, ...rest }: FieldRenderProps<string | number> & InputProps,
) => {

    return (
        <Input
            {...input}
            {...rest}
            error={meta.touched ? meta.error : undefined}
        />
    );
};
