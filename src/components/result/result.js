import React, {Component} from 'react';
import Paginator from '../paginator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './result.css';

class Result extends Component {
    setMainCard = (id) => {
        const item = this.props.content.find(item => item.id ===id);
        sessionStorage.name = item.name;
        sessionStorage.stars = item.stars;
        sessionStorage.lastCommit = item.lastCommit;
        sessionStorage.photo = item.photo;
        sessionStorage.contributorsUrl = item.contributorsUrl;
        sessionStorage.urlPerson = item.urlPerson;
        sessionStorage.language = item.language;
        sessionStorage.description = item.description;
    }
    render() {
        return(
            <div className="result">
                <ul className="headerResult">
                    <li className="name">
                        Название
                    </li>
                    <li className="stars">
                        Звёзд
                    </li>
                    <li className="commit">
                        Последний комит
                    </li>
                    <li className="link1">
                        Ссылка:
                    </li>
                </ul>
                <ul>
                    {this.props.content.map(data => (
                            <li key={data.id} className="line" onClick={()=>this.setMainCard(data.id)}>
                                <ul className="bodyResult">
                                    <Link to = "/card">
                                        <li className="name">
                                            {data.name}
                                        </li>
                                        <li className="stars">
                                            <span className="starSmall">&#9733;</span>{data.stars}
                                        </li>
                                        <li className="commit">
                                            {data.lastCommit}
                                        </li>
                                    </Link>
                                    <li className="link">
                                        <a href={data.urlRepositories}
                                            rel= "noopener noreferrer"
                                            target="_blank">https://github.com...</a>
                                    </li>
                                </ul>
                            </li>
                    ))}
                </ul>
                <div className="paginatorResult">
                    <Paginator/>
                </div>
            </div>
        )
    }
}
const mapStateToProps =  (state) =>{
    return {
        content: state.content
    }
}


export default connect(mapStateToProps)(Result);
