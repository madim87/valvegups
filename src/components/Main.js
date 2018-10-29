import React, {Component} from 'react';

class Main extends Component{
    render(){
        return(
            <div className="main_container">
                <div className="spec_data">
                    <h2>spec data</h2>
                        <div className="gap-block">
                            <h3 className="header-text">intake gap</h3>
                            <table>
                                <tr>
                                    <td><label htmlFor="inmin">min</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="inmin"></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="inmax">gap</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="inmax"></input></td>
                                </tr>
                            </table>
                            <h3>exhaust gap</h3>
                            <table>
                                <tr>
                                    <td><label htmlFor="exmin">min</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="exmin"></input></td>
                                </tr>
                                <tr>
                                    <td><label htmlFor="exmax">gap</label></td><td><input className="table-cell" type="text" placeholder="gap mm(0.001)" id="exmax"></input></td>
                                </tr>
                            </table>
                            <h3>engine construction</h3>
                            <select>
                                <option>1-cylinder</option>
                                <option>2-cylinders(R2,L2,V2)</option>
                                <option>3-cylinders(R3)</option>
                                <option>4-cylinders(R4,V4)</option>
                                <option>5-cylinders(R5)</option>
                            </select>
                            <div className="color-map">
                                <input type="checkbox" name="color-map" id="col-map"/>
                                <label htmlFor="col-map">color legend</label>
                            </div>
                            <input type="submit"/>
                        </div>
                </div>
                <div className="result_data">
                    <h2>result data</h2>
                    <div className="cylinder-container">
                        <h2>1th cylinder</h2>
                        <div className="intake-block">
                            <h2>Intake</h2>
                            <table>
                                <tr>
                                    <td><label htmlFor="shim">shim</label></td><td><input className="table-cell" type="text" placeholder="width shim mkm(100)" id="shim"></input></td>
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
                                    <td>285</td><td>0,25</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="exhaust-block">
                            <h2>Exhaust</h2>
                            <table>
                                <tr>
                                    <td><label htmlFor="shim">shim</label></td><td><input className="table-cell" type="text" placeholder="width shim mkm(100)" id="shim"></input></td>
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
                                    <td>285</td><td>0,25</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Main;