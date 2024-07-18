import { StockRowProps } from '../../types/stock';

const StockRow: React.FC<StockRowProps> = ({ stock }) => {
    return (
        <tr>
            <td>{stock.symbol}</td>
            <td>{stock.name}</td>
            <td>{stock.currency}</td>
            <td>{stock.type}</td>
        </tr>
    );
};

export default StockRow;