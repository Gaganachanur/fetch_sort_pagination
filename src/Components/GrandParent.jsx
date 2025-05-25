import React from "react";
import {userContext} from "../Utils/userContext";
import Parent from "./Parent";

export default function GrandParent(){
    return(
         <userContext.Provider value ="GOAT" >
            <Parent/>
         </userContext.Provider>
    )
}