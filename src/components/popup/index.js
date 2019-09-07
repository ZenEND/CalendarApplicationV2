import React from 'react' 
import { connect } from "react-redux"
import { popupClose } from "../../store/actions/popup"
import {eventAdd,eventRemove} from '../../store/actions/event'


import "../../styles/popup.sass"

const Popup = ({popup, popupClose, events, eventAdd,eventRemove}) => {
    const handleSubmit = (e) =>{
        e.preventDefault()
        const event = {
            title : title.current.value,
            start : start.current.value,
            end : end.current.value,
            id : events[events.length-1].id+1,
            notice : notice.current.value,
            backgroundColor : color.current.value,
        }
        if (popup.id!=null){
            eventRemove(popup.id)
            console.log("hi")
        }
        eventAdd(event)
        popupClose()
        return false
    }
    const removeItem = (id) => {
        eventRemove(id)
        popupClose()
    }
    const btnClass = [
        null, null , null , null
    ]
    const handleClick = (e) => {
        console.log(e)
    }
    const title = React.createRef();
    const start = React.createRef();
    const end = React.createRef();
    const color = React.createRef();
    const notice = React.createRef();
    const handleChange = (value) => {
        return value
    }
    return(
        <div className="popup" style={{top: popup.y ? popup.y+40 : 0, left: popup.x ? popup.x-150 : 0}}>
            <form className="form" onSubmit={(e)=> handleSubmit(e)}>
                <div>
                    <input placeholder="Title" autoComplete="off" ref={title} defaultValue={popup.title} maxLength="30" name="title"></input>

                </div>
                <div>
                    <input 
                        placeholder="DD/MM/YYYY" 
                        autoComplete="off" 
                        ref={start} 
                        required onChange={(e) => e} 
                        patern="/[+-]?\d{4}(-[01]\d(-[0-3]\d(T[0-2]\d:[0-5]\d:?([0-5]\d(\.\d+)?)?[+-][0-2]\d:[0-5]\dZ?)?)?)?/" 
                        defaultValue={popup.start} 
                        name="start"
                    />
                    <i className="material-icons">date_range</i>
                </div>
                <div>
                    <input placeholder="event time" autoComplete="off" ref={end} onFocus={(value) => handleChange(value)} defaultValue={popup.end} name="end"></input>
                    <i className="material-icons">access_time</i>
                </div>
                <div>
                    <input placeholder="notice" autoComplete="off" ref={notice} name="title"></input>
                </div>
                <select className="popup-select" ref={color}>
                    <option value="#3788d8" defaultChecked>Blue</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                </select>
                <div className="form-actions">
                    <div>
                    <button type="submit" className="form-edit">Edit</button>
                    </div>
                    <div>
                    <button className="form-delete" onClick={()=>removeItem(popup.id)}>Discard</button>
                    </div>
                </div>
                    <button className="form-close material-icons" onClick={()=>popupClose()}>clear</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      eventAdd: (event) => dispatch(eventAdd(event)),
      eventRemove: (event) => dispatch(eventRemove(event)),
      popupClose: () => dispatch(popupClose(false))
    }
  }
  
  const mapStateToProps = state => {
    return {
      events: state.events,
      popup: state.popup
    }
  }

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Popup)