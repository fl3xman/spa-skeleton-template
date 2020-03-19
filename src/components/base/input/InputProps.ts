import * as React from "react";

import { FieldInputProps } from "react-final-form";

import { ClassName } from "../../../foundation/ui";

export interface InputProps extends ClassName, FieldInputProps<string | number> {
    id?: string;
    label: string;
    placeholder?: string;
    defaultValue?: string;
    disabled?: boolean;
    invalid?: boolean;
    onClick?: React.MouseEventHandler;
    error?: string;
    required?: boolean;
}
