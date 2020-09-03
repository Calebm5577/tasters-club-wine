import React from 'react'
import '../CSS/main.scss'

export const WineItem = ({img, rating, star1, star2, star3, star4, star5, num, winery, name, flag, location, price }) => {
    return (
    <div className="WineItem">
        <div className="WineItem-div1">
            <div className="WineItem-div1-pt1">
                <img src={img} alt="wine bottle" className="WineItem-div1-pt1-bottle"/>
            </div>
            <div className="WineItem-div1-pt2">
                <h1 className="WineItem-div1-pt2-rating">{rating}</h1>
                <span className="WineItem-div1-pt2-stars">
                    <img src={star1} alt="star" className="WineItem-div1-pt2-star"/>
                    <img src={star2} alt="star" className="WineItem-div1-pt2-star"/>
                    <img src={star3} alt="star" className="WineItem-div1-pt2-star"/>
                    <img src={star4} alt="star" className="WineItem-div1-pt2-star"/>
                    <img src={star5} alt="star" className="WineItem-div1-pt2-star"/>
                </span>
                <p className="WineItem-div1-pt2-num">({num})</p>
                <button className="WineItem-div1-pt2-cart"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>cart icon</title><g id="cart_2_"><polygon class="cart__cart--1RnSg" stroke="#1d1d1d" points="21.2,6 4.4,6 6.5,13.4 19.1,12.4 		"></polygon><circle class="cart__cart--1RnSg" stroke="#1d1d1d" cx="16.8" cy="19.5" r="1.2"></circle><circle class="cart__cart--1RnSg" stroke="#1d1d1d" cx="8.7" cy="19.5" r="1.2"></circle><polyline class="cart__cart--1RnSg" stroke="#1d1d1d" points="4.4,6 3.4,3.3 1.2,3.3 		"></polyline><polyline class="cart__cart--1RnSg" stroke="#1d1d1d" points="6.5,13.4 5.5,16.6 17,16.6 		"></polyline></g></svg></button>
            </div>
        </div>
            <div className="WineItem-div2">
                <p className="WineItem-div2-winery">{winery}</p>
                <h3 className="WineItem-div2-name">{name}</h3>
                <span className="WineItem-div2-span">
                    <img src={flag} alt="flag" className="WineItem-div2-span-flag"/>
                    <p className="WineItem-div2-span-location">{location}</p>
                </span>
                <span className="flex-span">
                    <span className="flex-span-1">
                        <h2 className="WineItem-div2-price">{price}</h2>
                    </span>
                    <span className="flex-span-2">
                        <span className="flex-span-2-counter">
                            <button className="flex-span-2-counter-button">-</button>
                            <p className="flex-span-2-counter-number">6</p>
                            <button className="flex-span-2-counter-button">+</button>
                        </span>
                        <button className="WineItem-div1-pt2-750cart"><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>cart icon</title><g id="cart_2_"><polygon class="cart__cart--1RnSg" stroke="#1d1d1d" points="21.2,6 4.4,6 6.5,13.4 19.1,12.4 		"></polygon><circle class="cart__cart--1RnSg" stroke="#1d1d1d" cx="16.8" cy="19.5" r="1.2"></circle><circle class="cart__cart--1RnSg" stroke="#1d1d1d" cx="8.7" cy="19.5" r="1.2"></circle><polyline class="cart__cart--1RnSg" stroke="#1d1d1d" points="4.4,6 3.4,3.3 1.2,3.3 		"></polyline><polyline class="cart__cart--1RnSg" stroke="#1d1d1d" points="6.5,13.4 5.5,16.6 17,16.6 		"></polyline></g></svg></button>
                    </span>
                   
                </span>
                
            </div>
    </div>
    )
}

export default WineItem
