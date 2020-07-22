import React, {Component} from 'react';
import gotService from '../../services/gotService';
import { connect } from 'react-redux';
import ErrorMessage from '../errorMessage';
import {onError, setContent, setRequest} from '../../actions';

import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchRepos = React.createRef();
      }

    gotService = new gotService();

    onErr = (e) => {
        this.props.onError();
        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
    }

    updateRepositories = () => {
        this.gotService.getRepositories(this.props.request, 1)
            .then(this.props.setContent)
            .catch(this.onErr);
    }

    componentDidUpdate(prevProps) {
        if (this.props.paginatorCount !== prevProps.paginatorCount) {
            this.gotService.getRepositories(this.props.request,this.props.paginatorCount)
            .then(this.props.setContent)
            .catch(this.onErr);
          }
    }

    searchName = () => {this.props.setRequest(this.searchRepos.current.value)}

    render() {
        if (this.props.error){
            return <ErrorMessage/>
        }
        return(
            <div className="search">
                <input className="searchInput"
                    onkeyup="stule:background: #ff5e00;"
                    type="text"
                    placeholder="Искать здесь..."
                    ref={this.searchRepos}
                    onChange={this.searchName}/>
                <button className="searchBut"
                    type="submit"
                    disabled={this.props.request === "" ? true : false}
                    onClick={this.updateRepositories}>
                        <span role="img">
                            &#128269;
                        </span>
                </button>
            </div>
        )
    }
}

const mapStateToProps =  (state) =>{
    return {
        error: state.error,
        paginatorCount: state.paginatorCount,
        request: state.request
    }
}

const mapDispatchToProps = {
    setContent,
    setRequest,
    onError
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);