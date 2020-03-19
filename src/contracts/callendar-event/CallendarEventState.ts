import * as _ from "lodash";
import * as Uuid from "uuid";


import { injectable } from "inversify";
import { action, computed, observable } from "mobx";

import { CallendarEvent } from "./CallendarEvent";
import { CallendarEventCreate } from "./CallendarEventCreate";


@injectable()
export class CallendarEventState {

    @observable
    private list$: CallendarEvent[] = [];

    @observable
    private current$: CallendarEvent | undefined;

    @computed
    public get list(): CallendarEvent[] {
        return this.list$;
    }

    @computed
    public get isListEmpty(): boolean {
        return this.list.length === 0;
    }

    @computed
    public get current(): CallendarEvent | undefined {
        return this.current$;
    }

    @computed
    public get hasCurrent(): boolean {
        return !_.isNil(this.current$);
    }

    @action
    public add(event: CallendarEventCreate) {
        this.list$.push({ ...event, id: Uuid.v4(), active: Math.round(Math.random()) !== 0 });
    }

    @action
    public find(id: string): CallendarEvent | undefined {
        this.current$ = this.list$.find(($) => $.id === id);
        return this.current;
    }

    @action
    public dispose() {
        this.list$ = [];
    }
}
