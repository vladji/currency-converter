import { connect } from 'react-redux';
import { getCurrenciesSymbols } from "App/appSelector";
import './supportedCurrencies.scss';

const SupportedCurrencies = ({ currenciesSymbols }) => (
    <>
        {currenciesSymbols &&
        <section className="supported-currencies">
            <h3>Supported currencies</h3>
            <p className="currencies">
                {currenciesSymbols.map((item, index) => {
                    const separator = (index !== currenciesSymbols.length - 1) ? ',' : null;
                    return <span key={item}>{item}{separator}&nbsp;</span>;
                })}
            </p>
        </section>
        }
    </>
);

export default connect(store => ({ currenciesSymbols: getCurrenciesSymbols(store) }))(SupportedCurrencies);
