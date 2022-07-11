import { connectFirestoreEmulator } from "firebase/firestore";
import React from "react";
import {useContent} from '../hooks'
export default function Browse(){
    const {series}=useContent('series')
    const {films}=useContent('films')
    console.log(series)
    console.log(films)
    return(
    <div>
        <h1>hello browse</h1>
    </div>)
}