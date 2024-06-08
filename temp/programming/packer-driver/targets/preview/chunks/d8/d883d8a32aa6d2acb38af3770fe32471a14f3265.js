System.register(["cc", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, EffectAsset, error, log, Sprite, Texture2D, Vec4, EDITOR_NOT_IN_PREVIEW, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3, _crd, ccclass, property, SpriteEffectBase;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      EffectAsset = _cc.EffectAsset;
      error = _cc.error;
      log = _cc.log;
      Sprite = _cc.Sprite;
      Texture2D = _cc.Texture2D;
      Vec4 = _cc.Vec4;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db29dFfUqxFAr9fn/tgDveE", "SpriteEffectBase", undefined);

      __checkObsolete__(['_decorator', 'Color', 'EffectAsset', 'error', 'log', 'Material', 'Sprite', 'Texture2D', 'Vec4']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectBase", SpriteEffectBase = (_dec = ccclass('SpriteEffectBase'), _dec2 = property({
        type: EffectAsset,
        tooltip: '指定效果EffectAsset'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Color,
        tooltip: "My Color"
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        tooltip: '當使用RenderRoot2D時使用'
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectBase extends Sprite {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "effectAsset", _descriptor, this);

          this._effectIndex = -1;

          _initializerDefineProperty(this, "_effectColor", _descriptor2, this);

          _initializerDefineProperty(this, "_is2Din3D", _descriptor3, this);
        }

        //#region effectColor
        set effectColor(val) {
          this._effectColor = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get effectColor() {
          return this._effectColor;
        }

        //#endregion
        //#region is2Din3D
        set is2Din3D(val) {
          this._is2Din3D = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.init(this.countOfProps);
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get is2Din3D() {
          return this._is2Din3D;
        } //#endregion
        //#region abstract methods

        /**
         * @abstract
         * Return the count of used floats of the effect.
         */

        /**
         * @abstract 
         * Generate a Union key for the effect.
         */

        /**
         * @abstract
         * Update the effect parameters.
         */

        /**
         * @abstract
         * Initialize the material.
         * @returns Material
        */


        //#endregion
        //#region methods
        get countOfProps() {
          var num = Math.ceil(this.countOfUsedFloats / 4.0);
          return num;
        }

        init(countOfProps) {
          var unionKey = this.getPropsUnionKey();
          log("init: " + unionKey); // Step1: 取的當前的effectIndex

          if (!SpriteEffectBase._s_effectMap.has(unionKey)) {
            var temp = new Array(768).fill(""); // R/G/B (0~255) => 256 * 3 = 768

            SpriteEffectBase._s_effectMap.set(unionKey, temp);
          }

          this._effectIndex = SpriteEffectBase._s_effectMap.get(unionKey).findIndex(v => v === this.node.uuid);

          if (this._effectIndex === -1) {
            this._effectIndex = SpriteEffectBase._s_effectMap.get(unionKey).findIndex(v => v === "");

            if (this._effectIndex === -1) {
              error("Effect map is full!");
              return;
            }
          }

          SpriteEffectBase._s_effectMap.get(unionKey)[this._effectIndex] = this.node.uuid;

          if (this.propGroupIdx === 0) {
            this.color = new Color(this._effectIndex, 0, 0, 255);
          } else if (this.propGroupIdx === 1) {
            this.color = new Color(255, this._effectIndex - 256 + 1, 0, 255);
          } else if (this.propGroupIdx === 2) {
            this.color = new Color(255, 255, this._effectIndex - 256 - 256 + 1, 255);
          } else {
            error("The prop group index, " + this.propGroupIdx + ", is out of range!");
            return;
          } // Step2: 初始化Effect props


          if (!SpriteEffectBase._s_effectProps.has(unionKey)) {
            var _temp = new Array(3).fill(null); // Only use R/G/B 3 channels


            SpriteEffectBase._s_effectProps.set(unionKey, _temp);
          }

          if (SpriteEffectBase._s_effectProps.get(unionKey)[this.propGroupIdx] === null) {
            var w = 256 * countOfProps;
            var h = 1;

            var _propBuffer = new Float32Array(w * h * 4);

            for (var y = 0; y < h; y++) {
              for (var x = 0; x < w; x++) {
                var _index = (y * w + x) * 4;

                _propBuffer[_index] = 1;
                _propBuffer[_index + 1] = 0;
                _propBuffer[_index + 2] = 1;
                _propBuffer[_index + 3] = 1;
              }
            }

            var propsTexture = new Texture2D();
            propsTexture.setFilters(Texture2D.Filter.NEAREST, Texture2D.Filter.NEAREST);
            propsTexture.reset({
              width: w,
              height: h,
              format: Texture2D.PixelFormat.RGBA32F,
              mipmapLevel: 0
            });
            propsTexture.uploadData(_propBuffer);
            var mat = this.initMaterial();
            mat.setProperty('propsTexture', propsTexture);
            SpriteEffectBase._s_effectProps.get(unionKey)[this.propGroupIdx] = {
              mat: mat,
              propBuffer: _propBuffer,
              propTexture: propsTexture
            };
          }

          this.customMaterial = SpriteEffectBase._s_effectProps.get(unionKey)[this.propGroupIdx].mat;
        }

        reflashParams() {
          var index = this.getBufferIndex();

          var effectProps = SpriteEffectBase._s_effectProps.get(this.getPropsUnionKey())[this.propGroupIdx];

          this.updateParams(index, effectProps.propBuffer);

          if (EDITOR_NOT_IN_PREVIEW) {
            effectProps.propTexture.uploadData(effectProps.propBuffer);
          } else {
            this.setDirty(this.propGroupIdx, true);
          }
        }

        get propGroupIdx() {
          return Math.floor(this._effectIndex / 256);
        }

        getUV(uv) {
          var minU = Math.min(uv[0], uv[2], uv[4], uv[6]);
          var minV = Math.min(uv[1], uv[3], uv[5], uv[7]);
          var maxU = Math.max(uv[0], uv[2], uv[4], uv[6]);
          var maxV = Math.max(uv[1], uv[3], uv[5], uv[7]);
          var width = maxU - minU;
          var height = maxV - minV;
          return new Vec4(minU, minV, width, height);
        }

        getBufferIndex() {
          var quotient = this._effectIndex / 256;
          var fractional = quotient - Math.floor(quotient);
          var x = Math.floor(fractional * (256 * this.countOfProps));
          var index = x * 4;
          return index;
        } //#endregion
        //#region life cycle


        onLoad() {
          this.init(this.countOfProps);
        }

        start() {
          this.reflashParams();
        }

        onDestroy() {
          var unionKey = this.getPropsUnionKey();

          if (SpriteEffectBase._s_effectMap.has(unionKey)) {
            var _index2 = SpriteEffectBase._s_effectMap.get(unionKey).findIndex(v => v === this.node.uuid);

            if (_index2 === -1) {
              error("Effect index is not found!");
              return;
            }

            SpriteEffectBase._s_effectMap.get(unionKey)[_index2] = "";
          } else {
            error("The effect map of " + unionKey + " is not found!");
          }
        }

        lateUpdate(dt) {
          if (this.isDirty(this.propGroupIdx)) {
            log(this.constructor.name + "'s effect props is DIRTY!");
            var unionKey = this.getPropsUnionKey();

            var effectProps = SpriteEffectBase._s_effectProps.get(unionKey)[this.propGroupIdx];

            effectProps.propTexture.uploadData(effectProps.propBuffer);
            this.setDirty(this.propGroupIdx, false);
          }
        }

      }, _class3._s_effectMap = new Map(), _class3._s_effectProps = new Map(), _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "effectAsset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "effectColor", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "effectColor"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_effectColor", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color(255, 255, 255, 255);
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "is2Din3D", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "is2Din3D"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_is2Din3D", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d883d8a32aa6d2acb38af3770fe32471a14f3265.js.map