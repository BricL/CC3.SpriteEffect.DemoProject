System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Material, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3, _crd, ccclass, property, SpriteEffectFlowLight;

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
      Color = _cc.Color;
      Material = _cc.Material;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fad028dNo1AO7/Ha84/lbRO", "SpriteEffectFlowLight", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectFlowLight", SpriteEffectFlowLight = (_dec = ccclass('SpriteEffectFlowLight'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectFlowLight extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_lightColor", _descriptor, this);

          _initializerDefineProperty(this, "_lightWidth", _descriptor2, this);

          _initializerDefineProperty(this, "_soft", _descriptor3, this);

          _initializerDefineProperty(this, "_offset", _descriptor4, this);

          _initializerDefineProperty(this, "_rotation", _descriptor5, this);
        }

        isDirty(idx) {
          return SpriteEffectFlowLight._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectFlowLight._isPropDirty[idx] = val;
        } //#region lightColor


        set lightColor(val) {
          this._lightColor.set(val);

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get lightColor() {
          return this._lightColor;
        }

        //#endregion
        //#region lightWidth
        set lightWidth(val) {
          this._lightWidth = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get lightWidth() {
          return this._lightWidth;
        }

        //#endregion
        //#region soft
        set soft(val) {
          this._soft = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get soft() {
          return this._soft;
        }

        //#endregion
        //#region offset
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
        //#region rotation
        set rotation(val) {
          this._rotation = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get rotation() {
          return this._rotation;
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
          return `${this.constructor.name}_${this._is2Din3D}`;
        }
        /**
         * @override SpriteEffectBase
         */


        updateParams(index, propBuffer) {
          const baseUV = this.getUV(this.spriteFrame.uv);
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

      }, _class3._isPropDirty = [false, false, false], _class3), (_applyDecoratedDescriptor(_class2.prototype, "lightColor", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "lightColor"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_lightColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Color(1, 1, 1, 1);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "lightWidth", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "lightWidth"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_lightWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.5;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "soft", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "soft"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_soft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.7;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return -8.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rotation", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "rotation"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_rotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2.4;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8708bd8209a5711da8fee5b4bd362cd17378ee17.js.map