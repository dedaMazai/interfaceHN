import React, {Component} from 'react';
import gotService from '../../services/gotService';
import {onError, setСontributors} from '../../actions';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './mainСard.css';

class MainСard extends Component {

    gotService = new gotService();

    onErr = (e) => {
        this.props.onError();
        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
    }
    componentDidMount(){
        this.gotService.getСontributors(sessionStorage.contributorsUrl)
            .then(this.props.setСontributors)
            .catch(this.onErr);
    }
    //запроса скиска контрибьютеров
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
                        {this.props.contributors.map(data =>(
                            <a href={data.urlPerson}
                                target="_blank"
                                rel= "noopener noreferrer">
                                <img  className="contributorsImg" src={data.photo} title={data.name} alt="Image preview..."/>
                            </a>
                        ))}
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

const mapStateToProps =  (state) =>{
    return {
        contributors: state.contributors
    }
}

const mapDispatchToProps = {
    onError,
    setСontributors
}

export default connect(mapStateToProps,mapDispatchToProps)(MainСard);