export const signUp = (credentials) => 
{
    return (dispatch, getState, {getFirestore, getFirebase}) => {

        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth()
        .createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                email: credentials.email,
                firstName: "Angel",
                sex: "MALE",
                body: {
                    current_bw: 165,
                    current_bmr: 1950,
                    change_bw: 0.05,
                    target_bw: 162,
                    target_BMR: 1950,
                    prev_cal: 2000,
                    d_ppr: 595,
                    s_ppr: 405,
                    b_ppr: 275,
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
                            } ,
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
                },
                workout: {

                    total: 1220,
                    squat: 405,
                    bench: 315,
                    deadlift: 500,
                    graph: {
                        total_list: [
                            {
                                "id": "Total Number",
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
                                    "y": 1580
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
                                "id": "Squat",
                                "color": "rgb(160, 34, 2)",
                                "data": [
                                {
                                    "x": "Mar 16 21",
                                    "y": 395
                                },
                                {
                                    "x": "Mar 17 21",
                                    "y": 405
                                },
                                {
                                    "x": "Mar 18 21",
                                    "y": 415
                                },
                                {
                                    "x": "Mar 19 21",
                                    "y": 428
                                },
                                {
                                    "x": "Mar 20 21",
                                    "y": 434
                                },
                                {
                                    "x": "Mar 21 21",
                                    "y": 445
                                },
                                {
                                    "x": "Mar 22 21",
                                    "y": 454
                                },
                                {
                                    "x": "Mar 23 21",
                                    "y": 469
                                },
                                {
                                    "x": "Mar 24 21",
                                    "y": 472
                                },
                                {
                                    "x": "Mar 25 21",
                                    "y": 486
                                },
                                {
                                    "x": "Mar 26 21",
                                    "y": 495
                                },
                                {
                                    "x": "Mar 27 21",
                                    "y": 500
                                }
                                ]
                            },
                            {
                                "id": "Deadlift",
                                "color": "rgb(160, 34, 2)",
                                "data": [
                                    {
                                    "x": "Mar 16 21",
                                    "y": 495
                                    },
                                    {
                                    "x": "Mar 17 21",
                                    "y": 500
                                    },
                                    {
                                    "x": "Mar 18 21",
                                    "y": 510
                                    },
                                    {
                                    "x": "Mar 19 21",
                                    "y": 520
                                    },
                                    {
                                    "x": "Mar 20 21",
                                    "y": 530
                                    },
                                    {
                                    "x": "Mar 21 21",
                                    "y": 540
                                    },
                                    {
                                    "x": "Mar 22 21",
                                    "y": 550
                                    },
                                    {
                                    "x": "Mar 23 21",
                                    "y": 560
                                    },
                                    {
                                    "x": "Mar 24 21",
                                    "y": 570
                                    },
                                    {
                                    "x": "Mar 25 21",
                                    "y": 580
                                    },
                                    {
                                    "x": "Mar 26 21",
                                    "y": 590
                                    },
                                    {
                                    "x": "Mar 27 21",
                                    "y": 600
                                    }
                                ]
                            },
                            {
                                "id": "Bench",
                                "color": "rgb(160, 34, 2)",
                                "data": [
                                    {
                                    "x": "Mar 16 21",
                                    "y": 205
                                    },
                                    {
                                    "x": "Mar 17 21",
                                    "y": 215
                                    },
                                    {
                                    "x": "Mar 18 21",
                                    "y": 229
                                    },
                                    {
                                    "x": "Mar 19 21",
                                    "y": 235
                                    },
                                    {
                                    "x": "Mar 20 21",
                                    "y": 247
                                    },
                                    {
                                    "x": "Mar 21 21",
                                    "y": 259
                                    },
                                    {
                                    "x": "Mar 22 21",
                                    "y": 268
                                    },
                                    {
                                    "x": "Mar 23 21",
                                    "y": 277
                                    },
                                    {
                                    "x": "Mar 24 21",
                                    "y": 287
                                    },
                                    {
                                    "x": "Mar 25 21",
                                    "y": 298
                                    },
                                    {
                                    "x": "Mar 26 21",
                                    "y": 305
                                    },
                                    {
                                    "x": "Mar 27 21",
                                    "y": 315
                                    }
                                ]
                            },
                        ],
                
                        squat_list: [
                            {
                                "id": "Squat",
                                "color": "rgb(160, 34, 2)",
                                "data": [
                                    {
                                    "x": "Mar 16 21",
                                    "y": 395
                                    },
                                    {
                                    "x": "Mar 17 21",
                                    "y": 405
                                    },
                                    {
                                    "x": "Mar 18 21",
                                    "y": 415
                                    },
                                    {
                                    "x": "Mar 19 21",
                                    "y": 428
                                    },
                                    {
                                    "x": "Mar 20 21",
                                    "y": 434
                                    },
                                    {
                                    "x": "Mar 21 21",
                                    "y": 445
                                    },
                                    {
                                    "x": "Mar 22 21",
                                    "y": 454
                                    },
                                    {
                                    "x": "Mar 23 21",
                                    "y": 469
                                    },
                                    {
                                    "x": "Mar 24 21",
                                    "y": 472
                                    },
                                    {
                                    "x": "Mar 25 21",
                                    "y": 486
                                    },
                                    {
                                    "x": "Mar 26 21",
                                    "y": 495
                                    },
                                    {
                                    "x": "Mar 27 21",
                                    "y": 500
                                    }
                                ]
                            },
                            
                        ],
                
                        bench_list: [
                            {
                                "id": "Bench",
                                "color": "rgb(160, 34, 2)",
                                "data": [
                                    {
                                    "x": "Mar 16 21",
                                    "y": 205
                                    },
                                    {
                                    "x": "Mar 17 21",
                                    "y": 215
                                    },
                                    {
                                    "x": "Mar 18 21",
                                    "y": 229
                                    },
                                    {
                                    "x": "Mar 19 21",
                                    "y": 235
                                    },
                                    {
                                    "x": "Mar 20 21",
                                    "y": 247
                                    },
                                    {
                                    "x": "Mar 21 21",
                                    "y": 259
                                    },
                                    {
                                    "x": "Mar 22 21",
                                    "y": 268
                                    },
                                    {
                                    "x": "Mar 23 21",
                                    "y": 277
                                    },
                                    {
                                    "x": "Mar 24 21",
                                    "y": 287
                                    },
                                    {
                                    "x": "Mar 25 21",
                                    "y": 298
                                    },
                                    {
                                    "x": "Mar 26 21",
                                    "y": 305
                                    },
                                    {
                                    "x": "Mar 27 21",
                                    "y": 315
                                    }
                                ]
                            },
                            
                        ],
                
                        deadlift_list: [
                            {
                                "id": "Deadlift",
                                "color": "rgb(160, 34, 2)",
                                "data": [
                                    {
                                    "x": "Mar 16 21",
                                    "y": 495
                                    },
                                    {
                                    "x": "Mar 17 21",
                                    "y": 500
                                    },
                                    {
                                    "x": "Mar 18 21",
                                    "y": 510
                                    },
                                    {
                                    "x": "Mar 19 21",
                                    "y": 520
                                    },
                                    {
                                    "x": "Mar 20 21",
                                    "y": 530
                                    },
                                    {
                                    "x": "Mar 21 21",
                                    "y": 540
                                    },
                                    {
                                    "x": "Mar 22 21",
                                    "y": 550
                                    },
                                    {
                                    "x": "Mar 23 21",
                                    "y": 560
                                    },
                                    {
                                    "x": "Mar 24 21",
                                    "y": 570
                                    },
                                    {
                                    "x": "Mar 25 21",
                                    "y": 580
                                    },
                                    {
                                    "x": "Mar 26 21",
                                    "y": 590
                                    },
                                    {
                                    "x": "Mar 27 21",
                                    "y": 600
                                    }
                                ]
                            },
                            
                        ]
                    }
                }
            })
        }).then(() => {
            dispatch({type: "SINGUP_SUCCESSFULL"})
        })
        .catch((err) => {
            dispatch({type: "SINGUP_ERROR", payload: err})
        })
    }

} 

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        
        const firebase = getFirebase();
        firebase.auth()
        .signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: "SIGNIN_SUCCESSFUL"})
        }).catch((err) => {
            dispatch({type: "SIGNIN_ERROR", payload: err})
        })

    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {

        const firebase = getFirebase();
        firebase.auth()
        .signOut()
        .then(() => {
            dispatch({type: "SIGNOUT_SUCCESSFULL"})
        }).catch((err) => {
            dispatch({type: "SIGNOUT_SUCCESSFULL", payload: err})
        })
    }
}

export const changeUrl = (url_param) => {

    return (dispatch, getState) => {

        dispatch({type: "URL_CHANGED", payload: url_param})

    }

}