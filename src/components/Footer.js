import React, {Component} from 'react';

class Footer extends Component{

    render(){
        const { footertextData } = this.props;
        return(
            <div>
                <h3>{footertextData}</h3>
            </div>
        );
    }

}
export default Footer;