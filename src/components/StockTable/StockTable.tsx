import React from 'react';
import StockRow from './StockRow';

const stockData = [
    {
        "symbol": "000",
        "name": "Greenvolt - Energias Renovaveis SA",
        "currency": "EUR",
        "exchange": "XBER",
        "mic_code": "XBER",
        "country": "Germany",
        "type": "Common Stock"
    },
    {
        "symbol": "000",
        "name": "Greenvolt - Energias Renováveis, S.A.",
        "currency": "EUR",
        "exchange": "FSX",
        "mic_code": "XFRA",
        "country": "Germany",
        "type": "Common Stock"
    },
    {
        "symbol": "000",
        "name": "Greenvolt - Energias Renovaveis SA",
        "currency": "EUR",
        "exchange": "XDUS",
        "mic_code": "XDUS",
        "country": "Germany",
        "type": "Common Stock"
    },
    {
        "symbol": "000",
        "name": "Greenvolt - Energias Renováveis, S.A.",
        "currency": "EUR",
        "exchange": "Munich",
        "mic_code": "XMUN",
        "country": "Germany",
        "type": "Common Stock"
    },
    {
        "symbol": "000001",
        "name": "Ping An Bank Co., Ltd.",
        "currency": "CNY",
        "exchange": "SZSE",
        "mic_code": "XSHE",
        "country": "China",
        "type": "Common Stock"
    },
    {
        "symbol": "000002",
        "name": "China Vanke Co., Ltd.",
        "currency": "CNY",
        "exchange": "SZSE",
        "mic_code": "XSHE",
        "country": "China",
        "type": "Common Stock"
    },
    {
        "symbol": "000004",
        "name": "Shenzhen GuoHua Network Security Technology Co., Ltd.",
        "currency": "CNY",
        "exchange": "SZSE",
        "mic_code": "XSHE",
        "country": "China",
        "type": "Common Stock"
    },
];

const StockTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th>SIMBOLO</th>
                    <th>NOMBRE</th>
                    <th>MONEDA</th>
                    <th>TIPO</th>
                </tr>
            </thead>
            <tbody>
                {stockData.map((stock, index) => (
                    <StockRow key={index} stock={stock} />
                ))}
            </tbody>
        </table>
    );
};

export default StockTable;
