System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, lerp, Sprite, tween, SpriteEffectBase, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, RandomColor;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSpriteEffectColor(extras) {
    _reporterNs.report("SpriteEffectColor", "../../extensions/sprite-effect/source/assets/comp/SpriteEffectColor", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpriteEffectBase(extras) {
    _reporterNs.report("SpriteEffectBase", "../../extensions/sprite-effect/source/assets/comp/SpriteEffectBase", _context.meta, extras);
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
      Component = _cc.Component;
      lerp = _cc.lerp;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      SpriteEffectBase = _unresolved_2.SpriteEffectBase;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c9decKDsz1EE54I91tmrhsp", "RandomColor", undefined);

      __checkObsolete__(['_decorator', 'Color', 'Component', 'lerp', 'Node', 'Sprite', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RandomColor", RandomColor = (_dec = ccclass('RandomColor'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Color
      }), _dec4 = property({
        type: Color
      }), _dec5 = property({
        type: Number
      }), _dec(_class = (_class2 = class RandomColor extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sprite", _descriptor, this);

          _initializerDefineProperty(this, "color1", _descriptor2, this);

          _initializerDefineProperty(this, "color2", _descriptor3, this);

          _initializerDefineProperty(this, "duration", _descriptor4, this);
        }

        start() {
          this.color1 = new Color().set(Math.random() * 255, Math.random() * 255, Math.random() * 255, 255);
          this.color2 = new Color().set(Math.random() * 255, Math.random() * 255, Math.random() * 255, 255);
          this.duration = Math.random() * 3.0 + 1.0;
          this.playTween();
        }

        playTween() {
          if (this.sprite instanceof (_crd && SpriteEffectBase === void 0 ? (_reportPossibleCrUseOfSpriteEffectBase({
            error: Error()
          }), SpriteEffectBase) : SpriteEffectBase)) {
            var t = {
              dt: 0.0
            };
            tween(t).to(this.duration / 2, {
              dt: 1.0
            }, {
              easing: 'linear',
              progress: (start, end, current, ratio) => {
                current = lerp(start, end, ratio);
                var color = new Color();
                Color.lerp(color, this.color1, this.color2, current);
                this.sprite.effectColor = color;
                return current;
              }
            }).to(this.duration / 2, {
              dt: 0.0
            }, {
              easing: 'linear',
              progress: (start, end, current, ratio) => {
                current = lerp(start, end, ratio);
                var color = new Color();
                Color.lerp(color, this.color1, this.color2, current);
                this.sprite.effectColor = color;
                return current;
              },
              onComplete: () => {
                this.playTween();
              }
            }).start();
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sprite", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "color1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "color2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Color();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.0;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7e6973a2edc4b34b2d88ac567135b7ec03e5c40.js.map