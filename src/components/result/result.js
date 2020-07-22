import React, {Component} from 'react';
import Paginator from '../paginator';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {setMainCard} from '../../actions';

import './result.css';

class Result extends Component {


    // componentDidUpdate(prevProps) {
    //     if (this.props.paginatorCount !== prevProps.paginatorCount) {
    //         this.gotService.getRepositories(this.props.request,this.props.paginatorCount)
    //         .then(this.props.setContent)
    //         .catch(this.onErr);
    //       }
    // }

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
                    <li className="name">
                        Название
                    </li>
                    <li className="stars">
                        Звёзд
                    </li>
                    <li className="commit">
                        Последний комит
                    </li>
                    <li className="link">
                        Ссылка: https://github.com...
                    </li>
                </ul>
                <ul>
                    {this.props.content.map(data => (
                        <Link to = "/card">
                            <li key={data.id} className="line" onClick={()=>this.props.setMainCard(data.id)}>
                                <ul className="bodyResult">
                                    <li className="name" >
                                        {data.name}
                                    </li>
                                    <li className="stars">
                                        <span className="starSmall">&#9733;</span>{data.stars}
                                    </li>
                                    <li className="commit">
                                        {data.lastCommit}
                                    </li>
                                    <li className="link">
                                        {data.urlRepositories}
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
        content: state.content,
        mainCard: state.mainCard
    }
}

const mapDispatchToProps = {
    setMainCard
}


export default connect(mapStateToProps, mapDispatchToProps)(Result);
