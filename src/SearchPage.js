import React,{useEffect} from 'react'
import "./SearchPage.css";
import{TuneOutlined} from "@material-ui/icons"
import ChannelTile from './components/ChannelTile';
import VideoTile from "./components/VideoTile";
import Thumbnail4 from "./svg/thumbnail4.png";
import Thumbnail3 from "./svg/thumbnail3.png";
import Thumbnail2 from "./svg/thumbnail2.png";
function SearchPage(props) {

    const homePage=document.querySelector(".searchPage");
    if(homePage){
        if(props.coll==true){
            homePage.classList.add('full_width');
        }
        else if(props.coll==false){
            homePage.classList.remove('full_width');
        }

    }
    useEffect(()=>{

    },[props.coll]);

    return (
        <div className="searchPage">
        <div className="filter">
            <TuneOutlined className="filterIcon"/>
            <h2 className="filterHeading">FILTERS</h2>
        </div>
        <ChannelTile/>
        <h4>Latest from devNtech</h4>
        <VideoTile
        thumbnail={Thumbnail4}
        duration="8:31"
        Title="ReactJS Youtube UI Clone Tutorial | #4- Completing Home Page"
        views="69"
        time="1 day ago"
        img="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj-mo"
        name="devNtech"
        desc="Hey Everyone, this is the fifth video of the series in which we'll be creating Youtube UI Clone using ReactJs. In this video we'll be ..."
        />    
        <VideoTile
        thumbnail={Thumbnail3}
        duration="8:38"
        Title="ReactJS Youtube UI Clone Tutorial | #3- Video Card Component"
        views="65"
        time="3 days ago"
        img="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj-mo"
        name="devNtech"
        desc="Hey Everyone, this is the fourth video of the series in which we'll be creating Youtube UI Clone using ReactJs. In this video we'll ..."
        />
        <VideoTile
        thumbnail={Thumbnail2}
        duration="6:56"
        Title="ReactJS Youtube UI Clone Tutorial | #3- Sidebar Component (Part-2)"
        views="79"
        time="5 days ago"
        img="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj-mo"
        name="devNtech"
        desc="Hey Everyone, this is the third video of the series in which we'll be creating Youtube UI Clone using ReactJs. In this video we'll ..."
        />
        <VideoTile
        thumbnail="https://i.ytimg.com/vi/vD1nv-I5JhU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCS6afTFKW1e3KoSR4MPomjw3LsYQ"
        duration="15:08"
        Title="ReactJS Netflix Clone Tutorial | #5- Home Page Component"
        views="109"
        time="2 weeks ago"
        img="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj-mo"
        name="devNtech"
        desc="Hello friends, this is the fifth video of the series in which we'll be creating the clone of the website jiska password aap hamesha ..."
        />
        </div>
    )
}

export default SearchPage
