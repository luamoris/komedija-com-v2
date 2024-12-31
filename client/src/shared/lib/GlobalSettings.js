//

export default class GlobalSettings {
   constructor(settings) {
      this._settings = settings;
   }

   // Получить все ключи
   getAlleTypes() { // null || ['scheme', 'devices', 'sidebar']
      if (typeof this._settings !== "object" || !this._settings) return null;
      return Object.keys(this._settings).map((key) => this._settings[key].type);
   }

   // Получить все значение ключа
   getValuesByType(type) { // null || ['light', 'dark', 'winter']
      if (!this.getAlleTypes()?.includes(type)) return null;
      return Object.values(this._settings[type]?.values);
   }

   // Получить стандартное значения ключа
   getDefaultByType(type) { // null || dark
      if (!this.getAlleTypes()?.includes(type)) return null;
      return this._settings[type]?.default;
   }

   // Получить текущее значение ключа (либо из localStorage, либо стандартное)
   getCurrentByType(type) { // null || dark
      if (!this.getAlleTypes()?.includes(type)) return null;
      const lsValue = localStorage.getItem(type);
      if (lsValue && this.getValuesByType(type)?.includes(lsValue)) return lsValue;
      const defaultVal = this.getDefaultByType(type);
      this.setValueToStorage(type, defaultVal);
      return defaultVal;
   }

   // Добавить новое текущее значение ключа в localStorage
   setValueToStorage(type, value) { // true || false
      if (!this.getAlleTypes()?.includes(type)) return false;
      if (!this.getValuesByType(type)?.includes(value)) return false;
      // const altValue = this.getCurrentByType(type);
      document.body.dataset[type] = value;
      localStorage.setItem(type, value);
      return true;
   }

   // Получить объект ключей с текущими значениями
   getCurrentSettings() {
      const res = {};
      this.getAlleTypes()?.forEach((type) => {
         res[type] = this.getCurrentByType(type);
         document.body.dataset[type] = res[type];
      })
      return res;
   }
}
