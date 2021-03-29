import { connect } from 'react-redux';
import { apiGetCurrenciesSymbols } from "./appActions";
import ErrorBoundary from "components/errorBoundary/ErrorBoundary";
import AppRouter from "./AppRouter";
import Error from "components/error/Error";

const App = ({ apiGetCurrenciesSymbols }) => {
    apiGetCurrenciesSymbols();
    return (
        <ErrorBoundary>
            <AppRouter/>
            <Error/>
        </ErrorBoundary>
    );
};

export default connect(null, { apiGetCurrenciesSymbols })(App);
