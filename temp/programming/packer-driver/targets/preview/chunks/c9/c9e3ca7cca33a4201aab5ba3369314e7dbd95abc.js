System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Material, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, SpriteEffectWaterRipple;

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
      Material = _cc.Material;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4cb70X8jgtA6YJR2wD9bTyI", "SpriteEffectWaterRipple", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectWaterRipple", SpriteEffectWaterRipple = (_dec = ccclass('SpriteEffectWaterRipple'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectWaterRipple extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_speed", _descriptor, this);

          _initializerDefineProperty(this, "_density", _descriptor2, this);
        }

        isDirty(idx) {
          return SpriteEffectWaterRipple._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectWaterRipple._isPropDirty[idx] = val;
        } //#region speed


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
        //#region density
        set density(val) {
          this._density = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get density() {
          return this._density;
        }

        //#endregion
        //#region override

        /**
         * @override SpriteEffectBase
         */
        get countOfUsedFloats() {
          return 6;
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
          propBuffer[index + 4] = this._speed;
          propBuffer[index + 5] = this._density;
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
          return mat;
        }

      }, _class3._isPropDirty = [false, false, false], _class3), (_applyDecoratedDescriptor(_class2.prototype, "speed", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c9e3ca7cca33a4201aab5ba3369314e7dbd95abc.js.map