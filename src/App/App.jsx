import { connect } from 'react-redux';
import { apiGetAllCurrencies } from "./appActions";
import ErrorBoundary from "components/errorBoundary/ErrorBoundary";
import AppRouter from "./AppRouter";
import Error from "components/error/Error";

const App = ({ apiGetAllCurrencies }) => {
    apiGetAllCurrencies();
    return (
        <ErrorBoundary>
            <AppRouter/>
            <Error/>
        </ErrorBoundary>
    );
};

export default connect(null, { apiGetAllCurrencies })(App);
