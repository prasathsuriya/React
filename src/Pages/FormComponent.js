import React,{useEffect} from "react"
import AutoComplete from "./AutoComplete"
import "./Autocomplete.css"
import '../App.css'
import Table1 from './Table1'
import '../Components/MeterSearch/meter.css'
function FormComponent(props){
    
   
    return(
        <main className="screen" style={{marginTop:"1%"}}>
            
                
                
                
                <button type="button" style={{width:"13%"}} class="btn btn-block btn-primary btn float-right">Add Meter</button>
            
                <h4 style={{textAlign:"left"}}>Network Hierarchy / Address</h4>
                
                <table>
                <th>
                <AutoComplete items={props.Circle_name} label="Circle Name" /> </th>
                <th>
                <AutoComplete items={props.Division_name} label="Division Name"/></th>
                <th>
                <AutoComplete items={props.Sub_divname} label="SubDivision Name" /></th>

                <th>
                <AutoComplete items={props.Section_name} label="Section Name" /></th>
                <tr>
                <th>
                <AutoComplete items={props.Town_name} label="Town Name" /></th>
                <th>
                <AutoComplete items={props.ss_name} label="SS Name" /></th>
    
                <th>
                <AutoComplete items={props.Feeder_name} label="Feeder Name" /></th>
                <th><AutoComplete items={props.Dt_name} label="DT Name" /></th>
                </tr>
                
                </table>
                <div style={{marginTop:"-12%",marginLeft:"81%"}} className="content">
                <div className="container-fluid" >
          <div class="dropdown">
                <button type="button" class="btn btn-block btn-primary btn">Advance Filter</button>
                <div class="dropdown-content">
                  <button className="butt" onClick={props.toggle} >Meter Manufacturer</button>
                  <button className="butt" onClick={props.toggle1} >Communication Status</button>
                </div>
              </div></div> </div>              
                

                
                <div style={{textAlign:"left",marginTop:"10%"}} className="content">
            
                    {props.data.on?
                    <div className="container-fluid" ><h4 >Meter Manufacturer</h4>
                    <table>
                <th>
                <AutoComplete items={props.Circle_name} label="Manfacturer Name" /> </th>
                <th>
                <AutoComplete items={props.Division_name} label="Meter Name"/></th>
                <th>
                <AutoComplete items={props.Sub_divname} label="Manfacturer Year" /></th>

                <th>
                <AutoComplete items={props.Section_name} label="Meter Category" /></th>
                <tr>
                <th>
                <AutoComplete items={props.Town_name} label="Firmware Version" /></th>
               
                </tr>
                </table>
                </div>:null}
                
                
                </div>
                
                
        
                <div style={{textAlign:"left",marginTop:"1%"}}>
        
                
                    {props.data.on1?
                   <div> <h4 >Communication Status</h4>
                    <table>
                <th>
                <AutoComplete items={props.Circle_name} label="Communicated" /> </th>
                <th>
                <AutoComplete items={props.Division_name} label="From Date"/></th>
                <th>
                <AutoComplete items={props.Sub_divname} label="To Date" /></th>

                <th>
                <AutoComplete items={props.Section_name} label="Meter Group" /></th>
                <tr>
                <th>
                <AutoComplete items={props.Town_name} label="Meter Serial Number" /></th>
               
                </tr>
                </table></div>
                :null}
                </div>
                
                <div style={{marginTop:"4%"}}>
                    <h5>
                <button style={{width:"10%"}} type="button" class="btn btn-block btn-primary btn"  onClick={props.toggle2}>Search</button>
               {/*  <button style={{width:"10%"}} type="button" class="btn btn-block btn-primary btn"  onClick={()=> alert("Form is Submitted!!")}>Save Filter</button></h5> */}</h5></div>
               {props.data.table?
               <Table1 />:null}
        
    </main>

    )
}

export default FormComponent
