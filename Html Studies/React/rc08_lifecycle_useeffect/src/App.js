import React from "react";
// import LifeCycleMethods from "./components/LifeCycleMethods";
// import { useState } from "react";
// import UseEffectHook from "./components/UseEffectHook";
import Users from "./components/Users";

function App() {
    // const [show, setShow] = useState(true);

    return (
        <div className="container text-center" style={{marginTop:'10rem'}}>
            {/* <button className="btn btn-dark" onClick={() => setShow(!show)}>
                {show ? 'Hide' : 'Show'}
            </button> */}

            {/* //!CONDITIONAL RENDERING (Show-Circuit) */}
            {/* {show && <LifeCycleMethods />} */}
            {/* {show && <UseEffectHook />} */}
            <Users/>
        </div>
    );
}

export default App;
