import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
}
type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
type AccordionBodyPropsType = {
    value: number
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody value={1}/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onClick}>
        -- {props.title} --
    </h3>
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>{props.value}</li>
            <li>{props.value} + 1</li>
            <li>{props.value} + 2</li>
        </ul>)
}

export default Accordion
