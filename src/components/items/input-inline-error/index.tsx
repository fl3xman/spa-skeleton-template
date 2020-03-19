import * as React from "react";

import classNames from "classnames";

import { Text, Typography } from "../../base/text";

import { InputInlineErrorProps } from "./InputInlineErrorProps";

export const InputInlineError = ({ error, className }: InputInlineErrorProps) => {
    return <Text className={classNames("mt-4", className)} type={Typography.InputError}>{error}</Text>;
};
