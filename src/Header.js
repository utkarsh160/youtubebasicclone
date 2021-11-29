import React,{useState} from 'react'
//lets import the icons which we will be using in our project from material-ui
import MenuIcon from "@material-ui/icons/Menu";
import YtLogo from "./svg/ytLogo.png";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Microphone from "@material-ui/icons/Mic";
import"./Header.css";

import SidebarRow from "./components/SidebarRow"
import Home from "@material-ui/icons/Home"

import ExploreIcon from "@material-ui/icons/Explore"
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon  from '@material-ui/icons/VideoLibrary';
import { History,OndemandVideo,WatchLater,ThumbUp,ExpandMoreOutlined,YouTube,Theaters,SportsEsports,Settings,Flag,Help,Feedback } from '@material-ui/icons';
import "./Sidebar.css"
import SubscriptionRow from "./components/SubscriptionRow"
import {Link} from "react-router-dom";


//We'll be creating three different section of the Header left middle and right
//in the left will be the menu button and the youtube logo
//In the middle would be search bar and the microphone icon
//In the right part will be the 3 icons along with the avatar icon

//Now lets write some css to make it look like the original one






function Header(props) {
    
    const [searchval,setSearchVal]= useState("");


   

    const toggleSidebar=()=>{
        const sidebar= document.querySelector(".sidebar");
        const sidebar_mini=document.querySelector(".sidebar_mini");
        const video=document.querySelector(".recommended");
        if(props.coll==true){
            props.setColl(false);
        }
        else{
            props.setColl(true);
        }
        console.log(sidebar);
        if(sidebar)
        sidebar.classList.toggle('active');
        if(sidebar_mini){
            sidebar_mini.classList.toggle('active');
        }
        if(video){
            video.classList.toggle('active');
        }
    }
    
    
    return (
        <div className="parent_header">
        <div className="header">
        <div className="header__left">
        <div onClick={toggleSidebar}><MenuIcon id="burger"/></div>
        <Link to ="/">
        <img className="header__logo" src={YtLogo}/>
        </Link>
        </div>
        <div className="header_input">
            <div className="header__middle">
            
            <input className="SearchInput" placeholder="Search" onChange={(e)=>setSearchVal(e.target.value)} type="text" value={searchval}/>
           
        <Link to ={`/search/${searchval}`}>  
        <SearchIcon className="header_searchBtn"/>
        </Link>
            </div>
            <Microphone className="header__icons"/>
        </div>
        <div className="header__right">
        <VideoCallIcon className="header__icons"/>
        <AppsIcon className="header__icons"/>
        <NotificationIcon className="header__icons"/>
        <Avatar
        src="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"/>

        </div>
        


        </div>
        <div className="sidebar" >
         
         <SidebarRow icon={Home} title="Home"/>   
         <SidebarRow  icon ={ExploreIcon} title="Explore"/>
         <SidebarRow  icon={SubscriptionIcon} title="Subscriptions"/>
         <hr></hr>
         <SidebarRow  icon={VideoLibraryIcon} title="Library"/>
         <SidebarRow  icon={History} title="History"/>
         <SidebarRow  icon={OndemandVideo} title="Your videos"/>
         <SidebarRow  icon={WatchLater} title="Watch later"/>
         <SidebarRow  icon={ThumbUp} title="Liked videos"/>
         <SidebarRow  icon={ExpandMoreOutlined} title="Show more"/>
         
        <hr/>
        <h4 className="sidebar_heading">SUBSCRIPTIONS</h4>
        <SubscriptionRow  img="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj" name="DevnTech"/>
        <SubscriptionRow  img="https://yt3.ggpht.com/ytc/AKedOLTPYzMbMQSkvxTeWbcNj1JPVpQM97sSdVj6a3pLbA=s176-c-k-c0x00ffffff-no-rj" name="RakaZone Gaming"/>
        <SubscriptionRow  img="https://yt3.ggpht.com/ytc/AKedOLRyyU9MiOq9MH0sopx1zpmcjdNBKDIripb6RAPw=s176-c-k-c0x00ffffff-no-rj-mo" name="S8ul"/>
        <SubscriptionRow  img="https://yt3.ggpht.com/ytc/AKedOLRehlP8pcyXhsyIH9LYMbRd_WwiJBcHynYwYpuD6A=s176-c-k-c0x00ffffff-no-rj-mo" name="Fa2"/>
        <SubscriptionRow  img="https://yt3.ggpht.com/ytc/AKedOLSiAN_qVf2tHZSo5h1yThgr-NP_xqGvGrmPM6UctA=s176-c-k-c0x00ffffff-no-rj-mo" name="Tbone"/>
        <SidebarRow className="rowss" icon={ExpandMoreOutlined} title="Show more"/>
        <hr/>
        <h4 className="sidebar_heading">MORE FROM YOUTUBE</h4>
        <SidebarRow  icon={YouTube} title="Youtube premium"/>
        <SidebarRow  icon={Theaters} title="Movies"/>
        <SidebarRow  icon={SportsEsports} title="Gaming"/>
        <hr/>
        <SidebarRow  icon={Settings} title="Settings"/>
        <SidebarRow  icon={Flag} title="Report history"/>
        <SidebarRow  icon={Help} title="Help"/>
        <SidebarRow  icon={Feedback} title="Send feedback"/>
        <hr></hr>
        <div className="footer">
        <p>About &nbsp; Press &nbsp; Copyright</p>
        
        <p>Contact us &nbsp; Creators</p>
        
        <p>Advertise &nbsp;  Developers</p>
        <br/>
        <p>Terms &nbsp; Privacy &nbsp;Policy & Safety</p>
        <p>How youtube works</p>
        <p>Test new features</p>
        <br></br>
        <p style={{color:"rgb(142,142,142)"}}>&#169;2021 Google LLC</p>
        </div>
        </div>
        <div className="sidebar_mini">
        <div className="miniDiv">
        <Home/>
        <p>Home</p>
        </div>
        <div className="miniDiv">
        <ExploreIcon/>
        <p>Explore</p>
        </div>
        <div className="miniDiv">
        <SubscriptionIcon/>
        <p>Subscription</p>
        </div>
        <div className="miniDiv">
        <VideoLibraryIcon/>
        <p>Library</p>
        </div>
        
        

        </div>
        
        </div>
        
        
    )
}

export default Header
//For the icons like the menu button the upload button search button we'll be using material ui icons so lets see how wto use those
//We have pretty much made the exact same copy of the header in next video we'll make the sidebar
//See you in the next video