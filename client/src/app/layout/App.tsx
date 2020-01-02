import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "../../features/nav/NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import { observer } from "mobx-react-lite";
import {
    Route,
    withRouter,
    RouteComponentProps,
    Switch
} from "react-router-dom";
import homePage from "../../features/home/homePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import NotFound from "./NotFound";
import { ToastContainer } from "react-toastify";

const App: React.FC<RouteComponentProps> = ({ location }) => {
    return (
        <Fragment>
            <ToastContainer position="bottom-right" />
            <Route exact path="/" component={homePage} />
            <Route
                path={"/(.+)"}
                render={() => (
                    <Fragment>
                        <NavBar />
                        <Container style={{ marginTop: "7rem" }}>
                            <Switch>
                                <Route
                                    exact
                                    path="/activities"
                                    component={ActivityDashboard}
                                />
                                <Route
                                    path="/activities/:id"
                                    component={ActivityDetails}
                                />
                                <Route
                                    path={["/createActivity", "/manage/:id"]}
                                    key={location.key}
                                    component={ActivityForm}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </Container>
                    </Fragment>
                )}
            />
        </Fragment>
    );
};

export default withRouter(observer(App));
