import BaseCurrency from "./subcomponents/baseCurrency/BaseCurrency";
import RatesInfo from "./subcomponents/ratesInfo/RatesInfo";

const FreshRates = () => (
    <section className="fresh-rates">
        <h2>Fresh rates</h2>
        <BaseCurrency/>
        <RatesInfo/>
    </section>
);

export default FreshRates;
