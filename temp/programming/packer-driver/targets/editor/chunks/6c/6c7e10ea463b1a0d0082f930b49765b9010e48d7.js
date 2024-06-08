System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, lerp, Material, Texture2D, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, SpriteEffectDistort;

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
      lerp = _cc.lerp;
      Material = _cc.Material;
      Texture2D = _cc.Texture2D;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3398hqo91I14qg5Yx9QMZ0", "SpriteEffectDistort", undefined);

      __checkObsolete__(['_decorator', 'lerp', 'log', 'Material', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectDistort", SpriteEffectDistort = (_dec = ccclass('SpriteEffectDistort'), _dec2 = property({
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
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectDistort extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "noiseTexture", _descriptor, this);

          _initializerDefineProperty(this, "_speed", _descriptor2, this);

          _initializerDefineProperty(this, "_strength", _descriptor3, this);
        }

        isDirty(idx) {
          return SpriteEffectDistort._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectDistort._isPropDirty[idx] = val;
        }

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
        //#region strength
        set strength(val) {
          this._strength = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get strength() {
          return this._strength;
        }

        //#endregion
        //#region override

        /**
         * @override SpriteEffectBase
         */
        get countOfUsedFloats() {
          // return 10; // 手機上非2次幂的紋理會報錯
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
          propBuffer[index + 8] = lerp(0.0, 0.2, this._speed);
          propBuffer[index + 9] = lerp(0.0, 0.2, this._strength);
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
          mat.setProperty('noiseTexture', this.noiseTexture);
          return mat;
        }

      }, _class3._isPropDirty = [false, false, false], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "noiseTexture", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.05;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "strength", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "strength"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_strength", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.05;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c7e10ea463b1a0d0082f930b49765b9010e48d7.js.map