import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Services.css'
import img from '../../assets/services/6001.jpg'
import img2 from '../../assets/services/6002.jpg'
import img3 from '../../assets/services/6003.jpg'
import img4 from '../../assets/services/6004.jpg'
import img5 from '../../assets/services/6005.jpg'
import img6 from '../../assets/services/6006.jpg'



const Services = () => {
    return (
        <div>
            <h2 className="title-sr">Our <span className="fitness">Fitness</span> Servicess</h2>
            <div>
                <CardGroup className='card-grid'>
                    <div className="card-div">
                        <Card className="bg-color">
                            <div className="inner">
                                <Card.Img className="img1" variant="top" src={img} />
                            </div>
                            <Card.Body className="card-body">
                                <Card.Title className="crd-title">Boutique Gyms</Card.Title>
                                <Card.Text>
                                    At boutique locations, you’re not just an individual.
                                    <br /> You sign up and (often) work out as part of a group,
                                    <br /> or at least form an individual
                                    <br /> relationship with a trainer or instructor.
                                </Card.Text>
                                <button className="crd-btn">Membership</button>
                            </Card.Body>
                        </Card>
                        <Card className="bg-color">
                            <div className="inner">
                                <Card.Img className="img1" variant="top" src={img2} />
                            </div>
                            <Card.Body className="card-body">
                                <Card.Title className="crd-title">Powerlifting gyms</Card.Title>
                                <Card.Text>
                                    When your goal is to bulk up or get crazy strong,
                                    <br /> you may want to sign up for a powerlifting gym.
                                    <br /> These locations are laser-focused
                                    <br /> on offering the most heavy-duty.
                                </Card.Text>
                                <button className="crd-btn">Membership</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-div2 ">
                        <Card className="bg-color">
                            <div className="inner">
                                <Card.Img className="img1" variant="top" src={img3} />
                            </div>
                            <Card.Body className="card-body">
                                <Card.Title className="crd-title">Personal training</Card.Title>
                                <Card.Text>
                                    When your goal is to bulk up or get crazy strong,
                                    <br /> you may want to sign up for a powerlifting gym.
                                    <br /> These locations are laser-focused
                                    <br /> on offering the most heavy-duty.
                                </Card.Text>
                                <button className="crd-btn">Membership</button>
                            </Card.Body>
                        </Card>
                        <Card className="bg-color">
                            <div className="inner">
                                <Card.Img className="img1" variant="top" src={img4} />
                            </div>
                            <Card.Body className="card-body">
                                <Card.Title className="crd-title">Women’s gyms</Card.Title>
                                <Card.Text>
                                    When your goal is to bulk up or get crazy strong,
                                    <br /> you may want to sign up for a powerlifting gym.
                                    <br /> These locations are laser-focused
                                    <br /> on offering the most heavy-duty.
                                </Card.Text>
                                <button className="crd-btn">Membership</button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="card-div">
                        <Card className="bg-color">
                            <div className="inner">
                                <Card.Img className="img1" variant="top" src={img5} />
                            </div>
                            <Card.Body className="card-body">
                                <Card.Title className="crd-title">Crossfit Gym</Card.Title>
                                <Card.Text>
                                    When your goal is to bulk up or get crazy strong,
                                    <br /> you may want to sign up for a powerlifting gym.
                                    <br /> These locations are laser-focused
                                    <br /> on offering the most heavy-duty.
                                </Card.Text>
                                <button className="crd-btn">Membership</button>
                            </Card.Body>
                        </Card>
                        <Card className="bg-color">
                            <div className="inner">
                                <Card.Img className="img1" variant="top" src={img6} />
                            </div>
                            <Card.Body className="card-body">
                                <Card.Title className="crd-title">Big box gyms</Card.Title>
                                <Card.Text>
                                    When your goal is to bulk up or get crazy strong,
                                    <br /> you may want to sign up for a powerlifting gym.
                                    <br /> These locations are laser-focused
                                    <br /> on offering the most heavy-duty.
                                </Card.Text>
                                <button className="crd-btn">Membership</button>
                            </Card.Body>
                        </Card>
                    </div>
                </CardGroup>

            </div>
            <div>
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Services;