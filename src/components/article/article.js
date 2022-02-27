import React, {Component} from 'react';
import {onError} from '../../actions';
import { Link } from 'react-router-dom';
import Header from '../header';
import { connect } from 'react-redux';

import './article.css';

class Article extends Component {
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

    getCom = (comments) => {
        if (comments.constructor === Array) {
            comments.map(
                async (id) => {
                    let comment = await this.getResource(`${this._apiBase}/item/${id}.json`);
                    let kidsComment = this.control(comment.kids);
                    return {...this._transformComment(comment), kidsComment}
                }
            )
        }else{
            let comment = async () => { return await this.getResource(`${this._apiBase}/item/${comments}.json`) };
            let kidsComment = this.control(comment.kids);
            return {...this._transformComment(comment), kidsComment}
        }
    }

    control = (id) => {
        if (id === undefined || id === null || id === null) {
            return
        }else{
            return this.getCom(id)
        }
    }

    // getComments = () => {
    //     this.getCom(sessionStorage.comment)
        // this.getStories()
        //     .then(
        //         (allStories) => allStories.map(
        //         async (id) => {
        //             let story = await this.getResource(`${this._apiBase}/item/${id}.json`); // запрос новости по id
        //             this.props.setContent({...this._transformStory(story)});
        //             this.forceUpdate();
        //         })
        //     )
        //     .catch(this.onErr);}
         //функция для запроса и записи новостей

    _transformComment = (comment) => {
        return (
            {
                text: this.isSetString(comment.text),
                time: this.isSet(comment.time),
                comment: comment.kids,
                by: this.isSetString(comment.by)
            }
        );
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 0
        }
    }// проверка на наличие числа

    isSetString(data) {
        if (data) {
            return data
        } else {
            return "No information."
        }
    }// проверка на наличие строки информации

    onErr = (e) => {
        this.props.onError();
        console.log('Ошибка ' + e.name + ":" + e.message + "\n" + e.stack);
    }

    componentDidMount () {
        console.log(this.getCom(sessionStorage.comment));
    }
    render() {
        return (
            <>
                <Link to = "/"><Header/></Link>
                <div className="article">
                    <div className="articleHeader">
                        <span>&#8635;</span>
                        <a  href={sessionStorage.url == 0 || sessionStorage.url === undefined ? false : sessionStorage.url}
                            rel= "noopener noreferrer"
                            target="_blank"><h2>{sessionStorage.title}</h2>
                        </a>
                    </div>
                    <hr noshade="true" size="5"/>
                    <div className="articleBody">
                        <div className="articleComments">
                            <div className="comment">
                                <p className="commentPerson">Михаил</p>
                                <p className="commentMessage">Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии</p>
                            </div>
                            <div className="commentChild">
                                <p className="commentPerson">Михаил</p>
                                <p className="commentMessage">Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии</p>
                            </div>
                            <hr/>
                            <div className="comment">
                                <p className="commentPerson">Михаил</p>
                                <p className="commentMessage">Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии Кометарии</p>
                            </div>
                        </div>
                        <div className="articleInformation">
                            <h3>Автор: {sessionStorage.by}</h3>
                            <p>Дата: {sessionStorage.time}</p>
                            <p>Коментариев: { sessionStorage.comment === undefined || sessionStorage.comment === null ? sessionStorage.comment.length : sessionStorage.comment.length }</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps =  (state) =>{
    return {
        contributors: state.contributors
    }
}

const mapDispatchToProps = {
    onError
}

export default connect(mapStateToProps,mapDispatchToProps)(Article);