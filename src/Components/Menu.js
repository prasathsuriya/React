import React from 'react'
import Acumen from '../Images/Acumen.jpg'
import menu from '../Images/menu.jpg'

export default function Menu() {
    
    return (
        <div>
            <aside className="main-sidebar sidebar-light-primary elevation-4">
  {/* Brand Logo */}
  <a href="https://acumentec.com/home.html" className="brand-link">
    <img src={Acumen} alt="Acumen Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span  className="brand-text font-weight-light">AcumenTechnologies</span>
  </a>
  {/* Sidebar */}
  <div  className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src={menu} className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a  href="#" className="d-block">Home</a>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item has-treeview menu-open">
         
          
           
            <li className="nav-item has-treeview">
              <a href="/#" className="nav-link active">
                <i className="nav-icon fas fa-copy" />
                <p>Dashboard</p>
              </a>
            </li>
          
        </li>
        
        <li className="nav-item has-treeview">
          <a  href="#" className="nav-link">
            <i  className="nav-icon fas fa-copy" />
            <p>
              Meter Masters
              <i className="fas fa-angle-left right" />
              <span className="badge badge-info right">2</span>
            </p>
          </a>
          <ul  className="nav nav-treeview">
            <li className="nav-item">
              <a  href="../Pages/SearchMeter" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>SearchMeter</p>
              </a>
            </li>
            <li className="nav-item">
              <a  href="../Pages/Addmeter" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Add Meter</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button><i class="fa fa-plus" style={{fontsize:"48px",color:"black"}}></i></button>
              </a>
            </li>
            
            
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              DCU Masters
              
            </p>
          </a>
         
        </li>
        
        
        
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

        </div>
    )
}
