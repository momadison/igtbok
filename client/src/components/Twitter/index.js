import React, { Component } from "react";
import axios from "axios";
import { Timeline } from 'react-twitter-widgets';

class MainTwitter extends Component {

    render() {
        return (
            
            <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'twitterdev'
                }}
                options={{
                    username: 'TwitterDev',
                    height: '400'
                }}
                onLoad={() => console.log('Timeline is loaded!')}
            />
        )
    }
}

export default MainTwitter;