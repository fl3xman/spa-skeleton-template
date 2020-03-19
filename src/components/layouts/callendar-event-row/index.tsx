import * as React from "react";

import { baseClassModifier } from "../../../foundation/ui";

import { Button } from "../../base/button";
import { Divider } from "../../base/divider";
import { HorizontalFlow } from "../../base/flow/horizontal";
import { VerticalFlow } from "../../base/flow/vertical";
import { Text, Typography } from "../../base/text";
import { Date } from "../../items/date";

import { CallendarEventRowProps } from "./CallendarEventRowProps";

import "./styles.scss";

const locationIcon = require("./images/location.svg");

export const CallendarEventRow = ({ event }: CallendarEventRowProps) => (
    <VerticalFlow className={baseClassModifier("event-row", { active: event.active })}>
        <HorizontalFlow spacing="space-between" className="event-row__content">
            <HorizontalFlow spacing="flex-start">
                <Date className="event-row__date" date={event.startAt.toISOString()} />
                <VerticalFlow>
                    <Text to={`/${event.id}`} type={Typography.Heading3}>{event.name}</Text>
                    <HorizontalFlow className="event-row__location" spacing="flex-start">
                        <img className="event-row__location__icon" src={locationIcon} alt="" />
                        <Text type={Typography.Label}>{event.address}</Text>
                    </HorizontalFlow>
                </VerticalFlow>
            </HorizontalFlow>
            <Button className="event-row__cta" to={`/${event.id}`}>Show More</Button>
        </HorizontalFlow>
        <Divider />
    </VerticalFlow>
);
