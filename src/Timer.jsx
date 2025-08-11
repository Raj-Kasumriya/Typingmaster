import { useEffect, useState } from "react";
import "./App.css";

export default function Timer({ result, onReset, time, setValueReset }, SetResult) {

    const [counters, setCounter] = useState(60)
    const [reset, setReset] = useState(0)

    useEffect(function countdown() {

        let minutes = time - 1
        let seconds = 60;

        function tick() {
            seconds--;
            seconds <= 0 ? (minutes--) : minutes
            const counter = String(minutes) + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            setCounter(counter)
            if (seconds >= 0 && minutes >= 0) {
                setTimeout(tick, 1000);
                seconds <= 0 ? seconds = 60 : seconds
            }

        }
        tick();
    }, [reset])


    function resetAll() {
        let resetNumber = Math.floor(Math.random() * 7)
        setReset(resetNumber)
        onReset(resetNumber)
        SetResult({
            "correct": 0,
            "wrong": 0,
            "totalTypeKey": 0
        })
        setValueReset("")

    }


    if (counters === "-1:00") {
        return (

            <div className="bg-cyan-500 px-10  py-5 rounded-4xl  flex flex-col gap-4" >
                <h1 className="font-bold text-3xl">Time out</h1>
                <span>Correct :- {result["correct"]}</span>
                <span>Wrong :- <span className="text-orange-500">{result["wrong"]}</span> </span>
                <span> Accuracy :-{Math.ceil(((result["correct"] * 100) / (result["totalTypeKey"]))) || 0}%</span>
                <span>Speed :- {Math.ceil(result["totalTypeKey"] / time)} cpm</span>
                <button className="bg-white p-1 font-bold rounded-2xl" onClick={resetAll} >reset</button>
            </div>)


    }

    return (
        <div className="text-2xl px-5  py-1 font-bold">
            <span > {counters}</span>
        </div>

    );
}

