import React, { Component } from "react";
import axios from "axios";
import InstagramEmbed from 'react-instagram-embed';

class MainInstagram extends Component {

    render() {
        return (
            <InstagramEmbed
                url='https://instagr.am/p/Zw9o4/'
                // maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => { }}
                onSuccess={() => { }}
                onAfterRender={() => { }}
                onFailure={() => { }}
            />
        )
    }
}

export default MainInstagram;