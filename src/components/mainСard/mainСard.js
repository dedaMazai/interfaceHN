import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import img from './foto.jpg';
import './mainСard.css';


class MainСard extends Component {
    render() {
        let {content, mainCard} = this.props;
        return (
            <div className="mainСard">
                {console.log(mainCard)}
                <ul className="headerCard">
                    <li className="nameCard">
                        {content[mainCard].name}
                    </li>
                    <li className="starsCard">
                        <span className="starBig">&#9733;</span>25
                    </li>
                    <li className="commitCard">
                        <p>Последний комит:</p>
                        <p>{content[mainCard].lastCommit}</p>
                    </li>
                </ul>
                <div className="photo">
                    <img src={content[mainCard].photo} alt="Image preview..."/>
                    <p className="contributors">
                        Top contributors: <br/>
                        {content[mainCard].contributorsUrl}
                    </p>
                </div>
                <div className="information">
                    <a className="nick" href={content[mainCard].urlPerson}>{content[mainCard].nickName}</a>
                    <br/>
                    <p>
                        Используемые языки: <br/>
                        {content[mainCard].language}
                    </p>
                    <br/>
                    <p>
                        Описание репозитория: <br/>
                        {content[mainCard].description}
                    </p>
                </div>
                <Link to = "/">
                    <button className="exitBut">Назад</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps =  (state) =>{
    return {
        content: state.content,
        mainCard: state.mainCard
    }
}

export default connect(mapStateToProps)(MainСard);
