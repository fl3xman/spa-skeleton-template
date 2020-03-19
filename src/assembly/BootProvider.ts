import { Container } from "inversify";

import { bootContracts } from "../contracts/Bootstrap";
import { CallendarEventState } from "../contracts/callendar-event";
import { KeyedLiteral } from "../foundation";

import { StateInject } from "./StateInject";

const boot = new Container();
boot.load(...[
    bootContracts(),
]);

export const provideFactoryBoot = (): KeyedLiteral => ({
    [StateInject.CallendarEvent]: () => boot.get(CallendarEventState),
});

export const provideBoot = (): KeyedLiteral => ({
    [StateInject.CallendarEvent]: provideFactoryBoot()[StateInject.CallendarEvent](),
});
