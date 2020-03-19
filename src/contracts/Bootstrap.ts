import { ContainerModule } from "inversify";

import { CallendarEventState } from "./callendar-event";

export const bootContracts = (): ContainerModule => {
    return new ContainerModule((bind) => {

        bind(CallendarEventState).toSelf();
    });
};
