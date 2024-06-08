System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, Material, UITransform, Vec2, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, ToneMode, ColorMode, BlurMode, SpriteEffectColor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _reportPossibleCrUseOfSpriteEffectBase(extras) {
    _reporterNs.report("SpriteEffectBase", "./SpriteEffectBase", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Enum = _cc.Enum;
      Material = _cc.Material;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c6496Bv0dxAApSoUg42h5Lz", "SpriteEffectColor", undefined);

      __checkObsolete__(['_decorator', 'Enum', 'log', 'Material', 'Texture2D', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToneMode", ToneMode = /*#__PURE__*/function (ToneMode) {
        ToneMode[ToneMode["GRAY"] = 0] = "GRAY";
        ToneMode[ToneMode["NEGA"] = 1] = "NEGA";
        ToneMode[ToneMode["SEPIA"] = 2] = "SEPIA";
        ToneMode[ToneMode["NORMAL"] = 3] = "NORMAL";
        return ToneMode;
      }({}));

      _export("ColorMode", ColorMode = /*#__PURE__*/function (ColorMode) {
        ColorMode[ColorMode["ADD"] = 0] = "ADD";
        ColorMode[ColorMode["SUB"] = 1] = "SUB";
        ColorMode[ColorMode["FILL"] = 2] = "FILL";
        ColorMode[ColorMode["MULT"] = 3] = "MULT";
        return ColorMode;
      }({}));

      _export("BlurMode", BlurMode = /*#__PURE__*/function (BlurMode) {
        BlurMode[BlurMode["NONE"] = 0] = "NONE";
        BlurMode[BlurMode["GAUSSIAN"] = 1] = "GAUSSIAN";
        return BlurMode;
      }({}));

      _export("SpriteEffectColor", SpriteEffectColor = (_dec = ccclass('SpriteEffectColor'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectColor extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_toneMode", _descriptor, this);

          _initializerDefineProperty(this, "_toneFactor", _descriptor2, this);

          _initializerDefineProperty(this, "_colorMode", _descriptor3, this);

          _initializerDefineProperty(this, "_colorFactor", _descriptor4, this);

          _initializerDefineProperty(this, "_blurMode", _descriptor5, this);

          _initializerDefineProperty(this, "_blurFactor", _descriptor6, this);
        }

        isDirty(idx) {
          return SpriteEffectColor._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectColor._isPropDirty[idx] = val;
        } //#region toneMode


        set toneMode(val) {
          this._toneMode = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.init(this.countOfProps);
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get toneMode() {
          return this._toneMode;
        }

        //#endregion
        //#region toneFactor
        set toneFactor(val) {
          this._toneFactor = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get toneFactor() {
          return this._toneFactor;
        }

        //#endregion
        //#region colorMode
        set colorMode(val) {
          this._colorMode = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.init(this.countOfProps);
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get colorMode() {
          return this._colorMode;
        }

        //#endregion
        //#region colorFactor
        set colorFactor(val) {
          this._colorFactor = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get colorFactor() {
          return this._colorFactor;
        }

        //#endregion
        //#region blurMode
        set blurMode(val) {
          this._blurMode = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.init(this.countOfProps);
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get blurMode() {
          return this._blurMode;
        }

        //#endregion
        //#region blurFactor
        set blurFactor(val) {
          this._blurFactor = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get blurFactor() {
          return this._blurFactor;
        }

        //#endregion
        //#region override
        get countOfUsedFloats() {
          return 13;
        }

        getPropsUnionKey() {
          const unionKey = `${this.constructor.name}_${this._is2Din3D}_${this._toneMode}_${this._colorMode}_${this._blurMode}`;
          return unionKey;
        }
        /**
         * @override SpriteEffectBase
         */


        updateParams(index, propBuffer) {
          const baseUV = this.getUV(this.spriteFrame.uv);
          let blurTextureSize = new Vec2(100, 100);

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
          propBuffer[index + 9] = blurTextureSize.y; // propBuffer[index + 10] = 0.0;
          // propBuffer[index + 11] = 1.0;

          propBuffer[index + 12] = this.toneFactor;
          propBuffer[index + 13] = this.colorFactor;
          propBuffer[index + 14] = this.blurFactor; // propBuffer[index + 15] = 1.0;
        }
        /**
         * @override SpriteEffectBase
         */


        initMaterial() {
          let mat = new Material();
          let define_macro = {
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

          ;

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
        }

      }, _class3._isPropDirty = [false, false, false], _class3), (_applyDecoratedDescriptor(_class2.prototype, "toneMode", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "toneMode"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_toneMode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ToneMode.NORMAL;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "toneFactor", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "toneFactor"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_toneFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorMode", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "colorMode"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_colorMode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ColorMode.MULT;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "colorFactor", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "colorFactor"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_colorFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blurMode", [_dec8], Object.getOwnPropertyDescriptor(_class2.prototype, "blurMode"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_blurMode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return BlurMode.NONE;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blurFactor", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "blurFactor"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_blurFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=941a46ca087cd132a8a2ce4c5796df6ed15b47a5.js.map