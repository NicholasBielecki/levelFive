import React from "react";
import axios from "axios"



export default function (props){

    const [input, setInput] = React.useState({isAlive : false})

    function inputFunction(event){
        event.preventDefault()
        console.log(input)
        setInput(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }

    function submitFunction(event){
    event.preventDefault()
    props.post(input)
    setInput()
}

function checkboxFunction(event){
    event.preventDefault(event)
    setInput({[event.target.name] : !input.isAlive})
}

    return(
        <div>
           <form className="mainInput">
           <input onChange={inputFunction} name = "firstName" placeholder="firstName"/>
           <input onChange={inputFunction} name = "lastName" placeholder="lastName"/>

           <span>
           Check if Bounty is Alive
           
           <input type={"checkbox"} name="isAlive" onChange={checkboxFunction}></input>
           </span>
    

           <input type={"number"} name="bountyAmount" onChange={inputFunction}  placeholder = {"Bounty Amount"}></input>
          
           
           <select name="type" onChange={inputFunction}>
                    <option  name="type" value={"Jedi"}>Jedi</option>
                    <option  name="type" value={"Sith"}>Sith</option>


                </select>


           <button onClick={submitFunction}>Submit</button>
           </form>
        </div>
    )
}