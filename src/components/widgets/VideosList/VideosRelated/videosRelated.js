import React from "react";
import '../videosList.css'
import VideosListTemplate from "../videosListTemplate";

const videosRelated = (props) => (
    <div className="relatedWrapper">
        <VideosListTemplate
            data={props.data}
            teams={props.teams}
        />
    </div>
)

export default videosRelated;