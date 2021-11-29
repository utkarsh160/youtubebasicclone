import React from 'react'
import "./VideoCard.css";

//we'll again be usinfg some of the material ui icons so let's import them
import{MoreVert,PlaylistAdd,WatchLater} from "@material-ui/icons";
import {Avatar} from "@material-ui/core";

//I've made some changes in teh video card 
//In the last video all the data was hard codded but as we'll be using this card multiple times we'll be passing the data as props 
//So you can pause the video and can make the necessary changes

function VideoCard(props) {
    const homePage=document.querySelector(".videoCard");
    if(homePage){
        if(props.coll==true){
            homePage.classList.add('full_width');
        }
        else if(props.coll==false){
            homePage.classList.remove('full_width');
        }

    }
    return (
        <div className="videoCard">
        <div className="watchLater"><WatchLater className="videoIcon"/></div>
        <div className="playlistAdd"><PlaylistAdd className="videoIcon"/></div>
           <img className="videoImg" src={props.thumbnail}/>
           <div className="duration">
           {props.duration}
           </div>
           <div className="videoData">
           <Avatar src={props.channelLogo}/>
           <div className="channelDetails">
           <h5>{props.title}</h5>
           <p className="c_name">{props.channelName}</p>
           <p>{props.views} &bull; {props.time}</p>
           </div> 
           <MoreVert className="moreIcon"/>
           </div> 
        </div>
    )
}

export default VideoCard

//We have made the video card in the next video we'll complete the home screen using these card components
//see you in the next video

//Like and share it with your friends