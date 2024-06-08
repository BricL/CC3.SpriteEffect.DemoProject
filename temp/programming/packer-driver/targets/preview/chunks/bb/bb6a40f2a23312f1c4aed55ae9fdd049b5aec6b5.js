System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Label, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ProfileInfo;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb3bdbYc/ZJk6X7GCnkbecr", "ProfileInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Label', 'Node', 'Root']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ProfileInfo", ProfileInfo = (_dec = ccclass('ProfileInfo'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Label
      }), _dec(_class = (_class2 = class ProfileInfo extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "fpsLabel", _descriptor, this);

          _initializerDefineProperty(this, "drawcallscLabel", _descriptor2, this);

          _initializerDefineProperty(this, "frameTimeLabel", _descriptor3, this);

          _initializerDefineProperty(this, "venderLabel", _descriptor4, this);
        }

        start() {}

        update(deltaTime) {
          this.fpsLabel.string = "FPS: " + director.root.fps;
          this.venderLabel.string = "Vender: " + director.root.device.vendor;
          this.drawcallscLabel.string = "DrawCalls: " + director.root.device.numDrawCalls;
          this.frameTimeLabel.string = "FrameTime: " + (director.root.frameTime * 1000).toFixed(2) + " ms";
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fpsLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "drawcallscLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "frameTimeLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "venderLabel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bb6a40f2a23312f1c4aed55ae9fdd049b5aec6b5.js.map