import { HashRouter, Route, Switch } from 'react-router-dom';
import { routes } from "./routes";
import ConverterPage from "pages/converterPage/ConverterPage";
import RatesPage from "pages/ratesPage/RatesPage";

const AppRouter = () => (
    <HashRouter>
        <Switch>
            <Route path={routes.Converter} exact component={ConverterPage}/>
            <Route path={routes.Info} exact component={RatesPage}/>
        </Switch>
    </HashRouter>
);

export default AppRouter;
