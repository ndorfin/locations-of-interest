import * as Reflux from "reflux";
import { AuthActions } from "./authActions.actions";
import { IAuthStore } from "./authStore.interface";

export class AuthStore extends Reflux.Store {
  constructor() {
    super();

    this.state = {
      accessToken: undefined,
    } as IAuthStore;

    this.listenables = AuthActions;
  }

  public onLogout() {
    this.setState({
      accessToken: undefined,
    });
  }

  public onSetAccessToken(accessToken: string) {
    this.setState({
      accessToken,
    });
  }
}
