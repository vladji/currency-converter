import Layout from "layout/Layout";
import ConverterInput from "components/converter/subcomponents/converterInput/ConverterInput";
import ConvertButton from "components/converter/subcomponents/convertButton/ConvertButton";
import ConvertResult from "components/converter/subcomponents/convertResult/ConvertResult";
import './convertPage.scss';

const ConverterPage = ({ location }) => (
    <Layout location={location}>
        <section className="converter">
            <h2>Converter</h2>
            <div className="converter_input-wrapper">
                <ConverterInput/>
                <ConvertButton/>
                <p className="input-note">can converting only from USD, BYN not available also (API restrictions)</p>
            </div>
            <ConvertResult/>
        </section>
    </Layout>
);

export default ConverterPage;
