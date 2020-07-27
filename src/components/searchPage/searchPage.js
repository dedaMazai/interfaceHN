import React, {Component} from 'react';
import Search from '../search';
import Result from '../result';
import { connect } from 'react-redux';

import './searchPage.css';


class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            seconds: 30
        };
        this.timer = 0;
    }
    startTimer = () => {
        if (this.timer === 0 && this.state.seconds > 0) {
          this.timer = setInterval(this.countDown, 1000);
        }
    }
    countDown = () => {
        let seconds = this.state.seconds - 1;
        this.setState({seconds: seconds});
        if (seconds === 0) {
            clearInterval(this.timer);
            window.location.reload()
        }
    }
    //таймер по истечении которого происходит обновление страницы, отображается когда возникает ошибка 403
    //при превышении скорости запросов API
    render() {
        if (this.props.error){
            this.startTimer()
            return <div className="error">
                <h1>Подождите {this.state.seconds} сек. и страница обновится... </h1>
                <p>Превышен предел скорости работы API </p>
            </div>
        }
        return(
            <>
                 <div className="searchApp">
                    <Search/>
                </div>
                <br/>
                <div className="resultApp">
                    <Result/>
                </div>
            </>
        )
    }
}
const mapStateToProps =  (state) =>{
    return {
        error: state.error
    }
}

export default connect(mapStateToProps)(SearchPage);