//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componenler'te yan etkileri
//! (side effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

import { useState, useEffect } from "react";

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

const UseEffectHook = () => {
    const [count, setCount] = useState(0);

    //!ComponentDidMount

    // useEffect(() => {
    //     console.log("Mounted"); //! fetch, async-await, localStorage, setTimeout etc...
    //     setTimeout(() => {
    //         alert('Data Fetched')
    //     }, 3000 )
    // }, []);

    //!ComponentDidMount + ComponentDidUpdate
    // useEffect(() => {
    //     console.log("Mounted + Updated"); //! fetch, async-await, localStorage, setTimeout etc...
    //     setTimeout(() => {
    //         alert('Data Fetched')
    //     }, 1000 )
    // }, [count]);


const fetchData = () => {
    console.log('data fetched');
}

    useEffect(() => {
        //!ComponentDidMount
        const timerId = setInterval(fetchData, 1000);
        console.log('Mounted');

        return () => {
            //!ComponentWillUnmount
            clearInterval(timerId)
            console.log('Unmounted');
        };
    }, []);

    // useEffect(() => {
    //     //?ComponentDidMount || ComponentDidUpdate
    //   first

    //   return () => {
    //     //?ComponentDidUnmount
    //     second
    //   }
    // }, [third]) //?Dependency Array (Update)

    return (
        <div className="container text-center mt-4">
            <h1 className="text-danger">USE-EFFECT</h1>
            <h3>Count:{count}</h3>
            <button
                className="btn btn-warning"
                onClick={() => setCount(count + 1)}
            >
                INC
            </button>
        </div>
    );
};

export default UseEffectHook;
