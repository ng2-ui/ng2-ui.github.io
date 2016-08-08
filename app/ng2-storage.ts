import {Injectable} from "@angular/core";

class MemoryStorage {
  data: any = {};
  get length(): number                   { return Object.keys(this.data).length; }
  getItem(key: string)                   { return this.data[key]; }
  setItem(key: string, value: any): void { this.data[key] = value; }
  removeItem(key: string): void          { delete this.data[key]; }
  clear(): void                          { this.data = {} }
  key(num: number): string               { return Object.keys(this.data)[num]; }
}

@Injectable()
export class Ng2Storage {
  preference: any = 'sessionStorage';
  storage: any;

  constructor() {
    // preference && (this.preference = preference);   //'localStorage' or 'sessionStorage'

    if (this.preference == 'localStorage' && this.hasStorage('localStorage')) {
      this.storage = window.localStorage
    } else if(this.preference == 'sessionStorage' && this.hasStorage('sessionStorage')) {
      this.storage = window.sessionStorage
    } else {
      this.storage = new MemoryStorage()
    }
  }

  get length(): number                   { return this.storage.length; }
  getItem(key: any)                   {
    let strValue = this.storage.getItem(key);
    try {
      return JSON.parse(strValue);
    } catch(e) {
      return strValue;
    }
  }
  setItem(key: string, value: any): void {
    let strValue = typeof value === 'object' ? JSON.stringify(value) : value.toString();
    this.storage.setItem(key, strValue);
  }
  removeItem(key: string): void          { this.storage.removeItem(key); }
  clear(): void                          { this.storage.clear()  }

  private hasStorage(name: string) {
    try {
      window[name].setItem('test', '1');
      window[name].removeItem('test');
      return true
    } catch (e) {
      return false
    }
  }
}
