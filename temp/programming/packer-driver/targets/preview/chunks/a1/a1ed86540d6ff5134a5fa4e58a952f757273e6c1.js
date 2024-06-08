System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Material, UITransform, Vec2, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _class, _class2, _descriptor, _class3, _crd, ccclass, property, SpriteEffectGaussianBlur;

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
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4cd9DMOSZDZJNBTtka9K8l", "SpriteEffectGaussianBlur", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Material', 'UITransform', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectGaussianBlur", SpriteEffectGaussianBlur = (_dec = ccclass('SpriteEffectGaussianBlur'), _dec2 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0.0, 1.0, 0.01],
        tooltip: '模糊程度'
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectGaussianBlur extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_blurFactor", _descriptor, this);
        }

        isDirty(idx) {
          return SpriteEffectGaussianBlur._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectGaussianBlur._isPropDirty[idx] = val;
        } //#region blur


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

      }, _class3._isPropDirty = [false, false, false], _class3), (_applyDecoratedDescriptor(_class2.prototype, "blurFactor", [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, "blurFactor"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "_blurFactor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1ed86540d6ff5134a5fa4e58a952f757273e6c1.js.map