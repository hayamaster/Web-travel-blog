import React from "react";
import "./Main.css"
import member1 from "./icon/programmer.png";
import member2 from "./icon/pm.png";
import member3 from "./icon/report.png";
import member4 from "./icon/presentation.png";


function Btn({text, click, flag}){
    return <button style={{
            backgroundColor: flag ? "tomato" : "aquamarine",
            color: flag ? "white" : "maroon",
            padding:"20px 40px",
            margin:"50px",
            border: 0,
            borderRadius: 10,
            fontSize: "20px"
    }} onClick={click}>
        {text}
    </button>
}

function Click1(){
    return (
        window.location.href='/domestic'    
    );
}
function Click2(){
    return (
        window.location.href='/international'    
    );
}

function Main(){
    return (
        <div>
            <div className="main">
                <h1 className="h1">Team member information</h1>
                <div className="container">
                    <img src={member2} className="img1" alt="pm"/>
                    <div className="inner">
                        <p><h2>Project Manager</h2></p>
                        <p>Name: SHIN DONGHOO</p>
                        <p>Student ID: 201631830</p>
                        <p>Major: Applied Statistics</p>
                    </div>
                </div>
                <div className="container">
                    <img src={member1} className="img2" alt="developer1"/>
                    <div className="inner">
                        <p><h2>Developer</h2></p>
                        <p>Name: KIM JUHA</p>
                        <p>Student ID: 201734215</p>
                        <p>Major: Electrical Engineering</p>
                    </div>
                </div>
                <div className="container">
                    <img src={member1} className="img2" alt="developer2"/>
                    <div className="inner">
                        <p><h2>Developer</h2></p>
                        <p>Name: KIM DAEHYEON</p>
                        <p>Student ID: 201935607</p>
                        <p>Major: Electrical Engineering</p>
                    </div>
                </div>
                <div className="container">
                    <img src={member3} className="img2" alt="report"/>
                    <div className="inner">
                        <p><h2>Report, PPT</h2></p>
                        <p>Name: KIM EUNI</p>
                        <p>Student ID: 202031332</p>
                        <p>Major: Global Business Administration</p>
                    </div>
                </div>
                <div className="container">
                    <img src={member4} className="img1" alt="presentator"/>
                    <div className="inner">
                        <p><h2>Presentation</h2></p>
                        <p>Name: PARK JEONGHEE</p>
                        <p>Student ID: 202132428</p>
                        <p>Major: Department of Medical Management</p>
                    </div>
                </div>
            </div>
            
            <div className="button">
                <Btn text="Domestic" click={Click1} flag={true}/>
                <Btn text="International"  click={Click2} flag={true}/>
            </div>
        </div>       
    )
}

export default Main;