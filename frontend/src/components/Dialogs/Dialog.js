import React from "react";
import style from "./dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialog}>
                    <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return(
    <div className={style.message}>{props.message}</div>
    )
}
let dialogs = [
    {name:"Vika", id:1},
    {name:"Lana", id:2},
    {name:"Bob", id:3},
    {name:"Anna", id:4},
    {name:"Go", id:5}
]

let messages = [
    {massage: "Hello!"},
    {massage: "Hi!"},
    {massage: "Hey!"},
    {massage: "Yo!"},
    {massage: "Hey!"}
]

let dialogsElements = dialogs
    .map(dialog =>  <Dialog name={dialog.name} id={dialog.id}/>);

let messagesElements = messages
    .map(massage => <Message message={massage.massage}/>);    

const Dialogs = () => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            
        </div>
    )
}

export default Dialogs;