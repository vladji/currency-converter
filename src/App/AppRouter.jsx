import { HashRouter, Route, Switch } from 'react-router-dom';
import { routes } from "./routes";
import Home from "pages/home/Home";
import Info from "pages/info/Info";

const AppRouter = () => (
    <HashRouter>
        <Switch>
            <Route path={routes.Home} exact component={Home}/>
            <Route path={routes.Info} exact component={Info}/>
        </Switch>
    </HashRouter>
);

export default AppRouter;
