import React from "react";
import Plot from 'react-plotly.js';

/* const PlotMeas = (data) => { */
class PlotMeas extends React.Component {
  render () {
    const data2 = this.props.data 
    return (
        <div>
            <Plot
                data={data2}
                layout={{ width: 600, height: 500, title: 'Fancy title' }}
            />
        </div>
    );
  };
};

export default PlotMeas;
