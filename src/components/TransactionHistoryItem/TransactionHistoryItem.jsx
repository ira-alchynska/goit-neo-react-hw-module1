import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionHistory.module.css';

const TransactionHistoryItem = ({ type, amount, currency, isEven }) => {
    return (
        <tr className={isEven ? styles.evenRow : styles.oddRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
};

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    isEven: PropTypes.bool.isRequired,
};

export default TransactionHistoryItem;
