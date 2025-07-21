"use client"
import React from 'react'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeUserStore } from './store'



export default function ReduxProvidor({children}){

  const storeRef = useRef();

    if(!storeRef.current){

        storeRef.current = makeUserStore();

    }
    
    return <Provider store={storeRef.current}>{children}</Provider>

} 