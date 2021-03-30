import { connect } from 'react-redux';
import { getConvertedValue, getCurrencyQueryData } from "components/converter/converterSelector";

const ConvertResult = ({ convertedValue, resultData }) => (
    <>
        {convertedValue &&
        <div className="result">
            <p>
                <span>Result:&nbsp;</span>
                <span>{resultData.amount}&nbsp;{resultData.from}&nbsp;=&nbsp;</span>
                <span>{convertedValue.toFixed(2)}&nbsp;{resultData.to}</span>
            </p>
        </div>
        }
    </>
);

export default connect(
    store => ({
        convertedValue: getConvertedValue(store),
        resultData: getCurrencyQueryData(store),
    })
)(ConvertResult);
