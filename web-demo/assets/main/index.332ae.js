System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EffectBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, EffectAsset, CCBoolean, log, Vec4, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      EffectAsset = module.EffectAsset;
      CCBoolean = module.CCBoolean;
      log = module.log;
      Vec4 = module.Vec4;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c19bccH76hDoLHXW4pKahst", "EffectBase", undefined);
      var ccclass = _decorator.ccclass,
        requireComponent = _decorator.requireComponent,
        executeInEditMode = _decorator.executeInEditMode,
        property = _decorator.property;
      var EffectBase = exports('EffectBase', (_dec = ccclass('EffectBase'), _dec2 = requireComponent(Sprite), _dec3 = executeInEditMode(true), _dec4 = property({
        type: EffectAsset,
        tooltip: '指定效果EffectAsset'
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        tooltip: '當使用RenderRoot2D時使用'
      }), _dec6 = property({
        group: {
          name: "Private Props",
          id: "1"
        },
        visible: true,
        tooltip: '當使用RenderRoot2D時使用'
      }), _dec7 = property({
        type: CCBoolean,
        tooltip: '手動刷新，當效果在Editor沒有顯示時'
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EffectBase, _Component);
        function EffectBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "effectAsset", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_is2Din3D", _descriptor2, _assertThisInitialized(_this));
          //#endregion
          _this._sprite = null;
          _this._isDirty = false;
          _this._reload = false;
          _this._params = new Map();
          _this._isParamsDirty = false;
          return _this;
        }
        var _proto = EffectBase.prototype;
        _proto.reloadTsFile = /*#__PURE__*/function () {
          var _reloadTsFile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  {
                    _context.next = 4;
                    break;
                  }
                case 3:
                  _context.sent;
                case 4:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function reloadTsFile() {
            return _reloadTsFile.apply(this, arguments);
          }
          return reloadTsFile;
        }();
        _proto.autoAssignEffectAsset = function autoAssignEffectAsset() {};
        _proto.onLoad = function onLoad() {
          this._sprite = this.getComponent(Sprite);
          this._instMaterial();
        };
        _proto.start = function start() {
          this.autoAssignEffectAsset();
        };
        _proto.update = function update(dt) {
          var _this3 = this;
          if (this._isParamsDirty) {
            this._params.forEach(function (val, key) {
              if (val.is_dirty) {
                _this3._updateParams(val.key, val.idx);
                val.is_dirty = false;
              }
            });
            this._isParamsDirty = false;
          }
        }

        /**
         * @virtual
         * @description: 实例化材质
         */;
        /**
         * @virtual
         * @description: 當Sprite被用在3D時(掛載RenderRoot2D時)，需要開啟深度測試才能正確顯示深度
         */
        _proto._is2Din3DChanged = function _is2Din3DChanged(enable) {
          this._instMaterial();
        };
        _proto._setParams = function _setParams(key, idx) {
          this._params.set(key, {
            key: key,
            idx: idx,
            is_dirty: true
          });
          this._isParamsDirty = true;
        };
        _proto._setParamsDirty = function _setParamsDirty(key) {
          if (this._params.has(key)) {
            this._params.get(key).is_dirty = true;
            this._isParamsDirty = true;
          } else {
            log("EffectBase._setParamsDirty: key " + key + " not found");
          }
        };
        _proto._getUV = function _getUV(uv) {
          var minU = Math.min(uv[0], uv[2], uv[4], uv[6]);
          var minV = Math.min(uv[1], uv[3], uv[5], uv[7]);
          var maxU = Math.max(uv[0], uv[2], uv[4], uv[6]);
          var maxV = Math.max(uv[1], uv[3], uv[5], uv[7]);
          var width = maxU - minU;
          var height = maxV - minV;
          return new Vec4(minU, minV, width, height);
        };
        _createClass(EffectBase, [{
          key: "is2Din3D",
          get:
          //#region is2Din3D
          function get() {
            return this._is2Din3D;
          },
          set: function set(val) {
            this._is2Din3D = val;
            this._is2Din3DChanged(this._is2Din3D);
          }
        }, {
          key: "reloadEffect",
          get:
          //#endregion
          //#region reloadEffect
          function get() {
            return this._reload;
          },
          set: function set(val) {
            this._reload = val;
            this.reloadTsFile();
          }
        }]);
        return EffectBase;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effectAsset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "is2Din3D", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "is2Din3D"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_is2Din3D", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "reloadEffect", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "reloadEffect"), _class2.prototype)), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EffectColor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './EffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Vec2, math, UITransform, error, Material, EffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec2 = module.Vec2;
      math = module.math;
      UITransform = module.UITransform;
      error = module.error;
      Material = module.Material;
    }, function (module) {
      EffectBase = module.EffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "32b5dMiPndANb8IiLSLQKy9", "EffectColor", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ToneMode = exports('ToneMode', /*#__PURE__*/function (ToneMode) {
        ToneMode[ToneMode["GRAY"] = 0] = "GRAY";
        ToneMode[ToneMode["NEGA"] = 1] = "NEGA";
        ToneMode[ToneMode["SEPIA"] = 2] = "SEPIA";
        ToneMode[ToneMode["NORMAL"] = 3] = "NORMAL";
        return ToneMode;
      }({}));
      var ColorMode = exports('ColorMode', /*#__PURE__*/function (ColorMode) {
        ColorMode[ColorMode["ADD"] = 0] = "ADD";
        ColorMode[ColorMode["SUB"] = 1] = "SUB";
        ColorMode[ColorMode["FILL"] = 2] = "FILL";
        ColorMode[ColorMode["MULT"] = 3] = "MULT";
        return ColorMode;
      }({}));
      var BlurMode = exports('BlurMode', /*#__PURE__*/function (BlurMode) {
        BlurMode[BlurMode["NONE"] = 0] = "NONE";
        BlurMode[BlurMode["GAUSSIAN"] = 1] = "GAUSSIAN";
        return BlurMode;
      }({}));
      var EffectColor = exports('EffectColor', (_dec = ccclass('EffectColor'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(ToneMode),
        tooltip: "色調模式"
      }), _dec3 = property({
        group: {
          name: "Private Props",
          id: "1"
        },
        type: Enum(ToneMode),
        tooltip: "色調模式",
        visible: true
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "色調程度"
      }), _dec5 = property({
        group: {
          name: "Private Props",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "色調程度",
        visible: true
      }), _dec6 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(ColorMode),
        tooltip: "顏色模式"
      }), _dec7 = property({
        group: {
          name: "Private Props",
          id: "1"
        },
        type: Enum(ColorMode),
        tooltip: "顏色模式",
        visible: true
      }), _dec8 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "顏色程度"
      }), _dec9 = property({
        group: {
          name: "Private Props",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "顏色程度",
        visible: true
      }), _dec10 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(BlurMode),
        tooltip: "模糊模式"
      }), _dec11 = property({
        group: {
          name: "Private Props",
          id: "1"
        },
        type: Enum(BlurMode),
        tooltip: "模糊模式",
        visible: true
      }), _dec12 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: "模糊程度"
      }), _dec13 = property({
        group: {
          name: "Private Props",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: "模糊程度",
        visible: true
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_EffectBase) {
        _inheritsLoose(EffectColor, _EffectBase);
        function EffectColor() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _EffectBase.call.apply(_EffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_toneMode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_toneFactor", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colorMode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colorFactor", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_blurMode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_blurFactor", _descriptor6, _assertThisInitialized(_this));
          //#endregion
          _this._blurTextureSize = new Vec2(100, 100);
          _this._contentSize = new math.Size(100, 100);
          _this._define_macro = {
            USE_COLOR_TONE_TRANSFORM: true,
            USE_NORMALIZE_UV: true,
            USE_BLUR: false,
            IS_GRAY: false,
            IS_NEGA: false,
            IS_SEPIA: false,
            IS_ADD: false,
            IS_SUB: false,
            IS_FILL: false,
            IS_MULT: false
          };
          return _this;
        }
        var _proto = EffectColor.prototype;
        _proto._instMaterial = function _instMaterial() {
          this._contentSize = this._sprite.getComponent(UITransform).contentSize;
          if (this.effectAsset) {
            switch (this._toneMode) {
              case ToneMode.GRAY:
                this._define_macro.IS_GRAY = true;
                break;
              case ToneMode.NEGA:
                this._define_macro.IS_NEGA = true;
                break;
              case ToneMode.SEPIA:
                this._define_macro.IS_SEPIA = true;
                break;
              case ToneMode.NORMAL:
                break;
            }
            switch (this._colorMode) {
              case ColorMode.ADD:
                this._define_macro.IS_ADD = true;
                break;
              case ColorMode.SUB:
                this._define_macro.IS_SUB = true;
                break;
              case ColorMode.FILL:
                this._define_macro.IS_FILL = true;
                break;
              case ColorMode.MULT:
                this._define_macro.IS_MULT = true;
                break;
            }
            switch (this._blurMode) {
              case BlurMode.NONE:
                this._define_macro.USE_BLUR = false;
                break;
              case BlurMode.GAUSSIAN:
                this._define_macro.USE_BLUR = true;
                break;
            }
            this._reflashMaterial();
          } else {
            error('EffectColor._instMaterial: effectAsset is null');
          }
        };
        _proto._reflashMaterial = function _reflashMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: this._define_macro,
            technique: this._is2Din3D ? 1 : 0
          });
          this._setParams('_toneMode', -1);
          this._setParams('_colorMode', -1);
          this._setParams('_blurMode', -1);
          this._setParams('_baseUV', mat.passes[0].getHandle('baseUV'));
          this._setParams('_toneFactor', mat.passes[0].getHandle('toneFactor'));
          this._setParams('_colorFactor', mat.passes[0].getHandle('colorFactor'));
          this._setParams('_blurTextureSize', mat.passes[0].getHandle('blurTextureSize'));
          this._setParams('_blurFactor', mat.passes[0].getHandle('blurFactor'));
          this._sprite.customMaterial = mat;
        };
        _proto._updateParams = function _updateParams(key, idx) {
          if (key === '_baseUV') {
            var _material;
            (_material = this._sprite.material) == null || _material.passes[0].setUniform(idx, this._getUV(this._sprite.spriteFrame.uv));
          } else if (key === '_toneFactor') {
            var _material2;
            (_material2 = this._sprite.material) == null || _material2.passes[0].setUniform(idx, this._toneFactor);
          } else if (key === '_colorFactor') {
            var _material3;
            (_material3 = this._sprite.material) == null || _material3.passes[0].setUniform(idx, this._colorFactor);
          } else if (key === '_blurTextureSize') {
            var _material4;
            var baseUV = this._getUV(this._sprite.spriteFrame.uv);
            if (this._sprite.spriteFrame) {
              this._blurTextureSize.x = Math.floor(this._sprite.spriteFrame.width * baseUV.z);
              this._blurTextureSize.y = Math.floor(this._sprite.spriteFrame.height * baseUV.w);
            } else {
              this._blurTextureSize.x = this._contentSize.width;
              this._blurTextureSize.y = this._contentSize.height;
            }
            (_material4 = this._sprite.material) == null || _material4.passes[0].setUniform(idx, this._blurTextureSize);
          } else if (key === '_blurFactor') {
            var _material5;
            (_material5 = this._sprite.material) == null || _material5.passes[0].setUniform(idx, math.lerp(0.0, 1.0, this._blurFactor));
          } else if (key === '_toneMode') {
            this._define_macro.IS_GRAY = false;
            this._define_macro.IS_NEGA = false;
            this._define_macro.IS_SEPIA = false;
            switch (this._toneMode) {
              case ToneMode.GRAY:
                this._define_macro.IS_GRAY = true;
                break;
              case ToneMode.NEGA:
                this._define_macro.IS_NEGA = true;
                break;
              case ToneMode.SEPIA:
                this._define_macro.IS_SEPIA = true;
                break;
              case ToneMode.NORMAL:
                break;
            }
            this._reflashMaterial();
          } else if (key === '_colorMode') {
            this._define_macro.IS_ADD = false;
            this._define_macro.IS_SUB = false;
            this._define_macro.IS_FILL = false;
            this._define_macro.IS_MULT = false;
            switch (this._colorMode) {
              case ColorMode.ADD:
                this._define_macro.IS_ADD = true;
                break;
              case ColorMode.SUB:
                this._define_macro.IS_SUB = true;
                break;
              case ColorMode.FILL:
                this._define_macro.IS_FILL = true;
                break;
              case ColorMode.MULT:
                this._define_macro.IS_MULT = true;
                break;
            }
            this._reflashMaterial();
          } else if (key === '_blurMode') {
            switch (this._blurMode) {
              case BlurMode.NONE:
                this._define_macro.USE_BLUR = false;
                break;
              case BlurMode.GAUSSIAN:
                this._define_macro.USE_BLUR = true;
                break;
            }
            this._reflashMaterial();
          }
        };
        _proto._is2Din3DChanged = function _is2Din3DChanged(enable) {
          this._reflashMaterial();
        };
        _createClass(EffectColor, [{
          key: "toneMode",
          get:
          //#region toneMode
          function get() {
            return this._toneMode;
          },
          set: function set(val) {
            this._toneMode = val;
            this._setParamsDirty('_toneMode');
          }
        }, {
          key: "toneFactor",
          get:
          //#endregion
          //#region toneFactor
          function get() {
            return this._toneFactor;
          },
          set: function set(val) {
            this._toneFactor = val;
            this._setParamsDirty('_toneFactor');
          }
        }, {
          key: "colorMode",
          get:
          //#endregion
          //#region colorMode
          function get() {
            return this._colorMode;
          },
          set: function set(val) {
            this._colorMode = val;
            this._setParamsDirty('_colorMode');
          }
        }, {
          key: "colorFactor",
          get:
          //#endregion
          //#region colorFactor
          function get() {
            return this._colorFactor;
          },
          set: function set(val) {
            this._colorFactor = val;
            this._setParamsDirty('_colorFactor');
          }
        }, {
          key: "blurMode",
          get:
          //#endregion
          //#region blurMode
          function get() {
            return this._blurMode;
          },
          set: function set(val) {
            this._blurMode = val;
            this._setParamsDirty('_blurMode');
          }
        }, {
          key: "blurFactor",
          get:
          //#endregion
          //#region blurFactor
          function get() {
            return this._blurFactor;
          },
          set: function set(val) {
            this._blurFactor = val;
            this._setParamsDirty('_blurFactor');
          }
        }]);
        return EffectColor;
      }(EffectBase), (_applyDecoratedDescriptor(_class2.prototype, "toneMode", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "toneMode"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_toneMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ToneMode.NORMAL;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "toneFactor", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "toneFactor"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_toneFactor", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorMode", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "colorMode"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_colorMode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ColorMode.MULT;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorFactor", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "colorFactor"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_colorFactor", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blurMode", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "blurMode"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_blurMode", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BlurMode.NONE;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blurFactor", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "blurFactor"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_blurFactor", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './TweenRandomColor.ts', './EffectBase.ts', './EffectColor.ts', './SpriteEffectBase.ts', './SpriteEffectColor.ts', './SpriteEffectColorizing.ts', './SpriteEffectDisappear.ts', './SpriteEffectDissolve.ts', './SpriteEffectDistort.ts', './SpriteEffectFlowLight.ts', './SpriteEffectGaussianBlur.ts', './SpriteEffectShadow.ts', './SpriteEffectTest.ts', './SpriteEffectWaterFlow.ts', './SpriteEffectWaterRipple.ts', './SpriteEffectWaterWave.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/SpriteEffectBase.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, EffectAsset, Color, log, error, Texture2D, Vec4, Sprite;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EffectAsset = module.EffectAsset;
      Color = module.Color;
      log = module.log;
      error = module.error;
      Texture2D = module.Texture2D;
      Vec4 = module.Vec4;
      Sprite = module.Sprite;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "db29dFfUqxFAr9fn/tgDveE", "SpriteEffectBase", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectBase = exports('SpriteEffectBase', (_dec = ccclass('SpriteEffectBase'), _dec2 = property({
        type: EffectAsset,
        tooltip: '指定效果EffectAsset'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Color,
        tooltip: "My Color"
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        tooltip: '當使用RenderRoot2D時使用'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Sprite) {
        _inheritsLoose(SpriteEffectBase, _Sprite);
        function SpriteEffectBase() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Sprite.call.apply(_Sprite, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "effectAsset", _descriptor, _assertThisInitialized(_this));
          _this._instanceID = -1;
          _initializerDefineProperty(_this, "_effectColor", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_is2Din3D", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectBase.prototype;
        _proto.init = function init(countOfProps) {
          var _this2 = this;
          var unionKey = this.getPropsUnionKey();
          log("init: " + unionKey);

          // Step1: 取的當前的effectIndex
          if (!SpriteEffectBase._s_effectMap.has(unionKey)) {
            var temp = new Array(768).fill(""); // R/G/B (0~255) => 256 * 3 = 768
            // temp[256] = temp[512] = "skip";
            SpriteEffectBase._s_effectMap.set(unionKey, temp);
          }
          var instanceID = SpriteEffectBase._s_effectMap.get(unionKey).findIndex(function (v) {
            return v === _this2.node.uuid;
          });
          if (instanceID === -1) {
            instanceID = SpriteEffectBase._s_effectMap.get(unionKey).findIndex(function (v) {
              return v === "";
            });
            if (instanceID === -1) {
              error("Effect map is full!");
              return;
            }
          }
          this._instanceID = instanceID;
          SpriteEffectBase._s_effectMap.get(unionKey)[this._instanceID] = this.node.uuid;
          if (this.instanceGroupIdx === 0) {
            this.color = new Color(this._instanceID, 0, 0, 255);
          } else if (this.instanceGroupIdx === 1) {
            this.color = new Color(255, this._instanceID - 255, 0, 255);
          } else if (this.instanceGroupIdx === 2) {
            this.color = new Color(255, 255, this._instanceID - 510, 255);
          } else {
            error("The prop group index, " + this.instanceGroupIdx + ", is out of range!");
            return;
          }

          // Step2: 初始化Effect props
          if (!SpriteEffectBase._s_effectProps.has(unionKey)) {
            var _temp = new Array(3).fill(null); // Only use R/G/B 3 channels
            SpriteEffectBase._s_effectProps.set(unionKey, _temp);
          }
          if (SpriteEffectBase._s_effectProps.get(unionKey)[this.instanceGroupIdx] === null) {
            var w = 256 * countOfProps;
            var h = 1;
            var _propBuffer = new Float32Array(w * h * 4);
            for (var y = 0; y < h; y++) {
              for (var x = 0; x < w; x++) {
                var _index = (y * w + x) * 4;
                _propBuffer[_index] = 1;
                _propBuffer[_index + 1] = 0;
                _propBuffer[_index + 2] = 1;
                _propBuffer[_index + 3] = 1;
              }
            }
            var propsTexture = new Texture2D();
            propsTexture.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
            propsTexture.reset({
              width: w,
              height: h,
              format: Texture2D.PixelFormat.RGBA32F,
              mipmapLevel: 0
            });
            propsTexture.uploadData(_propBuffer);
            var mat = this.initMaterial();
            mat.setProperty('propsTexture', propsTexture);
            SpriteEffectBase._s_effectProps.get(unionKey)[this.instanceGroupIdx] = {
              mat: mat,
              propBuffer: _propBuffer,
              propTexture: propsTexture,
              isDirty: false
            };
          }
          this.customMaterial = SpriteEffectBase._s_effectProps.get(unionKey)[this.instanceGroupIdx].mat;
        };
        _proto.reflashParams = function reflashParams() {
          var unionKey = this.getPropsUnionKey();
          var index = this.getBufferIndex();
          var effectProps = SpriteEffectBase._s_effectProps.get(unionKey)[this.instanceGroupIdx];

          // Update the effect parameters from the derived class.
          this.updateParams(index, effectProps.propBuffer);
          {
            effectProps.isDirty = true;
          }
        }

        /**
         * 每256個為一組
         */;
        _proto.getUV = function getUV(uv) {
          var minU = Math.min(uv[0], uv[2], uv[4], uv[6]);
          var minV = Math.min(uv[1], uv[3], uv[5], uv[7]);
          var maxU = Math.max(uv[0], uv[2], uv[4], uv[6]);
          var maxV = Math.max(uv[1], uv[3], uv[5], uv[7]);
          var width = maxU - minU;
          var height = maxV - minV;
          return new Vec4(minU, minV, width, height);
        };
        _proto.getBufferIndex = function getBufferIndex() {
          var offset = this._instanceID - this.instanceGroupIdx * 256;
          return offset * (this.pixelsUsage * 4);
        }
        //#endregion

        //#region life cycle
        ;

        _proto.onLoad = function onLoad() {
          this.init(this.pixelsUsage);
        };
        _proto.start = function start() {
          this.reflashParams();
        };
        _proto.onDestroy = function onDestroy() {
          var _this3 = this;
          var unionKey = this.getPropsUnionKey();
          if (SpriteEffectBase._s_effectMap.has(unionKey)) {
            var _index2 = SpriteEffectBase._s_effectMap.get(unionKey).findIndex(function (v) {
              return v === _this3.node.uuid;
            });
            if (_index2 === -1) {
              error("Effect index is not found!");
              return;
            }
            SpriteEffectBase._s_effectMap.get(unionKey)[_index2] = "";
          } else {
            error("The effect map of " + unionKey + " is not found!");
          }
        };
        _proto.lateUpdate = function lateUpdate(dt) {
          var unionKey = this.getPropsUnionKey();
          var effectProps = SpriteEffectBase._s_effectProps.get(unionKey)[this.instanceGroupIdx];
          if (effectProps.isDirty) {
            log(this.constructor.name + "'s effect props is DIRTY!");
            effectProps.propTexture.uploadData(effectProps.propBuffer);
            effectProps.isDirty = false;
          }
        };
        _createClass(SpriteEffectBase, [{
          key: "effectColor",
          get: function get() {
            return this._effectColor;
          },
          set:
          //#region effectColor
          function set(val) {
            this._effectColor = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "is2Din3D",
          get: function get() {
            return this._is2Din3D;
          },
          set:
          //#endregion
          //#region is2Din3D
          function set(val) {
            this._is2Din3D = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "pixelsUsage",
          get:
          //#endregion

          //#region methods
          /**
           * 4個float為一個pixel，需使用幾個pixel數量
           */
          function get() {
            var num = Math.ceil(this.floatUsage / 4.0);
            return num;
          }
        }, {
          key: "instanceGroupIdx",
          get: function get() {
            return Math.floor(this._instanceID / 256);
          }
        }]);
        return SpriteEffectBase;
      }(Sprite), _class3._s_effectMap = new Map(), _class3._s_effectProps = new Map(), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effectAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "effectColor", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "effectColor"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_effectColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "is2Din3D", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "is2Din3D"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_is2Din3D", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectColor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Vec2, UITransform, Material, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Vec2 = module.Vec2;
      UITransform = module.UITransform;
      Material = module.Material;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "c6496Bv0dxAApSoUg42h5Lz", "SpriteEffectColor", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ToneMode = exports('ToneMode', /*#__PURE__*/function (ToneMode) {
        ToneMode[ToneMode["GRAY"] = 0] = "GRAY";
        ToneMode[ToneMode["NEGA"] = 1] = "NEGA";
        ToneMode[ToneMode["SEPIA"] = 2] = "SEPIA";
        ToneMode[ToneMode["NORMAL"] = 3] = "NORMAL";
        return ToneMode;
      }({}));
      var ColorMode = exports('ColorMode', /*#__PURE__*/function (ColorMode) {
        ColorMode[ColorMode["ADD"] = 0] = "ADD";
        ColorMode[ColorMode["SUB"] = 1] = "SUB";
        ColorMode[ColorMode["FILL"] = 2] = "FILL";
        ColorMode[ColorMode["MULT"] = 3] = "MULT";
        return ColorMode;
      }({}));
      var BlurMode = exports('BlurMode', /*#__PURE__*/function (BlurMode) {
        BlurMode[BlurMode["NONE"] = 0] = "NONE";
        BlurMode[BlurMode["GAUSSIAN"] = 1] = "GAUSSIAN";
        return BlurMode;
      }({}));
      var SpriteEffectColor = exports('SpriteEffectColor', (_dec = ccclass('SpriteEffectColor'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(ToneMode),
        tooltip: "色調模式"
      }), _dec3 = property({
        type: Enum(ToneMode)
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "色調程度"
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(ColorMode),
        tooltip: "顏色模式"
      }), _dec6 = property({
        type: Enum(ColorMode)
      }), _dec7 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "顏色程度"
      }), _dec8 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(BlurMode),
        tooltip: "模糊模式"
      }), _dec9 = property({
        type: Enum(BlurMode)
      }), _dec10 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: "模糊程度"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectColor, _SpriteEffectBase);
        function SpriteEffectColor() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_toneMode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_toneFactor", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colorMode", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_colorFactor", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_blurMode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_blurFactor", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectColor.prototype;
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          var unionKey = this.constructor.name + "_" + this._is2Din3D + "_" + this._toneMode + "_" + this._colorMode + "_" + this._blurMode;
          return unionKey;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          var baseUV = this.getUV(this.spriteFrame.uv);
          var blurTextureSize = new Vec2(100, 100);
          if (this.spriteFrame) {
            blurTextureSize.x = Math.floor(this.spriteFrame.width * baseUV.z);
            blurTextureSize.y = Math.floor(this.spriteFrame.height * baseUV.w);
          } else {
            blurTextureSize.x = this.node.getComponent(UITransform).contentSize.width;
            blurTextureSize.y = this.node.getComponent(UITransform).contentSize.height;
          }
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = baseUV.x;
          propBuffer[index + 5] = baseUV.y;
          propBuffer[index + 6] = baseUV.z;
          propBuffer[index + 7] = baseUV.w;
          propBuffer[index + 8] = blurTextureSize.x;
          propBuffer[index + 9] = blurTextureSize.y;
          // propBuffer[index + 10] = 0.0;
          // propBuffer[index + 11] = 1.0;

          propBuffer[index + 12] = this.toneFactor;
          propBuffer[index + 13] = this.colorFactor;
          propBuffer[index + 14] = this.blurFactor;
          // propBuffer[index + 15] = 1.0;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          var define_macro = {
            USE_BLUR: false,
            IS_GRAY: false,
            IS_NEGA: false,
            IS_SEPIA: false,
            IS_ADD: false,
            IS_SUB: false,
            IS_FILL: false,
            IS_MULT: true
          };
          switch (this._toneMode) {
            case ToneMode.GRAY:
              define_macro.IS_GRAY = true;
              break;
            case ToneMode.NEGA:
              define_macro.IS_NEGA = true;
              break;
            case ToneMode.SEPIA:
              define_macro.IS_SEPIA = true;
              break;
          }
          switch (this._colorMode) {
            case ColorMode.ADD:
              define_macro.IS_ADD = true;
              break;
            case ColorMode.SUB:
              define_macro.IS_SUB = true;
              break;
            case ColorMode.FILL:
              define_macro.IS_FILL = true;
              break;
            case ColorMode.MULT:
              define_macro.IS_MULT = true;
              break;
          }
          switch (this._blurMode) {
            case BlurMode.NONE:
              define_macro.USE_BLUR = false;
              break;
            case BlurMode.GAUSSIAN:
              define_macro.USE_BLUR = true;
              break;
          }
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: define_macro,
            technique: this._is2Din3D ? 1 : 0
          });
          return mat;
        };
        _createClass(SpriteEffectColor, [{
          key: "toneMode",
          get: function get() {
            return this._toneMode;
          },
          set:
          //#region toneMode
          function set(val) {
            this._toneMode = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "toneFactor",
          get: function get() {
            return this._toneFactor;
          },
          set:
          //#endregion
          //#region toneFactor
          function set(val) {
            this._toneFactor = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "colorMode",
          get: function get() {
            return this._colorMode;
          },
          set:
          //#endregion
          //#region colorMode
          function set(val) {
            this._colorMode = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "colorFactor",
          get: function get() {
            return this._colorFactor;
          },
          set:
          //#endregion
          //#region colorFactor
          function set(val) {
            this._colorFactor = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "blurMode",
          get: function get() {
            return this._blurMode;
          },
          set:
          //#endregion
          //#region blurMode
          function set(val) {
            this._blurMode = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "blurFactor",
          get: function get() {
            return this._blurFactor;
          },
          set:
          //#endregion
          //#region blurFactor
          function set(val) {
            this._blurFactor = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion
          //#region override
          function get() {
            return 13;
          }
        }]);
        return SpriteEffectColor;
      }(SpriteEffectBase), (_applyDecoratedDescriptor(_class2.prototype, "toneMode", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "toneMode"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_toneMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ToneMode.NORMAL;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "toneFactor", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "toneFactor"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_toneFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorMode", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "colorMode"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_colorMode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ColorMode.MULT;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorFactor", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "colorFactor"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_colorFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blurMode", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "blurMode"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_blurMode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BlurMode.NONE;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blurFactor", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "blurFactor"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_blurFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectColorizing.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Material, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "20603zBoKFLN4Q5V6kEd9S7", "SpriteEffectColorizing", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectColorizing = exports('SpriteEffectColorizing', (_dec = ccclass('SpriteEffectColorizing'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '指定R通道Remap顏色最小值'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '指定R通道Remap顏色最大值'
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '指定G通道Remap顏色最小值'
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '指定G通道填Remap顏色最大值'
      }), _dec6 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '指定B通道Remap顏色最小值'
      }), _dec7 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '指定B通道Remap顏色最大值'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectColorizing, _SpriteEffectBase);
        function SpriteEffectColorizing() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_rChannelMin", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_rChannelMax", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_gChannelMin", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_gChannelMax", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_bChannelMin", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_bChannelMax", _descriptor6, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectColorizing.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = this._rChannelMin;
          propBuffer[index + 5] = this._rChannelMax;
          propBuffer[index + 6] = this._gChannelMin;
          propBuffer[index + 7] = this._gChannelMax;
          propBuffer[index + 8] = this._bChannelMin;
          propBuffer[index + 9] = this._bChannelMax;
        }

        /**
         * @override SpriteEffectgftf55rfrrftfgt6gyredtBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          return mat;
        };
        _createClass(SpriteEffectColorizing, [{
          key: "rChannelMin",
          get: function get() {
            return this._rChannelMin;
          },
          set:
          // #region rChannel
          function set(val) {
            this._rChannelMin = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "rChannelMax",
          get: function get() {
            return this._rChannelMax;
          },
          set: function set(val) {
            this._rChannelMax = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "gChannelMin",
          get: function get() {
            return this._gChannelMin;
          },
          set:
          // #endregion
          // #region gChannel
          function set(val) {
            this._gChannelMin = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "gChannelMax",
          get: function get() {
            return this._gChannelMax;
          },
          set: function set(val) {
            this._gChannelMax = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "bChannelMin",
          get: function get() {
            return this._bChannelMin;
          },
          set:
          // #endregion
          // #region bChannel
          function set(val) {
            this._bChannelMin = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "bChannelMax",
          get: function get() {
            return this._bChannelMax;
          },
          set: function set(val) {
            this._bChannelMax = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          // #endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            //return 10; // 手機上非2次幂的紋理會報錯
            return 16;
          }
        }]);
        return SpriteEffectColorizing;
      }(SpriteEffectBase), (_applyDecoratedDescriptor(_class2.prototype, "rChannelMin", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "rChannelMin"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rChannelMax", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "rChannelMax"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_rChannelMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rChannelMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "gChannelMin", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "gChannelMin"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "gChannelMax", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "gChannelMax"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_gChannelMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_gChannelMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "bChannelMin", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "bChannelMin"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bChannelMax", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "bChannelMax"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_bChannelMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_bChannelMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectDisappear.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Texture2D, Enum, Material, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Texture2D = module.Texture2D;
      Enum = module.Enum;
      Material = module.Material;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "4c31erKjO1IOorl9cBmHuBS", "SpriteEffectDisappear", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Direction = exports('Direction', /*#__PURE__*/function (Direction) {
        Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
        return Direction;
      }({}));
      var SpriteEffectDisappear = exports('SpriteEffectDisappear', (_dec = ccclass('SpriteEffectDisappear'), _dec2 = property({
        type: Texture2D,
        tooltip: '指定貼圖'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(Direction),
        tooltip: '指定方向'
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: '消失偏移'
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 0.5, 0.01],
        tooltip: '柔邊程度'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectDisappear, _SpriteEffectBase);
        function SpriteEffectDisappear() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "secondSprite", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_dirMode", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_offset", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_soft", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectDisappear.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D + "_" + this._dirMode;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = this._offset;
          propBuffer[index + 5] = this._soft;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var define_macro = {
            DIR_VERTICAL: true
          };
          switch (this._dirMode) {
            case Direction.HORIZONTAL:
              define_macro.DIR_VERTICAL = false;
              break;
            case Direction.VERTICAL:
              define_macro.DIR_VERTICAL = true;
              break;
          }
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: define_macro,
            technique: this._is2Din3D ? 1 : 0
          });
          mat.setProperty('secondSprite', this.secondSprite);
          return mat;
        };
        _createClass(SpriteEffectDisappear, [{
          key: "dirMode",
          get: function get() {
            return this._dirMode;
          },
          set:
          //#region toneMode
          function set(val) {
            this._dirMode = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set:
          //#endregion
          //#region disappearOffset
          function set(val) {
            this._offset = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "soft",
          get: function get() {
            return this._soft;
          },
          set:
          //#endregion
          //#region translucentOffset
          function set(val) {
            this._soft = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 8;
          }
        }]);
        return SpriteEffectDisappear;
      }(SpriteEffectBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "secondSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "dirMode", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "dirMode"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_dirMode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction.VERTICAL;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "soft", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "soft"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_soft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectDissolve.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Texture2D, Material, Color, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Texture2D = module.Texture2D;
      Material = module.Material;
      Color = module.Color;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "18a89aWE/xKVqkaiGTOi3+S", "SpriteEffectDissolve", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectDissolve = exports('SpriteEffectDissolve', (_dec = ccclass('SpriteEffectDissolve'), _dec2 = property({
        type: Texture2D,
        tooltip: "指定噪聲貼圖"
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        tooltip: "溶解顏色"
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "溶解程度"
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "柔邊程度"
      }), _dec6 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "溶解寬度"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectDissolve, _SpriteEffectBase);
        function SpriteEffectDissolve() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "noiseTexture", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_dissolveColor", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_factor", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_softness", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_width", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectDissolve.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = this._dissolveColor.r / 255;
          propBuffer[index + 5] = this._dissolveColor.g / 255;
          propBuffer[index + 6] = this._dissolveColor.b / 255;
          propBuffer[index + 7] = this._dissolveColor.a / 255;
          propBuffer[index + 8] = this._factor;
          propBuffer[index + 9] = this._softness;
          propBuffer[index + 10] = this._width;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          mat.setProperty('noiseTexture', this.noiseTexture);
          return mat;
        };
        _createClass(SpriteEffectDissolve, [{
          key: "dissolveColor",
          get: function get() {
            return this._dissolveColor;
          },
          set:
          //#region dissolveColor
          function set(val) {
            this._dissolveColor.set(val);
            {
              this.reflashParams();
            }
          }
        }, {
          key: "factor",
          get: function get() {
            return this._factor;
          },
          set:
          //#endregion
          //#region effectFactor
          function set(val) {
            this._factor = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "softness",
          get: function get() {
            return this._softness;
          },
          set:
          //#endregion
          //#region softness
          function set(val) {
            this._softness = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "width",
          get: function get() {
            return this._width;
          },
          set:
          //#endregion
          //#region width
          function set(val) {
            this._width = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 16;
          }
        }]);
        return SpriteEffectDissolve;
      }(SpriteEffectBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noiseTexture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "dissolveColor", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "dissolveColor"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_dissolveColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "factor", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "factor"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_factor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "softness", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "softness"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_softness", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "width", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "width"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_width", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectDistort.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Texture2D, lerp, Material, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Texture2D = module.Texture2D;
      lerp = module.lerp;
      Material = module.Material;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "c3398hqo91I14qg5Yx9QMZ0", "SpriteEffectDistort", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectDistort = exports('SpriteEffectDistort', (_dec = ccclass('SpriteEffectDistort'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Texture2D,
        tooltip: '指定噪声貼圖'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '扭曲速度'
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '扭曲强度'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectDistort, _SpriteEffectBase);
        function SpriteEffectDistort() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "noiseTexture", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_speed", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_strength", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectDistort.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          var baseUV = this.getUV(this.spriteFrame.uv);
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = baseUV.x;
          propBuffer[index + 5] = baseUV.y;
          propBuffer[index + 6] = baseUV.z;
          propBuffer[index + 7] = baseUV.w;
          propBuffer[index + 8] = lerp(0.0, 0.2, this._speed);
          propBuffer[index + 9] = lerp(0.0, 0.2, this._strength);
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          mat.setProperty('noiseTexture', this.noiseTexture);
          return mat;
        };
        _createClass(SpriteEffectDistort, [{
          key: "speed",
          get: function get() {
            return this._speed;
          },
          set:
          //#region speed
          function set(val) {
            this._speed = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "strength",
          get: function get() {
            return this._strength;
          },
          set:
          //#endregion
          //#region strength
          function set(val) {
            this._strength = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            // return 10; // 手機上非2次幂的紋理會報錯
            return 16;
          }
        }]);
        return SpriteEffectDistort;
      }(SpriteEffectBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noiseTexture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "strength", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "strength"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_strength", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectFlowLight.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Material, Color, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
      Color = module.Color;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "fad028dNo1AO7/Ha84/lbRO", "SpriteEffectFlowLight", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectFlowLight = exports('SpriteEffectFlowLight', (_dec = ccclass('SpriteEffectFlowLight'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        tooltip: '流光颜色'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.1, 2.0, 0.001],
        tooltip: '流光寬度'
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 10.0, 0.001],
        tooltip: '柔邊程度'
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [-3.0, 3.0, 0.001],
        tooltip: '偏移量'
      }), _dec6 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 6.28, 0.1],
        tooltip: '流光角度'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectFlowLight, _SpriteEffectBase);
        function SpriteEffectFlowLight() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_lightColor", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_lightWidth", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_soft", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_offset", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_rotation", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectFlowLight.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          var baseUV = this.getUV(this.spriteFrame.uv);
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = baseUV.x;
          propBuffer[index + 5] = baseUV.y;
          propBuffer[index + 6] = baseUV.z;
          propBuffer[index + 7] = baseUV.w;
          propBuffer[index + 8] = this._lightColor.r / 255;
          propBuffer[index + 9] = this._lightColor.g / 255;
          propBuffer[index + 10] = this._lightColor.b / 255;
          propBuffer[index + 11] = this._lightColor.a / 255;
          propBuffer[index + 12] = this._lightWidth;
          propBuffer[index + 13] = this._soft;
          propBuffer[index + 14] = this._offset;
          propBuffer[index + 15] = this._rotation;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          return mat;
        };
        _createClass(SpriteEffectFlowLight, [{
          key: "lightColor",
          get: function get() {
            return this._lightColor;
          },
          set:
          //#region lightColor
          function set(val) {
            this._lightColor.set(val);
            {
              this.reflashParams();
            }
          }
        }, {
          key: "lightWidth",
          get: function get() {
            return this._lightWidth;
          },
          set:
          //#endregion
          //#region lightWidth
          function set(val) {
            this._lightWidth = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "soft",
          get: function get() {
            return this._soft;
          },
          set:
          //#endregion
          //#region soft
          function set(val) {
            this._soft = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set:
          //#endregion
          //#region offset
          function set(val) {
            this._offset = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "rotation",
          get: function get() {
            return this._rotation;
          },
          set:
          //#endregion
          //#region rotation
          function set(val) {
            this._rotation = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 16;
          }
        }]);
        return SpriteEffectFlowLight;
      }(SpriteEffectBase), (_applyDecoratedDescriptor(_class2.prototype, "lightColor", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "lightColor"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_lightColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(1, 1, 1, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lightWidth", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "lightWidth"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_lightWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "soft", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "soft"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_soft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.7;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -8.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "rotation"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_rotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2.4;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectGaussianBlur.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Vec2, UITransform, Material, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Vec2 = module.Vec2;
      UITransform = module.UITransform;
      Material = module.Material;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "b4cd9DMOSZDZJNBTtka9K8l", "SpriteEffectGaussianBlur", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectGaussianBlur = exports('SpriteEffectGaussianBlur', (_dec = ccclass('SpriteEffectGaussianBlur'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '模糊程度'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectGaussianBlur, _SpriteEffectBase);
        function SpriteEffectGaussianBlur() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_blurFactor", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectGaussianBlur.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          var baseUV = this.getUV(this.spriteFrame.uv);
          var blurTextureSize = new Vec2(100, 100);
          if (this.spriteFrame) {
            blurTextureSize.x = Math.floor(this.spriteFrame.width * baseUV.z);
            blurTextureSize.y = Math.floor(this.spriteFrame.height * baseUV.w);
          } else {
            blurTextureSize.x = this.node.getComponent(UITransform).contentSize.width;
            blurTextureSize.y = this.node.getComponent(UITransform).contentSize.height;
          }
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = baseUV.x;
          propBuffer[index + 5] = baseUV.y;
          propBuffer[index + 6] = baseUV.z;
          propBuffer[index + 7] = baseUV.w;
          propBuffer[index + 8] = blurTextureSize.x;
          propBuffer[index + 9] = blurTextureSize.y;
          propBuffer[index + 10] = this._blurFactor;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          return mat;
        };
        _createClass(SpriteEffectGaussianBlur, [{
          key: "blurFactor",
          get: function get() {
            return this._blurFactor;
          },
          set:
          //#region blur
          function set(val) {
            this._blurFactor = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 16;
          }
        }]);
        return SpriteEffectGaussianBlur;
      }(SpriteEffectBase), (_applyDecoratedDescriptor(_class2.prototype, "blurFactor", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "blurFactor"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_blurFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectShadow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Enum, Material, Color, Vec2, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Enum = module.Enum;
      Material = module.Material;
      Color = module.Color;
      Vec2 = module.Vec2;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "6acadLrR85GG5gtfeWP+eMN", "SpriteEffectShadow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var ShadowType = exports('ShadowType', /*#__PURE__*/function (ShadowType) {
        ShadowType[ShadowType["LIMITED_BOUND"] = 0] = "LIMITED_BOUND";
        ShadowType[ShadowType["NORMAL"] = 1] = "NORMAL";
        return ShadowType;
      }({}));
      var SpriteEffectShadow = exports('SpriteEffectShadow', (_dec = ccclass('SpriteEffectShadow'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(ShadowType),
        tooltip: "陰影模式"
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        tooltip: "陰影顏色"
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        range: [-1, 1, 0.01],
        tooltip: "偏移量"
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectShadow, _SpriteEffectBase);
        function SpriteEffectShadow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_shadowType", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_shadowColor", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_offset", _descriptor3, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectShadow.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._shadowType;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = this._shadowColor.r / 255;
          propBuffer[index + 5] = this._shadowColor.g / 255;
          propBuffer[index + 6] = this._shadowColor.b / 255;
          propBuffer[index + 7] = this._shadowColor.a / 255;
          propBuffer[index + 8] = this._offset.x;
          propBuffer[index + 9] = this._offset.y;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var technique = 0;
          switch (this._shadowType) {
            case ShadowType.LIMITED_BOUND:
              technique = 0;
              break;
            case ShadowType.NORMAL:
              technique = 1;
              break;
          }
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: technique
          });
          return mat;
        };
        _createClass(SpriteEffectShadow, [{
          key: "shadowType",
          get: function get() {
            return this._shadowType;
          },
          set:
          //#region ShadowType
          function set(val) {
            this._shadowType = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "shadowColor",
          get: function get() {
            return this._shadowColor;
          },
          set:
          //#endregion
          //#region ShadowColor
          function set(val) {
            this._shadowColor.set(val);
            {
              this.reflashParams();
            }
          }
        }, {
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set:
          //#endregion
          //#region Offset
          function set(val) {
            this._offset.set(val);
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 16;
          }
        }]);
        return SpriteEffectShadow;
      }(SpriteEffectBase), (_applyDecoratedDescriptor(_class2.prototype, "shadowType", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowType"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_shadowType", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ShadowType.LIMITED_BOUND;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "shadowColor", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowColor"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_shadowColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 0, 0, 1.0);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(0.1, 0.1);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectTest.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, Material, SpriteEffectBase;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "0c212nm0DhIKqodQ9hpgPQf", "SpriteEffectTest", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectTest = exports('SpriteEffectTest', (_dec = ccclass('SpriteEffectTest'), _dec(_class = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectTest, _SpriteEffectBase);
        function SpriteEffectTest() {
          return _SpriteEffectBase.apply(this, arguments) || this;
        }
        var _proto = SpriteEffectTest.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          return mat;
        };
        _createClass(SpriteEffectTest, [{
          key: "floatUsage",
          get:
          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 4;
          }
        }]);
        return SpriteEffectTest;
      }(SpriteEffectBase)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectWaterFlow.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Texture2D, Material, Vec2, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Texture2D = module.Texture2D;
      Material = module.Material;
      Vec2 = module.Vec2;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "76000uzo1VDjKouHxxGxirw", "SpriteEffectWaterFlow", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectWaterFlow = exports('SpriteEffectWaterFlow', (_dec = ccclass('SpriteEffectWaterFlow'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Texture2D,
        tooltip: '指定噪声貼圖'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 10, 0.01],
        tooltip: '扭曲频率'
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: '扭曲幅度'
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: '扭曲速度'
      }), _dec6 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        tooltip: '流动方向'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectWaterFlow, _SpriteEffectBase);
        function SpriteEffectWaterFlow() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "noiseTexture", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_frequency", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_amplitude", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_speed", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_flowDirection", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectWaterFlow.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = this._flowDirection.x;
          propBuffer[index + 5] = this._flowDirection.y;
          propBuffer[index + 6] = this._frequency;
          propBuffer[index + 7] = this._amplitude;
          propBuffer[index + 8] = this._speed;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          mat.setProperty('noiseTexture', this.noiseTexture);
          return mat;
        };
        _createClass(SpriteEffectWaterFlow, [{
          key: "frequency",
          get: function get() {
            return this._frequency;
          },
          set:
          //#region frequency
          function set(val) {
            this._frequency = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "amplitude",
          get: function get() {
            return this._amplitude;
          },
          set:
          //#endregion
          //#region amplitude
          function set(val) {
            this._amplitude = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "speed",
          get: function get() {
            return this._speed;
          },
          set:
          //#endregion
          //#region speed
          function set(val) {
            this._speed = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "flowDirection",
          get: function get() {
            return this._flowDirection;
          },
          set:
          //#endregion
          //#region flowDirection
          function set(val) {
            this._flowDirection.set(val);
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 16;
          }
        }]);
        return SpriteEffectWaterFlow;
      }(SpriteEffectBase), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noiseTexture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "frequency", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "frequency"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_frequency", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "amplitude", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "amplitude"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_amplitude", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.02;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "flowDirection", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "flowDirection"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_flowDirection", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(1, 0);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectWaterRipple.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Material, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "4cb70X8jgtA6YJR2wD9bTyI", "SpriteEffectWaterRipple", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectWaterRipple = exports('SpriteEffectWaterRipple', (_dec = ccclass('SpriteEffectWaterRipple'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: '扭曲速度'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [1, 100, 0.01],
        tooltip: '水波密度'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectWaterRipple, _SpriteEffectBase);
        function SpriteEffectWaterRipple() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_speed", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_density", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectWaterRipple.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = this._speed;
          propBuffer[index + 5] = this._density;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          return mat;
        };
        _createClass(SpriteEffectWaterRipple, [{
          key: "speed",
          get: function get() {
            return this._speed;
          },
          set:
          //#region speed
          function set(val) {
            this._speed = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "density",
          get: function get() {
            return this._density;
          },
          set:
          //#endregion
          //#region density
          function set(val) {
            this._density = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 6;
          }
        }]);
        return SpriteEffectWaterRipple;
      }(SpriteEffectBase), (_applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "density", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "density"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_density", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 6.12;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SpriteEffectWaterWave.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Material, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Material = module.Material;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "e7c2fH4W0BPXKTIAIKn2ff5", "SpriteEffectWaterWave", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var SpriteEffectWaterWave = exports('SpriteEffectWaterWave', (_dec = ccclass('SpriteEffectWaterWave'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: '偏移量'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 20, 0.01],
        tooltip: '水波寬'
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: '水波高'
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 20, 0.01],
        tooltip: '速度'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_SpriteEffectBase) {
        _inheritsLoose(SpriteEffectWaterWave, _SpriteEffectBase);
        function SpriteEffectWaterWave() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _SpriteEffectBase.call.apply(_SpriteEffectBase, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "_offset", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_waveWidth", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_waveHeight", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_waveSpeed", _descriptor4, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = SpriteEffectWaterWave.prototype;
        /**
         * @override SpriteEffectBase
         */
        _proto.getPropsUnionKey = function getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.updateParams = function updateParams(index, propBuffer) {
          propBuffer[index + 0] = this._effectColor.r / 255;
          propBuffer[index + 1] = this._effectColor.g / 255;
          propBuffer[index + 2] = this._effectColor.b / 255;
          propBuffer[index + 3] = this._effectColor.a / 255;
          propBuffer[index + 4] = this._offset;
          propBuffer[index + 5] = this._waveWidth;
          propBuffer[index + 6] = this._waveHeight;
          propBuffer[index + 7] = this._waveSpeed;
        }

        /**
         * @override SpriteEffectBase
         */;
        _proto.initMaterial = function initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          return mat;
        };
        _createClass(SpriteEffectWaterWave, [{
          key: "offset",
          get: function get() {
            return this._offset;
          },
          set:
          //#region offset
          function set(val) {
            this._offset = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "waveWidth",
          get: function get() {
            return this._waveWidth;
          },
          set:
          //#endregion
          //#region waveWidth
          function set(val) {
            this._waveWidth = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "waveHeight",
          get: function get() {
            return this._waveHeight;
          },
          set:
          //#endregion
          //#region waveHeight
          function set(val) {
            this._waveHeight = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "waveSpeed",
          get: function get() {
            return this._waveSpeed;
          },
          set:
          //#endregion
          //#region waveSpeed
          function set(val) {
            this._waveSpeed = val;
            {
              this.reflashParams();
            }
          }
        }, {
          key: "floatUsage",
          get:
          //#endregion

          //#region override
          /**
           * @override SpriteEffectBase
           */
          function get() {
            return 8;
          }
        }]);
        return SpriteEffectWaterWave;
      }(SpriteEffectBase), (_applyDecoratedDescriptor(_class2.prototype, "offset", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "waveWidth", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "waveWidth"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_waveWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "waveHeight", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "waveHeight"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_waveHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.01;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "waveSpeed", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "waveSpeed"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_waveSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10.0;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TweenRandomColor.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './SpriteEffectColor.ts', './SpriteEffectBase.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, Color, math, tween, lerp, Component, SpriteEffectColor, SpriteEffectBase;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      Color = module.Color;
      math = module.math;
      tween = module.tween;
      lerp = module.lerp;
      Component = module.Component;
    }, function (module) {
      SpriteEffectColor = module.SpriteEffectColor;
    }, function (module) {
      SpriteEffectBase = module.SpriteEffectBase;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "60eecLbv1ZFzZ8AwkH6Xkhx", "TweenRandomColor", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var TweenRandomColor = exports('TweenRandomColor', (_dec = ccclass('TweenRandomColor'), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TweenRandomColor, _Component);
        function TweenRandomColor() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "color1", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "color2", _descriptor2, _assertThisInitialized(_this));
          _this._sp = null;
          return _this;
        }
        var _proto = TweenRandomColor.prototype;
        _proto.start = function start() {
          this._sp = this.node.getComponent(SpriteEffectColor);
          if (this._sp === null) {
            this._sp = this.node.getComponent(Sprite);
          }
          this.color1 = new Color(math.randomRangeInt(0, 256), math.randomRangeInt(0, 256), math.randomRangeInt(0, 256), 255);
          this.color2 = new Color(math.randomRangeInt(0, 256), math.randomRangeInt(0, 256), math.randomRangeInt(0, 256), 255);
          this.tweenColor();
        };
        _proto.tweenColor = function tweenColor() {
          var _this2 = this;
          var t = {
            dt: 0.0
          };
          tween(t).to(1.0, {
            dt: 1.0
          }, {
            easing: 'linear',
            progress: function progress(start, end, current, ratio) {
              current = lerp(start, end, ratio);
              var color = new Color();
              Color.lerp(color, _this2.color1, _this2.color2, current);
              if (_this2._sp instanceof SpriteEffectBase) _this2._sp.effectColor = color;else _this2._sp.color = color;
              return current;
            }
          }).to(1.0, {
            dt: 0.0
          }, {
            easing: 'linear',
            progress: function progress(start, end, current, ratio) {
              current = lerp(start, end, ratio);
              var color = new Color();
              Color.lerp(color, _this2.color1, _this2.color2, current);
              if (_this2._sp instanceof SpriteEffectBase) _this2._sp.effectColor = color;else _this2._sp.color = color;
              return current;
            },
            onComplete: function onComplete() {
              _this2.tweenColor();
            }
          }).start();
        };
        _proto.update = function update(deltaTime) {};
        return TweenRandomColor;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "color1", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 0, 0, 255);
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color2", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(0, 255, 0, 255);
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});