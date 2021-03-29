import ConverterInput from "./subcomponents/converterInput/ConverterInput";
import ConvertButton from "./subcomponents/convertButton/ConvertButton";
import ConvertResult from "./subcomponents/convertResult/ConvertResult";
import './converter.scss';

const Converter = () => (
    <section className="converter">
        <h2>Converter</h2>
        <div className="converter_input-wrapper">
            <ConverterInput/>
            <ConvertButton/>
        </div>
        <ConvertResult/>
    </section>
);

export default Converter;
