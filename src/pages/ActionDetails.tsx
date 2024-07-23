import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import useFetchAction from '../hooks/useFetchAction';
import NotificationMsg from '../components/Notification';
import { cleanParam } from '../constants/helpers';
import ActionDetailRow from '../components/ActionDetailRow';
import StockQuote from '../components/StockQuote';

export default function ActionDetails() {
    const { actionID, actionExchange } = useParams<{ actionID: string; actionExchange: string; }>();
    const cleanActionID = cleanParam(actionID);
    const cleanExchange = cleanParam(actionExchange);

    const { data, isLoading, error } = useFetchAction(cleanActionID, cleanExchange);

    return (
        <div>
            {error && <NotificationMsg msg={error} container="div" type="failed" />}
            {!isLoading && !error && data && data.length > 0 && (
                <>
                    <div className="markets-overview-table">
                        <Header label={data[0].name} />
                        <ActionDetailRow label="Symbol:" data={data[0].symbol} />
                        <ActionDetailRow label="Currency:" data={data[0].currency} />
                        <ActionDetailRow label="Country:" data={data[0].country} />
                        <ActionDetailRow label="Type:" data={data[0].type} />
                    </div>
                    <StockQuote />
                </>
            )}
        </div>
    );
}
