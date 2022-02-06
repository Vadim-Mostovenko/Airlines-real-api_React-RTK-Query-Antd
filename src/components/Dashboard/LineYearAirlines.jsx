import { Line } from '@ant-design/plots';

const LineYearAirlines = ({lineYearData}) => {
    const config = {
        data: lineYearData,
        xField: 'year',
        yField: 'value',
        label: {},
        point: {
        size: 2,
        shape: 'diamond',
        style: {
            fill: 'white',
            stroke: '#5B8FF9',
            lineWidth: 2,
        },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                shadowBlur: 4,
                stroke: '#000',
                fill: 'red',
                },
            },
        },
        interactions: [
        {
            type: 'marker-active',
        },
        ],
    }
    
    return <Line {...config} />;
};

export default LineYearAirlines