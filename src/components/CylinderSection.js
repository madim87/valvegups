import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CylinderSection extends Component{



    render(){
        const { cylinderData, specData, storeData} = this.props;
        function CylinderList(props) {
            const cylinders = props;
            const listItem = cylinders.map((cylinder) =>
                <div className="cylinder-container">
                    <h2>{cylinder.id}th cylinder</h2>
                    <div className="intake-block">
                        <h2>Intake({(specData.inmingap || '...') + "-" + (specData.inmaxgap || "...")})</h2>
                        <table>
                            <tr>
                                <td><label htmlFor="shim">shim</label></td><td><input className="table-cell" type="text" placeholder="width shim mkm(100)" id="shim" ></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="gap">gap</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="gap" ></input></td>
                            </tr>
                        </table>
                        <h3>result</h3>
                        <table>
                            <thead>
                            <tr>
                                <td>shim</td><td>gap</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{cylinder.ishim ? cylinder.ishim : '-'}</td><td>{cylinder.igap ? cylinder.igap : '-'}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="exhaust-block">
                        <h2>Exhaust({(specData.exmingap || '...') + "-" + (specData.exmaxgap || "...")})</h2>
                        <table>
                            <tr>
                                <td><label htmlFor="shim">shim</label></td><td><input className="table-cell" type="text" placeholder="width shim mkm(100)" id="shim" ></input></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="gap">gap</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="gap"></input></td>
                            </tr>
                        </table>
                        <h3>result</h3>
                        <table>
                            <thead>
                            <tr>
                                <td>shim</td><td>gap</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>{cylinder.eshim ? cylinder.eshim : '-'}</td><td>{cylinder.egap ? cylinder.egap : '-'}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <input type="submit" value="calculate gap"/>
                </div>);
            return <div> {listItem} </div>
        };

        return(
            CylinderList(cylinderData)
        );
    }
}

export default CylinderSection;