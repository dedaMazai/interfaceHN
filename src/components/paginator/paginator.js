import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBut, upButtons, lowerButtons, upButtonsThree, lowerButtonsThree} from '../../actions';

import './paginator.css';


class Paginator extends Component {
    render() {
        let {pageSize, totalCount, paginatorCount, selectBut, lowerButtons, upButtons, upButtonsThree, lowerButtonsThree} = this.props,
            // pageCount = Math.ceil(totalCount / pageSize) < 100  ? Math.ceil(totalCount / pageSize) : 100, //если API имеет ограничение в 100 страниц
            pageCount = 50,
            page = [];

        for (let i=2; i < pageCount; i++) {
            page.push(i);
        }
        //заполнили массив с номерами страниц


        if (paginatorCount < 5){
            page.splice(4);
        } else if (paginatorCount === 5) {
            page.splice(6)
        } else if (paginatorCount > pageCount-4){
            page.splice(0, pageCount-6);
        } else if (paginatorCount === pageCount-4) {
            page.splice(0, pageCount-8);
        } else {
            page.splice(paginatorCount+1);
            page.splice(0, paginatorCount-4);
        }
        //можно оставить только последнее условие в else, но будет не так комфортно юзать пагинатор

        return(
            <div className="paginator">
                <button
                    className="allPage"
                    disabled={paginatorCount===1 ? true : false}
                    onClick={() => lowerButtons()}>&larr;</button>
                <button
                    className={paginatorCount===1?"selectedPage":"allPage"}
                    onClick={() => selectBut(1)}>1</button>
                <button
                    className="allPage"
                    hidden={paginatorCount <= 5 || pageCount === 0 ? true : false}
                    onClick={() => lowerButtonsThree()}>...</button>
                {page.map((list) => {
                    return <button
                        className={paginatorCount===list?"selectedPage":"allPage"}
                        onClick={() => selectBut(list)}>{list}</button>
                    })
                }
                <button
                    className="allPage"
                    hidden={paginatorCount >= pageCount-4 ? true : false}
                    onClick={() => upButtonsThree(pageCount)}>...</button>
                <button
                    className={paginatorCount===pageCount?"selectedPage":"allPage"}
                    hidden={pageCount === 1 || pageCount === 0 ? true : false}
                    onClick={() => selectBut(pageCount)}>{pageCount}</button>
                <button
                    className="allPage"
                    disabled={paginatorCount===pageCount || pageCount === 0 ? true : false}
                    onClick={() => upButtons(pageCount)}>&rarr;</button>
            </div>
        )
    }
}
const mapStateToProps =  (state) =>{
    return {
        pageSize: state.pageSize,
        totalCount: state.totalCount,
        paginatorCount: state.paginatorCount
    }
}

const mapDispatchToProps = {
    selectBut,
    lowerButtons,
    upButtons,
    upButtonsThree,
    lowerButtonsThree
}

export default connect(mapStateToProps,mapDispatchToProps)(Paginator);