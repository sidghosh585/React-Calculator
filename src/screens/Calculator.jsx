import React from "react";
import { useState } from "react";
import * as math from 'mathjs';
import bg from '../assets/bg.mp4'

function Calculator(){
    let result;
    let res;
    let [data,setData]=useState("0")
    const setValue=(value)=>{
        if(value==="clear")
        {
            setData("0");
        }
        else if(data==="0")
        {
            setData(value);
        }
        else if(value==="c")
        {
            if(data.length===1)
            {
                setData("0");
            }
            else
            {
                setData(data.slice(0,-1));
            }
        }
        else if(value==="(1/x)")
        {
            res=(1/data);
            setData(res.toString());
        }
        else if(value==="**2")
        {
            res=(data**2);
            setData(res.toString());
        }
        else if(value==="sqrt")
        {
            res=(Math.sqrt(data));
            setData(res.toString());
        }
        else
        {
            setData(data.concat(value));
        }
    }


    const getValue=(event)=>{
        setValue(event.target.value);
    }

    const calCulate=()=>{
        try{
            result=math.evaluate(data);
            setData(result.toString());
        }catch(error){
            setData("Error");
        }
    }
    return (
    <div>
    <video src={bg} autoPlay loop muted/>
    <div id="top">Calculator</div>

    <div className="out_cal">
            <input id="display" value={data} readOnly placeholder="0"></input>
        
        <div className="tablet">
            <button onClick={getValue} className="box" value="%" id="btn1">%</button>
            <button onClick={getValue} className="box" value="(" id="btn2">(</button>
            <button onClick={getValue} className="box" value=")" id="btn3">)</button>
            <button onClick={getValue} className="box" value="c" id="btn4"><i class="ri-arrow-left-fill"></i></button>
            <button onClick={getValue} className="box" value="(1/x)" id="btn5">1/x</button>
            <button onClick={getValue} className="box" value="**2" id="btn6">x^2</button>
            <button onClick={getValue} className="box" value="sqrt" id="btn7">sq root x</button>
            <button onClick={getValue} className="box" value="/" id="btn8">/</button>
            <button onClick={getValue} className="box" value="7" id="btn9">7</button>
            <button onClick={getValue} className="box" value="8" id="btn10">8</button>
            <button onClick={getValue} className="box" value="9" id="btn11">9</button>
            <button onClick={getValue} className="box" value="*" id="btn12">*</button>
            <button onClick={getValue} className="box" value="4" id="btn13">4</button>
            <button onClick={getValue} className="box" value="5" id="btn14">5</button>
            <button onClick={getValue} className="box" value="6" id="btn15">6</button>
            <button onClick={getValue} className="box" value="-" id="btn16">-</button>
            <button onClick={getValue} className="box" value="1" id="btn17">1</button>
            <button onClick={getValue} className="box" value="2" id="btn18">2</button>
            <button onClick={getValue} className="box" value="3" id="btn19">3</button>
            <button onClick={getValue} className="box" value="+" id="btn20">+</button>
            <button onClick={getValue} className="box" value="clear" id="btn21">clear</button>
            <button onClick={getValue} className="box" value="0" id="btn22">0</button>
            <button onClick={getValue} className="box" value="." id="btn23">.</button>
            <button onClick={calCulate} className="box" id="btn24">=</button>
        </div>
    </div>
    </div>
    );
}

export default Calculator;