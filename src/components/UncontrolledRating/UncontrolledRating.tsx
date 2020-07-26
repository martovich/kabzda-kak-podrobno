import React, {useState} from "react";

type UncontrolledRatingPropsType = {
    value : 0 | 1 | 2 | 3 | 4 | 5
}

type StarPropsType = {
    selected: boolean
}

export function UncontrolledRating() {
    let [value,setValue] = useState(0);

    return (
        <div>
            <Star selected={ value > 0 }/>
            <button onClick={ () => {setValue(1)} }>+</button>
            <Star selected={ value > 1 }/>
            <button onClick={ () => {setValue(2)} }>+</button>
            <Star selected={ value > 2 }/>
            <button onClick={ () => {setValue(3)} }>+</button>
            <Star selected={ value > 3 }/>
            <button onClick={ () => {setValue(4)} }>+</button>
            <Star selected={ value > 4 }/>
            <button onClick={ () => {setValue(5)} }>+</button>
        </div>
    )
}

function Star(props: StarPropsType) {
    if (props.selected) {
        return <span><b>star</b>  </span>
    } else {
        return <span>star  </span>
    }

}