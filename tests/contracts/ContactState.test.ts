import "mocha";
import "reflect-metadata";

import { expect } from "chai";
import { Container } from "inversify";

import { CallendarEventState } from "../../src/contracts/callendar-event";

describe(`Callendar event state test suite`, () => {
    const container = new Container();

    before(() => {
        container.bind(CallendarEventState).toSelf();
    });

    after(() => {
        container.unbindAll();
    });

    it("should return empty list", () => {
        const state = container.get(CallendarEventState);
        expect(state.list).to.eql([]);
    });

});
