import React from "react";
import { BrowseContainer } from "../container/browse";
import {useContent} from '../hooks'
import selectionMap from "../utils/selection-filter";
export default function Browse(){
    const {series}=useContent('series')
    const {films}=useContent('films')
    const slides =selectionMap({series,films})
    return<BrowseContainer sildes={slides}/>
    
}