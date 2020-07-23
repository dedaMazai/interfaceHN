import React, {Component} from 'react';
import gotService from '../../services/gotService';
import { connect } from 'react-redux';
import {onError, setContent, setRequest, setBeginContent} from '../../actions';

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

    updateRepositories = (request, num=1, setContent=this.props.setContent) => {
        this.gotService.getRepositories(request,num)
            .then(setContent)
            .catch(this.onErr);
    }

    componentDidMount(){
        if (sessionStorage.request === undefined || sessionStorage.request === ""){
            this.searchRepos.current.value="";
            this.updateRepositories("stars:>100000", 1, this.props.setBeginContent)
        }else{
            this.searchRepos.current.value=sessionStorage.request;
            this.props.setRequest(sessionStorage.request)
            this.updateRepositories(sessionStorage.request, this.props.paginatorCount)
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.paginatorCount !== prevProps.paginatorCount) {
            this.searchRepos.current.value=this.props.request
            this.updateRepositories(this.props.request,this.props.paginatorCount)
        }
        if(sessionStorage.request === undefined || sessionStorage.request === "" || this.props.content.length === 0){
            this.searchRepos.current.value="";
            this.updateRepositories("stars:>100000", 1, this.props.setBeginContent)
        }
    }

    searchName = () => {
        this.props.setRequest(this.searchRepos.current.value);
        sessionStorage.request =this.searchRepos.current.value;
    }

    render() {
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
                    onClick={() => this.updateRepositories(this.props.request)}>
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
        request: state.request,
        content: state.content
    }
}

const mapDispatchToProps = {
    setContent,
    setRequest,
    setBeginContent,
    onError
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);