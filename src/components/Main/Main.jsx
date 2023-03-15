import React, {useState} from 'react';
import "./styles/main.css"
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Button } from '@consta/uikit/Button';
import ReactDOM from 'react-dom';
import bg from "./images/bg.png"


export function Main() {
    const [someData, setSomeData] = useState();
    return(
        <div className="main-div">
            <div className="main-images">
                <div className="main-image-1">
                    <img className="main-image-1-img" src={bg}/>
                    <span className="main-textonimage">Образовательный кластер
IT-технологий РС(Я)</span>
                </div>
            </div>
        </div>
        // <Theme preset={presetGpnDefault}>
        //     <Button
        //     className={btn}>
        //
        //     </Button>
        // </Theme>
    )
}