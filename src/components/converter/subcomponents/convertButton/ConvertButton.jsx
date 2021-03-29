import { connect } from 'react-redux';
import { convertCurrencies } from "components/converter/converterActions";
import { getConvertReady } from "components/converter/converterSelector";
import MainButton from "components/ui/buttons/MainButton";

const ConvertButton = ({ convertReady, convertCurrencies }) => (
    <MainButton disabled={!convertReady} clickHandler={convertCurrencies}>
        convert
    </MainButton>
);

export default connect(
    store => ({
        convertReady: getConvertReady(store),
    }), { convertCurrencies }
)(ConvertButton);


