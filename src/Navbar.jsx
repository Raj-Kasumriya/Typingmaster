import { Link } from "react-router-dom";
import "./App.css";

export default function Navbar({ pushdataReset }) {

    function reset() {
        pushdataReset({ "typePractice": "", "time": 0, "row": "" })
    }

    return (
        <div id="bgImgNavba" className="p-3 font-bold h-12 bg-linear-to-t text-lg from-sky-500 to-indigo-500 ">
            <button className="border-transparent" onClick={reset}> <Link to="/"  > Home</Link> </button> </div>
    );
}

