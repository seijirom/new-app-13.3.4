import dynamic from 'next/dynamic'
// import PlotIdVd from './Plot_IdVd'

const PlotIdVd = dynamic(() => import('./Plot_IdVd'), {
    ssr: false
})

export default function IdVd_Plotly (props) {
    const items = props.data;
    let x_data = [];
    let y_data = [];
    {items.map((datas, index) => {
	       x_data.push(datas.voltage);
	       y_data.push(datas.current);
    })}
    return (
        <div>
        <PlotIdVd traces={[
                    {
                        x: x_data,
                        y: y_data,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                ]}/>
        </div>
    );
};
