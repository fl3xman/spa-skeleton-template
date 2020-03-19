import { FieldInputProps } from "react-final-form";

import { ClassName } from "../../../foundation/ui";

export interface TextareaProps extends ClassName, FieldInputProps<string> {
    id?: string;
    label: string;
    placeholder?: string;
    inputClassName?: string;
    defaultValue?: string;
    disabled?: boolean;
    readOnly?: boolean;
    invalid?: boolean;
    rows?: number;
    required?: boolean;
}
