System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Material, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _class3, _crd, ccclass, property, SpriteEffectColorizing;

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

      _cclegacy._RF.push({}, "20603zBoKFLN4Q5V6kEd9S7", "SpriteEffectColorizing", undefined);

      __checkObsolete__(['_decorator', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectColorizing", SpriteEffectColorizing = (_dec = ccclass('SpriteEffectColorizing'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectColorizing extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_rChannelMin", _descriptor, this);

          _initializerDefineProperty(this, "_rChannelMax", _descriptor2, this);

          _initializerDefineProperty(this, "_gChannelMin", _descriptor3, this);

          _initializerDefineProperty(this, "_gChannelMax", _descriptor4, this);

          _initializerDefineProperty(this, "_bChannelMin", _descriptor5, this);

          _initializerDefineProperty(this, "_bChannelMax", _descriptor6, this);
        }

        isDirty(idx) {
          return SpriteEffectColorizing._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectColorizing._isPropDirty[idx] = val;
        } // #region rChannel


        set rChannelMin(val) {
          this._rChannelMin = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get rChannelMin() {
          return this._rChannelMin;
        }

        set rChannelMax(val) {
          this._rChannelMax = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get rChannelMax() {
          return this._rChannelMax;
        }

        // #endregion
        // #region gChannel
        set gChannelMin(val) {
          this._gChannelMin = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get gChannelMin() {
          return this._gChannelMin;
        }

        set gChannelMax(val) {
          this._gChannelMax = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get gChannelMax() {
          return this._gChannelMax;
        }

        // #endregion
        // #region bChannel
        set bChannelMin(val) {
          this._bChannelMin = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get bChannelMin() {
          return this._bChannelMin;
        }

        set bChannelMax(val) {
          this._bChannelMax = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get bChannelMax() {
          return this._bChannelMax;
        }

        // #endregion
        //#region override

        /**
         * @override SpriteEffectBase
         */
        get countOfUsedFloats() {
          //return 10; // 手機上非2次幂的紋理會報錯
          return 16;
        }
        /**
         * @override SpriteEffectBase
         */


        getPropsUnionKey() {
          return `${this.constructor.name}_${this._is2Din3D}`;
        }
        /**
         * @override SpriteEffectBase
         */


        updateParams(index, propBuffer) {
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
         */


        initMaterial() {
          let mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: {},
            technique: this._is2Din3D ? 1 : 0
          });
          return mat;
        }

      }, _class3._isPropDirty = [false, false, false], _class3), (_applyDecoratedDescriptor(_class2.prototype, "rChannelMin", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "rChannelMin"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "rChannelMax", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "rChannelMax"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_rChannelMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_rChannelMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "gChannelMin", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "gChannelMin"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "gChannelMax", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "gChannelMax"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_gChannelMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_gChannelMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "bChannelMin", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "bChannelMin"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "bChannelMax", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "bChannelMax"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_bChannelMin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_bChannelMax", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dae5fc05973097b7802a2756db27dba5b9572012.js.map