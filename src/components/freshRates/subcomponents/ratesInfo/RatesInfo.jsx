import React from "react";
import { connect } from 'react-redux';
import { getCurrenciesRates } from "App/appSelector";
import './ratesInfo.scss';

const RatesInfo = ({ currenciesRates }) => (
    <>
        {currenciesRates &&
        <div className="rates-info">
            <dl className="currencies-list">
                {currenciesRates.map(item => {
                    return (
                        <div key={item[0]} className="currency-item">
                            <dt>{item[0]}:&nbsp;</dt>
                            <dd>{item[1]}</dd>
                        </div>
                    );
                })}
            </dl>
        </div>
        }
    </>
);

export default connect(
    store => ({ currenciesRates: getCurrenciesRates(store) })
)(RatesInfo);
