import React from 'react'
import "./Overview.css"
import Form from '../Form/Form'
import gmy from "../../Assets/CAtegory/gymi.jpg"
import Basketball from "../../Assets/CAtegory/basketball.jpg"
import Swimming from "../../Assets/CAtegory/pool.jpg"
import banhall from "../../Assets/CAtegory/hall.jpg"
import spot from "../../Assets/CAtegory/jogging track.jpg"
import Play from "../../Assets/CAtegory/kids play.jpg"
import ReactOwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Overview = () => {
    const responsiveOptions = {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        },
    };
    return (
        <div className="overview">
            <div className="about-main">
                <div className="overview-item">
                    <div className="overview-left">
                        <div className="overview-form">
                        <Form heading={"Book Your Site Visit"} btntxt={"Book A Site Visit"} />
                        </div>
                    </div>
                    <div className="overview-right">
                        <div className="overview-title">
                            <h3>Overview</h3>
                        </div>
                        <div className="overview-detail">
                            <p>Sobha Aranya is a new housing estate by Sobha Limited, that is widely known company in the field of housing industry. This project is surrounded by cover hence it is found in a relatively quiet environment. Sobha Aranya stands to provide a comfortable and luxurious lifestyle for people residing in it. Now it is the right time to know more about Sobha Aranya in a simple language.                            </p>
                            <p>Sobha Aranya property is developed with concepts of modern day architecture. The features of the buildings include; The building structures are fashionable and firm. The strategy is tailored on optimising on natural light and fresh air infiltration. This means that the apartments are bright with adequate fresh air circulating in the rooms. High-quality materials make sure that the homes that they will be constructing is very strong and safe. </p>
                        </div>
                        <div className="overview-category">
                            <ReactOwlCarousel
                                items={6}
                                nav={true}
                                dots={false}
                                responsive={responsiveOptions}
                            >
                                <div className="category-card">
                                    <img src={gmy} alt="Sobha Aranya " />
                                    <p>Gym</p>
                                </div>
                                <div className="category-card">
                                    <img src={Swimming} alt="Sobha Aranya" />
                                    <p>Swimming Pool</p>
                                </div>
                                <div className="category-card">
                                    <img src={banhall} alt="Sobha Aranya  price" />
                                    <p>multipurpose Hall</p>
                                </div>
                                <div className="category-card">
                                    <img src={Basketball} alt="Sobha Aranya  Expressway" />
                                    <p>Basketball Court</p>
                                </div>
                                <div className="category-card">
                                    <img src={spot} alt="Sobha Aranya  Plans" />
                                    <p>Jogging Track</p>
                                </div>
                                <div className="category-card">
                                    <img src={Play} alt="Sobha Aranya  Plans" />
                                    <p>Kid's Play</p>
                                </div>
                            </ReactOwlCarousel>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Overview
