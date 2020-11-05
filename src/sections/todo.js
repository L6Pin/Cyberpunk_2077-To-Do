import React, { Component } from 'react';
import videoBg from "../img/videoBg.mp4";
import mainButton from '../img/mainBtn.png';


class todo extends Component {

    constructor(){
        super()
        this.state = {}
    }

    componentDidMount(){
        
        
        let getDay = () => {
            let currentDay = new Date().getDay();
            let day;
            switch (currentDay) {
                case 0:
                  day = "Sunday";
                  return day;
                case 1:
                  day = "Monday";
                  return day;
                case 2:
                   day = "Tuesday";
                   return day;
                case 3:
                  day = "Wednesday";
                  return day;
                case 4:
                  day = "Thursday";
                  return day;
                case 5:
                  day = "Friday";
                  return day;
                case 6:
                  day = "Saturday";
                  return day;
              }
        }

        let getTime = () => {
            let time = new Date();
            let h = time.getHours();
            let m = time.getMinutes();
            let s = time.getSeconds();

            if(s < 10)
               s = "0" + s;
            
            if(m < 10)
                m = "0" + m;
             
             if(h < 10)
                h = "0" + h;
            
            document.querySelector('#time').innerHTML = h + ":" + m + ":" + s;
        }

        let getDate = () => {
            let time = new Date();
            let dayNum = time.getDay() + 1;
            let month = time.getMonth() + 1;
            let year = time.getFullYear();
            document.querySelector('#date').innerHTML = dayNum + ":" + month + ":" + year;
        }

        let appTime = () => {
            document.querySelector('#day').innerHTML = getDay()
            getTime()
            getDate()
        }

        setInterval(appTime, 1000);
       
       
        
    }

    render() {
        return (
            <div className="toDoContainer">
                <div className="toDoContainer__bg">
                    <video autoPlay muted loop>
                        <source src={videoBg} type="video/mp4" />
                    </video>
                </div>
                <div className="toDo">
                    <div className="header">
                        <div className="header__title">TASK TRACKER</div>
                        <div className="header__dateTime"><p id="day"></p><p id="time"></p></div>
                        <div className="header__dateTime"><p id="date"></p><p>Night City</p></div>
                        <div className="header__missionCounter">1</div>
                    </div>
                    <div className="main">
                        <div className="mission">
                            <div className="mission__title">Title</div>
                            <div className="mission__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi quam, lacinia pulvinar egestas nec, aliquam in est. Ut in fringilla dui.</div>
                            <div className="mission__edit">
                                <div className="mission__edit_icons"> 1 2</div>
                                <div className="mission__status"> 3</div>
                            </div>
                        </div>

                        <div className="mission">
                            <div className="mission__title">Title</div>
                            <div className="mission__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi quam, lacinia pulvinar egestas nec, aliquam in est. Ut in fringilla dui.</div>
                            <div className="mission__edit">
                                <div className="mission__edit_icons"> 1 2</div>
                                <div className="mission__status"> 3</div>
                            </div>
                        </div>

                        <div className="mission">
                            <div className="mission__title">Title</div>
                            <div className="mission__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi quam, lacinia pulvinar egestas nec, aliquam in est. Ut in fringilla dui.</div>
                            <div className="mission__edit">
                                <div className="mission__edit_icons"> 1 2</div>
                                <div className="mission__status"> 3</div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className="footer">
                        <img src={mainButton} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default todo;