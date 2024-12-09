import React from "react";
import Page from "./Page";
import firstImage from '../static/images/extremism/1.jpg';
import secondImage from '../static/images/extremism/2.jpg';
import thirdImage from '../static/images/extremism/3.jpg';
import fourthImage from '../static/images/extremism/4.jpg';
import fifthImage from '../static/images/extremism/5.jpg';
import sixthImage from '../static/images/extremism/6.jpg';
import BackButton from "../components/BackButton";

export default class Extremism extends Page {

    static title = "QR-коды против экстримизма";
    static description = "Узнай об ответственности за экстремистскую деятельность в Российской Федерации";
    static link = "/extremism";

    render() {

        const images = [firstImage, secondImage, thirdImage, fourthImage, fifthImage, sixthImage];

        return (<main className={'concrete-page'}>
            <h1>{Extremism.title}</h1>
            <h2>{Extremism.description}</h2>
            <div className={'images'}>
                {images.map((image, index) => {
                    return <img key={index} src={image} alt={Extremism.title} />
                })}
            </div>
            <BackButton/>
        </main>);
    }
}