(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less":
  /*!************************************************************************************************************************************************************************!*\
    !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/less-loader/dist/cjs.js??ref--14-3!./src/styles.less ***!
    \************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistCjsJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesLessLoaderDistCjsJsSrcStylesLess(module, exports, __webpack_require__) {
    // Imports
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(
    /*! ../node_modules/css-loader/dist/runtime/api.js */
    "./node_modules/css-loader/dist/runtime/api.js");

    exports = ___CSS_LOADER_API_IMPORT___(true); // Module

    exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  font-family: Arial, Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 100%;\n  background-color: white;\n  color: #4f4f4f;\n}\nbody.sx-modal {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\nbody.sx-adm main > .container {\n  max-width: 100%;\n  padding: 0 1em;\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4 {\n  color: black;\n}\n.form.sx-cols-as-column .form_cols {\n  flex-direction: column;\n}\n.form.sx-cols-as-column .form_cols_col {\n  flex: 0 1 auto;\n}\n.form.sx-cols-as-column .form_cols_col:not(:first-child) {\n  margin-left: 0;\n  margin-top: 0.5em;\n}\n.form_title {\n  margin-bottom: 0.4em;\n}\n.form_row + .form_row {\n  margin-top: 1em;\n}\n.form_row.sx-submit {\n  margin-top: 2em;\n}\n.form_cols {\n  display: flex;\n}\n.form_cols_col {\n  flex-basis: 100%;\n}\n.form_cols_col:first-child {\n  flex: 0 0 13em;\n}\n.form_cols_col:not(:first-child) {\n  margin-left: 1em;\n}\n.form_100 {\n  display: block;\n  width: 100%;\n}\n.form_radio-chain {\n  position: relative;\n}\n.form_radio-chain + .form_radio-chain label {\n  border-left: 0;\n}\n.form_radio-chain input[type=\"radio\"] {\n  position: absolute;\n  visibility: hidden;\n  z-index: -1;\n}\n.form_radio-chain input[type=\"radio\"]:checked + label {\n  background: #cccccc;\n  background: linear-gradient(to bottom, #cccccc 0%, #eeeeee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cccccc', endColorstr='#eeeeee', GradientType=0);\n}\n.form_radio-chain label {\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 1.25em;\n  height: 2em;\n  border: lightgray solid 0.0625em;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #ffffff;\n  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5', GradientType=0);\n}\n.form_comment {\n  margin: 0.3em 0 0 0;\n}\n.form_thumbnails_thumbnail {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 4em;\n  height: 4em;\n  overflow: hidden;\n  margin: 0.5em 0.5em 0 0;\n  background-color: lightgray;\n}\n.form_thumbnails_thumbnail_close {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.form_thumbnails_thumbnail_close:hover:after {\n  opacity: 1;\n}\n.form_thumbnails_thumbnail_close:after {\n  content: '\\D7';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1em;\n  height: 1em;\n  background-color: white;\n  cursor: pointer;\n  opacity: 0.8;\n}\n.form_thumbnails_thumbnail img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.form.sx-loading {\n  opacity: 0.5;\n}\n.form input[type=\"text\"].sx-error,\n.form input[type=\"number\"].sx-error,\n.form input[type=\"email\"].sx-error,\n.form input[type=\"file\"].sx-error,\n.form input[type=\"password\"].sx-error,\n.form select.sx-error,\n.form textarea.sx-error {\n  border-color: red;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\nbutton {\n  box-sizing: border-box;\n  border: lightgray solid 0.0625em;\n  height: 2.5em;\n  cursor: pointer;\n  background: #ffffff;\n  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5', GradientType=0);\n}\ninput[type=\"button\"]:hover,\ninput[type=\"submit\"]:hover,\nbutton:hover {\n  border-color: #bababa;\n}\ninput[type=\"button\"]:active,\ninput[type=\"submit\"]:active,\nbutton:active {\n  color: #333333;\n  background: #e5e5e5;\n  background: linear-gradient(to bottom, #e5e5e5 0%, #ffffff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e5e5e5', endColorstr='#ffffff', GradientType=0);\n}\ninput[type=\"button\"][disabled],\ninput[type=\"submit\"][disabled],\nbutton[disabled] {\n  color: #b3b3b3;\n}\ninput[type=\"button\"][disabled]:hover,\ninput[type=\"submit\"][disabled]:hover,\nbutton[disabled]:hover {\n  border-color: lightgray;\n  cursor: not-allowed;\n}\ninput[type=\"button\"][disabled]:active,\ninput[type=\"submit\"][disabled]:active,\nbutton[disabled]:active {\n  background: #ffffff;\n  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5', GradientType=0);\n}\ninput[type=\"text\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"password\"],\nselect,\ninput[type=\"file\"] {\n  box-sizing: border-box;\n  font-size: 1em;\n  font-family: Arial, Tahoma, Helvetica, sans-serif;\n  border: lightgray solid 0.0625em;\n  box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.1);\n  min-width: 4em;\n  height: 1.71em;\n}\ninput[type=\"text\"] + input[type=\"submit\"],\ninput[type=\"number\"] + input[type=\"submit\"],\ninput[type=\"email\"] + input[type=\"submit\"],\ninput[type=\"password\"] + input[type=\"submit\"],\nselect + input[type=\"submit\"],\ninput[type=\"file\"] + input[type=\"submit\"] {\n  border-left: 0;\n}\ninput[type=\"text\"][disabled],\ninput[type=\"number\"][disabled],\ninput[type=\"email\"][disabled],\ninput[type=\"password\"][disabled],\nselect[disabled],\ninput[type=\"file\"][disabled] {\n  background-color: whitesmoke;\n}\ntextarea {\n  box-sizing: border-box;\n  font-size: 1em;\n  font-family: Arial, Tahoma, Helvetica, sans-serif;\n  border: lightgray solid 0.0625em;\n  box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.1);\n  display: block;\n  width: 100%;\n  height: 10em;\n}\na:hover {\n  text-decoration: none;\n}\n.text-eclipse {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.text-mute {\n  color: #999999;\n}\n.text-mute a {\n  color: #666666;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.container {\n  box-sizing: border-box;\n  max-width: 60em;\n  width: 100%;\n  margin: 0 auto;\n}\n.align-left {\n  text-align: left;\n}\n.align-right {\n  text-align: right;\n}\n.align-center {\n  text-align: center;\n}\n.hidden {\n  display: none !important;\n}\n.not-visible {\n  visibility: hidden;\n}\n.hr {\n  height: 1px;\n  margin: 10px 0;\n  border: 0;\n  background-color: whitesmoke;\n}\n", "", {
      "version": 3,
      "sources": ["styles.less", "/Volumes/D/localhost/altair/altair-front/src/styles.less", "/Volumes/D/localhost/altair/altair-front/src/css_typography.less", "/Volumes/D/localhost/altair/altair-front/src/css_form.less"],
      "names": [],
      "mappings": "AAAA,8EAA8E;ACS9E;EACI,SAAA;EACA,iDAAA;EACA,mCAAA;EACA,eAAA;EACA,uBAAA;EACA,cAAA;ADPJ;ACSI;EACI,YAAA;EACA,aAAA;EACA,gBAAA;ADPR;ACSI;EAEQ,eAAA;EACA,cAAA;EACA,SAAA;ADRZ;AEhBA;;;;EACI,YAAA;AFqBJ;AGbI;EAEQ,sBAAA;AHcZ;AGZY;EACI,cAAA;AHchB;AGZgB;EACI,cAAA;EACA,iBAAA;AHcpB;AGRI;EACI,oBAAA;AHUR;AGNQ;EACI,eAAA;AHQZ;AGLQ;EACI,eAAA;AHOZ;AGHI;EACI,aAAA;AHKR;AGHQ;EACI,gBAAA;AHKZ;AGHY;EACI,cAAA;AHKhB;AGFY;EACI,gBAAA;AHIhB;AGCI;EACI,cAAA;EACA,WAAA;AHCR;AGEI;EACI,kBAAA;AHAR;AGEQ;EAEQ,cAAA;AHDhB;AGJI;EAUQ,kBAAA;EACA,kBAAA;EACA,WAAA;AHHZ;AGTI;EAgBQ,mBAAA;EAGA,gEAAA;EACA,kHAAA;AHJZ;AGhBI;EAwBQ,sBAAA;EACA,oBAAA;EACA,mBAAA;EACA,iBAAA;EACA,WAAA;EACA,gCAAA;EACA,mBAAA;EACA,eAAA;EACA,mBAAA;EAGA,gEAAA;EACA,kHAAA;AHLZ;AGSI;EACI,mBAAA;AHPR;AGWQ;EACI,kBAAA;EACA,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,gBAAA;EACA,uBAAA;EACA,2BAAA;AHTZ;AGWY;EACI,kBAAA;EACA,MAAA;EACA,QAAA;AHThB;AGWgB;EACI,UAAA;AHTpB;AGYgB;EACI,cAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,UAAA;EACA,WAAA;EACA,uBAAA;EACA,eAAA;EACA,YAAA;AHVpB;AGnBQ;EAkCQ,eAAA;EACA,gBAAA;AHZhB;AGkBI;EACI,YAAA;AHhBR;AGoBQ;;;;;;;EACI,iBAAA;AHZZ;AGiBA;;;EACI,sBAAA;EACA,gCAAA;EACA,aAAA;EACA,eAAA;EACA,mBAAA;EAGA,gEAAA;EACA,kHAAA;AHbJ;AGeI;;;EACI,qBAAA;AHXR;AGcI;;;EACI,cAAA;EACA,mBAAA;EAGA,gEAAA;EACA,kHAAA;AHVR;AGaI;;;EACI,cAAA;AHTR;AGWQ;;;EACI,uBAAA;EACA,mBAAA;AHPZ;AGWQ;;;EACI,mBAAA;EAGA,gEAAA;EACA,kHAAA;AHPZ;AGcA;;;;;;EAxMI,sBAAA;EACA,cAAA;EACA,iDAAA;EACA,gCAAA;EACA,8CAAA;EAsMA,cAAA;EACA,cAAA;AHHJ;AGKI;;;;;;EACI,cAAA;AHER;AGCI;;;;;;EACI,4BAAA;AHMR;AGFA;EAtNI,sBAAA;EACA,cAAA;EACA,iDAAA;EACA,gCAAA;EACA,8CAAA;EAoNA,cAAA;EACA,WAAA;EACA,YAAA;AHQJ;AClMI;EACI,qBAAA;ADoMR;AChMA;EACI,mBAAA;EACA,gBAAA;EACA,uBAAA;ADkMJ;AC/LA;EACI,cAAA;ADiMJ;AClMA;EAIQ,cAAA;ADiMR;AC7LA;EACI,mBAAA;AD+LJ;AC5LA;EACI,sBAAA;EACA,eAAA;EACA,WAAA;EACA,cAAA;AD8LJ;AC3LA;EACI,gBAAA;AD6LJ;AC1LA;EACI,iBAAA;AD4LJ;ACzLA;EACI,kBAAA;AD2LJ;ACxLA;EACI,wBAAA;AD0LJ;ACvLA;EACI,kBAAA;ADyLJ;ACtLA;EACI,WAAA;EACA,cAAA;EACA,SAAA;EACA,4BAAA;ADwLJ",
      "file": "styles.less",
      "sourcesContent": ["/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  font-family: Arial, Tahoma, Helvetica, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 100%;\n  background-color: white;\n  color: #4f4f4f;\n}\nbody.sx-modal {\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\nbody.sx-adm main > .container {\n  max-width: 100%;\n  padding: 0 1em;\n  margin: 0;\n}\nh1,\nh2,\nh3,\nh4 {\n  color: black;\n}\n.form.sx-cols-as-column .form_cols {\n  flex-direction: column;\n}\n.form.sx-cols-as-column .form_cols_col {\n  flex: 0 1 auto;\n}\n.form.sx-cols-as-column .form_cols_col:not(:first-child) {\n  margin-left: 0;\n  margin-top: 0.5em;\n}\n.form_title {\n  margin-bottom: 0.4em;\n}\n.form_row + .form_row {\n  margin-top: 1em;\n}\n.form_row.sx-submit {\n  margin-top: 2em;\n}\n.form_cols {\n  display: flex;\n}\n.form_cols_col {\n  flex-basis: 100%;\n}\n.form_cols_col:first-child {\n  flex: 0 0 13em;\n}\n.form_cols_col:not(:first-child) {\n  margin-left: 1em;\n}\n.form_100 {\n  display: block;\n  width: 100%;\n}\n.form_radio-chain {\n  position: relative;\n}\n.form_radio-chain + .form_radio-chain label {\n  border-left: 0;\n}\n.form_radio-chain input[type=\"radio\"] {\n  position: absolute;\n  visibility: hidden;\n  z-index: -1;\n}\n.form_radio-chain input[type=\"radio\"]:checked + label {\n  background: #cccccc;\n  background: -moz-linear-gradient(top, #cccccc 0%, #eeeeee 100%);\n  background: -webkit-linear-gradient(top, #cccccc 0%, #eeeeee 100%);\n  background: linear-gradient(to bottom, #cccccc 0%, #eeeeee 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cccccc', endColorstr='#eeeeee', GradientType=0);\n}\n.form_radio-chain label {\n  box-sizing: border-box;\n  display: inline-flex;\n  align-items: center;\n  padding: 0 1.25em;\n  height: 2em;\n  border: lightgray solid 0.0625em;\n  white-space: nowrap;\n  cursor: pointer;\n  background: #ffffff;\n  background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n  background: -webkit-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5', GradientType=0);\n}\n.form_comment {\n  margin: 0.3em 0 0 0;\n}\n.form_thumbnails_thumbnail {\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  width: 4em;\n  height: 4em;\n  overflow: hidden;\n  margin: 0.5em 0.5em 0 0;\n  background-color: lightgray;\n}\n.form_thumbnails_thumbnail_close {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.form_thumbnails_thumbnail_close:hover:after {\n  opacity: 1;\n}\n.form_thumbnails_thumbnail_close:after {\n  content: '\\D7';\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1em;\n  height: 1em;\n  background-color: white;\n  cursor: pointer;\n  opacity: 0.8;\n}\n.form_thumbnails_thumbnail img {\n  max-width: 100%;\n  max-height: 100%;\n}\n.form.sx-loading {\n  opacity: 0.5;\n}\n.form input[type=\"text\"].sx-error,\n.form input[type=\"number\"].sx-error,\n.form input[type=\"email\"].sx-error,\n.form input[type=\"file\"].sx-error,\n.form input[type=\"password\"].sx-error,\n.form select.sx-error,\n.form textarea.sx-error {\n  border-color: red;\n}\ninput[type=\"button\"],\ninput[type=\"submit\"],\nbutton {\n  box-sizing: border-box;\n  border: lightgray solid 0.0625em;\n  height: 2.5em;\n  cursor: pointer;\n  background: #ffffff;\n  background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n  background: -webkit-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5', GradientType=0);\n}\ninput[type=\"button\"]:hover,\ninput[type=\"submit\"]:hover,\nbutton:hover {\n  border-color: #bababa;\n}\ninput[type=\"button\"]:active,\ninput[type=\"submit\"]:active,\nbutton:active {\n  color: #333333;\n  background: #e5e5e5;\n  background: -moz-linear-gradient(top, #e5e5e5 0%, #ffffff 100%);\n  background: -webkit-linear-gradient(top, #e5e5e5 0%, #ffffff 100%);\n  background: linear-gradient(to bottom, #e5e5e5 0%, #ffffff 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e5e5e5', endColorstr='#ffffff', GradientType=0);\n}\ninput[type=\"button\"][disabled],\ninput[type=\"submit\"][disabled],\nbutton[disabled] {\n  color: #b3b3b3;\n}\ninput[type=\"button\"][disabled]:hover,\ninput[type=\"submit\"][disabled]:hover,\nbutton[disabled]:hover {\n  border-color: lightgray;\n  cursor: not-allowed;\n}\ninput[type=\"button\"][disabled]:active,\ninput[type=\"submit\"][disabled]:active,\nbutton[disabled]:active {\n  background: #ffffff;\n  background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n  background: -webkit-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n  background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5', GradientType=0);\n}\ninput[type=\"text\"],\ninput[type=\"number\"],\ninput[type=\"email\"],\ninput[type=\"password\"],\nselect,\ninput[type=\"file\"] {\n  box-sizing: border-box;\n  font-size: 1em;\n  font-family: Arial, Tahoma, Helvetica, sans-serif;\n  border: lightgray solid 0.0625em;\n  box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.1);\n  min-width: 4em;\n  height: 1.71em;\n}\ninput[type=\"text\"] + input[type=\"submit\"],\ninput[type=\"number\"] + input[type=\"submit\"],\ninput[type=\"email\"] + input[type=\"submit\"],\ninput[type=\"password\"] + input[type=\"submit\"],\nselect + input[type=\"submit\"],\ninput[type=\"file\"] + input[type=\"submit\"] {\n  border-left: 0;\n}\ninput[type=\"text\"][disabled],\ninput[type=\"number\"][disabled],\ninput[type=\"email\"][disabled],\ninput[type=\"password\"][disabled],\nselect[disabled],\ninput[type=\"file\"][disabled] {\n  background-color: whitesmoke;\n}\ntextarea {\n  box-sizing: border-box;\n  font-size: 1em;\n  font-family: Arial, Tahoma, Helvetica, sans-serif;\n  border: lightgray solid 0.0625em;\n  box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.1);\n  display: block;\n  width: 100%;\n  height: 10em;\n}\na:hover {\n  text-decoration: none;\n}\n.text-eclipse {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.text-mute {\n  color: #999999;\n}\n.text-mute a {\n  color: #666666;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.container {\n  box-sizing: border-box;\n  max-width: 60em;\n  width: 100%;\n  margin: 0 auto;\n}\n.align-left {\n  text-align: left;\n}\n.align-right {\n  text-align: right;\n}\n.align-center {\n  text-align: center;\n}\n.hidden {\n  display: none !important;\n}\n.not-visible {\n  visibility: hidden;\n}\n.hr {\n  height: 1px;\n  margin: 10px 0;\n  border: 0;\n  background-color: whitesmoke;\n}\n", "/* You can add global styles to this file, and also import other style files */\n@import \"./css_variables\";\n\n// z-index:\n//      nav = 10\n//      modal = 11 // 4 еще на запас\n//      errors-fly = 15\n\n// тело документа делать в процентах, остальное в em\nbody {\n    margin: 0;\n    font-family: @font_family;\n    -webkit-font-smoothing: antialiased;\n    font-size: 100%;\n    background-color: white; // необходимо для надежности\n    color: @color_dark_light;\n\n    &.sx-modal {\n        width: 100vw;\n        height: 100vh;\n        overflow: hidden;\n    }\n    &.sx-adm {\n        main > .container {\n            max-width: 100%;\n            padding: 0 1em;\n            margin: 0;\n        }\n    }\n}\n\n@import \"./css_typography\";\n@import \"./css_form\";\n\na {\n    &:hover {\n        text-decoration: none;\n    }\n}\n\n.text-eclipse {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.text-mute {\n    color: @color_text_mute;\n\n    a {\n        color: darken(@color_text_mute, 20%);\n    }\n}\n\n.text-nowrap {\n    white-space: nowrap;\n}\n\n.container {\n    box-sizing: border-box;\n    max-width: @maxWidth;\n    width: 100%;\n    margin: 0 auto;\n}\n\n.align-left {\n    text-align: left;\n}\n\n.align-right {\n    text-align: right;\n}\n\n.align-center {\n    text-align: center;\n}\n\n.hidden {\n    display: none !important; // для перекрытия искусственно даем важность, более не делаем\n}\n\n.not-visible {\n    visibility: hidden;\n}\n\n.hr {\n    height: 1px;\n    margin: 10px 0;\n    border: 0;\n    background-color: whitesmoke;\n}\n", "@import \"./css_variables\";\n\nh1, h2, h3, h4 {\n    color: black;\n}\n", "@import \"./css_variables\";\n\n.templateForInput() {\n    box-sizing: border-box;\n    font-size: 1em;\n    font-family: @font_family;\n    border: lightgray solid @1px; // 1px / 16px\n    box-shadow: inset 0 0 0.3em rgba(0, 0, 0, 0.1); // 5px / 16px\n}\n\n.form {\n    &.sx-cols-as-column {\n        .form_cols {\n            flex-direction: column;\n\n            &_col {\n                flex: 0 1 auto;\n\n                &:not(:first-child) {\n                    margin-left: 0;\n                    margin-top: 0.5em;\n                }\n            }\n        }\n    }\n\n    &_title {\n        margin-bottom: 0.4em; // 4px / 16px\n    }\n\n    &_row {\n        & + & {\n            margin-top: 1em; // 16px / 16px\n        }\n\n        &.sx-submit {\n            margin-top: 2em; // 32px / 16px\n        }\n    }\n\n    &_cols {\n        display: flex;\n\n        &_col {\n            flex-basis: 100%;\n\n            &:first-child {\n                flex: 0 0 13em; // 210px / 16px\n            }\n\n            &:not(:first-child) {\n                margin-left: 1em;\n            }\n        }\n    }\n\n    &_100 {\n        display: block;\n        width: 100%;\n    }\n\n    &_radio-chain {\n        position: relative;\n\n        & + & {\n            label {\n                border-left: 0;\n            }\n        }\n\n        input[type=\"radio\"] {\n            position: absolute;\n            visibility: hidden;\n            z-index: -1; // для надежности\n        }\n\n        input[type=\"radio\"]:checked + label {\n            background: rgb(204, 204, 204);\n            background: -moz-linear-gradient(top, rgba(204, 204, 204, 1) 0%, rgba(238, 238, 238, 1) 100%);\n            background: -webkit-linear-gradient(top, rgba(204, 204, 204, 1) 0%, rgba(238, 238, 238, 1) 100%);\n            background: linear-gradient(to bottom, rgba(204, 204, 204, 1) 0%, rgba(238, 238, 238, 1) 100%);\n            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cccccc', endColorstr='#eeeeee',GradientType=0);\n        }\n\n        label {\n            box-sizing: border-box;\n            display: inline-flex;\n            align-items: center;\n            padding: 0 1.25em; // 20px / 16px\n            height: 2em; // 32px / 16px\n            border: lightgray solid @1px;\n            white-space: nowrap;\n            cursor: pointer;\n            background: rgb(255, 255, 255);\n            background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);\n            background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);\n            background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(229, 229, 229, 1) 100%);\n            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0);\n        }\n    }\n\n    &_comment {\n        margin: 0.3em 0 0 0; // 4px / 16px\n    }\n\n    &_thumbnails {\n        &_thumbnail {\n            position: relative;\n            display: inline-flex;\n            justify-content: center;\n            align-items: center;\n            width: 4em; // 72px / 16px\n            height: 4em; // 72px / 16px\n            overflow: hidden;\n            margin: 0.5em 0.5em 0 0; // 8px / 16px\n            background-color: lightgray;\n\n            &_close {\n                position: absolute;\n                top: 0;\n                right: 0;\n\n                &:hover:after {\n                    opacity: 1;\n                }\n\n                &:after {\n                    content: '\\D7'; // x, &times;\n                    display: flex;\n                    justify-content: center;\n                    align-items: center;\n                    width: 1em; // 16px / 16px\n                    height: 1em; // 16px / 16px\n                    background-color: white;\n                    cursor: pointer;\n                    opacity: 0.8;\n                }\n            }\n\n            img {\n                max-width: 100%;\n                max-height: 100%;\n            }\n        }\n    }\n\n\n    &.sx-loading {\n        opacity: 0.5;\n    }\n\n    input[type=\"text\"], input[type=\"number\"], input[type=\"email\"], input[type=\"file\"], input[type=\"password\"], select, textarea {\n        &.sx-error {\n            border-color: red;\n        }\n    }\n}\n\ninput[type=\"button\"], input[type=\"submit\"], button {\n    box-sizing: border-box;\n    border: lightgray solid @1px; // 1px / 16px\n    height: 2.5em; // 40px / 16px\n    cursor: pointer;\n    background: #ffffff;\n    background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n    background: -webkit-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n    background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0);\n\n    &:hover {\n        border-color: darken(lightgray, 10%);\n    }\n\n    &:active {\n        color: #333333; // для Safari\n        background: #e5e5e5;\n        background: -moz-linear-gradient(top, #e5e5e5 0%, #ffffff 100%);\n        background: -webkit-linear-gradient(top, #e5e5e5 0%, #ffffff 100%);\n        background: linear-gradient(to bottom, #e5e5e5 0%, #ffffff 100%);\n        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#e5e5e5', endColorstr='#ffffff',GradientType=0);\n    }\n\n    &[disabled] {\n        color: lighten(#333333, 50%); // для Safari\n\n        &:hover {\n            border-color: lightgray;\n            cursor: not-allowed;\n        }\n\n        // для Safari\n        &:active {\n            background: #ffffff;\n            background: -moz-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n            background: -webkit-linear-gradient(top, #ffffff 0%, #e5e5e5 100%);\n            background: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e5e5e5',GradientType=0);\n        }\n\n        // \\для Safari\n    }\n}\n\ninput[type=\"text\"], input[type=\"number\"], input[type=\"email\"], input[type=\"password\"], select, input[type=\"file\"] {\n    .templateForInput();\n    min-width: 4em; // 64px / 16px\n    height: 1.71em; // 27px / 16px\n\n    & + input[type=\"submit\"] {\n        border-left: 0;\n    }\n\n    &[disabled] {\n        background-color: whitesmoke;\n    }\n}\n\ntextarea {\n    .templateForInput();\n    display: block;\n    width: 100%;\n    height: 10em; // 160px / 16px\n}\n"]
    }]); // Exports

    module.exports = exports;
    /***/
  },

  /***/
  "./node_modules/css-loader/dist/runtime/api.js":
  /*!*****************************************************!*\
    !*** ./node_modules/css-loader/dist/runtime/api.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesCssLoaderDistRuntimeApiJs(module, exports, __webpack_require__) {
    "use strict";
    /*
      MIT License http://www.opensource.org/licenses/mit-license.php
      Author Tobias Koppers @sokra
    */
    // css base code, injected by the css-loader
    // eslint-disable-next-line func-names

    module.exports = function (useSourceMap) {
      var list = []; // return the list of modules as css string

      list.toString = function toString() {
        return this.map(function (item) {
          var content = cssWithMappingToString(item, useSourceMap);

          if (item[2]) {
            return "@media ".concat(item[2], " {").concat(content, "}");
          }

          return content;
        }).join('');
      }; // import a list of modules into the list
      // eslint-disable-next-line func-names


      list.i = function (modules, mediaQuery, dedupe) {
        if (typeof modules === 'string') {
          // eslint-disable-next-line no-param-reassign
          modules = [[null, modules, '']];
        }

        var alreadyImportedModules = {};

        if (dedupe) {
          for (var i = 0; i < this.length; i++) {
            // eslint-disable-next-line prefer-destructuring
            var id = this[i][0];

            if (id != null) {
              alreadyImportedModules[id] = true;
            }
          }
        }

        for (var _i = 0; _i < modules.length; _i++) {
          var item = [].concat(modules[_i]);

          if (dedupe && alreadyImportedModules[item[0]]) {
            // eslint-disable-next-line no-continue
            continue;
          }

          if (mediaQuery) {
            if (!item[2]) {
              item[2] = mediaQuery;
            } else {
              item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
            }
          }

          list.push(item);
        }
      };

      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

      var cssMapping = item[3];

      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        var sourceMapping = toComment(cssMapping);
        var sourceURLs = cssMapping.sources.map(function (source) {
          return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
        });
        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    } // Adapted from convert-source-map (MIT)


    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
      return "/*# ".concat(data, " */");
    }
    /***/

  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    var stylesInDom = [];

    function getIndexByIdentifier(identifier) {
      var result = -1;

      for (var i = 0; i < stylesInDom.length; i++) {
        if (stylesInDom[i].identifier === identifier) {
          result = i;
          break;
        }
      }

      return result;
    }

    function modulesToDom(list, options) {
      var idCountMap = {};
      var identifiers = [];

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var count = idCountMap[id] || 0;
        var identifier = "".concat(id, " ").concat(count);
        idCountMap[id] = count + 1;
        var index = getIndexByIdentifier(identifier);
        var obj = {
          css: item[1],
          media: item[2],
          sourceMap: item[3]
        };

        if (index !== -1) {
          stylesInDom[index].references++;
          stylesInDom[index].updater(obj);
        } else {
          stylesInDom.push({
            identifier: identifier,
            updater: addStyle(obj, options),
            references: 1
          });
        }

        identifiers.push(identifier);
      }

      return identifiers;
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');
      var attributes = options.attributes || {};

      if (typeof attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          attributes.nonce = nonce;
        }
      }

      Object.keys(attributes).forEach(function (key) {
        style.setAttribute(key, attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      } else {
        style.removeAttribute('media');
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      list = list || [];
      var lastIdentifiers = modulesToDom(list, options);
      return function update(newList) {
        newList = newList || [];

        if (Object.prototype.toString.call(newList) !== '[object Array]') {
          return;
        }

        for (var i = 0; i < lastIdentifiers.length; i++) {
          var identifier = lastIdentifiers[i];
          var index = getIndexByIdentifier(identifier);
          stylesInDom[index].references--;
        }

        var newLastIdentifiers = modulesToDom(newList, options);

        for (var _i = 0; _i < lastIdentifiers.length; _i++) {
          var _identifier = lastIdentifiers[_i];

          var _index = getIndexByIdentifier(_identifier);

          if (stylesInDom[_index].references === 0) {
            stylesInDom[_index].updater();

            stylesInDom.splice(_index, 1);
          }
        }

        lastIdentifiers = newLastIdentifiers;
      };
    };
    /***/

  },

  /***/
  "./src/styles.less":
  /*!*************************!*\
    !*** ./src/styles.less ***!
    \*************************/

  /*! no static exports found */

  /***/
  function srcStylesLess(module, exports, __webpack_require__) {
    var api = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");

    var content = __webpack_require__(
    /*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/less-loader/dist/cjs.js??ref--14-3!./styles.less */
    "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./src/styles.less");

    content = content.__esModule ? content["default"] : content;

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;
    var update = api(content, options);
    var exported = content.locals ? content.locals : {};
    module.exports = exported;
    /***/
  },

  /***/
  3:
  /*!*******************************!*\
    !*** multi ./src/styles.less ***!
    \*******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Volumes/D/localhost/altair/altair-front/src/styles.less */
    "./src/styles.less");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map