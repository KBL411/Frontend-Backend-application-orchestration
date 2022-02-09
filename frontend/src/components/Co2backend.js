import React from 'react'
import {useEffect, useState} from "react";

export const Co2backend = ()=>{
    const[initialState, setInitialSate] = useState([])
    useEffect(()=>{
        fetch('api/').then(res => {
            if(res.ok){
                return res.json()
            }
        }).then(jsonResponse => setInitialSate(jsonResponse))
    },[])

    console.log(initialState)
    return(<div>
        Nombre de consultation de la page : {initialState.pageCount}
    </div>)
}