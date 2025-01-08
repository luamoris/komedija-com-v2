// Глобальные настройки приложения которые отображаются в классах тега body.

// Все типы глобальных настроек
export const TYPES = {
   scheme: 'scheme',
   devices: 'devices',
   sidebar: 'sidebar',
};

// Значения для Schemes
export const SCHEMES = {
   light: 'light',
   dark: 'dark',
   winter: 'winter',
};

// Значения для Devices
export const DEVICES = {
   phone: 'phone',
   tablet: 'tablet',
   computer: 'computer',
}

// Значения для Sidebar
export const SIDEBAR = {
   short: 'short',
   long: 'long',
};


export const APP_SETTINGS = {
   scheme: {
      type: TYPES.scheme,
      default: SCHEMES.winter,
      values: SCHEMES,
   },
   devices: {
      type: TYPES.devices,
      default: DEVICES.computer,
      values: DEVICES,
   },
   sidebar: {
      type: TYPES.sidebar,
      default: SIDEBAR.long,
      values: SIDEBAR,
   },
};
