import React, {Component} from 'react';
import Paginator from '../paginator';
import gotService from '../../services/gotService';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './result.css';

class Result extends Component {

    // gotService = new gotService();

    // updateChar = () => {
    //     this.gotService.getRepositories()
    //         .then(this.onTelLoaded)
    //         .catch(function(e) {
    //             console.log(`ERROR${e}`)
    //          });
    // }

    // onTelLoaded = (tel) => {
    //     console.log(tel)
    // }

    render() {
        return(
            <div className="result">
                <ul className="headerResult">
                    <li className="name" onClick={this.updateChar}>
                        Название
                    </li>
                    <li className="stars">
                        Звёзд
                    </li>
                    <li className="commit">
                        Последний комит
                    </li>
                    <li className="link1">
                        Ссылка
                    </li>
                </ul>
                <ul>
                    {this.props.content.map(data => (
                        <Link to = "/card">
                            <li className="line" key={data.id}>
                                <ul className="bodyResult">
                                    <li className="name">
                                        {data.name}
                                    </li>
                                    <li className="stars">
                                        <span className="starSmall">&#9733;</span>{data.name}
                                    </li>
                                    <li className="commit">
                                        {data.name}
                                    </li>
                                    <li className="link">
                                        {data.name}111111111111111
                                    </li>
                                </ul>
                            </li>
                        </Link>
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
