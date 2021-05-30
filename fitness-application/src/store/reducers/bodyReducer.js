const initState = {
    current_bw: 165,
    current_bmr: 1950,
    target_bw: 162,
    target_BMR: 1950,
    prev_cal: 2000,
    d_ppr: 595,
    graph: {
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
    }
}

const bodyReducer = ( state = initState, action) => {
    return state;
}

export default bodyReducer;