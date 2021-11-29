import React from 'react'
import"./ChannelTile.css";
import {NotificationsActive} from "@material-ui/icons"
function ChannelTile(props) {
    return (
        <div className="channelTile">
        <div className="tile_left">
        <img className="channelImg" src="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj-mo"/>
        </div>
            <div className="tile_middle">
            <p className="channelNamee">devNtech</p>
            <p style={{fontSize:"13px",color:"#606060",letterSpacing:"0.3px"}}>185 subscribers &bull; 42 videos</p>
            </div>
            <div className="tile_right">
            <button className="subscribe">SUBSCRIBED</button>
            <NotificationsActive className="bellIcon"/>
            </div>
            
        </div>
    )
}

export default ChannelTile
