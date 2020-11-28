import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';
import './SearchPage.css';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="660k"
                noOfVideos={382}
                description="This is the description of the youtube channel you have searched for!!"
            />
            <hr/>

            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Check this latest video from clever Programmer"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CIjihv4F&rs=AOn4CLBwmP9wF8nd6gGQ12kQNvaIJOmEtA"
            />

            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Check this latest video from clever Programmer"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CIjihv4F&rs=AOn4CLBwmP9wF8nd6gGQ12kQNvaIJOmEtA"
            />

            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Check this latest video from clever Programmer"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CIjihv4F&rs=AOn4CLBwmP9wF8nd6gGQ12kQNvaIJOmEtA"
            />

            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Check this latest video from clever Programmer"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CIjihv4F&rs=AOn4CLBwmP9wF8nd6gGQ12kQNvaIJOmEtA"
            />

            <VideoRow 
                views="1.4M"
                subs="660K"
                description="Check this latest video from clever Programmer"
                timestamp="59 seconds ago"
                channel="Clever Programmer"
                title="Let's Build a Youtube Clone"
                image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CIjihv4F&rs=AOn4CLBwmP9wF8nd6gGQ12kQNvaIJOmEtA"
            />
        </div>
    )
}

export default SearchPage;
