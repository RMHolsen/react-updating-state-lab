// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {
    constructor() {
        super();
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
                video: {
                    resolution: '1080p'
              }
            }
        }
    }

    /* assigning state on multiple levels 
        this.setState({
            addressInfo: {
                ...this.state.addressInfo,
                city: 'New York City'
            }
        })

        in this case addressInfo: is the first level
        this.state.addressInfo picks up the data contained within addressInfo
        city: 'New York City' either assigns or reassigns a value to the key of city
    */

    bitrateClickHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resClickHandler = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
                // yes, if it's nested this far it needs to be reset from the second tier all the way in
                // i.e. the first tier is this.state
                // the second tier is this.state.settings
                // and so on in.
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.bitrateClickHandler}></button>
                <button className="resolution" onClick={this.resClickHandler}></button>
            </div>
        )
    }
}

export default YouTubeDebugger