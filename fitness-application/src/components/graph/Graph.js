import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'

class Graph extends Component {

    constructor(props) {
        super(props);
    }

    render () {
        const { data } = this.props;

        return (
            <div className="" style={{height: '20vh', overflow: 'hidden', background: 'black'}}>

              <ResponsiveLine
                data={data}
                margin={{ top: 30, right: 0, bottom: 0, left: 0 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="natural"
                axisTop={null}
                axisRight={null}
                axisBottom={null}
                axisLeft={null}
                enableGridX={false}
                enableGridY={false}
                colors={{ scheme: 'red_blue' }}
                enablePoints={false}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableArea={true}
                areaOpacity={1}
                enableSlices="x"
                crosshairType="right"
                useMesh={true}
                // legends={null}
              />
                
            </div>
        )
    }
}

export default Graph;