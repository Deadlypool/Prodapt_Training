import {React, useEffect} from "react";

export function PageLoad() {
    useEffect(() => {
        alert("Page Loaded.");
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div>
            <h1>Welcome to React Js useEffect</h1>
        </div>
    )
}