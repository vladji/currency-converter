import Layout from "layout/Layout";
import BaseCurrency from "components/baseCurrency/BaseCurrency";

const Info = ({ location }) => (
    <Layout location={location}>
        <h2>Info</h2>
        <BaseCurrency />
    </Layout>
);

export default Info;
