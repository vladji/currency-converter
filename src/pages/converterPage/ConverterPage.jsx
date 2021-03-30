import Layout from "layout/Layout";
import Converter from "components/converter/Converter";
import SupportedCurrencies from "components/supportedCurrencies/SupportedCurrencies";

const ConverterPage = ({ location }) => (
    <Layout location={location}>
        <Converter/>
        <SupportedCurrencies/>
    </Layout>
);

export default ConverterPage;
