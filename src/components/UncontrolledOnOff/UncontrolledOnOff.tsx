import React, {useState} from "react";

type UncontrolledOnOffPropsType = {
    onChange: (on: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    let [on, setOn] = useState(false);
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
        backgroundColor: on ? "green" : ""
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
        backgroundColor: on ? "" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        // backgroundColor: props.isOn ? "green" : "red"
        backgroundColor: on ? "green" : "red"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <button style={onStyle} onClick={ onClicked }>On</button>
            <button style={offStyle} onClick={ offClicked }>Off</button>
            <button style={indicatorStyle}/>
        </div>

    )
}