import "./App.css";
import { useState, useEffect } from "react";
import ArrayData from "./ArrayData";
import { Navigate } from "react-router-dom";
import KeyBox from "./KeyBox";
import Timer from "./timer";

export default function TypeTest({ data }) {

    if ((data["typePractice"] === '' || data["time"] === 0 || data["row"] === '')) {
        return <Navigate to="/" />
    }

    const [value, setValue] = useState("")
    const [Key, setkey] = useState([])
    const [result, setResult] = useState({
        "correct": 0,
        "wrong": 0,
        "totalTypeKey": 0
    })

    const [reset, setReset] = useState(0)

    useEffect(() => {

        let Key = ArrayData(data)
        setkey(Key);

    }, [reset])


    function InputValue(e) {

        const typeValue = e.target.value
        setValue(typeValue);
    }

    let ArrayvalueTypeLength = value.length || undefined

    let keyAddSpace = data["typePractice"] === 'word' || data["typePractice"] === "sentence" ? Key.join(" ") : Key;


    let Keydata = Key[0]
    let keyLength = String(Keydata).length

    let keyAddSpacePara = data["typePractice"] === "paragraph" ? keyLength : keyAddSpace.length

    console.log(keyAddSpacePara)

    if (ArrayvalueTypeLength === keyAddSpacePara + 1) {

        let T = 0
        let F = 0
        let total = keyAddSpacePara


        for (let i = 0; i < keyAddSpacePara; i++) {
            const b = keyAddSpace[i] === value[i]

            if (b) {
                T += 1;
            } else {
                F += 1
            }

        }


        setResult({
            "correct": T + result["correct"],
            "wrong": F + result["wrong"],
            "totalTypeKey": total + result["totalTypeKey"]
        });

        setReset(Math.random() * 8)
        setValue("")


    }




    return (

        <div id="bgImgTypeTest" className="w-full h-full">

            <div className=" flex justify-center items-center ">
                <Timer setValueReset={setValue} SetResult={setResult} time={data["time"]} result={result} onReset={setReset} />
            </div>


            <div className="flex flex-col  items-center mt-10" >
                <div className="flex mb-6  "> {data["typePractice"] === "paragraph" ? (<span className="text-white font-bold px-10 text-center">{Key[0]}</span>) : (Key.map((keys, index) => {
                    return <KeyBox key={index} keyCa={keys} />
                }))}</div>


                <input type="text" placeholder="Type Text" value={value}
                    onChange={InputValue}
                    className="p-1 border-b-2 text-center text-white font-bold border-white  mb-4" />

                <div>
                    <h4 className="text-white font-bold"> Typed Character :-</h4>
                    <p className="  text-2xl" >{value}</p>
                </div>

            </div>
        </div>
    );

}

