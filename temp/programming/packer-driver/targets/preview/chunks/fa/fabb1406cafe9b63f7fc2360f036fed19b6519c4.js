System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Material, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, SpriteEffectWaterWave;

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

      _cclegacy._RF.push({}, "e7c2fH4W0BPXKTIAIKn2ff5", "SpriteEffectWaterWave", undefined);

      __checkObsolete__(['_decorator', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectWaterWave", SpriteEffectWaterWave = (_dec = ccclass('SpriteEffectWaterWave'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectWaterWave extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_offset", _descriptor, this);

          _initializerDefineProperty(this, "_waveWidth", _descriptor2, this);

          _initializerDefineProperty(this, "_waveHeight", _descriptor3, this);

          _initializerDefineProperty(this, "_waveSpeed", _descriptor4, this);
        }

        isDirty(idx) {
          return SpriteEffectWaterWave._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectWaterWave._isPropDirty[idx] = val;
        } //#region offset


        set offset(val) {
          this._offset = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get offset() {
          return this._offset;
        }

        //#endregion
        //#region waveWidth
        set waveWidth(val) {
          this._waveWidth = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get waveWidth() {
          return this._waveWidth;
        }

        //#endregion
        //#region waveHeight
        set waveHeight(val) {
          this._waveHeight = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get waveHeight() {
          return this._waveHeight;
        }

        //#endregion
        //#region waveSpeed
        set waveSpeed(val) {
          this._waveSpeed = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get waveSpeed() {
          return this._waveSpeed;
        }

        //#endregion
        //#region override

        /**
         * @override SpriteEffectBase
         */
        get countOfUsedFloats() {
          return 8;
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
          propBuffer[index + 4] = this._offset;
          propBuffer[index + 5] = this._waveWidth;
          propBuffer[index + 6] = this._waveHeight;
          propBuffer[index + 7] = this._waveSpeed;
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

      }, _class3._isPropDirty = [false, false, false], _class3), (_applyDecoratedDescriptor(_class2.prototype, "offset", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fabb1406cafe9b63f7fc2360f036fed19b6519c4.js.map