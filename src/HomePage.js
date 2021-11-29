import React,{useEffect} from 'react'
import "./HomePage.css";
import Tags from "./components/Tags"
import VideoCard from './components/VideoCard';

function HomePage(props) {
    const homePage=document.querySelector(".homepage");
    const video=document.querySelector(".videoSection");
    if(homePage){
        if(props.coll==true){
            homePage.classList.add('full_width');
            video.classList.add('full_width');
        }
        else if(props.coll==false){
            homePage.classList.remove('full_width');
            video.classList.remove('full_width');
        }

    }
    useEffect(()=>{

    },[props.coll]);
    


    return (
        


        <div className="homepage">
            <Tags/>
            <div className="videoSection">
            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/vD1nv-I5JhU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwmsC31vXoDbyq6DJUh4JbSozixQ"
            duration="15:07"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="React JS Netflix Clone Tutorial | #5-Homepage Component"
            views="200 views"
            time="1 week ago"
            coll={props.coll}
            />
            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/X49GcTtLxhY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF7M8SEBk6eTrwdsuoZXTrbCHxow"
            duration="08:38"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="HTML & CSS Tutorial | Card UI Tutorial - Web Design Tutorial"
            views="210 views"
            time="1 month ago"
            coll={props.coll}
            />
            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/5ecoM_jEUuk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_h5PbtphpV2_mAuYR_kT3WCEPqg"
            duration="4:30"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="Websites for UI/UX Inspirations | HTML & CSS Design"
            views="70 views"
            time="2 week ago"
            coll={props.coll}
            />
            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/vD1nv-I5JhU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwmsC31vXoDbyq6DJUh4JbSozixQ"
            duration="5:03"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="React JS Netflix Clone Tutorial | #2-Footer Component"
            views="158 views"
            time="2 week ago"
            coll={props.coll}
            />

            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/lZ6jbxV3NTE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhPiRS34d9vVedgCJH1Lqm8bMh3Q"
            duration="09:47"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="HTML & CSS Tutorial | Card UI Tutorial - Web Design Tutorial"
            views="190 views"
            time="3 week ago"
            coll={props.coll}
            />
            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/LqpIt3mqcz0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCUbsVxNtgYjEx02VI3CR1uhF-vjw"
            duration="9:22"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="ReactJS Firebase Authentication Tutorial"
            views="147 views"
            time="1 month ago"
            coll={props.coll}
            />
            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/vD1nv-I5JhU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwmsC31vXoDbyq6DJUh4JbSozixQ"
            duration="15:07"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="React JS Netflix Clone Tutorial | #5-Homepage Component"
            views="200 views"
            time="1 week ago"
            coll={props.coll}
            />
            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/vD1nv-I5JhU/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCwmsC31vXoDbyq6DJUh4JbSozixQ"
            duration="15:07"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="React JS Netflix Clone Tutorial | #5-Homepage Component"
            views="200 views"
            time="1 week ago"
            coll={props.coll}
            />
            <VideoCard 
            thumbnail="https://i.ytimg.com/vi/X49GcTtLxhY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBF7M8SEBk6eTrwdsuoZXTrbCHxow"
            duration="08:38"
            channelName="devNtech"
            channelLogo="https://yt3.ggpht.com/NpBI-AonCK4jgOnBE56r8QRsv8a3l3dSl7slpARb9EDUktQORWybFt7LzqxgLNsjtgNVQhv6TNg=s176-c-k-c0x00ffffff-no-rj"
            title="HTML & CSS Tutorial | Card UI Tutorial - Web Design Tutorial"
            views="210 views"
            time="1 month ago"
            coll={props.coll}
            />
            </div>
        </div>
    )
}

export default HomePage
