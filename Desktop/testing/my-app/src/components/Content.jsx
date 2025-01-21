import React from "react";
import cardsfirst from './assets/CardsFirst.png'
import cardImageSec from './assets/CardsSec.png'
import cardImageThird from './assets/Cardsthird.png'


function Cards() {
    return (
        <div className="cards-banner">
            <div className="cards-container">
                <div className="cards-main-content">
                    <div className="cards-content">
                        <div className="card-images">
                            <img src={cardsfirst} alt="card" /> 
                        </div>
                        <div className="cards-content1">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Aut, dolore facilis! Nostrum sequi nobis libero nesciunt vel iste,
                                ut perspiciatis tempore a earum molestias qui provident consequatur
                                temporibus ratione totam.
                            </p>
                        </div>
                    </div>
                    <div className="cards-content">
                        <div className="card-images">
                            <img src={cardImageSec} alt="" />
                        </div>
                        <div className="cards-content1">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Aut, dolore facilis! Nostrum sequi nobis libero nesciunt vel iste,
                                ut perspiciatis tempore a earum molestias qui provident consequatur
                                temporibus ratione totam.
                            </p>
                        </div>
                    </div>
                    <div className="cards-content">
                        <div className="card-images">
                            <img src={cardImageThird} alt="" />
                        </div>
                        <div className="cards-content1">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Aut, dolore facilis! Nostrum sequi nobis libero nesciunt vel iste,
                                ut perspiciatis tempore a earum molestias qui provident consequatur
                                temporibus ratione totam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


};
export default Cards;