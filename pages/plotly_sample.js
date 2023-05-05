import dynamic from 'next/dynamic'

const PlotMeas = dynamic(() => import('./plot_meas'), {
    ssr: false
})

const x_data = [1, 2, 3]
const y_data = [2, 5, 3]

export default function PlotSample () {
    return (
        <div>
        <PlotMeas data={[
                    {
                        x: {x_data},
                        y: {y_data},
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'red' },
                    },
                    { type: 'bar', x: x_data, y: y_data },
                ]}/>
        {/* <PlotMeas title='fancy' /> */}
        </div>
    );
};
