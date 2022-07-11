import { useEffect,useState,useContext } from "react";
import  {FirebaseContext} from '../context/firebase'
import {database} from '../lib/firebase.prod'
import { collection,getDocs} from "firebase/firestore";


export default function useContent(target){
const [data,setData]=useState([])
const collectionRef=collection(database,target)
useEffect(()=>{
    getDocs(collectionRef)
    .then((res)=>{
        const allContent=res.docs.map((item)=>({
            ...item.data(),
            docId:item.id,
        }))
        setData(allContent)
    }).catch((err)=>{
        console.log(err.message)
    })
},[])
return {[target]:data}
}