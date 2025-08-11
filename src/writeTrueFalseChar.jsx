import "./App.css";

export default function writeTrueFalseChar(allKeydata, charTypeValue, data, setReset, setValue, setResult) {

    let keyDataWithSpace = data["typePractice"] === 'word' || "sentence" ? allKeydata.join(" ") : allKeydata;
    let ArrayvalueTypeLength = charTypeValue.length || undefined;


    let Keydata = allKeydata[0];
    let keyLength = String(Keydata).length;
    let allKeyLength = data["typePractice"] === "paragraph" ? keyLength : keyDataWithSpace.length;


    if (ArrayvalueTypeLength === allKeyLength + 1) {

        let T = 0
        let F = 0
        let total = allKeyLength


        for (let i = 0; i < allKeyLength; i++) {
            const b = keyDataWithSpace[i] === charTypeValue[i]

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


}

