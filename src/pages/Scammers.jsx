import React from "react";
import Page from "./Page";
import firstImage from '../static/images/scammers.png';
import BackButton from "../components/BackButton";

import first from '../static/images/scammers/1.jpg';
import second from '../static/images/scammers/2.jpg';
import third from '../static/images/scammers/3.jpg';
import fourth from '../static/images/scammers/4.jpg';
import fifth from '../static/images/scammers/5.jpg';
import sixth from '../static/images/scammers/6.jpg';
import seventh from '../static/images/scammers/7.jpg';
import eighth from '../static/images/scammers/8.jpg';
import ninth from '../static/images/scammers/9.jpg';
import tenth from '../static/images/scammers/10.jpg';
import eleventh from '../static/images/scammers/11.jpg';
import twelfth from '../static/images/scammers/12.jpg';
import thirteenth from '../static/images/scammers/13.jpg';

export default class Scammers extends Page {

    static title = "Осторожно, мошенники!";
    static description = "Будьте бдительны и не дайте себя обмануть";
    static link = "/scammers";

    render() {

        const images = [first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelfth, thirteenth];

        return (<main className={'concrete-page'}>
            <h1>{Scammers.title}</h1>
            <h2>{Scammers.description}</h2>
            <img src={firstImage} alt={'first-image'}/>
            <p>Мошенники используют множество поводов для обмана людей, различные методы, чтобы получить доступ к личным
                данным: звонки, сообщения в социальных сетях или электронные письма. Искусственный интеллект способен
                сгенерировать голос и даже изображение вашего родственника, друга. Если звонящий заводит речь о ваших
                финансах, пин-кодах из СМС, номерах банковских карт и персональных данных – не втягивайтесь в разговор.
                ПОЛОЖИТЕ ТРУБКУ и ваши деньги останутся в сохранности.</p>
            <p>Будьте бдительны и не дайте себя обмануть!</p>
            <div className={'images'}>
                {images.map(current => (
                    <img src={current} alt={'current'}/>
                ))}
            </div>
            <BackButton/>
        </main>);
    }
}