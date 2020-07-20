import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBut, upButtons, lowerButtons, upButtonsThree, lowerButtonsThree} from '../../actions';

import './paginator.css';


class Paginator extends Component {
    // constructor(props) {
    //     super(props);
    //     this.myRefReg = React.createRef();
    //   }

    // componentDidMount(){
    //     let page = "";
    //     for (var i = 0; i < Math.ceil(this.props.page / 10); i++) {
    //     page += "<span data-page=" + i * 5 + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
    //     }
    //     this.myRefReg.current.innerHTML = page;
    // }

    render() {
        let {pageSize, totalCount, paginatorCount, selectBut, lowerButtons, upButtons, upButtonsThree, lowerButtonsThree} = this.props,
            pageCount = Math.ceil(totalCount / pageSize),
            page = [];

        for (let i=2; i<pageCount; i++) {
            page.push(i);
        }

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
        //можно было оставить только последнее else, но будет не так комфортно юзать пагинатор

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
                    hidden={paginatorCount <= 5 ? true : false}
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
                    onClick={() => selectBut(pageCount)}>{pageCount}</button>
                <button
                    className="allPage"
                    disabled={paginatorCount===pageCount ? true : false}
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