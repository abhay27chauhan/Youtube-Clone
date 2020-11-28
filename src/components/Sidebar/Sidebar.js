import React from 'react';
import SidebarRow from '../SidebarRow/SidebarRow';
import './Sidebar.css';
import { Subscriptions, Whatshot, Home, VideoLibrary, History, OndemandVideo, WatchLater, ThumbDownAltOutlined, ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow selected Icon={Home} title="Home" />
            <SidebarRow Icon={Whatshot} title="Trending" />
            <SidebarRow Icon={Subscriptions} title="Subscription" />
            <hr />
            <SidebarRow Icon={VideoLibrary} title="Library" />
            <SidebarRow Icon={History} title="History" />
            <SidebarRow Icon={OndemandVideo} title="Your videos" />
            <SidebarRow Icon={WatchLater} title="Watch Later" />
            <SidebarRow Icon={ThumbDownAltOutlined} title="Liked videos" />
            <SidebarRow Icon={ExpandMoreOutlined} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar;
