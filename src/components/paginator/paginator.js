import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBut, upButtons, lowerButtons} from '../../actions';

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
        let {pageSize, totalCount, paginatorCount, selectBut, lowerButtons, upButtons} = this.props,
            pageCount = Math.ceil(totalCount / pageSize),
            page = [];

        for (let i=1; i<=pageCount; i++) {
            page.push(i);
        }

        return(
            <div className="paginator">
                <button className="allPage"
                        disabled={paginatorCount===1 ? true : false}
                        onClick={() => lowerButtons()}>&larr;</button>
                
                {page.map((list) => {
                    return <button
                        className={paginatorCount===list?"selectedPage":"allPage"}
                        onClick={() => selectBut(list)}>{list}</button>
                    })
                }
                <button className="allPage"
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
    upButtons
}

export default connect(mapStateToProps,mapDispatchToProps)(Paginator);