import * as React from "react";

import classNames from "classnames";

import { InputInlineError } from "../../items/input-inline-error";
import { VerticalFlow } from "../flow/vertical";
import { InputLabel } from "../input-label";

import { TextareaProps } from "./TextareaProps";

import "./styles.scss";

export const Textarea = ({
    className,
    inputClassName,
    label,
    error,
    required,
    ...rest
}: TextareaProps) => {
    return (
        <VerticalFlow className={classNames("text-area m-8", className)}>
            <InputLabel label={label} required={required} />
            <VerticalFlow className="text-area__wrapper">
                    <textarea
                        className={classNames("text-area__element mt-4", inputClassName)}
                        {...rest}
                    />
                {!!error && <InputInlineError error={error} />}
            </VerticalFlow>
        </VerticalFlow>
    );
};
