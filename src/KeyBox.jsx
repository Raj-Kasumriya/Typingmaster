import "./App.css";

export default function KeyBox({ keyCa }) {

    return (
        <div>

            {
                keyCa.length > 1 ? <div className="text-white bg-black rounded-sm p-1 font-bold py-1">{keyCa}__</div> : (keyCa === " " ? <span className="text-white">__</span>
                    : <div className=" mx-1 size-6 rounded-full bg-radial-[at_50%_70%] from-sky-200 via-blue-400 to-indigo-900 to-90% flex justify-center items-center font-bold"  >
                        {keyCa}
                    </div >
                )}

        </div >
    );
}

