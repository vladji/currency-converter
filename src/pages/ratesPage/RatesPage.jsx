import Layout from "layout/Layout";
import FreshRates from "components/freshRates/FreshRates";

const RatesPage = ({ location }) => (
    <Layout location={location}>
        <FreshRates/>
    </Layout>
);

export default RatesPage;
