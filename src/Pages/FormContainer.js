import React from 'react'
import "../App.css"
import axios from 'axios'
import FormComponent from "./FormComponent"

class FormContainer extends React.Component{
  constructor(){
    super()
    this.state={
      Savedfilter:"",
      Circlename:"",
      Divisionname:"",
      Subdivision:"",
      Section:"",
      Townname:"",
      SSname:"",
      Feedername:"",
      Dtname:"",
      Manufacturername:"",
      Metertype:"",
      YearofManufacture:"",
      Metercategory:"",
      Filmwareversion:"",
      Communicated:"",
      Fromdate:"",
      Todate:"",
      Metergroup:"",
      Meterserialnumber:"",
      Circle: [],
      Division:[],
      Subdiv:[] ,
      Sec:[],
      Town:[],
      ss:[],
      Feeder:[],
      DT:[],
      search:[],
      on:false,
      on1:false,
      table:false
    }
    this.handlechange=this.handlechange.bind(this)
  }
  componentDidMount() {
    axios.get(`/getAllCircleName`)
    .then(x => {
      console.log(x);
      this.setState({Circle: x.data});
    });
    this.fetchdiv()
    this.fetchSubdiv()
    this.fetchSection()
    this.fetchTown()
    this.fetchSs()
    this.fetchFeeder()
    this.fetchDt()
    this.fetchSearch()
  }
  fetchdiv(){
    axios.get(`/getAllDivisionName`)
    .then(x => {
      console.log(x);
      this.setState({Division: x.data});
    });
  }
  fetchSubdiv(){
    axios.get(`/getAllSubDivisionName`)
    .then(x => {
      console.log(x);
      this.setState({Subdiv: x.data});
    });
  }
  fetchSection(){
    axios.get(`/getAllSectionName`)
    .then(x => {
      console.log(x);
      this.setState({Sec: x.data});
    });
  }
  fetchTown(){
    axios.get(`/getTownDetails`)
    .then(x => {
      console.log(x);
      this.setState({Town: x.data});
    });
  }
  fetchSs(){
    axios.get(`/getSubStationdetails`)
    .then(x => {
      console.log(x);
      this.setState({ss: x.data});
    });
  }
  fetchFeeder(){
    axios.get(`/getFeederdetails`)
    .then(x => {
      console.log(x);
      this.setState({Feeder: x.data});
    });
  }
  fetchDt(){
    axios.get(`/getTransformerdetails`)
    .then(x => {
      console.log(x);
      this.setState({DT: x.data});
    });
  }
  fetchSearch(){
    axios.get(`/getMeterSearchDetailsByCircleId`)
    .then(x => {
      console.log(x);
      this.setState({search: x.data});
    });
    }
  fCirclename=()=>{
    return this.state.Circle.map(s=>s.circleName.split('\n'))
  }
  fDivname=()=>{
    return this.state.Division.map(s=>s.divisionName.split('\n'))
  }
  fSubDivname=()=>{
    return this.state.Subdiv.map(s=>s.subdivisionName.split('\n'))
  }
  fSecname=()=>{
    return this.state.Sec.map(s=>s.sectionName.split('\n'))
  }
  fTownname=()=>{
    return this.state.Town.map(s=>s.townName.split('\n'))
  }
  fSS=()=>{
    return this.state.ss.map(s=>s.subStationShortName)
  }
  fFeedername=()=>{
    return this.state.Feeder.map(s=>s.feederName.split('\n'))
  }
  fDtname=()=>{
    return this.state.DT.map(s=>s.transformerName.split('\n'))
  }
  toggle=()=>{
    this.setState({
      on:!this.state.on
    })
  }
  toggle1=()=>{
    this.setState({
      on1:!this.state.on1
    })
  }
  toggle2=()=>{
    this.setState({
      table:!this.state.table
    })
  }

  handlechange(event){
    const {name,value}=event.target
    this.setState({[name]:value})
  }
  render(){
    return(
      <FormComponent 
      handlechange={this.handlechange}
      data={this.state}
      Circle_name={this.fCirclename()}
      Division_name={this.fDivname()}
      Sub_divname={this.fSubDivname()}
      Section_name={this.fSecname()}
      Town_name={this.fTownname()} 
      ss_name={this.fSS()}
      Feeder_name={this.fFeedername()}
      Dt_name={this.fDtname()}
      toggle={this.toggle}
      toggle1={this.toggle1}
      toggle2={this.toggle2}
     />
    )
  }
}


export default FormContainer