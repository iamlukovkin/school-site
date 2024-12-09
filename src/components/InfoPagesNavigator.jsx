import React from "react";

export default class InfoPagesNavigator extends React.Component {
    render() {
        const infoLinks = [
            {'title': 'Главная', 'link': '/'},
            {'title': 'О школе', 'link': '/about'}
        ];
        const currentLink = window.location.pathname;
        return (<div className={'navbar'}>
            {infoLinks.map(infoLink => (
                <a href={infoLink.link}>
                    <button style={{
                        color: currentLink === infoLink.link ? '#ff7f42' : 'black',
                        fontWeight: currentLink === infoLink.link ? 'bold' : 'normal',
                        borderBottom: currentLink === infoLink.link ? '2px solid #ff7f42' : 'none',
                        borderRadius: 0
                    }}>{infoLink.title}</button>
                </a>
            ))}
        </div>);
    }
}