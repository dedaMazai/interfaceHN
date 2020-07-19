import React, {Component} from 'react';
import { connect } from 'react-redux';
import {selectBut} from '../../actions';

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
        let {pageSize, totalCount, paginatorCount} = this.props,
            pageCount = Math.ceil(totalCount / pageSize),
            page = [];

        for (let i=1; i<=pageCount; i++) {
            page.push(i);
        }

        return(
            <div className="paginator">
                {page.map((list) => {
                    return <span
                        className={paginatorCount===list?"selectedPage":"allPage"}
                        onClick={() => this.props.selectBut(list)}>{list}</span>
                    })
                }
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
    selectBut
}

export default connect(mapStateToProps,mapDispatchToProps)(Paginator);