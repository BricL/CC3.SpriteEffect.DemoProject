System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Material, SpriteEffectBase, _dec, _class, _class2, _crd, ccclass, property, SpriteEffectTest;

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
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0c212nm0DhIKqodQ9hpgPQf", "SpriteEffectTest", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SpriteEffectTest", SpriteEffectTest = (_dec = ccclass('SpriteEffectTest'), _dec(_class = (_class2 = class SpriteEffectTest extends (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
        error: Error()
      }), SpriteEffectBase) : SpriteEffectBase) {
        isDirty(idx) {
          return SpriteEffectTest._isPropDirty[idx];
        }

        setDirty(idx, val) {
          SpriteEffectTest._isPropDirty[idx] = val;
        } //#region override

        /**
         * @override SpriteEffectBase
         */


        get countOfUsedFloats() {
          return 4;
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

      }, _class2._isPropDirty = [false, false, false], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=73273473694fef12194928cb07856362ba937620.js.map