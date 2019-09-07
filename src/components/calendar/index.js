import React, {Component} from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dayClick
import { connect } from "react-redux"
import {eventAdd, eventChange, eventRemove} from '../../store/actions/event.js'
import { popupOpen, popupClose } from "../../store/actions/popup.js"

import '../../styles/calendar.sass'

class Calendar extends Component {
  calendar = React.createRef()
  buttonText = {
    today:    'today',
    month:    'month',
    week:     'week',
    day:      'day',
    list:     'list',
    prev:     'Back',
    next:     'next'
  }
  componentDidUpdate(){
    console.log(this.calendar.current.getApi().getEvents());
    let events = this.calendar.current.getApi().getEvents();
    events.map((event) => event.remove())
    this.props.events.map((event)=> this.calendar.current.getApi().addEvent(event))
  }
  render() {
    return (
      <div className='calendar-block'>
        <h1>Calendar View</h1>
        <div className='container'>
          <FullCalendar
            defaultView="dayGridMonth"
            header={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
            }}
            plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
            ref={ this.calendar }
            events={ this.props.events }
            id='calendar'
            height='parent'
            buttonText={this.buttonText}
            editable="true"
            timeZone='UTC'
            eventDurationEditable={false}
            themeSystem='bootstrap'
            editable="true"
            timeZone='UTC'
            themeSystem='bootstrap'
            selectable="true"
            selectable="true"
            eventClick={this.eventClick}
            select={this.select}
            eventDrop={this.eventDrop}
            />
        </div>
      </div>
    )
  }
  
  eventClick = (info) => {
    const modalParams = {
      status : true,
      title : info.event.title,
      start : info.event.start.toISOString(),
      end : info.event.end.toISOString(),
      id : info.event.id,
      x : info.jsEvent.x,
      y : info.jsEvent.y,
    }
    console.log(info.event.start.toISOString())
    console.log(info)
    this.props.popupOpen(modalParams)
    
  }
  eventDrop = (info) => {
    console.log(info)
    this.props.eventChange(info.event)
  }


  select =(info) => {
    const modalParams = {
      status : true,
      start : info.start.toISOString(),
      end : info.end.toISOString(),
      x : info.jsEvent.x,
      y : info.jsEvent.y,
    }
    console.log(info)
    this.props.popupOpen(modalParams)
  }

}
const mapDispatchToProps = dispatch => {
  return {
    eventAdd: (event) => dispatch(eventAdd(event)),
    eventRemove: (event) => dispatch(eventRemove(event)),
    eventChange: (event) => dispatch(eventChange(event)),
    popupOpen: (modalParams) => dispatch(popupOpen(modalParams)),
    popupClose: () => dispatch(popupClose(false)),
  }
}

const mapStateToProps = state => {
  return {
    popup : state.popup,
    events : state.events

  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)