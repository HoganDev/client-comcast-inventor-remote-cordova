cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-plugin-screen-orientation.screenorientation",
    "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
    "pluginId": "cordova-plugin-screen-orientation",
    "clobbers": [
      "cordova.plugins.screenorientation"
    ]
  },
  {
    "id": "cordova-plugin-statusbar.statusbar",
    "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
    "pluginId": "cordova-plugin-statusbar",
    "clobbers": [
      "window.StatusBar"
    ]
  },
  {
    "id": "cordova-plugin-app-preferences.apppreferences",
    "file": "plugins/cordova-plugin-app-preferences/www/apppreferences.js",
    "pluginId": "cordova-plugin-app-preferences",
    "clobbers": [
      "plugins.appPreferences"
    ]
  },
  {
    "id": "cordova-plugin-cache-clear.CacheClear",
    "file": "plugins/cordova-plugin-cache-clear/www/CacheClear.js",
    "pluginId": "cordova-plugin-cache-clear",
    "clobbers": [
      "CacheClear"
    ]
  },
  {
    "id": "com.msopentech.authdialog.AuthDialog",
    "file": "plugins/com.msopentech.authdialog/src/ios/authDialog.js",
    "pluginId": "com.msopentech.authdialog",
    "clobbers": [
      "window.authDialog"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-inappbrowser": "3.0.0",
  "cordova-plugin-screen-orientation": "3.0.1",
  "cordova-plugin-statusbar": "2.4.2",
  "cordova-plugin-app-preferences": "0.99.3",
  "cordova-plugin-cache-clear": "1.3.7",
  "com.msopentech.authdialog": "0.1.6"
};
// BOTTOM OF METADATA
});