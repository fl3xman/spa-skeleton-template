import * as React from "react";

import { PartialChildren } from "../../../foundation/ui";

import { VerticalFlow } from "../flow/vertical";

import "./styles.scss";

export const Container = ({ children }: PartialChildren) => (
    <VerticalFlow className="container">
        {children}
    </VerticalFlow>
);
