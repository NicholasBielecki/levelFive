// import { response } from "express";
import React from "react";
import Bounty from "./Bounty";
import InputForm from "./InputForm";

const axios = require('axios')


export default function App(){

    const [myData, setMyData] = React.useState([])

    function getRequest(){
        axios.get("/bounty")
        .then(res => setMyData([...res.data]))
        .catch(err => console.log(err))
    }

    function postRequest(newPost){
        axios.post("/bounty", newPost)
        .then(res => setMyData(prevData => [...prevData, res.data]))
        .catch(err => console.log(err))
    }

    function deleteRequest(_id){
        axios.delete(`/bounty/${_id}`)
        .then(res =>{ 
        setMyData(res.data)})
        .catch(err => console.log(err))
    }

    function putRequest(updates, _id){
        axios.put(`/bounty/${_id}`, updates)
        .then(res =>{
            console.log(res.data)
     setMyData(prevData => prevData.map(index =>index._id !== _id ? index : res.data))})
        .catch(err => console.log(err))
    }

   const bountyMap =  myData.map(bountyIndex => {
            return(
                <Bounty
                key = {bountyIndex._id}
                myData = {bountyIndex}
                post = {postRequest}
                delete = {deleteRequest}
                put = {putRequest}
                />
            )
        })
    

   
    React.useEffect(() =>{
       getRequest()
    }, [])

    

    

 

    return(<div>
    <InputForm
    post = {postRequest}
    />
        <br></br>
        <br></br>
    {bountyMap}
    </div>)
}