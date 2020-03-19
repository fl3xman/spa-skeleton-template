import { Moment } from "moment";
import { FieldInputProps } from "react-final-form";

export interface DatePickerProps extends FieldInputProps<Moment | null> {
    value: Moment | null;
    onChange: (date: Moment | null) => void;
    placeholder?: string;
    required?: boolean;
}
