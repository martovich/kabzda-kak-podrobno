import React from "react";

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

//Dimych version
export function OnOff(props: OnOffPropsType) {

    //let [on, setOn] = useState(false); //hook

    const onStyle = {
        border: "1px solid black",
        padding: "20px",
        textDecoration: "none",
        display: "inline-block",
        fontsize: "16px",
        margin: "4px 2px",
        borderRadius: "2px",
        width: "100px",
        // backgroundColor: props.isOn ? "green" : ""
        backgroundColor: props.on ? "green" : ""
    }
    const offStyle = {
        border: "1px solid black",
        padding: "20px",
        textDecoration: "none",
        display: "inline-block",
        fontsize: "16px",
        margin: "4px 2px",
        borderRadius: "2px",
        width: "100px",
        // backgroundColor: props.isOn ? "" : "red"
        backgroundColor: props.on ? "" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        // backgroundColor: props.isOn ? "green" : "red"
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <button style={onStyle} onClick={( ) => { props.onChange(true) }}>On</button>
            <button style={offStyle} onClick={() => { props.onChange(false) }}>Off</button>
            <button style={indicatorStyle}/>
        </div>

    )
}

//version2
// export function OnOff(props: OnOffPropsType) {
//     let btnStyle = {
//
//     };
//
//     return (
//         <div>
//             <button style={{ backgroundColor: props.isOn ? "green" : "" }} className={s.button1}>On</button>
//             <button style={{ backgroundColor: props.isOn ? "" : "red" }} className={s.button1}>Off</button>
//             <button style={{ backgroundColor: props.isOn ? "green" : "red" }} className={s.button2}/>
//         </div>
//
//     )
// }
// version1
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
