import "./App.css"
import { Link } from "react-router-dom";


export default function Home({ pushData }) {

    function handleOnSubmitType(e) {
        const data = e.target.value

        pushData({ "typePractice": data })
    }
    function handleOnSubmitTime(e) {
        const data = e.target.value

        pushData({ "time": +data })
    }

    function handleOnSubmitRow(e) {
        const data = e.target.value

        pushData({ "row": data })
    }



    return (
        <div id="bgImg" className="flex justify-center  items-center w-full h-full">
            <div className=" m-7 gap-4 border rounded-2xl  p-5 bg-yellow-500  flex flex-col items-baseline-">
                <h1 className="text-center font-bold text-white text-2xl">How to Practice</h1>
                <select className="p-1 bg-white rounded-sm" onChange={handleOnSubmitType} name="typeTest" id="type">
                    <option >select type </option>
                    <option value="character">Character</option>
                    <option value="word">Words</option>
                    <option value="sentence">Sentence</option>


                </select>
                <select className="p-1 bg-white rounded-sm" onChange={handleOnSubmitTime} name="typeTest" id="type">
                    <option >select Time</option>
                    <option value="1">1 minute</option>
                    <option value="2">2 minute</option>
                    <option value="3">3 minute</option>
                    <option value="4">4 minute</option>
                    <option value="5">5 minute</option>
                    <option value="6">6 minute</option>
                    <option value="7">7 minute</option>
                    <option value="8">8 minute</option>
                    <option value="9">9 minute</option>
                    <option value="10">10 minute</option>

                </select>

                <select className="p-1 bg-white rounded-sm" onChange={handleOnSubmitRow} name="typeTest" id="type">
                    <option >select Row</option>
                    <option value="asdfjkl;">asdfjkl;</option>
                    <option value="qweruiop">qweruiop</option>
                    <option value="zxcvnm,.">zxcvnm,.</option>
                    <option value="asdfghjkl;">asdfghjkl;</option>
                    <option value="qwertyuiop">qwertyuiop</option>
                    <option value="zxcvbbnm,.">zxcvbnm,.</option>

                </select>
                <Link to="TypeTest"
                    className="text-white py-1
                  font-bold text-center rounded-sm
                   bg-blue-700 hover:bg-green-700 ...">
                    GO to Practice
                </Link>

            </div>

        </div>
    );
}

