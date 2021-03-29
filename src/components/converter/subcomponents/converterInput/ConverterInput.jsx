import { connect } from 'react-redux';
import { converterReady, setConvertedValue, setCurrencyQueryData } from "components/converter/converterActions";
import { getConvertedValue, getCurrenciesSymbols } from "components/converter/converterSelector";
import { valueHandler } from "components/converter/valueHandler";

const ConverterInput = ({
                            converterReady,
                            currenciesSymbols,
                            setCurrencyQueryData,
                            convertedValue,
                            setConvertedValue,
                        }) => {
    const inputChange = (e) => {
        if (!convertedValue) {
            valueHandler(e, converterReady, currenciesSymbols, setCurrencyQueryData);
        } else {
            setConvertedValue(null);
            setCurrencyQueryData({});
            valueHandler(e, converterReady, currenciesSymbols, setCurrencyQueryData);
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
    currenciesSymbols: getCurrenciesSymbols(store),
    convertedValue: getConvertedValue(store),
}), { converterReady, setCurrencyQueryData, setConvertedValue })
(ConverterInput);
