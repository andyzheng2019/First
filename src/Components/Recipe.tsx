import React from "react";
import Responsive from 'react-responsive';
import { IRecipeData } from "../CommonType/RecipeData";

const Desktop = (props: any) => <Responsive {...props} minWidth={992} />;
const Medium = (props: any) => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Small = (props: any) => <Responsive {...props} maxWidth={359}  />;
const Mobile = (props: any) => <Responsive {...props} minWidth={360} maxWidth={767} />;


  
const recipe = (props: IRecipeData) => {
    
        const small1x = props.small1x
        const small2x = props.small2x
        const small3x = props.small3x
        const medium1x = props.medium1x
        const medium2x = props.medium2x
        const medium3x = props.medium3x
        const mobile1x = props.mobile1x
        const mobile2x = props.mobile2x
        const mobile3x = props.mobile3x
        const desktop1x = props.desktop1x
        const desktop2x = props.desktop2x
        const desktop3x = props.desktop3x

        const desktopSrcSet = desktop1x +' 1x,' + desktop2x +' 2x, '+ desktop3x +' 3x'
        const mediumSrcSet = medium1x +' 1x,' + medium2x +' 2x, '+ medium3x +' 3x'
        const smallSrcSet = small1x +' 1x,' + small2x +' 2x, '+ small3x +' 3x'
        const mobileSrcSet = mobile1x +' 1x,' + mobile2x +' 2x, '+ mobile3x +' 3x'
     
        const text = <p style={{backgroundColor:'white',color:'grey',paddingBottom:'1.5em',textAlign:'center'}}>{props.title}</p>
        
        const largeSceenStyle = {backgroundColor:'lightgrey', width: '50%', paddingLeft: '0.2em', paddingRight: '0.2em',paddingTop:'0.1em'}
        const smallSceenStyle = {backgroundColor:'lightgrey', width: '100%', paddingLeft: '0.2em', paddingRight: '0.2em',paddingTop:'0.1em'}
        
        return <>
                <Desktop><div style={largeSceenStyle}>
                    <img src={desktop1x} alt={desktop1x} srcSet={desktopSrcSet} width='100%'></img>
                    {text}
                    </div>
                </Desktop>
                <Medium>
                <div style={largeSceenStyle}>
                    <img src={medium1x} alt={medium1x} srcSet={mediumSrcSet} width='100%'></img>
                    {text}
                    </div>
                </Medium>
                <Small>
                <div style={smallSceenStyle}>
                    <img src={small1x} alt={small1x} srcSet={smallSrcSet} width='100%'></img>
                    {text}
                    </div>
                </Small>
                <Mobile ><div style={smallSceenStyle}>
                    <img src={mobile1x} alt={mobile1x} srcSet={mobileSrcSet} width='100%'></img>
                    {text}
                    </div>
                </Mobile>
               </>       
}

export default recipe;