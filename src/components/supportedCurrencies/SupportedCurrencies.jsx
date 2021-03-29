import { connect } from 'react-redux';
import { getCurrenciesSymbols } from "App/appSelector";
import './supportedCurrencies.scss';

const SupportedCurrencies = ({ currenciesSymbols }) => (
    <>
        {currenciesSymbols &&
        <section className="supported-currencies">
            <h3>Supported currencies</h3>
            <p className="currencies">
                {currenciesSymbols
                    .sort()
                    .map(item => <span key={item}>{item},&nbsp;</span>)}
            </p>
        </section>
        }
    </>
);

export default connect(store => ({ currenciesSymbols: getCurrenciesSymbols(store) }))(SupportedCurrencies);
