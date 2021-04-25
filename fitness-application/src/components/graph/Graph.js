import React, { Component } from 'react';
import { ResponsiveLine } from '@nivo/line'

class Graph extends Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
            wt: 0,
            cals: 0,
            date: undefined,
            data: [
                {
                  "id": "Daily Cals",
                  "color": "rgb(244,109,67)",
                  "data": [
                    {
                      "x": "",
                      "y": 165
                    },
                    {
                      "x": "Mar 17 21",
                      "y": 163
                    },
                    {
                      "x": "Mar 18 21",
                      "y": 161
                    },
                    {
                      "x": "Mar 19 21",
                      "y": 159
                    },
                    {
                      "x": "Mar 20 21",
                      "y": 162
                    },
                    {
                      "x": "Mar 21 21",
                      "y": 160
                    },
                    {
                      "x": "Mar 22 21",
                      "y": 158
                    },
                    {
                      "x": "Mar 23 21",
                      "y": 160
                    },
                    {
                      "x": "Mar 24 21",
                      "y": 159
                    },
                    {
                      "x": "Mar 25 21",
                      "y": 158
                    },
                    {
                      "x": "Mar 26 21",
                      "y": 157
                    },
                    {
                      "x": "Mar 27 21",
                      "y": 157
                    }
                  ]
                },
                
              ]
        };
    }

    render () {
        const { data } = this.state;
        console.log('Data: ', data )

        return (
            <div className="" style={{height: '20vh', overflow: 'hidden', background: 'black'}}>

                <ResponsiveLine
                    data={data}
                    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    curve="basis"
                    axisTop={null}
                    axisRight={null}
                    axisBottom={null}
                    axisLeft={null}
                    enableGridX={false}
                    enableGridY={false}
                    colors={"rgb(244,109,67)" }
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