import { Component, Store } from "reflux";

import { IAuthStore } from "../../store/auth/authStore.interface";
import { AuthStore } from "../../store/auth/authStore.store";

export abstract class AppComponent<P = {}, S = {}> extends Component<typeof Store, P, S & IAuthStore> {
  constructor(props: P) {
    super(props);

    this.stores = [AuthStore];
  }
}
