System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Enum, Material, Texture2D, EDITOR_NOT_IN_PREVIEW, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _class3, _crd, ccclass, property, Direction, SpriteEffectDisappear;

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
      Enum = _cc.Enum;
      Material = _cc.Material;
      Texture2D = _cc.Texture2D;
    }, function (_ccEnv) {
      EDITOR_NOT_IN_PREVIEW = _ccEnv.EDITOR_NOT_IN_PREVIEW;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c31erKjO1IOorl9cBmHuBS", "SpriteEffectDisappear", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Enum', 'Material', 'Texture2D']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Direction", Direction = /*#__PURE__*/function (Direction) {
        Direction[Direction["HORIZONTAL"] = 0] = "HORIZONTAL";
        Direction[Direction["VERTICAL"] = 1] = "VERTICAL";
        return Direction;
      }({}));

      _export("SpriteEffectDisappear", SpriteEffectDisappear = (_dec = ccclass('SpriteEffectDisappear'), _dec2 = property({
        type: Texture2D,
        tooltip: '指定貼圖'
      }), _dec3 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        type: Enum(Direction),
        tooltip: '指定方向'
      }), _dec4 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 1, 0.01],
        tooltip: '消失偏移'
      }), _dec5 = property({
        group: {
          name: "Setter/Getter",
          id: "1"
        },
        slide: true,
        range: [0, 0.5, 0.01],
        tooltip: '柔邊程度'
      }), _dec(_class = (_class2 = (_class3 = class SpriteEffectDisappear extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "secondSprite", _descriptor, this);

          _initializerDefineProperty(this, "_dirMode", _descriptor2, this);

          _initializerDefineProperty(this, "_offset", _descriptor3, this);

          _initializerDefineProperty(this, "_soft", _descriptor4, this);
        }

        isDirty(idx) {
          return SpriteEffectDisappear._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectDisappear._isPropDirty[idx] = val;
        }

        //#region toneMode
        set dirMode(val) {
          this._dirMode = val;

          if (EDITOR_NOT_IN_PREVIEW) {
            this.init(this.countOfProps);
            this.reflashParams();
          } else {
            this.reflashParams();
          }
        }

        get dirMode() {
          return this._dirMode;
        }

        //#endregion
        //#region disappearOffset
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
        //#region translucentOffset
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
          return this.constructor.name + "_" + this._is2Din3D + "_" + this._dirMode;
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
          propBuffer[index + 5] = this._soft;
        }
        /**
         * @override SpriteEffectBase
         */


        initMaterial() {
          var define_macro = {
            DIR_VERTICAL: true
          };

          switch (this._dirMode) {
            case Direction.HORIZONTAL:
              define_macro.DIR_VERTICAL = false;
              break;

            case Direction.VERTICAL:
              define_macro.DIR_VERTICAL = true;
              break;
          }

          var mat = new Material();
          mat.initialize({
            effectAsset: this.effectAsset,
            defines: define_macro,
            technique: this._is2Din3D ? 1 : 0
          });
          mat.setProperty('secondSprite', this.secondSprite);
          return mat;
        }

      }, _class3._isPropDirty = [false, false, false], _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "secondSprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "dirMode", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "dirMode"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_dirMode", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Direction.VERTICAL;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "offset", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "offset"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_offset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "soft", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "soft"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_soft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1e3f2b7f5ba0c8f3ffa3f6749550e6d58b5a01ed.js.map