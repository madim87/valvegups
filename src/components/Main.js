import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CylinderSection from './CylinderSection';
import setSpecData from "../reducers/setSpecData";
import {setData} from "../actions";
import {SET_DATA} from "../constants/ActionTypes";

class Main extends Component{

    //handleChange = (e) => this.props.dispatch(setData(e.target.value));

    render(){
        const { stateCheck, specData, cylinderData, actions } = this.props;
        const { setData } = actions;
        const handleChange = (e) => {setData(e.target.id, e.target.value)};
        return(
            <div className="main_container">
                <div className="spec_data">
                    <h2>spec data</h2>
                        <div className="gap-block">
                            <h3 className="header-text">intake gap</h3>
                            <table>
                                <tr>
                                    <td><label htmlFor="inmin">min</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="inmingap" value={specData.inmingap} onChange={handleChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="inmax">gap</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="inmaxgap" value={specData.inmaxgap} onChange={handleChange}></input></td>
                                </tr>
                            </table>
                            <h3>exhaust gap</h3>
                            <table>
                                <tr>
                                    <td><label htmlFor="exmin">min</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="exmingap" value={specData.exmingap} onChange={handleChange}></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="exmax">gap</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="exmaxgap" value={specData.exmaxgap} onChange={handleChange}></input></td>
                                </tr>
                            </table>
                            <div className="color-map">
                                <input type="checkbox" name="color-map" id="col-map"/>
                                <label htmlFor="col-map">color legend</label>
                            </div>
                            <input type="button" value="Add cylinder" onClick={actions.addCylinder}/>
                            <input type="submit" value="Set specdata"/>
                        </div>
                </div>
                <div className="result_data">
                    <h2>result data</h2>
                    <CylinderSection cylinderData = {cylinderData} specData = {specData}/>
                </div>
            </div>
        );
    }

}

Main.propTypes = {
//    specGap: PropTypes.array.isRequired,
//    amountcyl: PropTypes.number.isRequired
      dispatch: PropTypes.func,
}

export default Main;