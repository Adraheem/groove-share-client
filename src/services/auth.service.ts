import apiInstance, {setAuthToken} from "./api.service";
import {ILoginRequest, ISignupRequest, IUser} from "../types/auth.types";
import store from "../redux/store";
import {authActions} from "../redux/reducers/authSlice";
import {message} from "antd";

class AuthService {

  public async login(data: ILoginRequest) {
    try {
      const response = await apiInstance.post("/auth/login", data);
      await this.setTokenAndGetUserDetails(response.data.token);
      store.dispatch(authActions.login(response.data.token));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async signup(data: ISignupRequest) {
    try {
      const response = await apiInstance.post("/auth/signup", data);
      await this.setTokenAndGetUserDetails(response.data.token);
      store.dispatch(authActions.login(response.data.token));
    } catch (e) {
      return Promise.reject(e);
    }
  }

  public async reauthenticate() {
    const token = store.getState().auth.authToken;
    await this.setTokenAndGetUserDetails(token);
  }

  public async updateUserDetails(data: IUser){
    try {
      const response = await apiInstance.patch("/user/details", data);
      const userDetails: IUser = response.data;
      store.dispatch(authActions.setUserDetails(userDetails));
      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }

  private async setTokenAndGetUserDetails(token: string) {
    try {
      setAuthToken(token);
      const response = await apiInstance.get("/user/details");
      const userDetails: IUser = response.data;
      store.dispatch(authActions.setUserDetails(userDetails));
    } catch (e) {
      message.open({type: "error", content: "Unable to get user details"})
      store.dispatch(authActions.logout());
    }
  }

}

const authService = new AuthService();
export default authService;
