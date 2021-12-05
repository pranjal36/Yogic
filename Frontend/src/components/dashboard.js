import React, { Component } from "react";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div id="big-container">
    <div className="app-container">
      <div className="flex-column" id="app-dashboard">
        <div className="flex-row flex-apart" id="dashboard-header">
          <div>
            <h1>Dashboard</h1>
            <h2>{`Welcome ${props.username}`}</h2>
          </div>
          <div>
            <input placeholder="Search.." id="app-search"></input>
            <i className="fa fa-search"></i>
            <button id="log-out" className="text-medium"> Log Out </button>

          </div>
        </div>
        <div className="flex-apart flex-column" id="dashboard-charts">
          <div className="flex-row dashboard-row">
            <div className="dashboard-container">
              <div className="dashboard-item">
              <div className="dashboard-container-logo"><img src="https://image.shutterstock.com/image-vector/dumbbells-icon-gym-vector-illustration-260nw-427771663.jpg"></img></div>

              <div id="gym-btn">
                <a href="https://stayfitgym.herokuapp.com/">
                  <button className="text-large"> Go to GYM </button>
                </a>
              </div>

              </div>
            </div>
            <div className="dashboard-container">
              <div className="dashboard-item">
              <div className="dashboard-container-logo"><img src="https://media.istockphoto.com/vectors/black-and-white-yoga-icon-vector-vector-id954620260"></img></div>

              <div id="yoga-btn">
                <a href="https://stayfityoga.herokuapp.com/">
                  <button className="text-large"> Go to YOGA </button>
                </a>
              </div>

            </div>
            </div>
          </div>
          <div className="flex-row dashboard-row-large">
            <div className="dashboard-container dashboard-container-large" id="data-container">
              <div className="dashboard-item flex-column">
                <div className="chart-header flex-row flex-apart">
                  <h3 className="text-large">Fitness Overview</h3>
                  <div className="text-small dropdown">
                    Yearly <i className="fa fa-chevron-down"></i>
                  </div>
                </div>
                <table id="chart4" className=""><thead><tr><th scope="col"> Month </th> <th scope="col"> Detection </th> <th scope="col"> Side Bend </th> <th scope="col"> Bicep Curl </th></tr></thead>
                  <tbody><tr><th scope="row"> June </th> <td ><span className="data"> 50 </span></td> <td style={{"--start":0, "--size":0.2}}><span className="data"> 20 </span></td>
                    <td ><span className="data"> 40 </span></td></tr> <tr><th scope="row"> July </th> <td style={{"--start":0.5, "--size":0.8}}><span className="data"> 80 </span></td>
                      <td ><span className="data"> 50 </span></td> <td style={{"--start":0.4, "--size":0.1}}><span className="data"> 10 </span></td></tr> <tr><th scope="row"> August </th> <td style={{"--start":0.8, "--size":0.4}}><span className="data"> 40 </span></td>
                        <td style={{"--start":0.5, "--size":0.3}}><span className="data"> 30 </span></td> <td style={{"--start":0.1, "--size":0.2}}><span className="data"> 20 </span></td></tr></tbody></table>

              </div>
            </div>
            <div className="flex-column dashboard-column">
            <div className="dashboard-container">
              <div className="dashboard-item">
                <h3 className="text-large" style={{marginBottom: "20px"}}>Improvement</h3>
                <div className="flex-column">
                  <div className="chart-container" style={{marginBottom: "20px"}}>
                    <table className="charts-css line app-chart" id="chart1">
                      <tbody>
                        <tr><td style={{"--start": 0.0,"--size": 0.4}}></td></tr>
                        <tr><td style={{"--start": 0.4,"--size": 0.2}}></td></tr>
                        <tr><td style={{"--start": 0.2,"--size": 0.6}}></td></tr>
                        <tr><td style={{"--start": 0.6,"--size": 0.8}}></td></tr>
                        <tr><td style={{"--start": 0.8,"--size": 0.8}}></td></tr>
                        <tr><td style={{"--start": 0.8,"--size": 0.6}}></td></tr>
                        <tr><td style={{"--start": 0.6,"--size": 1.0}}></td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="chart-container">
                    <table className="charts-css line app-chart" id="chart3">
                    <tbody>
                      <tr><td style={{"--start": 0.0,"--size": 0.4}}></td></tr>
                      <tr><td style={{"--start": 0.4,"--size": 0.2}}></td></tr>
                      <tr><td style={{"--start": 0.2,"--size": 0.4}}></td></tr>
                      <tr><td style={{"--start": 0.4,"--size": 0.4}}></td></tr>
                      <tr><td style={{"--start": 0.4,"--size": 0.7}}></td></tr>
                      <tr><td style={{"--start": 0.7,"--size": 0.8}}></td></tr>
                      <tr><td style={{"--start": 0.8,"--size": 1.0}}></td></tr>
                    </tbody>
                  </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="dashboard-container">
              <div className="dashboard-item" id="transfer-now">
                <div className="chart-header flex-row flex-apart">
                  <h3 className="text-medium">Friend Challenge</h3>
                </div>
                <div className="flex-row flex-apart"><input placeholder="To.."></input></div>
                <div className="flex-row flex-apart"><input placeholder="Message.."></input></div>
                <Link to="gym">
                  <button className="text-medium"> Send </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dashboard;
