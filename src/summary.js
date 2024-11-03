import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";

function summary({dataF={}, setDataF, viewer, setViewer}){
    const updateHooks = ()=>{
        setViewer( 0 );//return to initial view
        setDataF( {} );//start again
    };

    return <div>
        <h1>Summary of Payment Information</h1>
        <h3>{dataF.fullName}</h3>
        <h3>{dataF.email}</h3>
        <h3>{dataF.city} {dataF.state} {dataF.zip}</h3>

        <button onClick={updateHooks} className="btn btn-secondary" >Submit</button>

    </div>
}

export default summary;