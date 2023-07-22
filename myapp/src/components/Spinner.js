import React from "react";
import './protectedPages.css'
function Spinner() {
    return (
        <div style={{ position: "fixed", inset: "0", alignItems: "center", display: "flex", justifyContent: "center" ,opacity:"-moz-initial"}}>
            <div className="spinner">
             
            </div>
        </div>
    )
}
export default Spinner