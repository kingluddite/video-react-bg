import React, { Component } from 'react';

import VideoBgComponent from 'react-videobg';
import videoSourceMp4 from '../assets/videos/splash.mp4';
import videoSourceWebm from '../assets/videos/splash.webm';
// import videoSourceOgv from './assets/sample.ogv'
// import poster from '../assets/images/cactus.jpg';

class App extends Component {
    render() {
        const params = {
            sources: [videoSourceMp4, videoSourceWebm],
            videosize: {
                w: 1920,
                h: 1080
            },
            fitType: 'cover',
            videoProps: {
                // poster: poster,
                muted: true,
                autoPlay: true,
                loop: true,
                playsInline: true,
                crossOrigin: 'anonymous'
            },
            eventHandler: {
                loadstart: (e) => {
                    console.log('loadstart')
                },
                progress: (e) => {
                    console.log('pregoress:', e)
                },
                canplay: (e) => {
                    console.log('canplay', e)
                    console.log('node:', e.currentTarget)
                }
            }
        }

        return (
            <div className="App">
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <h1 style={{ position: 'relative', zIndex: 10 }}>Isn't this cool</h1>
                    <VideoBgComponent {...params} />
                </div>
            </div>
        );
    }
}

export default App;
