import {
  
  Publish,
} from "@material-ui/icons";
import "./forms.css";
import Button from '@material-ui/core/Button';


import { Multiselect } from "multiselect-react-dropdown";
import React from "react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "left",
};
export default class Forms extends React.Component {
  constructor(props) {
    super(props);
  this.state = { 
    values: [{ value: null }] ,
    plainArray: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"],
    ver:"a", history: [],
pack:"j" ,fle:"j" ,}
  };

  
  handleChange(i, event) {
    let values = [...this.state.values];
    values[i].value = event.target.value;
    this.setState({ values });
  }

  addClick() {
    this.setState((prevState) => ({
      values: [...prevState.values, { value: null }]
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }
  handleVersion = (event) => {
    const {
      target: { ver },
    } = event;
    this.setState((state) => ({
      value: ver,
      history: [...this.state.history, ver],
    }));
  };
  handlePacking = (event) => {
    const {
      target: { pack },
    } = event;
    this.setState((state) => ({
      value: pack,
     
    }));
  };
  handleFile = (event) => {
    const {
      target: { fle },
    } = event;
    this.setState((state) => ({
      value: fle,
      history: [...this.state.history, fle],
    }));
  };
  render() {
    const { ver, pack,fle,plainArray,history } = this.state;
    return (
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle">Microservice Generator</h1>
        </div>
        <div className="userContainer">
          <div className="userShow">
            <div className="userShowBottom">
              <span className="userShowTitle">Spring Boot Version</span>
              <div className="userShowInfo">
                <div style={styles}>
                  <div>
                    <label className="raDis">
                      <input
                        type="radio"
                        name="letter"
                        value="a"
                        checked={ver === "a"}
                        onChange={this.handleVersion}
                      />{" "}
                      2.6.0 (SNAPSHOT)
                    </label>

                    <label className="raDis">
                      <input
                        type="radio"
                        name="letter"
                        value="b"
                        checked={ver === "b"}
                        onChange={this.handleVersion}
                      />{" "}
                      2.6.0 (M2)
                    </label>

                    <label className="raDis">
                      <input
                        type="radio"
                        name="letter"
                        value="c"
                        checked={ver === "c"}
                        onChange={this.handleVersion}
                      />{" "}
                      2.5.5 (SNAPSHOT)
                    </label>
                    <div>
                      <label className="raDis">
                        <input
                          type="radio"
                          name="letter"
                          value="c"
                          checked={ver === "d"}
                          onChange={this.handleVersion}
                        />{" "}
                        2.5.4
                      </label>
                      <label className="raDis">
                        <input
                          type="radio"
                          name="letter"
                          value="c"
                          checked={ver === "e"}
                          onChange={this.handleVersion}
                        />{" "}
                        2.4.11 (SNAPSHOT)
                      </label>
                      <label className="raDis">
                        <input
                          type="radio"
                          name="letter"
                          value="c"
                          checked={ver === "f"}
                          onChange={this.handleVersion}
                        />{" "}
                        2.4.10
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <span className="userShowTitle">Project Metadata</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Group</span>
                <input
                  type="text"
                  placeholder="com.verizon"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Artifact</span>
                <input
                  type="text"
                  placeholder="garagehacks"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Name</span>
                <input
                  type="text"
                  placeholder="garagehacks"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Description</span>
                <input
                  type="text"
                  placeholder="Demo project for GarageHacks"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Package Name</span>
                <input
                  type="text"
                  placeholder="com.verizon.garagehacks"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Server Port</span>
                <input
                  type="text"
                  placeholder="8081"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Packaging</span>
                <label className="raDis">
                  <input
                    type="radio"
                    name="pack"
                    value="j"
                    checked={pack === "j"}
                    onChange={this.handlePacking}
                    id="jar"
                  />{" "}
                  JAR
                </label>
                <label>
              
                 <input
                  id="war"
                    type="radio"
                    name="pack"
                    value="w"
                    checked={pack === "w"}
                    onChange={this.handlePacking}
                  />{" "}
                  WAR
                </label>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">application</span>
                <label className="raDis">
                  <input
                    type="radio"
                    name="letter"
                    value="c"
                    checked={fle === "p"}
                    onChange={this.handleChange}
                  />{" "}
                  .properties
                </label>
                <label className="raDis">
                  <input
                    type="radio"
                    name="letter"
                    value="c"
                    checked={fle === "y"}
                    onChange={this.handleChange}
                  />{" "}
                  .yml
                </label>
              </div>
              <div class="cntr"></div>
            </div>
          </div>
          <div className="userUpdate">
            <div style={{marginBottom: '20px'}}>
            <span className="userUpdateTitle">Add Dependencies</span>
            <Multiselect showArrow options={plainArray} isObject={false} />
            </div>
            <div>
            <div className="userUpdateLeft">
              <span className="userShowTitle">Database Connection Properties</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Database</span>
                <select className="form-control" name="type" >
            <option>Select</option>
            <option>MySQL</option>
            <option>Oracle</option>
            <option>Postgres</option>
            <option>H2</option>
                 
          </select>
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Schema</span>
                <input
                  type="text"
                  placeholder="garagehacks_db"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Port</span>
                <input
                  type="text"
                  placeholder="3306"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">UserName</span>
                <input
                  type="text"
                  placeholder="Root"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Password</span>
                <input
                  type="password"
                  placeholder="*******"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">DDL-Auto</span>
                <select className="form-control" name="type" >
            <option>None</option>
            <option>Update</option>
            <option>create</option>
            <option>create-drop</option>
                           
          </select>
              </div>
              </div>
              </div>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
              <span className="userShowTitle">Define Your Packages & Classes</span>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Controller</span>
                <input
                  type="text"
                  placeholder="DemoController"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Service</span>
                <input
                  type="text"
                  placeholder="DemoService"
                  className="userUpdateInput"
                />
              </div>
              <div className="userShowInfo">
                <span className="userShowInfoTitle">Repository</span>
                <input
                  type="text"
                  placeholder="DemoRepository"
                  className="userUpdateInput"
                />
              </div>
                
                <span className="userShowTitle titleSpan">Add Custom Packages and Classes</span>
                <br/>
                {this.state.values.map((e2,el, indx) => (
          <div key={indx}>
          <label>Package Name</label>
            <input
            type="text"
                    placeholder="com.verizon.gh.utils"
                    className="userPack"
              value={el.value || ""}
              onChange={e => this.handleChange(indx, e)}
            />
            <label>Class Name</label>
            <input
            type="text"
                    placeholder="Utils"
                    className="userPack"
              value={e2.value || ""}
              onChange={e => this.handleChange(indx, e)}
            />
            <input
            className="rmvBtn"
              type="button"
              value="-"
              onClick={() => this.removeClick(indx)}
            />
          </div>
        ))}
            <input   className="userUpdateButton titleSpan" type="button" value="add more" onClick={() => this.addClick()} />
        
      
              </div>
             
            </form>
          </div>
 
               
        </div>
        <div className="generate">
        <span className="footerTitle footerBtn">It generates spring boot project with just what you need to start quickly!</span>
        <Button className="footerBtn" variant="contained" color="primary" >
  Generate
</Button>
               
               
               </div>
      </div>
    );
  }
}
