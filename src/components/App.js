import React, { useState,useEffect } from "react"


function App(){
    const [dogState,setDogState]=useState("")
    useEffect(()=>{
        fetch (`https://dog.ceo/api/breeds/image/random`)
        .then(res=>res.json())
        .then(data=>{
            setDogState(data.message)
        })
    },[])

    const checkState=()=>{
        if (dogState===""){
            return <p>Loading...</p>
        }
        if (dogState!==""){
            return <img alt="A Random Dog" src={dogState} href={dogState}/>
        }
    }
    console.log(dogState.message)
    return (
        <div>
            {checkState()}
        </div>
    )
}

export default App