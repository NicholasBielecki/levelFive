import React from "react";


export default function Bounty(props){

const [editStatus, setEditStatus] = React.useState(false)
const [input, setInput] = React.useState()

function toggleEdit(event){
    event.preventDefault()
    setEditStatus(!editStatus)
    if(editStatus===true){
       props.put(input, props.myData._id)
    }
}

function inputFunction(event){
    event.preventDefault()
    setInput({[event.target.name] : event.target.value})
}

function checkboxFunction(event){
    event.preventDefault()
    // console.log(props.myData)
    setInput({[event.target.name] : !props.myData.isAlive})
}


    return(
        <div className="bountyCard">
           <form>
                <div>
                <input name="firstName" onChange={inputFunction} style={{display: editStatus ? "block" : "none"}} placeholder = {props.myData.firstName}></input>
                <input name="lastName" onChange={inputFunction} style={{display: editStatus ? "block" : "none"}} placeholder = {props.myData.lastName}></input>

                <span>
                <input type={"checkbox"} name="isAlive" onChange={checkboxFunction} style={{display: editStatus ? "block" : "none"}} checked = {props.myData.isAlive ? true : ""}></input>
                {editStatus ? "Is Alive?" : ""}
                </span>

                <input type={"number"} name="bountyAmount" onChange={inputFunction} style={{display: editStatus ? "block" : "none"}} placeholder = {props.myData.bountyAmount}></input>

                <select name="type" onChange={inputFunction} style={{display: editStatus ? "block" : "none"}}>
                    <option  name="type" value={"Jedi"}>Jedi</option>
                    <option  name="type" value={"Sith"}>Sith</option>


                </select>
                </div>
            <button onClick={toggleEdit}>{editStatus ? "Submit" : "Edit"}</button>
<br></br>
    

<span>Name : {props.myData.firstName} {props.myData.lastName}</span>
<br></br>
    <span>
        Is Alive : {String(props.myData.isAlive)} 
        <br></br>
        Bounty Amount : {props.myData.bountyAmount} 
        <br></br>
        Type : {props.myData.type}
    </span>
<br></br>
<button onClick={() => props.delete(props.myData._id)}>Delete</button>
<br></br>
</form>
        </div>
    )
}