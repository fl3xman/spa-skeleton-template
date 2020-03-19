import { ClassName, PartialChildren } from "../../../foundation/ui";

export interface ButtonProps extends ClassName, PartialChildren {
    text?: string;
    onClick?: () => void;
    to?: string;
    disabled?: boolean;
    buttonType?: "button" | "submit" | "reset";
    type?: "primary" | "danger";
}
