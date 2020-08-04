import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledRating2} from "./components/UncontrolledRating/UncontrolledRating2";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

type PageTitlePropsType = {
    title: string
}

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [on,setOn] = useState<boolean>(false);
    let [switchOn,setSwitchOn] = useState<boolean>(false);
    return (
        <div className={"App"}>
            <PageTitle title={"This is APP"}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onClick={ () => { setAccordionCollapsed(!accordionCollapsed) }}/>
            {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
            <UncontrolledAccordion titleValue={"Uncontrolled Menu"}/>
            {/*<UncontrolledAccordion titleValue={"Users"}/>*/}
            <UncontrolledRating/>
            <UncontrolledRating2/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            {/*<OnOff isOn={true} />*/}
            {/*<OnOff on={switchOn} onChange={ (on) => { setSwitchOn(on) }}/>*/}
            <OnOff on={switchOn} onChange={ setSwitchOn }/>
            <UncontrolledOnOff onChange={ setOn }/> {on.toString()}
            {/*<OnOff title={"On"} color={"green"}/>*/}
            {/*<OnOff title={"Off"} color={"red"}/>*/}
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return <div>{props.title}</div>
}

export default App;
