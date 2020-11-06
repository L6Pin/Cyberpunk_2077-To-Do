import React, { Component, useEffect } from 'react';
import videoBg from "../img/videoBg.mp4";
import mainButton from '../img/mainBtn.png';


class todo extends Component {

    constructor(){
        super()
        this.state = {
            newMissionOpened: false,
            missions: []
        }   
    }

    componentDidMount(){
        
        //   Code for adding time in the header 
        //----------------------------------------
        let getDay = () => {
            let currentDay = new Date().getDay();
            let day;
            switch (currentDay) {
                case 0:
                  day = "SUNDAY";
                  return day;
                case 1:
                  day = "MONDAY";
                  return day;
                case 2:
                   day = "TUESDAY";
                   return day;
                case 3:
                  day = "WEDNESDAY";
                  return day;
                case 4:
                  day = "THURSDAY";
                  return day;
                case 5:
                  day = "FRIDAY";
                  return day;
                case 6:
                  day = "SATURDAY";
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

        let getTextMonth = (month) =>{
            let textMonth = "";
            switch(month){
                case 0:
                textMonth = "January"
                return textMonth;
                case 1:
                textMonth = "February"
                return textMonth; 
                case 2:
                textMonth = "March"
                return textMonth; 
                case 3:
                textMonth = "April"
                return textMonth; 
                case 4:
                textMonth = "May"
                return textMonth; 
                case 5:
                textMonth = "June"
                return textMonth; 
                case 6:
                textMonth = "July"
                return textMonth; 
                case 7:
                textMonth = "August"
                return textMonth; 
                case 8:
                textMonth = "September"
                return textMonth; 
                case 9:
                textMonth = "October"
                return textMonth; 
                case 10:
                textMonth = "November"
                return textMonth; 
                case 11:
                textMonth = "December"
                return textMonth; 
            }
        }

        let getDate = () => {
            let time = new Date();
            let dayNum = time.getDay() + 1;
            let month = time.getMonth();
            let year = time.getFullYear();
            document.querySelector('#date').innerHTML = dayNum + "‎‎‎‎‎‎‎ " + getTextMonth(month) + " " + year;
        }

        let appTime = () => {
            document.querySelector('#day').innerHTML = getDay()
            getTime()
            getDate()
        }

        setInterval(appTime, 1000);
       //---------------------------------------------


       if (JSON.stringify(localStorage.getItem('msn')).length > 4)
       {
         this.setState({
           missions: JSON.parse(localStorage.getItem('msn'))
         })
       }
 
    
    }

    render() {

  
        
        let NewMissionWindow = () => {
            this.setState({newMissionOpened: !this.state.newMissionOpened})
            
            
        }

        let addNewMission = () => {

            let mission = {
                title: document.querySelector('#missionTitle').value,
                text: document.querySelector('#missionText').value,
                isDone: false
            }

            this.state.missions.push(mission)

            localStorage.setItem("key", "value");
  
            document.querySelector('#missionTitle').value = ''
            document.querySelector('#missionText').value = ''     
            
            this.setState({
                newMissionOpened: false
            })
            
            localStorage.setItem('msn', JSON.stringify(this.state.missions))
            
        }

        return (
            <div className="toDoContainer">
             
                <div className="toDoContainer__bg">
                    <video autoPlay muted loop>
                        <source src={videoBg} type="video/mp4" />
                    </video>
                </div>
                <div className="toDo">
                <div className={this.state.newMissionOpened ? "createNewMissionContainer createNewMissionOpen" : "createNewMissionContainer"}>
                    <div className="createNewMission">
                        <input type="text" id="missionTitle"/>
                        <textarea name="" id="missionText" cols="30" rows="10"></textarea>
                        <img src={mainButton} id="addBtn" onClick={addNewMission} alt=""/>
                    </div>
                </div>
                    <div className="header">
                        <div className="header__title">TASK TRACKER</div>
                        <div className="header__dateTime"><p id="day"></p><p id="time"></p></div>
                        <div className="header__dateTime"><p id="date"></p><p>Night City</p></div>
                        <div className="header__missionCounter">1</div>
                    </div>
                    <div className={this.state.newMissionOpened ? "main mainOpen" : "main"}>
                        {
                            this.state.missions.map(item => (
                                <div className="mission">
                                <div className="mission__title" id="mTitle">{item.title}</div>
                                <div className="mission__text" id="mText">{item.text}</div>
                                <div className="mission__edit">
                                    <div className="mission__edit_icons"> 1 2</div>
                                    <div className="mission__status"> 3</div>
                                </div>
                                </div> 
                                )
                            )
                        }
                    </div>
                    <div className="footer">
                        <img src={mainButton} id="mainBtn" onClick={NewMissionWindow} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default todo;