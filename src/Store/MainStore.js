import TemplateStore from "./Stores/TemplateStore"
import React from "react"
// eslint-disable-next-line no-unused-vars
import { observable, computed, autorun, reaction, get, action } from 'mobx';
import MonitorStore from "./Stores/MonitorStore";
import UserStore from "./Stores/UserStore";
import ChangerStore from "./Stores/ChangerStore";

class MainStore {
   constructor() {
      this.UserStore = new UserStore()
      this.TemplateStore = new TemplateStore()
      this.MonitorStore = new MonitorStore()
      this.ChangerStore = new ChangerStore()
   }
}

const StoreContext = React.createContext(new MainStore())
export const useStores = () => React.useContext(StoreContext)
