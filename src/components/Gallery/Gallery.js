import React from 'react';
import Footer from '../Footer/Footer';
import './Gallery.css'
import img from '../../components/Gallery/images/6001.jpg'
import img2 from '../../components/Gallery/images/6002.jpg'
import img3 from '../../components/Gallery/images/6003.jpg'
import img4 from '../../components/Gallery/images/6004.jpg'
import img5 from '../../components/Gallery/images/6005.jpg'
import img6 from '../../components/Gallery/images/6006.jpg'
import img7 from '../../components/Gallery/images/6001.jpg'
import img8 from '../../components/Gallery/images/60007.jpg'

import { Card, CardGroup, } from 'react-bootstrap';

const Gallery = () => {
    return (
        <div className="gallery">
            <h2 className="head-txt">Power <span className="head-txt2">Strength</span> Gym</h2>
            <h2 className="head-txt">Gallery</h2>
            <CardGroup className='card-grid'>
                <Card>
                    <Card.Img variant="top" src={img} />

                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />

                </Card>
                <Card>
                    <Card.Img variant="top" src={img3} />

                </Card>
                <Card>
                    <Card.Img variant="top" src={img4} />

                </Card>
                <Card>
                    <Card.Img variant="top" src={img5} />

                </Card>
                <Card>
                    <Card.Img variant="top" src={img6} />

                </Card>
                <Card>
                    <Card.Img variant="top" src={img7} />

                </Card>
                <Card>
                    <Card.Img variant="top" src={img2} />

                </Card>
                <Card>
                    <Card.Img variant="top" src={img8} />

                </Card>
            </CardGroup>
            <div className="footer">
                <Footer></Footer>
            </div>

        </div>


    );
};

export default Gallery;