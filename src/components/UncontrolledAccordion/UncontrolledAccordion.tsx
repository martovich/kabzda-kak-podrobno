import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}
type UncontrolledAccordionTitlePropsType = {
    title: string
}
type UncontrolledAccordionBodyPropsType = {
    value: number
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <button onClick={ () => { setCollapsed(!collapsed) } }>TOGGLE</button>
            <UncontrolledAccordionTitle title={props.titleValue}/>
            { !collapsed && <UncontrolledAccordionBody value={1}/> }
        </div>
    )
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return <h3>{props.title}</h3>
}

function UncontrolledAccordionBody(props: UncontrolledAccordionBodyPropsType) {
    return (
        <ul>
            <li>{props.value}</li>
            <li>{props.value} + 1</li>
            <li>{props.value} + 2</li>
        </ul>)
}

export default UncontrolledAccordion
