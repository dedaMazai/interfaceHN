import React, {Component} from 'react';
import gotService from '../../services/gotService';
import { connect } from 'react-redux';
import {onError, setContent, setRequest, setBeginContent, selectBut} from '../../actions';

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
        this.gotService.getRepositories(
            request === undefined || request === "" ? "stars:>100000" : request,
            request === undefined || request === "" ? "1" : num
            )
            .then(request === undefined || request === "" ? this.props.setBeginContent : setContent)
            .catch(this.onErr);
    }
    //общая функция для запроса репозиториев, если запрос пустой, или undefined, то выполняется запрос самых популярных
    //и выводятся только первые 10
    componentDidMount(){
        if (sessionStorage.request !== undefined && sessionStorage.request !== ""){
            this.searchRepos.current.value=this.props.request;
            this.props.setRequest(sessionStorage.request)
        }
        this.updateRepositories(sessionStorage.request, this.props.paginatorCount)
    }

    componentDidUpdate(prevProps) {
        if (this.props.paginatorCount !== prevProps.paginatorCount) {
            this.searchRepos.current.value=this.props.request;
            this.updateRepositories(sessionStorage.request,this.props.paginatorCount)
        }
        //для обновления страницы с репозиториями при клике по пагинатору
        if (this.props.request !== prevProps.request) {
            this.props.selectBut(1)
        }
        //при новом поиске, чтобы открывалась 1 страица пагинатора
        if(this.props.content.length === 0){
            this.searchRepos.current.value="";
            this.updateRepositories("stars:>100000", 1, this.props.setBeginContent);
            this.searchRepos.current.value="Not found";
        }
        //если при поиске не удалось найти репозитории с необходимым названием,
        // производится запрос самых популярных и вывод первых 10
    }

    searchName = () => {
        this.props.setRequest(this.searchRepos.current.value);
        sessionStorage.request = this.searchRepos.current.value;
    }
    //при в вводе в поисковую строку запрос запишется в state и sessionStorage, в state я записываю чтобы проверять на наличие
    //символов для активации кнопки поиска, если они есть, с sessionStorage возникли проблемы в этом функционале

    topName = () => {
        this.props.setRequest("");
        delete sessionStorage.request;
    }
    //очищаем state и sessionStorage для запроса самых популярных репозиториев

    render() {
        return(
            <div className="search">
                <button className="topBut"
                    type="submit"
                    onClick={() => {
                        this.updateRepositories("stars:>100000", 1, this.props.setBeginContent);
                        this.topName()}}>
                            <span role="img" aria-label="Top">
                                &#9733;
                            </span>
                </button>
                <input className="searchInput"
                    onkeyup="stule:background: #ff5e00;"
                    type="text"
                    placeholder="Искать здесь..."
                    ref={this.searchRepos}
                    onChange={this.searchName}/>
                <button className="searchBut"
                    type="submit"
                    disabled={this.props.request === "" || this.props.request === undefined ? true : false}
                    onClick={() => this.updateRepositories(this.props.request)}>
                        <span role="img" aria-label="Search">
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
    selectBut,
    onError
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);