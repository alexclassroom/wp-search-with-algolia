"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preactCompat = _interopRequireDefault(require("preact-compat"));

var _Template = _interopRequireDefault(require("../Template/Template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VoiceSearch = function VoiceSearch(_ref) {
  var cssClasses = _ref.cssClasses,
      isBrowserSupported = _ref.isBrowserSupported,
      isListening = _ref.isListening,
      toggleListening = _ref.toggleListening,
      voiceListeningState = _ref.voiceListeningState,
      templates = _ref.templates;

  var handleClick = function handleClick(event) {
    event.currentTarget.blur();
    toggleListening();
  };

  var status = voiceListeningState.status,
      transcript = voiceListeningState.transcript,
      isSpeechFinal = voiceListeningState.isSpeechFinal,
      errorCode = voiceListeningState.errorCode;
  return _preactCompat.default.createElement("div", {
    className: cssClasses.root
  }, _preactCompat.default.createElement(_Template.default, {
    templateKey: "buttonText",
    rootTagName: "button",
    rootProps: {
      className: cssClasses.button,
      type: 'button',
      title: "Search by voice".concat(isBrowserSupported ? '' : ' (not supported on this browser)'),
      onClick: handleClick,
      disabled: !isBrowserSupported
    },
    data: {
      status: status,
      errorCode: errorCode,
      isListening: isListening,
      transcript: transcript,
      isSpeechFinal: isSpeechFinal,
      isBrowserSupported: isBrowserSupported
    },
    templates: templates
  }), _preactCompat.default.createElement(_Template.default, {
    templateKey: "status",
    rootProps: {
      className: cssClasses.status
    },
    data: {
      status: status,
      errorCode: errorCode,
      isListening: isListening,
      transcript: transcript,
      isSpeechFinal: isSpeechFinal,
      isBrowserSupported: isBrowserSupported
    },
    templates: templates
  }));
};

var _default = VoiceSearch;
exports.default = _default;