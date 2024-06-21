// import { AUTH_NOTIFICATION, AUTH_SET_LOADING } from "../types";

// const initialState = {
//   notification: {
//     message: "",
//     type: "",
//   },
//   loading: false,
// };

// export default function authReducer(state = initialState, { action, payload }) {
//   switch (action) {
//     case AUTH_NOTIFICATION:
//       return {
//         ...state,
//         notification: payload,
//       };
//     case AUTH_SET_LOADING:
//       return {
//         ...state,
//         loading: payload,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// }

const initialData = {
  loading: false,
};
const authReducer = (state = initialData, action) => {
  switch (action.type) {
      case "loading":
          return {
              ...state,
              loading: action.payload,
          };
      default:
          return state;
  }
};

export default authReducer; 