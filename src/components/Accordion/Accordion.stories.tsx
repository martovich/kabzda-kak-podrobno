import React, {useState} from 'react';
import { action } from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action("collapsed clicked")
export const CollapsedMode = () => <Accordion collapsed={true} onClick={callback} titleValue={"Collapsed"}/>
export const UnCollapsedMode = () => <Accordion collapsed={false} onClick={callback} titleValue={"UnCollapsed"}/>
export const ModeChanging = () => {
     const [value, setValue] = useState<boolean>(false);
     return <Accordion collapsed={value} onClick={() => setValue(!value)} titleValue={value ? "Collapsed" : "UnCollapsed"}/>;
}
