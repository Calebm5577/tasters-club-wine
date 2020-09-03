import React from 'react'

export const Advertisements = () => {
    return (
        <div className="Advertisements">
            <div className="Advertisements-Div1">
                <span className="Advertisements-Div1-span1">
                    <p className="Advertisements-Div1-span1-paragraph">ALL WINES RATED BY OUR USERS</p>
                    <h1 className="Advertisements-Div1-span1-title">Great offers right now!</h1>
                </span>
                <span className="Advertisements-Div1-span2">
                    <img className="Advertisements-Div1-span2-img" src="https://www.vivino.com/packs/e6591caba3e0b573e172591c4c0f0d3a.svg" />
                    <button className="Advertisements-Div1-span2-button">Show offers</button>
                </span>
            </div>
            <div className="Advertisements-Div2">
                <span className="Advertisements-Div2-span1">
                    <img className="Advertisements-Div2-span1-img" src="https://www.vivino.com/packs/0c62e2a92d7bfc5c2fd3f44cfccd8a5c.svg" />
                    <p className="Advertisements-Div2-span1-paragraph">DIVE INTO MILLIONS OF RATINGS</p>
                </span>
                <span className="Advertisements-Div2-span2">
                    <h1 className="Advertisements-Div2-span2-title">Explore the most popular wines</h1>
                    <button className="Advertisements-Div2-span2-button">Shop now</button>
                </span>
            </div>
        </div>
    )
}

export default Advertisements
