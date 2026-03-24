import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Results =[
  { "id": 1, "name": "Rahim", "math": 85, "chemistry": 78, "physics": 82 },
  { "id": 2, "name": "Karim", "math": 90, "chemistry": 88, "physics": 91 },
  { "id": 3, "name": "Ayesha", "math": 70, "chemistry": 75, "physics": 72 },
  { "id": 4, "name": "Fatima", "math": 60, "chemistry": 65, "physics": 68 },
  { "id": 5, "name": "Hasan", "math": 95, "chemistry": 92, "physics": 96 },
  { "id": 6, "name": "Nusrat", "math": 78, "chemistry": 80, "physics": 76 },
  { "id": 7, "name": "Sakib", "math": 88, "chemistry": 84, "physics": 86 },
  { "id": 8, "name": "Mim", "math": 67, "chemistry": 70, "physics": 65 },
  { "id": 9, "name": "Rafi", "math": 82, "chemistry": 79, "physics": 85 },
  { "id": 10, "name": "Tania", "math": 91, "chemistry": 89, "physics": 93 }
]




const ResultCharts = () => {
    return (
        <div>
            <LineChart height={500} width={800} data={Results}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'> </Line>
                <Line dataKey="chemistry" stroke='green'> </Line>
                <Line dataKey="physics"> </Line>

            </LineChart>
        </div>
    );
};

export default ResultCharts;