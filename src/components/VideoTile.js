import React from 'react'
import "./VideoTile.css";
import{MoreVert,PlaylistAdd,WatchLater} from "@material-ui/icons";

function VideoTile(props) {
    return (
        <div className="videoTile">
        
        <div className="image_div">
        <div className="watchLaterr"><WatchLater className="videoIcon"/></div>
        <div className="playlistAddd"><PlaylistAdd className="videoIcon"/></div>
        <img className="thumbnail" src={props.thumbnail}/>
        <div className="durationn">
           {props.duration}
           </div>
        </div>
        <div className="title_data">
        <div className="title_div">
        {props.Title}
        <MoreVert className="vertBtn"/>
        </div>
        <p className="viewss">{props.views} views  &bull;  {props.time}</p>
        <div className="data">
        <img src={props.img}/>
        <p>{props.name}</p>
        </div>
        <p className="desc">{props.desc}</p>
        </div>
        
        </div>
    )
}

export default VideoTile
