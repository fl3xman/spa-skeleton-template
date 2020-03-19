import * as _ from "lodash";
import * as React from "react";

import { provideFactoryBoot } from "../../assembly/BootProvider";
import { guard } from "../Guard";

import { KeyedLiteral } from "../KeyedLiteral";

export function injectProvider(...localStates: string[]): (ComponentClass: typeof React.Component) => any {

    const boot = provideFactoryBoot();
    return (ComponentClass) => {
        return class extends ComponentClass {

            private states: KeyedLiteral = _.reduce(localStates, (injections, inject) => ({
                ...injections, [inject]: boot[inject](),
            }), {} as KeyedLiteral);

            public componentWillUnmount() {
                guard(ComponentClass.prototype.componentWillUnmount, (safe) => safe.apply(this));
                _.forEach(this.states, (state) => {
                    guard(state.dispose, (safe) => safe.apply(state));
                });
            }

            protected get provider() {
                return this.props;
            }
        };
    };
}
