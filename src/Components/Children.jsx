import { useContext } from "react";
import React from "react";
import {userContext} from "../Utils/userContext";

export default function Children(){
    const message = useContext(userContext)
    return(<> from ContextApi :{message}</>
         
    )
}