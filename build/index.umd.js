(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global = global || self, global.ReactAwesomePopover = factory(global.React));
}(this, (function (React) { 'use strict';

	React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

	function _define_property(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, {
	            value: value,
	            enumerable: true,
	            configurable: true,
	            writable: true
	        });
	    } else {
	        obj[key] = value;
	    }
	    return obj;
	}
	function _object_spread(target) {
	    for(var i = 1; i < arguments.length; i++){
	        var source = arguments[i] != null ? arguments[i] : {};
	        var ownKeys = Object.keys(source);
	        if (typeof Object.getOwnPropertySymbols === "function") {
	            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
	                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	            }));
	        }
	        ownKeys.forEach(function(key) {
	            _define_property(target, key, source[key]);
	        });
	    }
	    return target;
	}
	var Target = function(param) {
	    var open = param.open, zIndex = param.zIndex, children = param.children, action = param.action, targetRef = param.targetRef, setOpen = param.setOpen, preventDefault = param.preventDefault, stopPropagation = param.stopPropagation;
	    var onClick = function(e) {
	        if (preventDefault) e.preventDefault();
	        if (stopPropagation) e.stopPropagation();
	        setOpen();
	    };
	    var onMouseOut = function(param) {
	        var relatedTarget = param.relatedTarget;
	        if (relatedTarget.id === "overlay") {
	            setOpen();
	        }
	    };
	    var defaultStyle = {
	        display: "inline-block",
	        position: "relative"
	    };
	    var zIndexStyle = open ? {
	        zIndex: zIndex + 10
	    } : {};
	    var actions = action === "click" ? {
	        onClick: onClick,
	        onTouchEnd: onClick
	    } : action === "hover" ? {
	        onMouseOver: setOpen,
	        onMouseOut: onMouseOut
	    } : {};
	    return /*#__PURE__*/ React.createElement("div", _object_spread({
	        style: _object_spread({}, defaultStyle, zIndexStyle),
	        ref: targetRef
	    }, actions), children);
	};

	var DEFAULT_ZINDEX = 1000;

	function _array_like_to_array(arr, len) {
	    if (len == null || len > arr.length) len = arr.length;
	    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
	    return arr2;
	}
	function _array_without_holes(arr) {
	    if (Array.isArray(arr)) return _array_like_to_array(arr);
	}
	function _assert_this_initialized(self) {
	    if (self === void 0) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	    return self;
	}
	function _class_call_check(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	function _defineProperties(target, props) {
	    for(var i = 0; i < props.length; i++){
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	    }
	}
	function _create_class(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    return Constructor;
	}
	function _define_property$1(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, {
	            value: value,
	            enumerable: true,
	            configurable: true,
	            writable: true
	        });
	    } else {
	        obj[key] = value;
	    }
	    return obj;
	}
	function _get_prototype_of(o) {
	    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
	        return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _get_prototype_of(o);
	}
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function");
	    }
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	        constructor: {
	            value: subClass,
	            writable: true,
	            configurable: true
	        }
	    });
	    if (superClass) _set_prototype_of(subClass, superClass);
	}
	function _iterable_to_array(iter) {
	    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	}
	function _non_iterable_spread() {
	    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _object_spread$1(target) {
	    for(var i = 1; i < arguments.length; i++){
	        var source = arguments[i] != null ? arguments[i] : {};
	        var ownKeys = Object.keys(source);
	        if (typeof Object.getOwnPropertySymbols === "function") {
	            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
	                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	            }));
	        }
	        ownKeys.forEach(function(key) {
	            _define_property$1(target, key, source[key]);
	        });
	    }
	    return target;
	}
	function ownKeys(object, enumerableOnly) {
	    var keys = Object.keys(object);
	    if (Object.getOwnPropertySymbols) {
	        var symbols = Object.getOwnPropertySymbols(object);
	        if (enumerableOnly) {
	            symbols = symbols.filter(function(sym) {
	                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	            });
	        }
	        keys.push.apply(keys, symbols);
	    }
	    return keys;
	}
	function _object_spread_props(target, source) {
	    source = source != null ? source : {};
	    if (Object.getOwnPropertyDescriptors) {
	        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	        ownKeys(Object(source)).forEach(function(key) {
	            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	        });
	    }
	    return target;
	}
	function _object_without_properties(source, excluded) {
	    if (source == null) return {};
	    var target = _object_without_properties_loose(source, excluded);
	    var key, i;
	    if (Object.getOwnPropertySymbols) {
	        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
	        for(i = 0; i < sourceSymbolKeys.length; i++){
	            key = sourceSymbolKeys[i];
	            if (excluded.indexOf(key) >= 0) continue;
	            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	            target[key] = source[key];
	        }
	    }
	    return target;
	}
	function _object_without_properties_loose(source, excluded) {
	    if (source == null) return {};
	    var target = {};
	    var sourceKeys = Object.keys(source);
	    var key, i;
	    for(i = 0; i < sourceKeys.length; i++){
	        key = sourceKeys[i];
	        if (excluded.indexOf(key) >= 0) continue;
	        target[key] = source[key];
	    }
	    return target;
	}
	function _possible_constructor_return(self, call) {
	    if (call && (_type_of(call) === "object" || typeof call === "function")) {
	        return call;
	    }
	    return _assert_this_initialized(self);
	}
	function _set_prototype_of(o, p) {
	    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
	        o.__proto__ = p;
	        return o;
	    };
	    return _set_prototype_of(o, p);
	}
	function _to_consumable_array(arr) {
	    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
	}
	function _type_of(obj) {
	    "@swc/helpers - typeof";
	    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	}
	function _unsupported_iterable_to_array(o, minLen) {
	    if (!o) return;
	    if (typeof o === "string") return _array_like_to_array(o, minLen);
	    var n = Object.prototype.toString.call(o).slice(8, -1);
	    if (n === "Object" && o.constructor) n = o.constructor.name;
	    if (n === "Map" || n === "Set") return Array.from(n);
	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
	}
	function _is_native_reflect_construct() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	        return true;
	    } catch (e) {
	        return false;
	    }
	}
	function _create_super(Derived) {
	    var hasNativeReflectConstruct = _is_native_reflect_construct();
	    return function _createSuperInternal() {
	        var Super = _get_prototype_of(Derived), result;
	        if (hasNativeReflectConstruct) {
	            var NewTarget = _get_prototype_of(this).constructor;
	            result = Reflect.construct(Super, arguments, NewTarget);
	        } else {
	            result = Super.apply(this, arguments);
	        }
	        return _possible_constructor_return(this, result);
	    };
	}
	var Content = /*#__PURE__*/ function(_React_Component) {
	    _inherits(Content, _React_Component);
	    var _super = _create_super(Content);
	    function Content() {
	        _class_call_check(this, Content);
	        var _this;
	        _this = _super.apply(this, arguments);
	        _define_property$1(_assert_this_initialized(_this), "state", {
	            position: null
	        });
	        _define_property$1(_assert_this_initialized(_this), "contentRef", /*#__PURE__*/ React.createRef());
	        _define_property$1(_assert_this_initialized(_this), "arrowRef", /*#__PURE__*/ React.createRef());
	        return _this;
	    }
	    _create_class(Content, [
	        {
	            key: "componentDidMount",
	            value: function componentDidMount() {
	                var _this = this, contentRef = _this.contentRef, arrowRef = _this.arrowRef;
	                var _this_props = this.props, targetRef = _this_props.targetRef, arrow = _this_props.arrow, onOpen = _this_props.onOpen, placement = _this_props.placement;
	                if (onOpen) onOpen();
	                var targetBound = targetRef.current.getBoundingClientRect();
	                var contentBound = contentRef.current.getBoundingClientRect();
	                var arrowBound = {
	                    width: 0,
	                    height: 0
	                };
	                if (arrow) {
	                    arrowBound = arrowRef.current.getBoundingClientRect();
	                }
	                var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
	                var calcCoverLeft = contentBound.x - contentBound.width;
	                var coverLeft = calcCoverLeft < 0 ? calcCoverLeft : 0;
	                var calcCoverRight = contentBound.x + targetBound.width + contentBound.width;
	                var coverRight = calcCoverRight > innerWidth ? innerWidth - calcCoverRight : 0;
	                var calcCoverTop = contentBound.y - contentBound.height;
	                var coverTop = calcCoverTop < 0 ? calcCoverTop : 0;
	                var calcCoverBottom = targetBound.bottom + contentBound.height;
	                var coverBottom = calcCoverBottom > innerHeight ? innerHeight - calcCoverBottom : 0;
	                var calcXCenterLeft = contentBound.x + targetBound.width / 2 - contentBound.width / 2;
	                var calcXCenterRight = contentBound.x + targetBound.width / 2 - contentBound.width / 2 + contentBound.width;
	                var coverXCenterLeft = calcXCenterLeft < 0 ? calcXCenterLeft : 0;
	                var coverXCenterRight = calcXCenterRight > innerWidth ? innerWidth - calcXCenterRight : 0;
	                var calcYCenterTop = contentBound.y + targetBound.height / 2 - contentBound.height / 2;
	                var coverYCenterTop = calcYCenterTop < 0 ? calcYCenterTop : 0;
	                var calcYCenterBottom = contentBound.y + targetBound.height / 2 - contentBound.height / 2 + contentBound.height;
	                var coverYCenterBottom = calcYCenterBottom > innerHeight ? calcYCenterBottom : 0;
	                var calcTopStart = contentBound.x + contentBound.width;
	                var coverTopStart = calcTopStart > innerWidth ? innerWidth - calcTopStart : 0;
	                var calcTopEnd = contentBound.x - (contentBound.width - targetBound.width);
	                var coverTopEnd = calcTopEnd < 0 ? calcTopEnd : 0;
	                var calcLeftEndTop = contentBound.y - (contentBound.height - targetBound.height);
	                var coverLeftEndTop = calcLeftEndTop < 0 ? calcLeftEndTop : 0;
	                var coverRightEndTop = coverLeftEndTop;
	                var calcLefStartBottom = contentBound.y + contentBound.height;
	                var coverLeftStartBottom = calcLefStartBottom > innerHeight ? innerHeight - calcLefStartBottom : 0;
	                var coverRightStartBottom = coverLeftStartBottom;
	                var coverBottomStartRight = coverTopStart;
	                var coverBottomEndLeft = coverTopEnd;
	                var xCenterStyle = targetBound.height / 2 - contentBound.height / 2;
	                var rightLeftEnd = -(contentBound.height - targetBound.height);
	                var topBottomEnd = -(contentBound.width - targetBound.width);
	                var topBottomCenter = targetBound.width / 2 - contentBound.width / 2;
	                var computeArrowW = arrowBound.width / 2;
	                var computearrowH = arrowBound.height / 2;
	                var leftLeftStyle = -(contentBound.width + computeArrowW);
	                var topTopStyle = -(contentBound.height + arrowBound.height / 2);
	                var rightLeftStyle = targetBound.width + computeArrowW;
	                var bottomTopStyle = targetBound.height + computearrowH;
	                var styles = {
	                    topStart: {
	                        top: topTopStyle
	                    },
	                    topCenter: {
	                        top: topTopStyle,
	                        left: topBottomCenter
	                    },
	                    topEnd: {
	                        top: topTopStyle,
	                        left: topBottomEnd
	                    },
	                    leftStart: {
	                        left: leftLeftStyle
	                    },
	                    leftCenter: {
	                        left: leftLeftStyle,
	                        top: xCenterStyle
	                    },
	                    leftEnd: {
	                        top: rightLeftEnd,
	                        left: leftLeftStyle
	                    },
	                    rightStart: {
	                        left: rightLeftStyle
	                    },
	                    rightCenter: {
	                        left: rightLeftStyle,
	                        top: xCenterStyle
	                    },
	                    rightEnd: {
	                        left: rightLeftStyle,
	                        top: rightLeftEnd
	                    },
	                    bottomStart: {
	                        top: bottomTopStyle
	                    },
	                    bottomCenter: {
	                        top: bottomTopStyle,
	                        left: topBottomCenter
	                    },
	                    bottomEnd: {
	                        top: bottomTopStyle,
	                        left: topBottomEnd
	                    }
	                };
	                var transform = {
	                    bottom: {
	                        transform: "rotate(-45deg)"
	                    },
	                    top: {
	                        transform: "rotate(135deg)"
	                    },
	                    left: {
	                        transform: "rotate(45deg)"
	                    },
	                    right: {
	                        transform: "rotate(45deg)"
	                    }
	                };
	                var arrowBottomTop = Math.ceil(-arrowBound.height / 2);
	                var arrowBottomTopCenter = contentBound.width / 2 - arrowBound.width / 2;
	                var arrowTop = contentBound.height - arrowBound.height / 2;
	                var arrowTopBottomEnd = targetBound.width / 2 - arrowBound.width / 2;
	                var arrowLeftRightEnd = contentBound.height - arrowBound.height / 2 - targetBound.height / 2;
	                var arrowLeftRightCenter = contentBound.height / 2 - Math.ceil(arrowBound.height / 2);
	                var arrowTopBottomStartLeft = targetBound.width / 2 - arrowBound.width / 2;
	                var arrowLeftLeft = Math.ceil(contentBound.width - arrowBound.width / 2);
	                var arrowLeftRightTop = targetBound.height / 2 - arrowBound.height / 2;
	                var arrowStyle = {
	                    topStart: _object_spread_props(_object_spread$1({}, transform.top), {
	                        top: arrowTop,
	                        left: arrowTopBottomStartLeft
	                    }),
	                    topCenter: _object_spread_props(_object_spread$1({}, transform.top), {
	                        top: arrowTop,
	                        left: arrowBottomTopCenter
	                    }),
	                    topEnd: _object_spread_props(_object_spread$1({}, transform.top), {
	                        top: arrowTop,
	                        right: arrowTopBottomEnd
	                    }),
	                    leftStart: _object_spread_props(_object_spread$1({}, transform.left), {
	                        left: arrowLeftLeft,
	                        top: arrowLeftRightTop
	                    }),
	                    leftCenter: _object_spread_props(_object_spread$1({}, transform.left), {
	                        left: arrowLeftLeft,
	                        top: arrowLeftRightCenter
	                    }),
	                    leftEnd: _object_spread_props(_object_spread$1({}, transform.left), {
	                        left: arrowLeftLeft,
	                        top: arrowLeftRightEnd
	                    }),
	                    rightStart: _object_spread_props(_object_spread$1({}, transform.right), {
	                        left: -arrowBound.width,
	                        top: arrowLeftRightTop
	                    }),
	                    rightCenter: _object_spread_props(_object_spread$1({}, transform.right), {
	                        left: -arrowBound.width,
	                        top: arrowLeftRightCenter
	                    }),
	                    rightEnd: _object_spread_props(_object_spread$1({}, transform.right), {
	                        left: -arrowBound.width,
	                        top: arrowLeftRightEnd
	                    }),
	                    bottomStart: _object_spread_props(_object_spread$1({}, transform.bottom), {
	                        top: arrowBottomTop,
	                        left: arrowTopBottomStartLeft
	                    }),
	                    bottomCenter: _object_spread_props(_object_spread$1({}, transform.bottom), {
	                        top: arrowBottomTop,
	                        left: arrowBottomTopCenter
	                    }),
	                    bottomEnd: _object_spread_props(_object_spread$1({}, transform.bottom), {
	                        top: arrowBottomTop,
	                        right: arrowTopBottomEnd
	                    })
	                };
	                var pos = [
	                    {
	                        at: "top-start",
	                        cover: [
	                            coverTop,
	                            coverTopStart,
	                            0
	                        ],
	                        style: styles.topStart,
	                        arrow: arrowStyle.topStart
	                    },
	                    {
	                        at: "top-center",
	                        cover: [
	                            coverTop,
	                            coverXCenterLeft,
	                            coverXCenterRight
	                        ],
	                        style: styles.topCenter,
	                        arrow: arrowStyle.topCenter
	                    },
	                    {
	                        at: "top-end",
	                        cover: [
	                            coverTop,
	                            coverTopEnd,
	                            0
	                        ],
	                        style: styles.topEnd,
	                        arrow: arrowStyle.topEnd
	                    },
	                    {
	                        at: "left-start",
	                        cover: [
	                            coverLeft,
	                            coverLeftStartBottom,
	                            0
	                        ],
	                        style: styles.leftStart,
	                        arrow: arrowStyle.leftStart
	                    },
	                    {
	                        at: "left-center",
	                        cover: [
	                            coverLeft,
	                            coverYCenterTop,
	                            coverYCenterBottom
	                        ],
	                        style: styles.leftCenter,
	                        arrow: arrowStyle.leftCenter
	                    },
	                    {
	                        at: "left-end",
	                        cover: [
	                            coverLeft,
	                            coverLeftEndTop,
	                            0
	                        ],
	                        style: styles.leftEnd,
	                        arrow: arrowStyle.leftEnd
	                    },
	                    {
	                        at: "right-start",
	                        cover: [
	                            coverRight,
	                            coverRightStartBottom,
	                            0
	                        ],
	                        style: styles.rightStart,
	                        arrow: arrowStyle.rightStart
	                    },
	                    {
	                        at: "right-center",
	                        cover: [
	                            coverRight,
	                            coverYCenterTop,
	                            coverYCenterBottom
	                        ],
	                        style: styles.rightCenter,
	                        arrow: arrowStyle.rightCenter
	                    },
	                    {
	                        at: "right-end",
	                        cover: [
	                            coverRight,
	                            coverRightEndTop,
	                            0
	                        ],
	                        style: styles.rightEnd,
	                        arrow: arrowStyle.rightEnd
	                    },
	                    {
	                        at: "bottom-start",
	                        cover: [
	                            coverBottom,
	                            coverBottomStartRight,
	                            0
	                        ],
	                        style: styles.bottomStart,
	                        arrow: arrowStyle.bottomStart
	                    },
	                    {
	                        at: "bottom-center",
	                        cover: [
	                            coverBottom,
	                            coverXCenterLeft,
	                            coverXCenterRight
	                        ],
	                        style: styles.bottomCenter,
	                        arrow: arrowStyle.bottomCenter
	                    },
	                    {
	                        at: "bottom-end",
	                        cover: [
	                            coverBottom,
	                            coverBottomEndLeft,
	                            0
	                        ],
	                        style: styles.bottomEnd,
	                        arrow: arrowStyle.bottomEnd
	                    }
	                ];
	                var get;
	                if (placement === "auto") {
	                    var _Math;
	                    var reducer = function(accumulator, currentValue) {
	                        return accumulator + currentValue;
	                    };
	                    var compute = pos.map(function(param) {
	                        var cover = param.cover;
	                        return cover.reduce(reducer);
	                    });
	                    var findIndex = compute.indexOf((_Math = Math).max.apply(_Math, _to_consumable_array(compute)));
	                    var result = pos[findIndex];
	                    get = result;
	                } else {
	                    get = pos.filter(function(val) {
	                        return val.at === placement;
	                    })[0];
	                }
	                this.setState({
	                    position: get
	                });
	            }
	        },
	        {
	            key: "componentWillUnmount",
	            value: function componentWillUnmount() {
	                var onClose = this.props.onClose;
	                if (onClose) onClose();
	            }
	        },
	        {
	            key: "render",
	            value: function render() {
	                var position = this.state.position;
	                var defaultStyle = {
	                    display: "inline-block",
	                    position: "absolute",
	                    left: 0,
	                    top: 0,
	                    zIndex: DEFAULT_ZINDEX + 10
	                };
	                var positionStyle = position ? position.style : {};
	                var arrowStyle = position ? position.arrow : {};
	                var _this_props = this.props, content = _this_props.content, arrow = _this_props.arrow, _this_props_arrowProps = _this_props.arrowProps, arrowProps = _this_props_arrowProps === void 0 ? {} : _this_props_arrowProps;
	                var _arrowProps_style = arrowProps.style, style = _arrowProps_style === void 0 ? {} : _arrowProps_style, arrowRest = _object_without_properties(arrowProps, [
	                    "style"
	                ]);
	                return /*#__PURE__*/ React.createElement("div", {
	                    style: _object_spread$1({}, defaultStyle, positionStyle),
	                    ref: this.contentRef
	                }, arrow ? /*#__PURE__*/ React.createElement("div", _object_spread$1({
	                    ref: this.arrowRef,
	                    style: _object_spread$1({}, _object_spread$1({
	                        position: "absolute",
	                        top: 0
	                    }, arrowStyle), style)
	                }, arrowRest), "◥") : null, content);
	            }
	        }
	    ]);
	    return Content;
	}(React.Component);

	function _define_property$2(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, {
	            value: value,
	            enumerable: true,
	            configurable: true,
	            writable: true
	        });
	    } else {
	        obj[key] = value;
	    }
	    return obj;
	}
	function _object_spread$2(target) {
	    for(var i = 1; i < arguments.length; i++){
	        var source = arguments[i] != null ? arguments[i] : {};
	        var ownKeys = Object.keys(source);
	        if (typeof Object.getOwnPropertySymbols === "function") {
	            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
	                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	            }));
	        }
	        ownKeys.forEach(function(key) {
	            _define_property$2(target, key, source[key]);
	        });
	    }
	    return target;
	}
	var Overlay = function(param) {
	    var onClose = param.onClose, _param_overlayColor = param.overlayColor, overlayColor = _param_overlayColor === void 0 ? "rgba(0,0,0,0.5)" : _param_overlayColor, zIndex = param.zIndex, action = param.action, setOpen = param.setOpen, preventDefault = param.preventDefault, stopPropagation = param.stopPropagation;
	    var onClick = function(e) {
	        if (preventDefault) e.preventDefault();
	        if (stopPropagation) e.stopPropagation();
	        onClose();
	    };
	    var actions = action === "click" ? {
	        onClick: onClick,
	        onTouchEnd: onClick
	    } : action === "hover" ? {
	        onMouseEnter: setOpen
	    } : {
	        onClick: onClick,
	        onTouchEnd: onClick
	    };
	    return /*#__PURE__*/ React.createElement("div", _object_spread$2({
	        style: {
	            backgroundColor: overlayColor,
	            position: "fixed",
	            width: "100%",
	            height: "100%",
	            top: 0,
	            left: 0,
	            cursor: "pointer",
	            zIndex: zIndex
	        }
	    }, actions));
	};

	function _array_like_to_array$1(arr, len) {
	    if (len == null || len > arr.length) len = arr.length;
	    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
	    return arr2;
	}
	function _array_with_holes(arr) {
	    if (Array.isArray(arr)) return arr;
	}
	function _assert_this_initialized$1(self) {
	    if (self === void 0) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	    return self;
	}
	function _class_call_check$1(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	function _defineProperties$1(target, props) {
	    for(var i = 0; i < props.length; i++){
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	    }
	}
	function _create_class$1(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties$1(Constructor, staticProps);
	    return Constructor;
	}
	function _define_property$3(obj, key, value) {
	    if (key in obj) {
	        Object.defineProperty(obj, key, {
	            value: value,
	            enumerable: true,
	            configurable: true,
	            writable: true
	        });
	    } else {
	        obj[key] = value;
	    }
	    return obj;
	}
	function _get_prototype_of$1(o) {
	    _get_prototype_of$1 = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
	        return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _get_prototype_of$1(o);
	}
	function _inherits$1(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function");
	    }
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	        constructor: {
	            value: subClass,
	            writable: true,
	            configurable: true
	        }
	    });
	    if (superClass) _set_prototype_of$1(subClass, superClass);
	}
	function _iterable_to_array_limit(arr, i) {
	    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
	    if (_i == null) return;
	    var _arr = [];
	    var _n = true;
	    var _d = false;
	    var _s, _e;
	    try {
	        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
	            _arr.push(_s.value);
	            if (i && _arr.length === i) break;
	        }
	    } catch (err) {
	        _d = true;
	        _e = err;
	    } finally{
	        try {
	            if (!_n && _i["return"] != null) _i["return"]();
	        } finally{
	            if (_d) throw _e;
	        }
	    }
	    return _arr;
	}
	function _non_iterable_rest() {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	}
	function _object_spread$3(target) {
	    for(var i = 1; i < arguments.length; i++){
	        var source = arguments[i] != null ? arguments[i] : {};
	        var ownKeys = Object.keys(source);
	        if (typeof Object.getOwnPropertySymbols === "function") {
	            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
	                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	            }));
	        }
	        ownKeys.forEach(function(key) {
	            _define_property$3(target, key, source[key]);
	        });
	    }
	    return target;
	}
	function _object_without_properties$1(source, excluded) {
	    if (source == null) return {};
	    var target = _object_without_properties_loose$1(source, excluded);
	    var key, i;
	    if (Object.getOwnPropertySymbols) {
	        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
	        for(i = 0; i < sourceSymbolKeys.length; i++){
	            key = sourceSymbolKeys[i];
	            if (excluded.indexOf(key) >= 0) continue;
	            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	            target[key] = source[key];
	        }
	    }
	    return target;
	}
	function _object_without_properties_loose$1(source, excluded) {
	    if (source == null) return {};
	    var target = {};
	    var sourceKeys = Object.keys(source);
	    var key, i;
	    for(i = 0; i < sourceKeys.length; i++){
	        key = sourceKeys[i];
	        if (excluded.indexOf(key) >= 0) continue;
	        target[key] = source[key];
	    }
	    return target;
	}
	function _possible_constructor_return$1(self, call) {
	    if (call && (_type_of$1(call) === "object" || typeof call === "function")) {
	        return call;
	    }
	    return _assert_this_initialized$1(self);
	}
	function _set_prototype_of$1(o, p) {
	    _set_prototype_of$1 = Object.setPrototypeOf || function setPrototypeOf(o, p) {
	        o.__proto__ = p;
	        return o;
	    };
	    return _set_prototype_of$1(o, p);
	}
	function _sliced_to_array(arr, i) {
	    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array$1(arr, i) || _non_iterable_rest();
	}
	function _type_of$1(obj) {
	    "@swc/helpers - typeof";
	    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
	}
	function _unsupported_iterable_to_array$1(o, minLen) {
	    if (!o) return;
	    if (typeof o === "string") return _array_like_to_array$1(o, minLen);
	    var n = Object.prototype.toString.call(o).slice(8, -1);
	    if (n === "Object" && o.constructor) n = o.constructor.name;
	    if (n === "Map" || n === "Set") return Array.from(n);
	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array$1(o, minLen);
	}
	function _is_native_reflect_construct$1() {
	    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	    if (Reflect.construct.sham) return false;
	    if (typeof Proxy === "function") return true;
	    try {
	        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
	        return true;
	    } catch (e) {
	        return false;
	    }
	}
	function _create_super$1(Derived) {
	    var hasNativeReflectConstruct = _is_native_reflect_construct$1();
	    return function _createSuperInternal() {
	        var Super = _get_prototype_of$1(Derived), result;
	        if (hasNativeReflectConstruct) {
	            var NewTarget = _get_prototype_of$1(this).constructor;
	            result = Reflect.construct(Super, arguments, NewTarget);
	        } else {
	            result = Super.apply(this, arguments);
	        }
	        return _possible_constructor_return$1(this, result);
	    };
	}
	var Popover = /*#__PURE__*/ function(_React_Component) {
	    _inherits$1(Popover, _React_Component);
	    var _super = _create_super$1(Popover);
	    function Popover() {
	        _class_call_check$1(this, Popover);
	        var _this;
	        _this = _super.apply(this, arguments);
	        _define_property$3(_assert_this_initialized$1(_this), "state", {
	            open: _this.props.open || false
	        });
	        _define_property$3(_assert_this_initialized$1(_this), "target", /*#__PURE__*/ React.createRef());
	        _define_property$3(_assert_this_initialized$1(_this), "setOpen", function() {
	            _this.setState({
	                open: !_this.state.open
	            }, function() {
	                _this.props.updatePopoverState(_this.state.open);
	            });
	        });
	        return _this;
	    }
	    _create_class$1(Popover, [
	        {
	            key: "componentDidUpdate",
	            value: function componentDidUpdate(prevProps) {
	                if (prevProps.open !== this.props.open) {
	                    this.setState({
	                        open: this.props.open
	                    });
	                }
	            }
	        },
	        {
	            key: "render",
	            value: function render() {
	                var props = this.props;
	                var _props_placement = props.placement, placement = _props_placement === void 0 ? "auto" : _props_placement, _props_arrow = props.arrow, arrow = _props_arrow === void 0 ? true : _props_arrow, _props_action = props.action, action = _props_action === void 0 ? "click" : _props_action, _props_zIndex = props.zIndex, zIndex = _props_zIndex === void 0 ? DEFAULT_ZINDEX : _props_zIndex, preventDefault = props.preventDefault, stopPropagation = props.stopPropagation, onOpen = props.onOpen, onClose = props.onClose, children = props.children, style = props.style, overlayColor = props.overlayColor, arrowProps = props.arrowProps, updatePopoverState = props.updatePopoverState, rest = _object_without_properties$1(props, [
	                    "placement",
	                    "arrow",
	                    "action",
	                    "zIndex",
	                    "preventDefault",
	                    "stopPropagation",
	                    "onOpen",
	                    "onClose",
	                    "children",
	                    "style",
	                    "overlayColor",
	                    "arrowProps",
	                    "updatePopoverState"
	                ]);
	                var _children = _sliced_to_array(children, 2), target = _children[0], content = _children[1];
	                return /*#__PURE__*/ React.createElement("div", _object_spread$3({
	                    style: _object_spread$3({}, {
	                        position: "relative"
	                    }, style)
	                }, rest), /*#__PURE__*/ React.createElement(Target, {
	                    preventDefault: preventDefault,
	                    stopPropagation: stopPropagation,
	                    targetRef: this.target,
	                    open: this.state.open,
	                    zIndex: zIndex,
	                    action: action,
	                    setOpen: this.setOpen
	                }, target), this.state.open && /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement(Content, {
	                    arrowProps: arrowProps,
	                    zIndex: zIndex,
	                    arrow: arrow,
	                    placement: placement,
	                    targetRef: this.target,
	                    content: content,
	                    onClose: onClose,
	                    onOpen: onOpen
	                }), /*#__PURE__*/ React.createElement(Overlay, {
	                    preventDefault: preventDefault,
	                    stopPropagation: stopPropagation,
	                    overlayColor: overlayColor,
	                    onClose: this.setOpen,
	                    zIndex: zIndex,
	                    action: action,
	                    setOpen: this.setOpen
	                })));
	            }
	        }
	    ]);
	    return Popover;
	}(React.Component);

	return Popover;

})));
