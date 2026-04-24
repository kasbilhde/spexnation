'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

// Dynamically import ApexCharts for Next.js to avoid SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const Chart = ({ dashbaord }) => {
    const totalRevenue = Number(dashbaord?.totalRevenue || 0);

    // Last 12 months auto generate
    const chartData = useMemo(() => {
        const months = [];
        const sales = [];

        const now = new Date();

        for (let i = 11; i >= 0; i--) {
            const date = new Date(now.getFullYear(), now.getMonth() - i, 1);

            months.push(date.toLocaleString('default', { month: 'short' }));

            // Only current month = real revenue
            if (i === 0) {
                sales.push(totalRevenue);
            } else {
                sales.push(0);
            }
        }

        return { months, sales };
    }, [totalRevenue]);

    const chartOptions = {
        series: [
            {
                name: 'Sales',
                data: chartData.sales,
            },
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
                toolbar: {
                    show: false,
                },
            },
            colors: ['#939393ff'],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.4,
                    opacityTo: 0.1,
                    stops: [0, 90, 100],
                },
            },
            title: {
                text: 'Revenue',
                align: 'left',
            },
            subtitle: {
                text: 'Monthly Revenue Chart',
                align: 'left',
            },
            xaxis: {
                categories: chartData.months,
            },
            yaxis: {
                opposite: true,
            },
            tooltip: {
                y: {
                    formatter: (val) => `$${val}`,
                },
            },
            legend: {
                horizontalAlign: 'left',
            },
        },
    };

    return (
        <div className="bg-white p-4 border border-gray-200 rounded-xl">
            <div id="chart">
                <ReactApexChart
                    options={chartOptions.options}
                    series={chartOptions.series}
                    type="area"
                    height={350}
                />
            </div>
        </div>
    );
};

export default Chart;