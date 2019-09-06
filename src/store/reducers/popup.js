export function popup(state = {status: false}, action) {
    switch (action.type) {

        case "POPUP_OPEN":
            return action.modalParams

        case "POPUP_CLOSE":
            return {status : false }
        default:
            return state
    }
  }
  