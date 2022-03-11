import React from "react";
import FontAwesome from "react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';

import './cardinfo.css';

const CardInfo = (props) => {


    const teamName = (teams, team) => {
        let data = teams.find((item) => {
            return item.teamId === team
        });
        if(data){
            return data.name
        }
    }

    const formatDate = (date) => {
        return moment(date).format(' DD-MM-YYYY');
    }

    return (
        <div className="cardInfo">
            <span className="teamName">
                {teamName(props.teams, props.team)}
            </span>
            <span className="date">
                <FontAwesomeIcon className="icon" icon={faCalendar}/>
                {formatDate(props.date)}
            </span>
        </div>
    )
}

export default CardInfo;