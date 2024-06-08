System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Material, Texture2D, Vec2, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, SpriteEffectWaterFlow;

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
      Material = _cc.Material;
      Texture2D = _cc.Texture2D;
      Vec2 = _cc.Vec2;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "76000uzo1VDjKouHxxGxirw", "SpriteEffectWaterFlow", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Material', 'Texture2D', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectWaterFlow", SpriteEffectWaterFlow = (_dec = ccclass('SpriteEffectWaterFlow'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectWaterFlow extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "noiseTexture", _descriptor, this);

          _initializerDefineProperty(this, "_frequency", _descriptor2, this);

          _initializerDefineProperty(this, "_amplitude", _descriptor3, this);

          _initializerDefineProperty(this, "_speed", _descriptor4, this);

          _initializerDefineProperty(this, "_flowDirection", _descriptor5, this);
        }

        isDirty(idx) {
          return SpriteEffectWaterFlow._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectWaterFlow._isPropDirty[idx] = val;
        }

        //#region frequency
        set frequency(val) {
          this._frequency = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get frequency() {
          return this._frequency;
        }

        //#endregion
        //#region amplitude
        set amplitude(val) {
          this._amplitude = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get amplitude() {
          return this._amplitude;
        }

        //#endregion
        //#region speed
        set speed(val) {
          this._speed = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get speed() {
          return this._speed;
        }

        //#endregion
        //#region flowDirection
        set flowDirection(val) {
          this._flowDirection.set(val);

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get flowDirection() {
          return this._flowDirection;
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
          propBuffer[index + 4] = this._flowDirection.x;
          propBuffer[index + 5] = this._flowDirection.y;
          propBuffer[index + 6] = this._frequency;
          propBuffer[index + 7] = this._amplitude;
          propBuffer[index + 8] = this._speed;
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da82585d61deb529347993c8ca5d71a9c4113fb2.js.map