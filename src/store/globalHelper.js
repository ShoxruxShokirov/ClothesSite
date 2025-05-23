function globalReducer(state, action) {
    switch(action.type) {
        case "decrement":
            return { ...state,
                count: state.count-1
            }
        case "increment":
            return { ...state,
                count: state.count+1
            }
        case 'SET_COLOR':
            return { ...state,
                color: action.value
            }
        case 'SET_SIZE':
            return { ...state,
                size: action.value
            }
        default:
            return state
    }
}

export { globalReducer }
