import React from 'react';
import './Section.css'

const Section = () => {
    return (
        <div>
            <h2 className="wv-title">Workout Videos</h2>
            <div className="videos">
                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UItWltVZZmE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/UBMk30rjy0o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/24fdcMw0Bj0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/n60cl_UwZC4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZzOk6yH9bT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="vid-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/oGVhANgWRlg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
};

export default Section;