import * as React from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import { Container } from "../base/container";
import { CallendarEventDetail } from "../pages/callendar-event/detail";
import { CallendarEventList } from "../pages/callendar-event/list";
import { CallendarEventNew } from "../pages/callendar-event/new";

export const Router = () => {
    return (
        <HashRouter>
            <Container>
                <Switch>
                    <Route path="/" exact={true} component={CallendarEventList} />
                    <Route path="/new" exact={true} component={CallendarEventNew} />
                    <Route path="/:eventId" exact={true} component={CallendarEventDetail} />
                </Switch>
            </Container>
        </HashRouter>
    );
};
