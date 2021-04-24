import { React } from 'react';
const Layouts = (props) =>{
    return(
        <>
            <title> {props.pageTitle} | ADiT-LAB</title>
            <div>{props.children}</div>
        </>
    )
}
export default Layouts;