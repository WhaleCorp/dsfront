import TemplateStore from "./Stores/TemplateStore"
import React from "react"
// eslint-disable-next-line no-unused-vars
import { observable, computed, autorun, reaction, get, action } from 'mobx';

class MainStore {
   constructor() {
      this.TemplateStore = new TemplateStore()
   }
}

const StoreContext = React.createContext(new MainStore())
export const useStores = () => React.useContext(StoreContext)
