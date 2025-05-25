"use client"

import Heading from "../components/Heading";
import Test from "../components/Test";
import "./style.scss"
import { useContext } from "react";
import { context } from "../../store";

export const dynamic = "force-static";

function Trending() {
    const store = useContext(context)

    function handleCountChange(e) {
        const { name } = e.target
        if (name === 'dec') {
            store.setStore({ type: "decrement" })
        }
        else if (name === 'inc') {
            store.setStore({ type: "increment" })
        }
        else {
            alert('Invalid button')
        }
    }

    return (
        <div className="trending-page-wrapper">
            <Heading>Trending</Heading>
            <p style={{ color: store.color }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, explicabo?</p>

            <div className="box">
                <Test />
                {store.count}
                <hr />
                <button onClick={handleCountChange} name="dec">- Decrement</button>
                <button onClick={handleCountChange} name="inc">+ Increment</button>
                <hr />
                <input
                    type="color"
                    className="color-input"
                    onChange={(e) => {
                        store.setStore({ type: "SET_COLOR", value:e.target.value })
                    }}
                />
                <hr />
                <input 
                    type="range" 
                    min={5} max={50}
                    onChange={(e) => {
                        store.setStore({ type: "SET_SIZE", value: e.target.value })
                    }}
                />
            </div>
        </div>
    );
}

export default Trending;