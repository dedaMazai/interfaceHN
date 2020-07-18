import React, {Component} from 'react';
import Paginator from '../paginator';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import './result.css';

export default class Result extends Component {
    Movies = [
        { id: 1, name: 'Re' },
        { id: 2, name: 'Air' },
        { id: 3, name: 'Doc' },
        { id: 4, name: 'Memento' },
        { id: 5, name: 'Braveheart' },
        { id: 6, name: 'Beauty' },
        { id: 7, name: 'Seven' },
        { id: 8, name: 'Samurai' }
      ];
    
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
                        Ссылка
                    </li>
                </ul>
                <ul>
                    {this.Movies.map(data => (
                        <Link to = "/card">
                            <li className="line" key={data.id}>
                                <ul className="bodyResult">
                                    <li className="name">
                                        {data.name}
                                    </li>
                                    <li className="stars">
                                        <span>&#9733;</span>{data.name}
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
// const mapStateToProps =  (state) =>{
//     return {
//         showApp: state.showApp
//     }
// }

// export default connect(mapStateToProps)(Result);
