import * as React from "react";

import classNames from "classnames";

import { InputInlineError } from "../../items/input-inline-error";
import { HorizontalFlow } from "../flow/horizontal";
import { VerticalFlow } from "../flow/vertical";
import { InputLabel } from "../input-label";

import { InputProps } from "./InputProps";

import "./styles.scss";

export const Input = ({
    className,
    label,
    error,
    required,
    ...rest
}: InputProps ) => {

    return (
        <VerticalFlow className={classNames("input m-8", className)}>
            <HorizontalFlow>
                <InputLabel label={label} required={required} />
            </HorizontalFlow>
            <HorizontalFlow className="input__wrapper">
                <input
                    className="input__input-element"
                    {...rest}
                />
            </HorizontalFlow>
            {!!error && <InputInlineError error={error} />}
        </VerticalFlow>
    );
};
