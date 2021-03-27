import ErrorBoundary from "components/errorBoundary/ErrorBoundary";
import AppRouter from "./AppRouter";

const App = () => (
    <ErrorBoundary>
        <AppRouter/>
    </ErrorBoundary>
);

export default App;
