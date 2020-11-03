import React from 'react';

import { Route, Switch } from "react-router-dom";

import Blog from "./pages/Blog";

const App = () => {
    return (
        <Switch>
            <Route path="/:id" children={<Blog />} />
        </Switch>
    )
}

export default App;
