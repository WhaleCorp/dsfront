import TemplateStore from "./Stores/TemplateStore"
import React from "react"
// eslint-disable-next-line no-unused-vars
import { observable, computed, autorun, reaction, get, action } from 'mobx';
import MonitorStore from "./Stores/MonitorStore";
import UserStore from "./Stores/UserStore";

class MainStore {
   constructor() {
      this.TemplateStore = new TemplateStore()
      this.UserStore = new UserStore()
      this.MonitorStore = new MonitorStore(this.UserStore)
   }
}

const StoreContext = React.createContext(new MainStore())
export const useStores = () => React.useContext(StoreContext)
