import * as React from "react";

import { FieldRenderProps } from "react-final-form";

import { Textarea } from "../textarea";
import { TextareaProps } from "../textarea/TextareaProps";

export const TextAreaAdapter = ({ input, meta, ...rest }: FieldRenderProps<string> & TextareaProps) => {

    return (
        <Textarea
            {...input}
            {...rest}
            error={meta.touched ? meta.error : undefined}
        />
    );
};
