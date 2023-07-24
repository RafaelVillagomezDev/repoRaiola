import React from "react";


function Header(props){
    return (
        <div>
        
    <button onClick={()=>props.handleTheme()}>Switch Theme</button>
        </div>
     
    )
}

export default Header