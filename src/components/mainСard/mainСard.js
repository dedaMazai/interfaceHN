import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import img from './foto.jpg';
import './mainСard.css';


export default class MainСard extends Component {
    render() {
        return (
            <div className="mainСard">
                <ul className="headerCard">
                    <li className="nameCard">
                        Название
                    </li>
                    <li className="starsCard">
                        <span className="starBig">&#9733;</span>25
                    </li>
                    <li className="commitCard">
                        <p>Последний комит:</p>
                        <p>22.22.2020</p>
                    </li>
                </ul>
                <div className="photo">
                    <img src={img} alt="Image preview..."/>
                    <p className="contributors">
                        Top contributors: <br/>
                        Челики
                    </p>
                </div>
                <div className="information">
                    <a className="nick" href="https://vk.com/andrei0911">NickName</a>
                    <br/>
                    <p>
                        Используемые языки: <br/>
                        JS,PHP...
                    </p>
                    <br/>
                    <p>
                        Описание репозитория: <br/>
                        JS,PHP...описание пошлоОписание репозитория:описание пошлоОписание репозитория:
                    </p>
                </div>
                <Link to = "/">
                    <button className="exitBut">Назад</button>
                </Link>
            </div>
        )
    }
}

// const mapStateToProps =  (state) =>{
//     return {
//         showApp: state.showApp
//     }
// }

// export default connect(mapStateToProps)(Result);
