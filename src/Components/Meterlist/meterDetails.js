import React, { Component } from "react";
import Input from '../Input/Input'


class MeterDetails extends Component {
  state = {};

  cancel = () => {
    this.props.history.push("/meter");
  };

  save = () => {
    this.props.history.push("/meter");
  };

  render() {
    return (
      <div className="search-view" style={{ padding: "2rem" }}>
        
        <div className="sections">
        <h5>Meter Details</h5>
          <section style={{transform: "scale(0.9)",marginRight:"100%",marginTop:"-4%"}}>
            
            <div className="section-fields">
              <table>
            <th><Input label="Meter Serial Number" /></th>
            <th><Input label="Meter Type" /></th>
            <th><Input label="Device Id" /></th>
            <th><Input label="Meter Category" /></th>

            <tr>
            <th><Input label="Manufacturer Name" /></th>
              <th><Input label="Firmware Version" /></th>
              <th><Input label="Year of Manufacture" /></th>
              <th><Input label="IP Address" /></th></tr>
            <tr><th><Input label="Meter Sim No" /></th>
            <th><Input label="Installation Type" /></th>
            <th><Input label="Installation Sub Type" /></th>
            <th><Input label="Connection Status" /></th></tr>
            <th><Input label="Voltage Multiplier" /></th>
            <th><Input label="Energy Multiplier" /></th>
            <th><Input label="Current Multiplier" /></th>
            <th><Input label="Current Multiplie" /></th></table>

              
              </div>
          </section>
          <h5>Organisation Structure</h5>
          <section  style={{transform: "scale(0.9)",marginRight:"100%",marginTop:"-3%"}}>
            
            <div className="section-fields">
            <table>
            <th><Input label="Circle Name" /></th>
            <th><Input label="Division Name" /></th>
            <th><Input label="Section Name" /></th>
            <th><Input label="Meter Serial Number" /></th>
      
            <tr>
            <th><Input label="Town Name" /></th>
              <th ><Input label="SS Name" /></th>
              <th><Input label="Feeder Name" /></th>
            <th><Input label="DT Name" /></th></tr>
            <th><Input label="Latitude" /></th>
            <th><Input label="Longitude" /></th>
            <th><Input label="Meter  Number" /></th></table>
            </div>
          </section>
          <h5>Meter Connection Info</h5>
          <section style={{transform: "scale(0.9)",marginRight:"100%",marginTop:"-3%"}}>
            
            <div className="section-fields">
            <table>
            <th><Input label="Meter Type" /></th>
            <th><Input label="Meter IP" /></th>
            <th><Input label="Meter Port" /></th>
            <th><Input label="System Title" /></th>
            
            <tr>
            <th><Input label="Block Cipher Key" /></th>
              <th><Input label="Authentication Key" /></th>
              <th><Input label="Referencing Name" /></th>
            <th><Input label="Is Wrapper" /></th></tr>
            <th><Input label="IEC" /></th>
            <th><Input label="Serial Port"/></th>
            <th><Input label="Connection Status" /></th>
            <th><Input label="Meter " /></th></table>
            </div>
          </section>
        </div>
        <div className="buttons">
          <button className="btn" type="button" style={{width:"10%"}} class="btn btn-block btn-primary btn float-left" onClick={this.cancel}>
            Cancel
            <i className="la la-times-circle"></i>
          </button>
          <button className="btn primary" style={{width:"10%"}} type="button" class="btn btn-block btn-primary btn float-right" onClick={this.save}>
            Save
            <i className="la la-save"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default MeterDetails;
