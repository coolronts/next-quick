import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {Default} from "../layouts/Default/Default";
import {BasicButton} from "../components/Button";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ComponentPreviews">
                <ComponentPreviews/>
            </ComponentPreview>
            <ComponentPreview path="/Default">
                <Default children={}/>
            </ComponentPreview>
            <ComponentPreview path="/BasicButton">
                <BasicButton/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;