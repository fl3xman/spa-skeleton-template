import * as React from "react";

import { HorizontalFlow } from "../flow/horizontal";
import { Text, Typography } from "../text";

import { InputLabelProps } from "./InputLabelProps";

export const InputLabel = ({ label, required, className }: InputLabelProps) => (
    <HorizontalFlow spacing="space-between" verticalAlign="flex-end" className={className}>
        <Text type={Typography.Label}>{required ? `${label}*` : label}</Text>
    </HorizontalFlow>
);
