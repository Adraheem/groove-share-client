import apiInstance, {setAuthToken} from "./api.service";
import {ILoginRequest, ISignupRequest} from "../types/auth.types";
import store from "../redux/store";
import {authActions} from "../redux/reducers/authSlice";

class AuthService {

  public async login(data: ILoginRequest) {
    try {
      const response = await apiInstance.post("/auth/login", data);
      setAuthToken(response.data.token);
      store.dispatch(authActions.login(response.data.token));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async signup(data: ISignupRequest) {
    try {
      const response = await apiInstance.post("/auth/signup", data);
      setAuthToken(response.data.token);
      store.dispatch(authActions.login(response.data.token));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async reauthenticate() {
    const token = store.getState().auth.authToken;
    setAuthToken(token);
  }

}

const authService = new AuthService();
export default authService;
