/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components", "@deriv/shared", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components"], root["@deriv/shared"], root["@deriv/translations"], root["react"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE__deriv_components__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Components/sent-email-modal/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": () => (/* binding */ Components_sent_email_modal)\n});\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n// EXTERNAL MODULE: ../../../node_modules/prop-types/index.js\nvar prop_types = __webpack_require__(\"../../../node_modules/prop-types/index.js\");\nvar prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n// EXTERNAL MODULE: external \"@deriv/components\"\nvar components_ = __webpack_require__(\"@deriv/components\");\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n;// CONCATENATED MODULE: ./Components/sent-email-modal/sent-email-modal.jsx\n\n\n\n\n\n\nvar getNoEmailContentStrings = function getNoEmailContentStrings() {\n  return [{\n    key: 'email_spam',\n    icon: 'IcEmailSpam',\n    content: (0,translations_.localize)('The email is in your spam folder (Sometimes things get lost there).')\n  }, {\n    key: 'wrong_email',\n    icon: 'IcEmail',\n    content: (0,translations_.localize)('You accidentally gave us another email address (Usually a work or a personal one instead of the one you meant).')\n  }, {\n    key: 'wrong_typo',\n    icon: 'IcEmailTypo',\n    content: (0,translations_.localize)('The email address you entered had a mistake or typo (happens to the best of us).')\n  }, {\n    key: 'email_firewall',\n    icon: 'IcEmailFirewall',\n    content: (0,translations_.localize)('We can’t deliver the email to this address (Usually because of firewalls or filtering).')\n  }];\n};\n\nvar SentEmailModal = function SentEmailModal(_ref) {\n  var identifier_title = _ref.identifier_title,\n      is_open = _ref.is_open,\n      onClose = _ref.onClose,\n      onClickSendEmail = _ref.onClickSendEmail,\n      _ref$has_live_chat = _ref.has_live_chat,\n      has_live_chat = _ref$has_live_chat === void 0 ? false : _ref$has_live_chat,\n      _ref$is_modal_when_mo = _ref.is_modal_when_mobile,\n      is_modal_when_mobile = _ref$is_modal_when_mo === void 0 ? false : _ref$is_modal_when_mo;\n\n  var getSubtitle = function getSubtitle() {\n    var subtitle = '';\n\n    switch (identifier_title) {\n      case shared_.CFD_PLATFORMS.DXTRADE:\n        subtitle = /*#__PURE__*/external_react_default().createElement(translations_.Localize, {\n          i18n_default_text: \"Please click on the link in the email to change your <0>{{platform_name_dxtrade}}</0> password.\",\n          components: [/*#__PURE__*/external_react_default().createElement(\"span\", {\n            className: \"send-email-template__subtitle-platform\",\n            key: 0\n          })],\n          values: {\n            platform_name_dxtrade: (0,shared_.getPlatformSettings)('dxtrade').name\n          }\n        });\n        break;\n\n      case shared_.CFD_PLATFORMS.MT5:\n        subtitle = (0,translations_.localize)('Please click on the link in the email to change your DMT5 password.');\n        break;\n\n      case 'Google':\n      case 'Facebook':\n        subtitle = (0,translations_.localize)('Check your {{ identifier_title }} account email and click the link in the email to proceed.', {\n          identifier_title: identifier_title\n        });\n        break;\n\n      case 'Change_Email':\n        subtitle = (0,translations_.localize)('Check your email and click the link in the email to proceed.');\n        break;\n\n      default:\n        subtitle = (0,translations_.localize)('Please click on the link in the email to reset your password.');\n        break;\n    }\n\n    return subtitle;\n  };\n\n  var onLiveChatClick = function onLiveChatClick() {\n    var _window$LiveChatWidge;\n\n    onClose();\n    (_window$LiveChatWidge = window.LiveChatWidget) === null || _window$LiveChatWidge === void 0 ? void 0 : _window$LiveChatWidge.call('maximize');\n  };\n\n  var live_chat = has_live_chat ? /*#__PURE__*/external_react_default().createElement(translations_.Localize, {\n    i18n_default_text: \"Still didn't get the email? Please contact us via <0>live chat.</0>\",\n    components: [/*#__PURE__*/external_react_default().createElement(\"span\", {\n      className: \"send-email-template__footer-live-chat\",\n      key: 0,\n      onClick: onLiveChatClick\n    }, /*#__PURE__*/external_react_default().createElement(components_.Popover, {\n      className: \"send-email-template__footer-live-chat__link\",\n      classNameBubble: \"help-centre__tooltip\",\n      alignment: \"top\",\n      message: (0,translations_.localize)('Live chat'),\n      zIndex: 9999\n    }))]\n  }) : null;\n  var sent_email_template = /*#__PURE__*/external_react_default().createElement(components_.SendEmailTemplate, {\n    className: \"sent-email\",\n    subtitle: getSubtitle(),\n    title: (0,translations_.localize)('We’ve sent you an email'),\n    lbl_no_receive: (0,translations_.localize)(\"Didn't receive the email?\"),\n    txt_resend: (0,translations_.localize)('Resend email'),\n    txt_resend_in: (0,translations_.localize)('Resend email in'),\n    onClickSendEmail: onClickSendEmail,\n    closeEmailModal: onClose,\n    live_chat: live_chat\n  }, getNoEmailContentStrings().map(function (item) {\n    return /*#__PURE__*/external_react_default().createElement(\"div\", {\n      className: \"sent-email__content\",\n      key: item.key\n    }, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n      icon: item.icon,\n      size: 32\n    }), /*#__PURE__*/external_react_default().createElement(components_.Text, {\n      size: \"xxs\",\n      as: \"p\"\n    }, item.content));\n  }));\n\n  if ((0,shared_.isMobile)() && !is_modal_when_mobile) {\n    return /*#__PURE__*/external_react_default().createElement(components_.MobileDialog, {\n      portal_element_id: \"modal_root\",\n      title: (0,translations_.localize)('We’ve sent you an email'),\n      wrapper_classname: \"mt5-email-sent\",\n      visible: is_open,\n      onClose: onClose,\n      has_content_scroll: true\n    }, sent_email_template);\n  }\n\n  return /*#__PURE__*/external_react_default().createElement(components_.Modal, {\n    className: 'sent-email__modal',\n    is_open: is_open,\n    has_close_icon: true,\n    should_header_stick_body: true,\n    title: \"\",\n    toggleModal: onClose,\n    width: \"440px\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Div100vhContainer, {\n    className: \"account__scrollbars_container-wrapper\",\n    is_disabled: (0,shared_.isDesktop)(),\n    height_offset: \"80px\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Modal.Body, null, /*#__PURE__*/external_react_default().createElement(\"div\", {\n    onClick: onClose,\n    className: \"send-email-template__close\",\n    \"data-testid\": \"dt_send_email_template_close\"\n  }, /*#__PURE__*/external_react_default().createElement(components_.Icon, {\n    icon: \"IcCross\"\n  })), sent_email_template)));\n};\n\nSentEmailModal.propTypes = {\n  identifier_title: (prop_types_default()).string,\n  is_open: (prop_types_default()).bool,\n  is_unlink_modal: (prop_types_default()).bool,\n  onClose: (prop_types_default()).func,\n  onClickSendEmail: (prop_types_default()).func,\n  has_live_chat: (prop_types_default()).bool,\n  is_modal_when_mobile: (prop_types_default()).bool\n};\n/* harmony default export */ const sent_email_modal = (SentEmailModal);\n;// CONCATENATED MODULE: ./Components/sent-email-modal/index.js\n\n/* harmony default export */ const Components_sent_email_modal = (sent_email_modal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3NlbnQtZW1haWwtbW9kYWwvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFRQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBUUE7O0FBRUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBTUE7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBekJBOztBQTJCQTtBQUNBOztBQUVBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBSkE7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFUQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBSEE7O0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBV0E7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBVUE7QUFDQTtBQUNBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQUE7QUFPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTs7QUMvS0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9zZW50LWVtYWlsLW1vZGFsL3NlbnQtZW1haWwtbW9kYWwuanN4PzZiMzkiLCJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3NlbnQtZW1haWwtbW9kYWwvaW5kZXguanM/ZDczNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGxvY2FsaXplLCBMb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IHsgRGl2MTAwdmhDb250YWluZXIsIEljb24sIE1vYmlsZURpYWxvZywgTW9kYWwsIFNlbmRFbWFpbFRlbXBsYXRlLCBUZXh0LCBQb3BvdmVyIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgZ2V0UGxhdGZvcm1TZXR0aW5ncywgQ0ZEX1BMQVRGT1JNUywgaXNNb2JpbGUsIGlzRGVza3RvcCB9IGZyb20gJ0BkZXJpdi9zaGFyZWQnO1xuXG5jb25zdCBnZXROb0VtYWlsQ29udGVudFN0cmluZ3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnZW1haWxfc3BhbScsXG4gICAgICAgICAgICBpY29uOiAnSWNFbWFpbFNwYW0nLFxuICAgICAgICAgICAgY29udGVudDogbG9jYWxpemUoJ1RoZSBlbWFpbCBpcyBpbiB5b3VyIHNwYW0gZm9sZGVyIChTb21ldGltZXMgdGhpbmdzIGdldCBsb3N0IHRoZXJlKS4nKSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnd3JvbmdfZW1haWwnLFxuICAgICAgICAgICAgaWNvbjogJ0ljRW1haWwnLFxuICAgICAgICAgICAgY29udGVudDogbG9jYWxpemUoXG4gICAgICAgICAgICAgICAgJ1lvdSBhY2NpZGVudGFsbHkgZ2F2ZSB1cyBhbm90aGVyIGVtYWlsIGFkZHJlc3MgKFVzdWFsbHkgYSB3b3JrIG9yIGEgcGVyc29uYWwgb25lIGluc3RlYWQgb2YgdGhlIG9uZSB5b3UgbWVhbnQpLidcbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ3dyb25nX3R5cG8nLFxuICAgICAgICAgICAgaWNvbjogJ0ljRW1haWxUeXBvJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxvY2FsaXplKCdUaGUgZW1haWwgYWRkcmVzcyB5b3UgZW50ZXJlZCBoYWQgYSBtaXN0YWtlIG9yIHR5cG8gKGhhcHBlbnMgdG8gdGhlIGJlc3Qgb2YgdXMpLicpLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdlbWFpbF9maXJld2FsbCcsXG4gICAgICAgICAgICBpY29uOiAnSWNFbWFpbEZpcmV3YWxsJyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IGxvY2FsaXplKFxuICAgICAgICAgICAgICAgICdXZSBjYW7igJl0IGRlbGl2ZXIgdGhlIGVtYWlsIHRvIHRoaXMgYWRkcmVzcyAoVXN1YWxseSBiZWNhdXNlIG9mIGZpcmV3YWxscyBvciBmaWx0ZXJpbmcpLidcbiAgICAgICAgICAgICksXG4gICAgICAgIH0sXG4gICAgXTtcbn07XG5cbmNvbnN0IFNlbnRFbWFpbE1vZGFsID0gKHtcbiAgICBpZGVudGlmaWVyX3RpdGxlLFxuICAgIGlzX29wZW4sXG4gICAgb25DbG9zZSxcbiAgICBvbkNsaWNrU2VuZEVtYWlsLFxuICAgIGhhc19saXZlX2NoYXQgPSBmYWxzZSxcbiAgICBpc19tb2RhbF93aGVuX21vYmlsZSA9IGZhbHNlLFxufSkgPT4ge1xuICAgIGNvbnN0IGdldFN1YnRpdGxlID0gKCkgPT4ge1xuICAgICAgICBsZXQgc3VidGl0bGUgPSAnJztcbiAgICAgICAgc3dpdGNoIChpZGVudGlmaWVyX3RpdGxlKSB7XG4gICAgICAgICAgICBjYXNlIENGRF9QTEFURk9STVMuRFhUUkFERTpcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZSA9IChcbiAgICAgICAgICAgICAgICAgICAgPExvY2FsaXplXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuX2RlZmF1bHRfdGV4dD0nUGxlYXNlIGNsaWNrIG9uIHRoZSBsaW5rIGluIHRoZSBlbWFpbCB0byBjaGFuZ2UgeW91ciA8MD57e3BsYXRmb3JtX25hbWVfZHh0cmFkZX19PC8wPiBwYXNzd29yZC4nXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzPXtbPHNwYW4gY2xhc3NOYW1lPSdzZW5kLWVtYWlsLXRlbXBsYXRlX19zdWJ0aXRsZS1wbGF0Zm9ybScga2V5PXswfSAvPl19XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e3sgcGxhdGZvcm1fbmFtZV9keHRyYWRlOiBnZXRQbGF0Zm9ybVNldHRpbmdzKCdkeHRyYWRlJykubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIENGRF9QTEFURk9STVMuTVQ1OlxuICAgICAgICAgICAgICAgIHN1YnRpdGxlID0gbG9jYWxpemUoJ1BsZWFzZSBjbGljayBvbiB0aGUgbGluayBpbiB0aGUgZW1haWwgdG8gY2hhbmdlIHlvdXIgRE1UNSBwYXNzd29yZC4nKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0dvb2dsZSc6XG4gICAgICAgICAgICBjYXNlICdGYWNlYm9vayc6XG4gICAgICAgICAgICAgICAgc3VidGl0bGUgPSBsb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgJ0NoZWNrIHlvdXIge3sgaWRlbnRpZmllcl90aXRsZSB9fSBhY2NvdW50IGVtYWlsIGFuZCBjbGljayB0aGUgbGluayBpbiB0aGUgZW1haWwgdG8gcHJvY2VlZC4nLFxuICAgICAgICAgICAgICAgICAgICB7IGlkZW50aWZpZXJfdGl0bGUgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdDaGFuZ2VfRW1haWwnOlxuICAgICAgICAgICAgICAgIHN1YnRpdGxlID0gbG9jYWxpemUoJ0NoZWNrIHlvdXIgZW1haWwgYW5kIGNsaWNrIHRoZSBsaW5rIGluIHRoZSBlbWFpbCB0byBwcm9jZWVkLicpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZSA9IGxvY2FsaXplKCdQbGVhc2UgY2xpY2sgb24gdGhlIGxpbmsgaW4gdGhlIGVtYWlsIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnRpdGxlO1xuICAgIH07XG5cbiAgICBjb25zdCBvbkxpdmVDaGF0Q2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgICAgd2luZG93LkxpdmVDaGF0V2lkZ2V0Py5jYWxsKCdtYXhpbWl6ZScpO1xuICAgIH07XG5cbiAgICBjb25zdCBsaXZlX2NoYXQgPSBoYXNfbGl2ZV9jaGF0ID8gKFxuICAgICAgICA8TG9jYWxpemVcbiAgICAgICAgICAgIGkxOG5fZGVmYXVsdF90ZXh0PVwiU3RpbGwgZGlkbid0IGdldCB0aGUgZW1haWw/IFBsZWFzZSBjb250YWN0IHVzIHZpYSA8MD5saXZlIGNoYXQuPC8wPlwiXG4gICAgICAgICAgICBjb21wb25lbnRzPXtbXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdzZW5kLWVtYWlsLXRlbXBsYXRlX19mb290ZXItbGl2ZS1jaGF0JyBrZXk9ezB9IG9uQ2xpY2s9e29uTGl2ZUNoYXRDbGlja30+XG4gICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3NlbmQtZW1haWwtdGVtcGxhdGVfX2Zvb3Rlci1saXZlLWNoYXRfX2xpbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVCdWJibGU9J2hlbHAtY2VudHJlX190b29sdGlwJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25tZW50PSd0b3AnXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPXtsb2NhbGl6ZSgnTGl2ZSBjaGF0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICB6SW5kZXg9ezk5OTl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPixcbiAgICAgICAgICAgIF19XG4gICAgICAgIC8+XG4gICAgKSA6IG51bGw7XG5cbiAgICBjb25zdCBzZW50X2VtYWlsX3RlbXBsYXRlID0gKFxuICAgICAgICA8U2VuZEVtYWlsVGVtcGxhdGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nc2VudC1lbWFpbCdcbiAgICAgICAgICAgIHN1YnRpdGxlPXtnZXRTdWJ0aXRsZSgpfVxuICAgICAgICAgICAgdGl0bGU9e2xvY2FsaXplKCdXZeKAmXZlIHNlbnQgeW91IGFuIGVtYWlsJyl9XG4gICAgICAgICAgICBsYmxfbm9fcmVjZWl2ZT17bG9jYWxpemUoXCJEaWRuJ3QgcmVjZWl2ZSB0aGUgZW1haWw/XCIpfVxuICAgICAgICAgICAgdHh0X3Jlc2VuZD17bG9jYWxpemUoJ1Jlc2VuZCBlbWFpbCcpfVxuICAgICAgICAgICAgdHh0X3Jlc2VuZF9pbj17bG9jYWxpemUoJ1Jlc2VuZCBlbWFpbCBpbicpfVxuICAgICAgICAgICAgb25DbGlja1NlbmRFbWFpbD17b25DbGlja1NlbmRFbWFpbH1cbiAgICAgICAgICAgIGNsb3NlRW1haWxNb2RhbD17b25DbG9zZX1cbiAgICAgICAgICAgIGxpdmVfY2hhdD17bGl2ZV9jaGF0fVxuICAgICAgICA+XG4gICAgICAgICAgICB7Z2V0Tm9FbWFpbENvbnRlbnRTdHJpbmdzKCkubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZW50LWVtYWlsX19jb250ZW50JyBrZXk9e2l0ZW0ua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj17aXRlbS5pY29ufSBzaXplPXszMn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgc2l6ZT0neHhzJyBhcz0ncCc+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9TZW5kRW1haWxUZW1wbGF0ZT5cbiAgICApO1xuXG4gICAgaWYgKGlzTW9iaWxlKCkgJiYgIWlzX21vZGFsX3doZW5fbW9iaWxlKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TW9iaWxlRGlhbG9nXG4gICAgICAgICAgICAgICAgcG9ydGFsX2VsZW1lbnRfaWQ9J21vZGFsX3Jvb3QnXG4gICAgICAgICAgICAgICAgdGl0bGU9e2xvY2FsaXplKCdXZeKAmXZlIHNlbnQgeW91IGFuIGVtYWlsJyl9XG4gICAgICAgICAgICAgICAgd3JhcHBlcl9jbGFzc25hbWU9J210NS1lbWFpbC1zZW50J1xuICAgICAgICAgICAgICAgIHZpc2libGU9e2lzX29wZW59XG4gICAgICAgICAgICAgICAgb25DbG9zZT17b25DbG9zZX1cbiAgICAgICAgICAgICAgICBoYXNfY29udGVudF9zY3JvbGxcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VudF9lbWFpbF90ZW1wbGF0ZX1cbiAgICAgICAgICAgIDwvTW9iaWxlRGlhbG9nPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgY2xhc3NOYW1lPXsnc2VudC1lbWFpbF9fbW9kYWwnfVxuICAgICAgICAgICAgaXNfb3Blbj17aXNfb3Blbn1cbiAgICAgICAgICAgIGhhc19jbG9zZV9pY29uXG4gICAgICAgICAgICBzaG91bGRfaGVhZGVyX3N0aWNrX2JvZHlcbiAgICAgICAgICAgIHRpdGxlPScnXG4gICAgICAgICAgICB0b2dnbGVNb2RhbD17b25DbG9zZX1cbiAgICAgICAgICAgIHdpZHRoPSc0NDBweCdcbiAgICAgICAgPlxuICAgICAgICAgICAgPERpdjEwMHZoQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdhY2NvdW50X19zY3JvbGxiYXJzX2NvbnRhaW5lci13cmFwcGVyJ1xuICAgICAgICAgICAgICAgIGlzX2Rpc2FibGVkPXtpc0Rlc2t0b3AoKX1cbiAgICAgICAgICAgICAgICBoZWlnaHRfb2Zmc2V0PSc4MHB4J1xuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdzZW5kLWVtYWlsLXRlbXBsYXRlX19jbG9zZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdGVzdGlkPSdkdF9zZW5kX2VtYWlsX3RlbXBsYXRlX2Nsb3NlJ1xuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPSdJY0Nyb3NzJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge3NlbnRfZW1haWxfdGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPC9EaXYxMDB2aENvbnRhaW5lcj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufTtcblxuU2VudEVtYWlsTW9kYWwucHJvcFR5cGVzID0ge1xuICAgIGlkZW50aWZpZXJfdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaXNfb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgaXNfdW5saW5rX21vZGFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsaWNrU2VuZEVtYWlsOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBoYXNfbGl2ZV9jaGF0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBpc19tb2RhbF93aGVuX21vYmlsZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZW50RW1haWxNb2RhbDtcbiIsImltcG9ydCBTZW50RW1haWxNb2RhbCBmcm9tICcuL3NlbnQtZW1haWwtbW9kYWwuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgU2VudEVtYWlsTW9kYWw7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/sent-email-modal/index.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/factoryWithThrowingShims.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = __webpack_require__(\"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n\nfunction emptyFunction() {}\nfunction emptyFunctionWithReset() {}\nemptyFunctionWithReset.resetWarningCache = emptyFunction;\n\nmodule.exports = function() {\n  function shim(props, propName, componentName, location, propFullName, secret) {\n    if (secret === ReactPropTypesSecret) {\n      // It is still safe when called from React.\n      return;\n    }\n    var err = new Error(\n      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n      'Use PropTypes.checkPropTypes() to call them. ' +\n      'Read more at http://fb.me/use-check-prop-types'\n    );\n    err.name = 'Invariant Violation';\n    throw err;\n  };\n  shim.isRequired = shim;\n  function getShim() {\n    return shim;\n  };\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.\n  var ReactPropTypes = {\n    array: shim,\n    bigint: shim,\n    bool: shim,\n    func: shim,\n    number: shim,\n    object: shim,\n    string: shim,\n    symbol: shim,\n\n    any: shim,\n    arrayOf: getShim,\n    element: shim,\n    elementType: shim,\n    instanceOf: getShim,\n    node: shim,\n    objectOf: getShim,\n    oneOf: getShim,\n    oneOfType: getShim,\n    shape: getShim,\n    exact: getShim,\n\n    checkPropTypes: emptyFunctionWithReset,\n    resetWarningCache: emptyFunction\n  };\n\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanM/ZGMwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvbigpIHt9XG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0KCkge31cbmVtcHR5RnVuY3Rpb25XaXRoUmVzZXQucmVzZXRXYXJuaW5nQ2FjaGUgPSBlbXB0eUZ1bmN0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBzaGltKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgaWYgKHNlY3JldCA9PT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9O1xuICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9O1xuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYmlnaW50OiBzaGltLFxuICAgIGJvb2w6IHNoaW0sXG4gICAgZnVuYzogc2hpbSxcbiAgICBudW1iZXI6IHNoaW0sXG4gICAgb2JqZWN0OiBzaGltLFxuICAgIHN0cmluZzogc2hpbSxcbiAgICBzeW1ib2w6IHNoaW0sXG5cbiAgICBhbnk6IHNoaW0sXG4gICAgYXJyYXlPZjogZ2V0U2hpbSxcbiAgICBlbGVtZW50OiBzaGltLFxuICAgIGVsZW1lbnRUeXBlOiBzaGltLFxuICAgIGluc3RhbmNlT2Y6IGdldFNoaW0sXG4gICAgbm9kZTogc2hpbSxcbiAgICBvYmplY3RPZjogZ2V0U2hpbSxcbiAgICBvbmVPZjogZ2V0U2hpbSxcbiAgICBvbmVPZlR5cGU6IGdldFNoaW0sXG4gICAgc2hhcGU6IGdldFNoaW0sXG4gICAgZXhhY3Q6IGdldFNoaW0sXG5cbiAgICBjaGVja1Byb3BUeXBlczogZW1wdHlGdW5jdGlvbldpdGhSZXNldCxcbiAgICByZXNldFdhcm5pbmdDYWNoZTogZW1wdHlGdW5jdGlvblxuICB9O1xuXG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/factoryWithThrowingShims.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (false) { var throwOnDirectAccess, ReactIs; } else {\n  // By explicitly using `prop-types` you are opting into new production behavior.\n  // http://fb.me/prop-types-in-prod\n  module.exports = __webpack_require__(\"../../../node_modules/prop-types/factoryWithThrowingShims.js\")();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanM/NzBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/index.js\n");

/***/ }),

/***/ "../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/***/ ((module) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcz9hZDgzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../../../node_modules/prop-types/lib/ReactPropTypesSecret.js\n");

/***/ }),

/***/ "@deriv/components":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components__;

/***/ }),

/***/ "@deriv/shared":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;

/***/ }),

/***/ "@deriv/translations":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;

/***/ }),

/***/ "react":
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Components/sent-email-modal/index.js");
/******/ 	__webpack_exports__ = __webpack_exports__["default"];
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});