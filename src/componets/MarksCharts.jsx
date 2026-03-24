import React, {use} from 'react';
import { BarChart, XAxis, YAxis, Bar } from 'recharts';

const MarksCharts = ({MarksPromise}) => {
    const marksDataRes = use(MarksPromise);
    const marksData = marksDataRes.data;

    //  data processing for the chart

    const marksChartData = marksData.map(studentData => {
        const student ={
            id: studentData.id,
            name:studentData.name,
            physics:studentData.marks.physics,
            chemistry:studentData.marks.chemistry,
            math:studentData.marks.math,
        }

const avg =(student.physics + student.chemistry + student.math) /3;
  student.avg =avg
        return student
    })

console.log(marksChartData);
    return (
       
       
    <div>
<BarChart width={600} height={500} data={marksChartData}>
    <XAxis dataKey="name"></XAxis>
    <YAxis></YAxis>
    <Bar dataKey ="avg" fill='blue'></Bar>
    <Bar dataKey ="chemistry" fill='yellow'></Bar>
</BarChart>
    </div>
    );
};

export default MarksCharts;