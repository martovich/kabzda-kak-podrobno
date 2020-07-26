import React from "react";
import s from './OnOff.module.css';

type OnOffPropsType = {
    on: boolean
}

export function OnOff(props: OnOffPropsType) {
    let btnStyle = {

    };

    return (
        <div>
            <button style={{ backgroundColor: props.on ? "green" : "" }} className={s.button1}>On</button>
            <button style={{ backgroundColor: props.on ? "" : "red" }} className={s.button1}>Off</button>
            <button style={{ backgroundColor: props.on ? "green" : "red" }} className={s.button2}/>
        </div>

    )
}

// type OnOffPropsType = {
//     title: string
//     color: string
// }
//
// export function OnOff(props: OnOffPropsType) {
//     let btnStyle = {
//         backgroundColor:props.color
//     };
//     return (
//         <div>
//             <div>
//                 <button style={btnStyle} className={s.button1}>{props.title}</button>
//                 <button style={btnStyle} className={s.button2}/>
//             </div>
//         </div>
//     )
// }
