import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../header';
import {onError, setContent, clearContent} from '../../actions';

import './list.css';

class List extends Component {
    constructor() {
        super();
        this._apiBase = 'https://hacker-news.firebaseio.com/v0';
    }

    getResource = async (url) => {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Could not fetch ${this._apiBase}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }

    getStories = async () => {
        return await this.getResource(`${this._apiBase}/newstories.json?orderBy="$key"&limitToFirst=100`)
    } // запрос информации для 100 новостей

    updateStories = () => {
        let i = 1;
        this.getStories()
            .then(
                (allStories) => allStories.map(
                async (id) => {
                    console.log(id)
                    let story = await this.getResource(`${this._apiBase}/item/${id}.json`); // запрос новости по id
                    this.props.setContent({...this._transformStory(story), id: i++});
                    this.forceUpdate();
                })
            )
            .catch(this.onErr);
    } //функция для запроса и записи новостей

    _transformStory = (story) => {
        return (
            {
                title: this.isSetString(story.title),
                score: this.isSet(story.score),
                time: this.isSet(story.time),
                comment: story.kids,
                by: this.isSetString(story.by),
                url: this.isSet(story.url)
            }
        );
    }
    //отформатировали данные и проверили что они не пустые
    isSet(data) {
        if (data) {
            return data
        } else {
            return 0
        }
    }// проверка на наличие информации

    isSetString(data) {
        if (data) {
            return data
        } else {
            return "No information."
        }
    }// проверка на наличие строки информации

    lengthString(data, size) {
        if (data.length < size) {
            return data
        } else {
            return data.substr(0, size)+"..."
        }
    }

    onErr = (e) => {
        this.props.onError();
        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
    }

    componentWillMount(){
        this.clearStories();
    }

    parseDate = (data) => {
        let newDate = new Date( data * 1000);
        return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`
    }

    setMainCard = (id) => {
        const item = this.props.content.find(items => items.id === id);
        sessionStorage.title = item.title;
        sessionStorage.time = this.parseDate(item.time);
        sessionStorage.comment = item.comment;
        sessionStorage.by = item.by;
        sessionStorage.url = item.url;
    }
    //при клике на новость, в sessionStorage записываются необходимые данные для страницы Article

    clearStories = () => {
        this.props.clearContent();
        this.updateStories();
    }

    render() {
        console.log(this.props.content)
        return(
            <>
                <Header/>
                <div className="list">
                    <ul className="headerList">
                        <li className="name">
                            <span className="refresh" onClick={this.clearStories}>&#8635;</span>
                            <p>Название</p>
                        </li>
                        <li className="score">
                            Рейтинг
                        </li>
                        <li className="date">
                            Дата
                        </li>
                        <li className="author1">
                            Автор
                        </li>
                    </ul>
                    <ul>
                        {this.props.content.map(data => (
                            <Link to = "/card">
                                <li  key={data.id} className="line"  onClick={()=>this.setMainCard(data.id)}>
                                    <ul className="bodyList">
                                        <li className="name">
                                        {this.lengthString(data.title, 43)}
                                        </li>
                                        <li className="score">
                                            {data.score}
                                        </li>
                                        <li className="date">
                                            {this.parseDate(data.time)}
                                        </li>
                                        <li className="author">
                                            {data.by}
                                        </li>
                                    </ul>
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}

const mapStateToProps =  (state) =>{
    return {
        error: state.error,
        content: state.content
    }
}

const mapDispatchToProps = {
    setContent,
    clearContent,
    onError
}

export default connect(mapStateToProps,mapDispatchToProps)(List);
