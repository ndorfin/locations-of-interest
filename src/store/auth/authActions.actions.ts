import * as Reflux from "reflux";
import { IAuthActions } from "./authActions.interface";

export const AuthActions = Reflux.createActions([
  "logout",
  "setAccessToken",
]) as IAuthActions;
