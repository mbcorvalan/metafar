import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ChartComponentProps } from '../types/props';

/**
 * A functional component that renders a Highcharts line chart.
 *
 * @param {ChartComponentProps} props - The props for the component.
 * @param {string[]} props.xAxis - An array of categories for the x-axis.
 * @param {number[]} props.yAxis - An array of data points for the y-axis.
 * @returns {JSX.Element} The rendered Highcharts component.
 */
const ChartComponent: React.FC<ChartComponentProps> = ({ xAxis, yAxis }: ChartComponentProps): JSX.Element => (
    <HighchartsReact
        highcharts={Highcharts}
        options={{
            chart: {
                type: 'line',
                spacingBottom: 0,
                spacingTop: 10,
                spacingLeft: 0,
                spacingRight: 10,
                width: null,
                height: 250,
            },
            title: {
                text: ' ',
            },
            xAxis: {
                categories: xAxis,
                title: {
                    text: 'Interval',
                },
            },
            yAxis: {
                title: {
                    text: 'Quotation',
                },
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true,
                    },
                    enableMouseTracking: true,
                },
            },
            series: [
                {
                    name: ' ',
                    data: yAxis,
                },
            ],
        }}
    />
);

export default ChartComponent;
