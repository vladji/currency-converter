import classnames from 'classnames';
import './buttons.scss';

const MainButton = ({ children, clickHandler, disabled }) => (
    <button
        className={classnames('button main-button', { disabled })}
        onClick={() => !disabled && clickHandler()}
    >
        {children}
    </button>
);

export default MainButton;
