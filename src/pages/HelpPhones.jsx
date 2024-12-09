import React from "react";
import Page from "./Page";
import firstImage from '../static/images/help_phones_1.jpg';
import secondImage from '../static/images/help_phones_2.jpg';
import BackButton from "../components/BackButton";

export default class HelpPhones extends Page {

    static title = "Телефон доверия";
    static description = "Бесплатная горячая линия";
    static link = "/help-phones";

    render() {
        return (<main className={'concrete-page'}>
            <h1>{HelpPhones.title}</h1>
            <h2>{HelpPhones.description}</h2>
            <div className={'images'}>
                <img src={firstImage} alt={'first-image'}/>
                <img src={secondImage} alt={'second-image'}/>
            </div>
            <BackButton/>
        </main>);
    }
}