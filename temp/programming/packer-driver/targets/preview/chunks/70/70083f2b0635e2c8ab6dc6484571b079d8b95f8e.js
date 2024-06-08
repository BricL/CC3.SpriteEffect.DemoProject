System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Enum, Material, Vec2, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, ShadowType, SpriteEffectShadow;

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
      Enum = _cc.Enum;
      Material = _cc.Material;
      Vec2 = _cc.Vec2;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6acadLrR85GG5gtfeWP+eMN", "SpriteEffectShadow", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Enum', 'Material', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ShadowType", ShadowType = /*#__PURE__*/function (ShadowType) {
        ShadowType[ShadowType["LIMITED_BOUND"] = 0] = "LIMITED_BOUND";
        ShadowType[ShadowType["NORMAL"] = 1] = "NORMAL";
        return ShadowType;
      }({}));

      _export("SpriteEffectShadow", SpriteEffectShadow = (_dec = ccclass('SpriteEffectShadow'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectShadow extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_shadowType", _descriptor, this);

          _initializerDefineProperty(this, "_shadowColor", _descriptor2, this);

          _initializerDefineProperty(this, "_offset", _descriptor3, this);
        }

        isDirty(idx) {
          return SpriteEffectShadow._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectShadow._isPropDirty[idx] = val;
        } //#region ShadowType


        set shadowType(val) {
          this._shadowType = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.init(this.countOfProps);
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get shadowType() {
          return this._shadowType;
        }

        //#endregion
        //#region ShadowColor
        set shadowColor(val) {
          this._shadowColor.set(val);

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get shadowColor() {
          return this._shadowColor;
        }

        //#endregion
        //#region Offset
        set offset(val) {
          this._offset.set(val);

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
          return this.constructor.name + "_" + this._shadowType;
        }
        /**
         * @override SpriteEffectBase
         */


        updateParams(index, propBuffer) {
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
         */


        initMaterial() {
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
        }

      }, _class3._isPropDirty = [false, false, false], _class3), (_applyDecoratedDescriptor(_class2.prototype, "shadowType", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "shadowType"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_shadowType", [property], {
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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=70083f2b0635e2c8ab6dc6484571b079d8b95f8e.js.map