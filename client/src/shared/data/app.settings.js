// Глобальные настройки приложения которые отображаются в классах тега body.

// Все типы глобальных настроек
export const TYPES = {
   scheme: 'scheme',
   devices: 'devices',
   sidebar: 'sidebar',
   vibrate: 'vibrate',
};

// Значения для Schemes
export const SCHEMES = {
   light: 'light',
   dark: 'dark',
   winter: 'winter',
};

// Значения для Devices
export const DEVICES = {
   mobile: 'mobile',
   tablet: 'tablet',
   desktop: 'desktop',
}

export const DEVICES_MEDIA = {
   mobile: '(max-width: 766px)',
   tablet: '(min-width: 767px) and (max-width: 1199px)',
   desktop: '(min-width: 1200px)',
}

// Значения для Sidebar
export const SIDEBAR = {
   short: 'short',
   long: 'long',
};

export const VIBRATE = {
   on: 'on',
   off: 'off',
}


export const APP_SETTINGS = {
   scheme: {
      type: TYPES.scheme,
      default: SCHEMES.winter,
      values: SCHEMES,
   },
   devices: {
      type: TYPES.devices,
      default: DEVICES.desktop,
      values: DEVICES,
   },
   sidebar: {
      type: TYPES.sidebar,
      default: SIDEBAR.long,
      values: SIDEBAR,
   },
   vibrate: {
      type: TYPES.vibrate,
      default: VIBRATE.on,
      values: VIBRATE,
   }
};
