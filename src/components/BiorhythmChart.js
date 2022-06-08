import dayjs from "dayjs";
import React from "react";
import {
    CartesianGrid,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    XAxis,
} from 'recharts';
import { calculateBiorhythmSeries } from '../calculations';
import './BiorhythmChart.css';

function formatDate(isoString) {
    return dayjs(isoString).format('D MMM');
}

function BiorhythmChart({ birthDate, targetDate }) {
    const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
    const data = calculateBiorhythmSeries(birthDate, startDate, 31)
        .map((item) => ({ ...item, date: formatDate(item.date) }));
    return (
        <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
            <LineChart data={data}>
                <XAxis dataKey="date" 
                    ticks={[data[1].date, data[15].date, data[29].date]}
                />
                <CartesianGrid vertical={false} strokeDasharray="5 5" />
                <ReferenceLine x={data[15].date} />
                <Line type="natural" dot={false} dataKey="physical" className="physical" />
                <Line type="natural" dot={false} dataKey="emotional" className="emotional" />
                <Line type="natural" dot={false} dataKey="intellectual" className="intellectual" />
            </LineChart>
        </ResponsiveContainer>
    );
}

export default BiorhythmChart;