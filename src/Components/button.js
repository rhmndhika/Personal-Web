import React from 'react';


function shoot() {
    alert("Pindah ke Link ....")
    window.location.href = "https://www.instagram.com/rhmndhika/";
}

function Buttons () {
    return (
        <button onClick={shoot}>Dont Click Me!</button>
        )
}




export default Buttons;



