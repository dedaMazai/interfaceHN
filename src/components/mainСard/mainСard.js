import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './mainСard.css';


export default class MainСard extends Component {
    render() {
        return (
            <div className="mainСard">
                <ul className="headerCard">
                    <li className="nameCard">
                        {sessionStorage.name}
                    </li>
                    <li className="starsCard">
                        <span className="starBig">&#9733;</span>{sessionStorage.stars}
                    </li>
                    <li className="commitCard">
                        <p>Последний комит:</p>
                        <p>{sessionStorage.lastCommit}</p>
                    </li>
                </ul>
                <div className="photo">
                    <img src={sessionStorage.photo} alt="Image preview..."/>
                    <p className="contributors">
                        Top contributors: <br/>
                        {sessionStorage.contributorsUrl}
                    </p>
                </div>
                <div className="information">
                    <a className="nick"
                        target="_blank"
                        rel= "noopener noreferrer"
                        href={sessionStorage.urlPerson}>{sessionStorage.nickName}</a>
                    <br/>
                    <p>
                        Используемые языки: <br/>
                        {sessionStorage.language}
                    </p>
                    <br/>
                    <p>
                        Описание репозитория: <br/>
                        {sessionStorage.description}
                    </p>
                </div>
                <Link to = "/">
                    <button className="exitBut">Назад</button>
                </Link>
            </div>
        )
    }
}