import apiInstance from "./api.service";
import {ILoginRequest, ISignupRequest} from "../types/auth.types";
import store from "../redux/store";
import {authActions} from "../redux/reducers/authSlice";

class AuthService {

  public async login(data: ILoginRequest) {
    try {
      const response = await apiInstance.post("/auth/login", data);
      store.dispatch(authActions.login(response.data.token));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async signup(data: ISignupRequest) {
    try {
      const response = await apiInstance.post("/auth/signup", data);
      store.dispatch(authActions.login(response.data.token));
    } catch (e) {
      return Promise.reject(e);
    }
  }

}

const authService = new AuthService();
export default authService;
