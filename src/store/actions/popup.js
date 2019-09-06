export function popupOpen(modalParams) {
    return {
      type: "POPUP_OPEN",
      modalParams
    }
  }
  export function popupClose(status) {    
    return {
      type: "POPUP_CLOSE",
      status
    }
  }
