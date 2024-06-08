System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Material, Texture2D, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, SpriteEffectDissolve;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Color = _cc.Color;
      Material = _cc.Material;
      Texture2D = _cc.Texture2D;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "18a89aWE/xKVqkaiGTOi3+S", "SpriteEffectDissolve", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Material', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectDissolve", SpriteEffectDissolve = (_dec = ccclass('SpriteEffectDissolve'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectDissolve extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "noiseTexture", _descriptor, this);

          _initializerDefineProperty(this, "_dissolveColor", _descriptor2, this);

          _initializerDefineProperty(this, "_factor", _descriptor3, this);

          _initializerDefineProperty(this, "_softness", _descriptor4, this);

          _initializerDefineProperty(this, "_width", _descriptor5, this);
        }

        isDirty(idx) {
          return SpriteEffectDissolve._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectDissolve._isPropDirty[idx] = val;
        }

        //#region dissolveColor
        set dissolveColor(val) {
          this._dissolveColor.set(val);

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get dissolveColor() {
          return this._dissolveColor;
        }

        //#endregion
        //#region effectFactor
        set factor(val) {
          this._factor = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get factor() {
          return this._factor;
        }

        //#endregion
        //#region softness
        set softness(val) {
          this._softness = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get softness() {
          return this._softness;
        }

        //#endregion
        //#region width
        set width(val) {
          this._width = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get width() {
          return this._width;
        }

        //#endregion
        //#region override

        /**
         * @override SpriteEffectBase
         */
        get countOfUsedFloats() {
          return 16;
        }
        /**
         * @override SpriteEffectBase
         */


        getPropsUnionKey() {
          return this.constructor.name + "_" + this._is2Din3D;
        }
        /**
         * @override SpriteEffectBase
         */


        updateParams(index, propBuffer) {
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
         */


        initMaterial() {
          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          mat.setProperty('noiseTexture', this.noiseTexture);
          return mat;
        }

      }, _class3._isPropDirty = [false, false, false], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noiseTexture", [_dec2], {
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bda6def4c31f52114cc7981ee34fb786fe2be376.js.map