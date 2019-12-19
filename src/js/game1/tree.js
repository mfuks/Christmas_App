import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './../../sass/style.scss';

class Tree extends Component
{


    render() {
        const {treeGrow} = this.props;
        return(
            <>
                <div className="tree">
                    <div className="tree-triangle"></div>
                </div>
                <div className={"tree"+treeGrow}>
                    <div className={"tree-triangle"+treeGrow}></div>
                </div>
            </>
        )
    }
}

export default Tree;