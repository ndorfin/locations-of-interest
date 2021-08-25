import { createBrowserHistory, History } from "history";

export const histroyInit = (): History => {
  const browserHistory = createBrowserHistory();

  return browserHistory;
};
