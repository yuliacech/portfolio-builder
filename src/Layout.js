import React from "react";
import './Layout.css';

class Layout extends React.Component {
    render() {
        return (
            <div className={'layout-container ' + (this.props.shape || '')}>
                <div>
                    {this.props.content[0]}
                </div>
                <div>
                    {this.props.content[1]}
                </div>
            </div>
        );
    }
}

export default Layout;
