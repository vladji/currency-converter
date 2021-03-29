import { connect } from 'react-redux';
import { converterReady, setConvertedValue, setCurrencyQueryData } from "components/converter/converterActions";
import { getConvertedValue } from "components/converter/converterSelector";
import { getAllCurrencies } from "App/appSelector";
import { valueHandler } from "components/converter/valueHandler";

const ConverterInput = ({
                            converterReady,
                            allCurrencies,
                            setCurrencyQueryData,
                            convertedValue,
                            setConvertedValue,
                        }) => {
    const inputChange = (e) => {
        if (!convertedValue) {
            valueHandler(e, converterReady, allCurrencies, setCurrencyQueryData);
        } else {
            setConvertedValue(null);
            setCurrencyQueryData({});
            valueHandler(e, converterReady, allCurrencies, setCurrencyQueryData);
        }
    };
    return (
        <input
            className="input"
            type="text"
            placeholder="15 usd in eur"
            onChange={inputChange}
        />
    );
};

export default connect(store => ({
    allCurrencies: getAllCurrencies(store),
    convertedValue: getConvertedValue(store),
}), { converterReady, setCurrencyQueryData, setConvertedValue })
(ConverterInput);
