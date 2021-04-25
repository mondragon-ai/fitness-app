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
            calories_data: [
                {
                  "id": "Daily BMR",
                  "color": "rgb(244,109,67)",
                  "data": [
                    {
                      "x": "Mar 16 21",
                      "y": 1654
                    },
                    {
                      "x": "Mar 17 21",
                      "y": 1635
                    },
                    {
                      "x": "Mar 18 21",
                      "y": 1617
                    },
                    {
                      "x": "Mar 19 21",
                      "y": 1594
                    },
                    {
                      "x": "Mar 20 21",
                      "y": 1625
                    },
                    {
                      "x": "Mar 21 21",
                      "y": 1606
                    },
                    {
                      "x": "Mar 22 21",
                      "y": 1584
                    },
                    {
                      "x": "Mar 23 21",
                      "y": 1606
                    },
                    {
                      "x": "Mar 24 21",
                      "y": 1593
                    },
                    {
                      "x": "Mar 25 21",
                      "y": 158
                    },
                    {
                      "x": "Mar 26 21",
                      "y": 1579
                    },
                    {
                      "x": "Mar 27 21",
                      "y": 1579
                    }
                  ]
                },
                {
                  "id": "Daily Cals",
                  "color": "rgb(160, 34, 2)",
                  "data": [
                    {
                      "x": "Mar 16 21",
                      "y": 1634
                    },
                    {
                      "x": "Mar 17 21",
                      "y": 1509
                    },
                    {
                      "x": "Mar 18 21",
                      "y": 1703
                    },
                    {
                      "x": "Mar 19 21",
                      "y": 1694
                    },
                    {
                      "x": "Mar 20 21",
                      "y": 1725
                    },
                    {
                      "x": "Mar 21 21",
                      "y": 1806
                    },
                    {
                      "x": "Mar 22 21",
                      "y": 1584
                    },
                    {
                      "x": "Mar 23 21",
                      "y": 1606
                    },
                    {
                      "x": "Mar 24 21",
                      "y": 1493
                    },
                    {
                      "x": "Mar 25 21",
                      "y": 168
                    },
                    {
                      "x": "Mar 26 21",
                      "y": 1479
                    },
                    {
                      "x": "Mar 27 21",
                      "y": 1779
                    }
                  ]
                },
                
                
              ],
              bw_data: [
                {
                  "id": "Daily BW",
                  "color": "rgb(244,109,67)",
                  "data": [
                    {
                      "x": "Mar 16 21",
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
        const { calories_data, bw_data } = this.state;
        console.log('Props: ', this.props )

        const data = this.props.graph_data == "BW" ? bw_data : calories_data;

        return (
            <div className="" style={{height: '20vh', overflow: 'hidden', background: 'black'}}>

              <ResponsiveLine
                data={data}
                margin={{ top: 30, right: 0, bottom: 0, left: 0 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="basis"
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

                {/* <ResponsiveLine
                    data={calories_data}
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
                /> */}
                
            </div>
        )
    }
}

export default Graph;