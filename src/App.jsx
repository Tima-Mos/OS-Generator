import React, {useState} from "react";
import './styles/App.css'
import './styles/os.css'
import Os from "./components/Os"

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Script1 from "./scripts/Script1";
import Script2 from "./scripts/Script2";
import Script4 from "./scripts/Script4";
function App() {
    const [info, setInfo] = useState(new Map([
        ["yourName", "(Ваше имя)"],
        ["parentName", '(Имя Родителя)'],
        ["childName", '(Имя ребёнка)'],
        ["childGender", 'Мальчик'],
        ["subject",    '(предмет)']
    ]))

    const [resultString, setResultString] = useState("")
    const updateInfo = (key, value) => {
        setInfo(map => new Map(map.set(key, value)));
    }
    const updateResultString = (value) => {
        setResultString(value);
    }

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Os resultString={resultString}  updateMap={updateInfo} />,
            children:[
                {
                    path: "/script1",
                    element: <Script1 updateResult={updateResultString} parentName={info.get("parentName")} yourName={info.get("yourName")} subject={info.get("subject")} childName={info.get("childName")} childGender={info.get("childGender")} />,
                },
                {
                    path: "/script2",
                    element: <Script2 updateResult={updateResultString} parentName={info.get("parentName")} yourName={info.get("yourName")} subject={info.get("subject")} childName={info.get("childName")} childGender={info.get("childGender")} />,
                },
                {
                    path: "/script4",
                    element: <Script4 updateResult={updateResultString} parentName={info.get("parentName")} yourName={info.get("yourName")} subject={info.get("subject")} childName={info.get("childName")} childGender={info.get("childGender")} />,
                }
            ]
        },
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
