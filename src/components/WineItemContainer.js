import React from 'react'
import WineItem from '../components/WineItem'
import Button from '../components/Button'

export const WineItemContainer = () => {
    return (
        <>
            <h3>Best Sellers in North Carolina</h3>
            <p>Top-selling wines in North Carolina right now</p>
        <div className="WineItemContainer-column">
            <div className="WineItemContainer-row">
            <WineItem 
                img="https://images.vivino.com/thumbs/inpPDFy0R3OE-f8QWEeHAQ_pb_x300.png" 
                rating="4.4" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/978632d247dde6bee05db7027d0feff9.svg"
                //
                num="322"
                winery="Brown Estate"
                name="Chaos Theory 2014"
                flag="https://www.vivino.com/packs/2eb566edd02bb378fb40c4aba7814242.png"
                location="Napa Valley"
                price="$49.99"
                />

            <WineItem 
                img="https://images.vivino.com/thumbs/5fdHiGBzSgGOgY_9A8WFOw_pb_x300.png" 
                rating="4.4" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/978632d247dde6bee05db7027d0feff9.svg"
                //
                num="1892"
                winery="San Marzano"
                name="62 Aniniversaris..."
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Napa Valley"
                price="$30.38"
                />
            </div>
            <div className="WineItemContainer-row">
            <WineItem 
                img="https://images.vivino.com/thumbs/ETR6cDmIRUWiHV8613mRew_pb_x300.png" 
                rating="4.1" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                //
                num="717"
                winery="Peter Yealands"
                name="Sauvignon Blanc 2019"
                flag="https://www.vivino.com/packs/f2a7e6d78c5e2e6a75dd00396370cb09.png"
                location="Marlborough"
                price="$11.96"
                />

            <WineItem 
                img="https://images.vivino.com/thumbs/RuWjnR8WTWCGskasXK9aZg_pb_x300.png" 
                rating="3.8" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/08d2355de3317adeb6e5065584e522a2.svg"
                star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                //
                num="908"
                winery="Ruffino"
                name="Riserva Ducale Chianti Classico 2016"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Chianti Classic"
                price="$20.97"
                />
            </div>

            {/*hide*/}
        <span className="WineItemContainer-extra">
            <div className="WineItemContainer-row">
            <WineItem 
                img="https://images.vivino.com/thumbs/inpPDFy0R3OE-f8QWEeHAQ_pb_x300.png" 
                rating="4.4" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/978632d247dde6bee05db7027d0feff9.svg"
                //
                num="322"
                winery="Brown Estate"
                name="Chaos Theory 2014"
                flag="https://www.vivino.com/packs/2eb566edd02bb378fb40c4aba7814242.png"
                location="Napa Valley"
                price="$49.99"
                />

            <WineItem 
                img="https://images.vivino.com/thumbs/5fdHiGBzSgGOgY_9A8WFOw_pb_x300.png" 
                rating="4.4" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/978632d247dde6bee05db7027d0feff9.svg"
                //
                num="1892"
                winery="San Marzano"
                name="62 Aniniversaris..."
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Napa Valley"
                price="$30.38"
                />
            </div>
            <div className="WineItemContainer-row">
            <WineItem 
                img="https://images.vivino.com/thumbs/ETR6cDmIRUWiHV8613mRew_pb_x300.png" 
                rating="4.1" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                //
                num="717"
                winery="Peter Yealands"
                name="Sauvignon Blanc 2019"
                flag="https://www.vivino.com/packs/f2a7e6d78c5e2e6a75dd00396370cb09.png"
                location="Marlborough"
                price="$11.96"
                />

            <WineItem 
                img="https://images.vivino.com/thumbs/RuWjnR8WTWCGskasXK9aZg_pb_x300.png" 
                rating="3.8" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/08d2355de3317adeb6e5065584e522a2.svg"
                star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                //
                num="908"
                winery="Ruffino"
                name="Riserva Ducale Chianti Classico 2016"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Chianti Classic"
                price="$20.97"
                />
            </div>
            {/*hidden*/}
            </span>
        </div>
 
        <Button num="20" className="WineItemContainer-button"/>

            <h3>Extraordinary Italian Reds</h3>
        <div className="WineItemContainer-column">
            <div className="WineItemContainer-row">
            <WineItem 
                img="https://images.vivino.com/thumbs/opvANxvKRnqpNsTNAxnfMg_pb_x300.png" 
                rating="4.3" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                //
                num="274"
                winery="Nicolis"
                name="Amarone della Valpolicella Classico 2010"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Amarone della Valpolicella Classico"
                price="$39.99"
                />

            <WineItem 
                img="https://images.vivino.com/thumbs/2oIRUGSgRzasQa_9FJLbUw_pb_x300.png" 
                rating="4.3" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                //
                num="124"
                winery="San Romano"
                name="Dogliani 2015"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Dogliani"
                price="$28.99"
                />
            </div>
            <div className="WineItemContainer-row">
            <WineItem 
                img="https://images.vivino.com/thumbs/VfISRWL8QqaxoNzzq-fuAg_pb_x300.png" 
                rating="4.2" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                //
                num="773"
                winery="Tenuta Argentiera"
                name="Villa Donoratico Bolgheri 2017"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Bolgheri"
                price="$34.99"
                />

            <WineItem 
                img="https://images.vivino.com/thumbs/RuWjnR8WTWCGskasXK9aZg_pb_x300.png" 
                rating="3.8" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/08d2355de3317adeb6e5065584e522a2.svg"
                star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                //
                num="908"
                winery="Ruffino"
                name="Riserva Ducale Chianti Classico 2016"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Chianti Classic"
                price="$20.97"
                />
            </div>
            {/* hide */}
                <span className="WineItemContainer-extra">
            <div className="WineItemContainer-row">
            <WineItem 
                img="https://images.vivino.com/thumbs/opvANxvKRnqpNsTNAxnfMg_pb_x300.png" 
                rating="4.3" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                //
                num="274"
                winery="Nicolis"
                name="Amarone della Valpolicella Classico 2010"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Amarone della Valpolicella Classico"
                price="$39.99"
                />

            <WineItem 
                img="https://images.vivino.com/thumbs/2oIRUGSgRzasQa_9FJLbUw_pb_x300.png" 
                rating="4.3" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                //
                num="124"
                winery="San Romano"
                name="Dogliani 2015"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Dogliani"
                price="$28.99"
                />
            </div>
            <div className="WineItemContainer-row">
            <WineItem 
                img="https://images.vivino.com/thumbs/VfISRWL8QqaxoNzzq-fuAg_pb_x300.png" 
                rating="4.2" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                //
                num="773"
                winery="Tenuta Argentiera"
                name="Villa Donoratico Bolgheri 2017"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Bolgheri"
                price="$34.99"
                />

            <WineItem 
                img="https://images.vivino.com/thumbs/RuWjnR8WTWCGskasXK9aZg_pb_x300.png" 
                rating="3.8" 
                //stars
                star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                star4="https://www.vivino.com/packs/08d2355de3317adeb6e5065584e522a2.svg"
                star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                //
                num="908"
                winery="Ruffino"
                name="Riserva Ducale Chianti Classico 2016"
                flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                location="Chianti Classic"
                price="$20.97"
                />
            </div>
            </span>
            {/* hiden */}
        </div>


        <Button num="25" className="WineItemContainer-button"/>

        <h3>Unique Spanish Reds</h3>
        <div className="WineItemContainer-column">

            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/P4hQnzD3ThOig-B3RBTccg_pb_x300.png" 
                    rating="4.3" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                    //
                    num="4984"
                    winery="La Rioja Alta"
                    name="Viña Ardanza Selección Especial 2010 "
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$38.87"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/Si9NaUFtTMq5PvN8pT2mfA_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="2407"
                    winery="Imperial"
                    name="Rioja Reserva 2015"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$39.97"
                    />
            </div>
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/pgOXCXpvSJeH3Mlrmw5ecQ_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="1461"
                    winery="PSI 2017"
                    name="Rioja Reserva 2015"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Ribera del Duero"
                    price="$36.99"
                    />

                    <WineItem 
                    img="https://images.vivino.com/thumbs/yraqVgZ6RNODE-_iyaFZ4Q_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="943"
                    winery="La Rioja Alta"
                    name="Viña Alberdi Reserva 2015 "
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$19.96"
                    />
            </div>
            
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/P4hQnzD3ThOig-B3RBTccg_pb_x300.png" 
                    rating="4.3" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                    //
                    num="4984"
                    winery="La Rioja Alta"
                    name="Viña Ardanza Selección Especial 2010 "
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$38.87"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/Si9NaUFtTMq5PvN8pT2mfA_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="2407"
                    winery="Imperial"
                    name="Rioja Reserva 2015"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$39.97"
                    />
            </div>
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/pgOXCXpvSJeH3Mlrmw5ecQ_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="1461"
                    winery="PSI 2017"
                    name="Rioja Reserva 2015"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Ribera del Duero"
                    price="$36.99"
                    />

                    <WineItem 
                    img="https://images.vivino.com/thumbs/yraqVgZ6RNODE-_iyaFZ4Q_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="943"
                    winery="La Rioja Alta"
                    name="Viña Alberdi Reserva 2015 "
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$19.96"
                    />
            </div>
            
            <span className="WineItemContainer-extra">
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/P4hQnzD3ThOig-B3RBTccg_pb_x300.png" 
                    rating="4.3" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                    //
                    num="4984"
                    winery="La Rioja Alta"
                    name="Viña Ardanza Selección Especial 2010 "
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$38.87"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/Si9NaUFtTMq5PvN8pT2mfA_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="2407"
                    winery="Imperial"
                    name="Rioja Reserva 2015"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$39.97"
                    />
            </div>
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/pgOXCXpvSJeH3Mlrmw5ecQ_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="1461"
                    winery="PSI 2017"
                    name="Rioja Reserva 2015"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Ribera del Duero"
                    price="$36.99"
                    />

                    <WineItem 
                    img="https://images.vivino.com/thumbs/yraqVgZ6RNODE-_iyaFZ4Q_pb_x300.png" 
                    rating="4.2" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/22514c4234cf765492b05ae1cda82dff.svg"
                    //
                    num="943"
                    winery="La Rioja Alta"
                    name="Viña Alberdi Reserva 2015 "
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Rioja"
                    price="$19.96"
                    />
            </div>
            </span>
            {/*hidden*/}
        </div>


        <Button num="20" className="WineItemContainer-button"/>

            <h3>Pair with Fruity Desserts</h3>
        <div className="WineItemContainer-column">

            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/1tB31v4DSRmZA_g9e_RVHQ_pb_x300.png" 
                    rating="4.3" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                    //
                    num="116"
                    winery="Marchesi di Gresy"
                    name="La Serra Moscato d'Asti 2018"
                    flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                    location="Moscato d'Asti"
                    price="$19.99"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/kH-XndqaRiGu-KQ_65L8HQ_pb_x300.png" 
                    rating="4.1" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                    //
                    num="281"
                    winery="Château de Montfort "
                    name="Vouvray Demi-Sec 2017 "
                    flag="https://www.vivino.com/packs/0a28a3ccf49100786c56365a859a589a.png"
                    location="Vouvray"
                    price="$19.99"
                    />
            </div>
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/liS8rG3rSaCQ_E4Nk048lw_pb_x300.png" 
                    rating="4.1" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                    //
                    num="270"
                    winery="DeMorgenzon"
                    name="Maestro White 2016"
                    flag="https://www.vivino.com/packs/80c290649e11cb70e0d4bfd1f77bcf5c.png"
                    location="Stellenbosch"
                    price="$24.99"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/zBX1yB5dT_CbtQYBnBJpHA_pb_x300.png" 
                    rating="4.1" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                    //
                    num="263"
                    winery="I Vignaioli di S. Stefano"
                    name="Moscato d'Asti 2018 "
                    flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                    location="Moscato d'Asti"
                    price="$24.98"
                    />
            </div>
            {/*hide*/}
            <span className="WineItemContainer-extra">
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/1tB31v4DSRmZA_g9e_RVHQ_pb_x300.png" 
                    rating="4.3" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/c6ec9ebc6003747b81ce161de1252fed.svg"
                    //
                    num="116"
                    winery="Marchesi di Gresy"
                    name="La Serra Moscato d'Asti 2018"
                    flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                    location="Moscato d'Asti"
                    price="$19.99"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/kH-XndqaRiGu-KQ_65L8HQ_pb_x300.png" 
                    rating="4.1" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                    //
                    num="281"
                    winery="Château de Montfort "
                    name="Vouvray Demi-Sec 2017 "
                    flag="https://www.vivino.com/packs/0a28a3ccf49100786c56365a859a589a.png"
                    location="Vouvray"
                    price="$19.99"
                    />
            </div>
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/liS8rG3rSaCQ_E4Nk048lw_pb_x300.png" 
                    rating="4.1" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                    //
                    num="270"
                    winery="DeMorgenzon"
                    name="Maestro White 2016"
                    flag="https://www.vivino.com/packs/80c290649e11cb70e0d4bfd1f77bcf5c.png"
                    location="Stellenbosch"
                    price="$24.99"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/zBX1yB5dT_CbtQYBnBJpHA_pb_x300.png" 
                    rating="4.1" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                    //
                    num="263"
                    winery="I Vignaioli di S. Stefano"
                    name="Moscato d'Asti 2018 "
                    flag="https://www.vivino.com/packs/8438e36a0b98458b895a92c1a6012fc8.png"
                    location="Moscato d'Asti"
                    price="$24.98"
                    />
            </div>
            </span>
        </div>

        <Button num="25" className="WineItemContainer-button"/>

            <h3>Affordable reds</h3>
            <p>Great wines at great prices</p>

        <div className="WineItemContainer-column">
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/M4Xben6IR2KkRGIpek81RA_pb_x300.png" 
                    rating="4.1" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                    //
                    num="53"
                    winery="Ascent"
                    name="Cabernet Sauvignon 2012"
                    flag="https://www.vivino.com/packs/2eb566edd02bb378fb40c4aba7814242.png"
                    location="Diamond Mountain District"
                    price="$34.99"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/fiSYRzxcQPa0F1piEvjeDA_pb_x300.png" 
                    rating="3.8" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/08d2355de3317adeb6e5065584e522a2.svg"
                    star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                    //
                    num="575"
                    winery="La Cepa Alta"
                    name="Cinco Elementos 2018"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Ribera del Duero"
                    price="$15.99"
                    />
            </div>
            <div className="WineItemContainer-row">
            <WineItem 
                    img="https://images.vivino.com/thumbs/e2TIpAO7ScCu4YsNBpzZdA_pb_x300.png" 
                    rating="4.0" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                    //
                    num="47"
                    winery="Etude"
                    name="Bannockburn Pinot Noir 2014"
                    flag="https://www.vivino.com/packs/f2a7e6d78c5e2e6a75dd00396370cb09.png"
                    location="Central Otago"
                    price="$23.99"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/zqwEHdwASAKCeYrliccB9Q_pb_x300.png" 
                    rating="3.9" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/6f2b4e1c3ec9d41ed134771308fd55a2.svg"
                    star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                    //
                    num="63"
                    winery="Domaines Lupier"
                    name="La Dama 2012"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Navarra"
                    price="$19.99"
                    />
            </div>
            {/*hide*/}
            <span className="WineItemContainer-extra">
            <div className="WineItemContainer-row">
                <WineItem 
                    img="https://images.vivino.com/thumbs/M4Xben6IR2KkRGIpek81RA_pb_x300.png" 
                    rating="4.1" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/0219749c376a5c9af7eeed02795f7252.svg"
                    //
                    num="53"
                    winery="Ascent"
                    name="Cabernet Sauvignon 2012"
                    flag="https://www.vivino.com/packs/2eb566edd02bb378fb40c4aba7814242.png"
                    location="Diamond Mountain District"
                    price="$34.99"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/fiSYRzxcQPa0F1piEvjeDA_pb_x300.png" 
                    rating="3.8" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/08d2355de3317adeb6e5065584e522a2.svg"
                    star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                    //
                    num="575"
                    winery="La Cepa Alta"
                    name="Cinco Elementos 2018"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Ribera del Duero"
                    price="$15.99"
                    />
            </div>
            <div className="WineItemContainer-row">
            <WineItem 
                    img="https://images.vivino.com/thumbs/e2TIpAO7ScCu4YsNBpzZdA_pb_x300.png" 
                    rating="4.0" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                    //
                    num="47"
                    winery="Etude"
                    name="Bannockburn Pinot Noir 2014"
                    flag="https://www.vivino.com/packs/f2a7e6d78c5e2e6a75dd00396370cb09.png"
                    location="Central Otago"
                    price="$23.99"
                    />

                <WineItem 
                    img="https://images.vivino.com/thumbs/zqwEHdwASAKCeYrliccB9Q_pb_x300.png" 
                    rating="3.9" 
                    //stars
                    star1="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star2="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star3="https://www.vivino.com/packs/68528559aca49ecf6b1cc0e81c804189.svg"
                    star4="https://www.vivino.com/packs/6f2b4e1c3ec9d41ed134771308fd55a2.svg"
                    star5="https://www.vivino.com/packs/a97e32b728938c017e0c7fda77476f1f.svg"
                    //
                    num="63"
                    winery="Domaines Lupier"
                    name="La Dama 2012"
                    flag="https://www.vivino.com/packs/4f78249ae23793e13c77fcb566893a0f.png"
                    location="Navarra"
                    price="$19.99"
                    />
            </div>
            </span>
            {/*hidden*/}
        </div>

        <Button num="25"/>
        </>
    )
}

export default WineItemContainer
