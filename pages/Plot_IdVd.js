import React from "react";
import Plot from 'react-plotly.js';

const PlotIdVd = (props) => {
  const plotdata = props.traces;
  // console.log(plotdata);
  return (
    <div>
        <Plot
            data={plotdata}
            layout={{ width: 500, height: 500, title: 'Id - Vd',
                      yaxis: { type: 'log', autorange: true}}}
        />
    </div>
  );
};

export default PlotIdVd;
