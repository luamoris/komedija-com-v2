//

export default class Translation {
   constructor(translation, config) {
      this._translation = translation;
      this._config = config;
   }

   // Получить список кодов доступных языков
   getCodes() {
      return this._config.supported;
   }

   // Получить код языка по умолчанию
   getDefaultCode() {
      return this._config.default;
   }

   // Проверить существует ли код
   isExist(code) {
      return this.getCodes().includes(code);
   }

   // Получить перевод по коду
   getTranslationByCode(code) {
      return this.isExist(code) ? this._translation[code] : null;
   }

   /**
    * Получить текущее значение кода языка:
    * 1. Проверить URL.
    * 2. Проверить Local Storage.
    * 3. Проверить какой у пользователя локальный язык.
    * 
    * - Если совпадения есть - вернуть { ok: true, code: 'flag' }
    * - Если совпадений нет - вернуть { ok: false (ошибка 404), code: 'default' }.
    */
   getCurrentCode() {
      const info = {
         ok: true,
         code: this.getDefaultCode(),
      };

      const browserCode = window.location.pathname.split('/')[1];
      const storageCode = localStorage.getItem(this._config.localStorageName);
      const localCode = navigator.language.split('-')[0];

      if (browserCode) {
         if (this.isExist(browserCode)) info.code = browserCode;
         else info.ok = false;
      }

      if (!info.ok) {
         if (storageCode && this.isExist(storageCode)) info.code = storageCode;
         else if (localCode && this.isExist(localCode)) info.code = localCode;
      }

      return info;
   }

   /**
    * Сохранить язык:
    * 1. Добавить язык в Local Storage.
    * 2. Добавить язык в атрибут lang тега html.
    * 3. Добавить язык в dataset тега body.
    */
   setCode(code) {
      if (!this.isExist(code)) return this.getCurrentCode();

      const name = this._config.localStorageName;
      localStorage.setItem(name, code);
      document.documentElement.lang = code;
      document.body.dataset[name] = code;

      return { ok: true, code };
   }

   /**
    * Проверить инициализацию кода
    */
   isInit() {
      return document.body.dataset?.[this._config.localStorageName];
   }

}
