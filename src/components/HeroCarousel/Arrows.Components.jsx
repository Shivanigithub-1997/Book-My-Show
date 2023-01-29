import react from "react";


export function NextArrow(props){
    return (
        <>
        <div 
            className= "{props.ClassName}"
            style= {{...props.style}}
            onClick= {props.onClick}
            />
        </>
    );
}
     export function PrevArrow(props){return (
    <>
    <div 
        className= "{props.ClassName}"
        style= {{...props.style}}
        onClick= {props.onClick}
        />
    </>);
    }