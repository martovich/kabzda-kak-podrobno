import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


type PageTitlePropsType = {
    title: string
}

function App() {
    return (
        <div>
            {/*<PageTitle title={"This is APP"}/>*/}
            {/*<Rating value={3}/>*/}
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledAccordion titleValue={"Users"}/>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UncontrolledRating />
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff isOn={true} />
            <OnOff isOn={true} />
            {/*<OnOff title={"On"} color={"green"}/>*/}
            {/*<OnOff title={"Off"} color={"red"}/>*/}
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return <div>{props.title}</div>
}

export default App;
