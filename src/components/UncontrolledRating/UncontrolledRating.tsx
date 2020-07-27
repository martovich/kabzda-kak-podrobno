import React, {useState} from "react";

// type UncontrolledRatingPropsType = {
//     value : 0 | 1 | 2 | 3 | 4 | 5
// }

type StarPropsType = {
    selected: boolean
    onClick: (value: number) => void
    value: number
}

export function UncontrolledRating() {
    let [value,setValue] = useState(0);

    return (
        <div>
            <Star selected={ value > 0 } onClick={setValue} value={1}/>
            <Star selected={ value > 1 } onClick={setValue} value={2}/>
            <Star selected={ value > 2 } onClick={setValue} value={3}/>
            <Star selected={ value > 3 } onClick={setValue} value={4}/>
            <Star selected={ value > 4 } onClick={setValue} value={5}/>
            {/*<button onClick={ () => {setValue(1)} }>+</button>*/}
            {/*<Star selected={ value > 1 }/>*/}
            {/*<button onClick={ () => {setValue(2)} }>+</button>*/}
            {/*<Star selected={ value > 2 }/>*/}
            {/*<button onClick={ () => {setValue(3)} }>+</button>*/}
            {/*<Star selected={ value > 3 }/>*/}
            {/*<button onClick={ () => {setValue(4)} }>+</button>*/}
            {/*<Star selected={ value > 4 }/>*/}
            {/*<button onClick={ () => {setValue(5)} }>+</button>*/}
        </div>
    )
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.onClick(props.value)}}>
        { props.selected ? <b>star  </b>  : "star  " }
    </span>
}