import React, {Component} from 'react';
import {onError} from '../../actions';
import { Link } from 'react-router-dom';
import Header from '../header';
import { connect }  from 'react-redux';
import { setComment, clearComment }  from '../../actions';

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
        let i = 1;
        if (comments.constructor === Array) {
            comments.map(
                async (id) => {
                    let comment = await this.getResource(`${this._apiBase}/item/${id}.json`);
                    this.props.setComment({...this._transformStory(comment), id: i++});
                }
            )
        }else{
            let comment = async () => { return await this.getResource(`${this._apiBase}/item/${comments}.json`) };
            return {...this._transformComment(comment)}
        }
    }

    control = (id) => {
        if (id === undefined || id === null || id === "") {
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
                kids: comment.kids,
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

    componentWillMount () {
        console.log(this.getCom(sessionStorage.comment));
    }
    render() {
        return (
            <>
                <Link to = "/"><Header/></Link>
                <div className="article">
                    <div className="articleHeader">
                        <span>&#8635;</span>
                        <a  href={sessionStorage.url === 0 || sessionStorage.url === undefined ? false : sessionStorage.url}
                            rel= "noopener noreferrer"
                            target="_blank"><h2>{sessionStorage.title}</h2>
                        </a>
                    </div>
                    <hr noshade="true" size="5"/>
                    <div className="articleBody">
                        <div className="articleComments">
                            {/* {this.props.comment.map(data => (
                                <div className="comment">
                                    <p className="commentPerson">{data.by}</p>
                                    <p className="commentMessage">{data.text}</p>
                                </div>
                            ))} */}
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
        comment: state.comment
    }
}

const mapDispatchToProps = {
    setComment,
    clearComment,
    onError
}

export default connect(mapStateToProps,mapDispatchToProps)(Article);