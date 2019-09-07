import React from 'react'
import "./styles/global.sass"
import Calendar from './components/calendar'
import { connect } from "react-redux"
import Popup from './components/popup'
import Modal from 'react-modal'
import Avatar from './static/Avatar.png'

function App({events,  popup}){
  Modal.setAppElement('#root')
  const list = 
  [
    {
      icon: "home",
      title : "Home",
    },
    {
      icon: "equalizer",
      title : "Dashboard",
    },
    {
      icon: "mail_outline",
      title : "Inbox",
    },
    {
      icon: "notes",
      title : "Products",
    },
    {
      icon: "dashboard",
      title : "Invoices",
    },
    {
      icon: "person_outline",
      title : "Customers",
    },
    {
      icon: "forum",
      title : "Chat Room",
    },
    {
      icon: "today",
      title : "Calendar",
    },
    {
      icon: "device_unknown",
      title : "Help Center",
    },
    {
      icon: "settings_applications",
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
            <button key={i}><i className="material-icons">{item.icon}</i>{item.title}</button>
          ))}
        </div>
    </div>
    <div className="content">
      <div className="top-bar">
        <div className="search-pool">
          <input/>
          <i className="material-icons search">search</i>
        </div>
        <div className="actions-pool">
          <button><i className="material-icons">device_unknown</i></button>
          <button><i className="material-icons">forum</i></button>
          <button><i className="material-icons">notification_important</i></button>

          <select>
            <option>John Doe</option>
          </select>
          <img src={Avatar} />
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