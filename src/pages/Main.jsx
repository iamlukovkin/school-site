import React from 'react'
import RoadRules from "./RoadRules";
import HelpPhones from "./HelpPhones";
import Page from "./Page";
import Scammers from "./Scammers";
import Extremism from "./Extremism";
import InfoPagesNavigator from "../components/InfoPagesNavigator";



export default class Main extends Page {

    static title = "Main";
    static description = "";
    static link = "/";

    items = {};

    constructor(props) {
        super(props);
        const pages = [Extremism, Scammers, HelpPhones, RoadRules];
        for (let i = 0; i < pages.length; i++) {
            const randomKey = Math.random().toString(36).substr(2, 9);
            this.items[randomKey] = {
                title: pages[i].title,
                description: pages[i].description,
                link: pages[i].link,
            };
        }
    }

    render() {
        return (
            <main>
                <InfoPagesNavigator/>
                {Object.keys(this.items).map(key => (
                    <a href={this.items[key].link}>
                        <div className={"main-page-item"}>
                            <h2 key={key}>{this.items[key].title}</h2>
                            <p key={key}>{this.items[key].description}</p>
                        </div>
                    </a>
                ))}
            </main>
        )
    }
}