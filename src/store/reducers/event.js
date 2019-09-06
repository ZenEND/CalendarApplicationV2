const eventList = [
    {
      title: 'My Event',
      start: '2019-09-05T00:00:00.000Z',
      end: '2019-09-06T00:00:00.000Z',
      id : 1
    },
    {
        title: 'My Event',
        start: '2019-09-15T00:00:00.000Z',
        end: '2019-09-20T00:00:00.000Z',
        id : 2
      },
      {
        title: 'My Event',
        start: '2019-09-27T00:00:00.000Z',
        end: '2019-09-29T00:00:00.000Z',
        id : 3
      }
  ]
export function events(state = eventList, action) {
    switch (action.type) {
        case "ADD_EVENT":
            state.push(action.event)
            return state
            
        case "REMOVE_EVENT":
            var index = -1
            var found = state.find((item)=>(index++,item.id==action.event))
            if (found)
              state.splice(index, 1)
            return state
        
        case "CHANGE_EVENT":
            var index = -1
            var found = state.find((item)=>(index++,item.id==action.event.id))
            console.log(action)
            console.log(found)
            state[index] = 
            {
              title : action.event.title,
              start: action.event.start,
              end : action.event.end
            }
            return state
        
        default:
            return state
    }
  }
  