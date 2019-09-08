import React from 'react'
import "./styles/global.sass"
import Calendar from './components/calendar'
import { connect } from "react-redux"
import Popup from './components/popup'
import Modal from 'react-modal'

function App({events,  popup}){
  Modal.setAppElement('#root')
  const list = 
  [
    {
      icon: "home",
      title : "Home",
    },
    {
      icon: "poll",
      title : "Dashboard",
    },
    {
      icon: "envelope",
      title : "Inbox",
    },
    {
      icon: "barcode",
      title : "Products",
    },
    {
      icon: "receipt",
      title : "Invoices",
    },
    {
      icon: "user",
      title : "Customers",
    },
    {
      icon: "comments",
      title : "Chat Room",
    },
    {
      icon: "calendar-alt",
      title : "Calendar",
    },
    {
      icon: "life-ring",
      title : "Help Center",
    },
    {
      icon: "cog",
      title : "Settings",
    },
  ]
  return(
  <div className="main">
    <div className="sidebar">
        <div className="logo">
            IMPEKABLE
        </div>
        <div className="list">
          {list.map((item,i)=>(
            <button key={i}><i className={`fas fa-${item.icon} `}></i>{item.title}</button>
          ))}
        </div>
    </div>
    <div className="content">
      <div className="top-bar">
        <div className="search-pool">
          <input/>
          <i className="fas fa-search"></i>
        </div>
        <div className="actions-pool">
          <button><i className="fas fa-life-ring"></i></button>
          <button><i className="fas fa-comments"></i></button>
          <button><i className="fas fa-bell"></i></button>

          <select>
            <option>John Doe</option>
          </select>
          <img src='/src/static/Avatar.png' />
        </div>
      </div>
      <div className="current-window">Calendar</div>
      <div className="calendar">
        <Calendar/>
      </div>
    </div>
    <Modal isOpen={popup.status} style={{background : "white"}} >
      <Popup></Popup>
    </Modal>
  </div>
  )
}


const mapStateToProps = state => {
  return {
    events: state.events,
    popup : state.popup
  }
}

export default connect(
  mapStateToProps,
)(App)