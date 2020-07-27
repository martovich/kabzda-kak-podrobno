import React, {useState} from "react";

type UncontrolledOnOffPropsType = {
    isOn: boolean
    onClick: (on: boolean) => void
}

//Dimych version
export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    // let [on, setOn] = useState(false); //hook

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
        backgroundColor: props.isOn ? "green" : ""
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
        backgroundColor: props.isOn ? "" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        // backgroundColor: props.isOn ? "green" : "red"
        backgroundColor: props.isOn ? "green" : "red"
    }

    return (
        <div>
            <button style={onStyle} onClick={() => { props.onClick(true) }}>On</button>
            <button style={offStyle} onClick={() => { props.onClick(false) }}>Off</button>
            <button style={indicatorStyle}/>
        </div>

    )
}