import { connect } from 'react-redux';
import { getBaseCurrency, getCurrenciesSymbols } from "App/appSelector";
import { setBaseCurrency } from "App/appActions";
import './baseCurrency.scss';

const BaseCurrency = ({ baseCurrency, currenciesSymbols, setBaseCurrency }) => {
    const selectHandler = (e) => {
        const value = e.target.value;
        setBaseCurrency(value);
    };
    return (
        <div className="base-currency">
            <h4 className="title">Base currency</h4>
            {currenciesSymbols &&
            <select className="selector" onChange={selectHandler}>
                <option>{baseCurrency}</option>
                {currenciesSymbols.map(item => <option key={item}>{item}</option>)}
            </select>
            }
        </div>
    );
};

export default connect(
    store => ({
        baseCurrency: getBaseCurrency(store),
        currenciesSymbols: getCurrenciesSymbols(store),
    }), { setBaseCurrency }
)(BaseCurrency);
