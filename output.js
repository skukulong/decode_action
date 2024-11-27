//Wed Nov 27 2024 06:46:38 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
/*
口令转链接
10 10 10 10 * jd_code2url.js
nolan服务接口
 */

const $ = new Env("\u53E3\u4EE4\u8F6C\u94FE\u63A5");
var _0xod9 = "jsjiami.com.v7";
const _0x525db6 = _0x5f43;
function _0x5f43(_0xfd7a9d, _0x4518a4) {
  const _0xeb2435 = _0x411d();
  return _0x5f43 = function (_0x573fd8, _0x2382f2) {
    _0x573fd8 = _0x573fd8 - 474;
    let _0x411d94 = _0xeb2435[_0x573fd8];
    if (_0x5f43["xeQFQv"] === undefined) {
      var _0x5f430f = function (_0x10e92a) {
        const _0x18229e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        let _0x5b113e = "",
          _0x4fa97d = "",
          _0x58716c = _0x5b113e + _0x5f430f;
        for (let _0x30c392 = 0, _0xafbf68, _0x40f4ca, _0x2578dd = 0; _0x40f4ca = _0x10e92a["charAt"](_0x2578dd++); ~_0x40f4ca && (_0xafbf68 = _0x30c392 % 4 ? _0xafbf68 * 64 + _0x40f4ca : _0x40f4ca, _0x30c392++ % 4) ? _0x5b113e += _0x58716c["charCodeAt"](_0x2578dd + 10) - 10 !== 0 ? String["fromCharCode"](255 & _0xafbf68 >> (-2 * _0x30c392 & 6)) : _0x30c392 : 0) {
          _0x40f4ca = _0x18229e["indexOf"](_0x40f4ca);
        }
        for (let _0x2742d0 = 0, _0x53683a = _0x5b113e["length"]; _0x2742d0 < _0x53683a; _0x2742d0++) {
          _0x4fa97d += "%" + ("00" + _0x5b113e["charCodeAt"](_0x2742d0)["toString"](16))["slice"](-2);
        }
        return decodeURIComponent(_0x4fa97d);
      };
      const _0x273c5e = function (_0x13455d, _0x6eda5) {
        let _0x57c475 = [],
          _0x5ea107 = 0,
          _0x49c345,
          _0x190527 = "";
        _0x13455d = _0x5f430f(_0x13455d);
        let _0x277a88;
        for (_0x277a88 = 0; _0x277a88 < 256; _0x277a88++) {
          _0x57c475[_0x277a88] = _0x277a88;
        }
        for (_0x277a88 = 0; _0x277a88 < 256; _0x277a88++) {
          _0x5ea107 = (_0x5ea107 + _0x57c475[_0x277a88] + _0x6eda5["charCodeAt"](_0x277a88 % _0x6eda5["length"])) % 256, _0x49c345 = _0x57c475[_0x277a88], _0x57c475[_0x277a88] = _0x57c475[_0x5ea107], _0x57c475[_0x5ea107] = _0x49c345;
        }
        _0x277a88 = 0, _0x5ea107 = 0;
        for (let _0x4d9a07 = 0; _0x4d9a07 < _0x13455d["length"]; _0x4d9a07++) {
          _0x277a88 = (_0x277a88 + 1) % 256, _0x5ea107 = (_0x5ea107 + _0x57c475[_0x277a88]) % 256, _0x49c345 = _0x57c475[_0x277a88], _0x57c475[_0x277a88] = _0x57c475[_0x5ea107], _0x57c475[_0x5ea107] = _0x49c345, _0x190527 += String["fromCharCode"](_0x13455d["charCodeAt"](_0x4d9a07) ^ _0x57c475[(_0x57c475[_0x277a88] + _0x57c475[_0x5ea107]) % 256]);
        }
        return _0x190527;
      };
      _0x5f43["CcQWoB"] = _0x273c5e, _0xfd7a9d = arguments, _0x5f43["xeQFQv"] = !![];
    }
    const _0x8ce639 = _0xeb2435[0],
      _0x52c2d5 = _0x573fd8 + _0x8ce639,
      _0x40ee07 = _0xfd7a9d[_0x52c2d5];
    if (!_0x40ee07) {
      if (_0x5f43["fgxWzQ"] === undefined) {
        const _0x1c0baa = function (_0x1b16f5) {
          this["laIEfr"] = _0x1b16f5, this["AAVLNw"] = [1, 0, 0], this["SfpkAK"] = function () {
            return "newState";
          }, this["AyXCSs"] = "\\w+ *\\(\\) *{\\w+ *", this["zxZxjw"] = "['|\"].+['|\"];? *}";
        };
        _0x1c0baa["prototype"]["GYZoCO"] = function () {
          const _0x292121 = new RegExp(this["AyXCSs"] + this["zxZxjw"]),
            _0x11ef02 = _0x292121["test"](this["SfpkAK"]["toString"]()) ? --this["AAVLNw"][1] : --this["AAVLNw"][0];
          return this["tQKCXU"](_0x11ef02);
        }, _0x1c0baa["prototype"]["tQKCXU"] = function (_0x3e02bf) {
          if (!Boolean(~_0x3e02bf)) return _0x3e02bf;
          return this["cUzZYJ"](this["laIEfr"]);
        }, _0x1c0baa["prototype"]["cUzZYJ"] = function (_0x34c4e1) {
          for (let _0x550d13 = 0, _0x54d269 = this["AAVLNw"]["length"]; _0x550d13 < _0x54d269; _0x550d13++) {
            this["AAVLNw"]["push"](Math["round"](Math["random"]())), _0x54d269 = this["AAVLNw"]["length"];
          }
          return _0x34c4e1(this["AAVLNw"][0]);
        }, new _0x1c0baa(_0x5f43)["GYZoCO"](), _0x5f43["fgxWzQ"] = !![];
      }
      _0x411d94 = _0x5f43["CcQWoB"](_0x411d94, _0x2382f2), _0xfd7a9d[_0x52c2d5] = _0x411d94;
    } else _0x411d94 = _0x40ee07;
    return _0x411d94;
  }, _0x5f43(_0xfd7a9d, _0x4518a4);
}
function _0x411d() {
  const _0x3e70e7 = function () {
    return [...[_0xod9, "uIjLNspwjPgiyUaJkmCiw.FcNWoJmTQ.xPDvRqB7==", "WO3cTL/dPc7cIqXs", "W6KZpmoepG", "WQBdNmoiCCkfW5VcJG3dTCob", "kCkYBmod", "WRP7W7LXWOS", "qHtLPQFOT51pW4xLJ4/LMiOQWQa", "xahcO8k3kCkshSkSwG", "W67cHCoUWPaJ", "phBdISo8", "CSkUDSkRwW", "W6NdSmkHW7OJlmkEWQu8cfZdVa", "WOPBs8kHCG", "iqSUxCoS", "p8o0u3JcJ8o4kCoY", "cmk2xrddGa", "yCkQBWRdOa", "W6j3ywXb", "wSkKWQBcImoX", "e8knEfa", "oCkYuCosWQT6W6OL", "vYiOdNeQlCkFArvXWPS", "WQRdM8ksW77dImksW68W", "cIm7uge", "W6z9qfS", "W7v/W74", "v3hcLwfFW6X4WOldIbT4b8kCWQ3dICoIWQ4tus8skmoFnSobgmosWPFcOmkEWRKYoW", "xqK6mmksWPT6WORcGW", "WR7cUmoKWQz7F8ksWOGHf1tcOur9a27cUCoNlelcMCoLWQ83nqD3W7VdV8ktoCkuW7u", "xcKv", "WORcVmoYW7i", "W5FdImoPWR5V", "WOfMxSkW", "WP8zW4RcOmoiAf1hWOqUW4i3nMiSo8orfsSbWQZdRdVdKSoOvCkVyHdcMNm4WQ0MDXHZWOtcHHHrqNOLWQJcJmkOoHb4W7xdQgukW4FdQbqMAW", "s8kXWRVcKCoC", "w03dNCkqaCkup8koqCoQWQZdUh0AkCkW", "axnVxG", "aCkWxLrZ", "WQ1mAq", "zbuHWP/dO8kViW", "W4rFwZ3dSW", "gSo1sNBcNa", "WOlcTKFcIJZcQbVcOsORtmoIWQXuWRm1", "t8oVW6/dNuiaatK", "W4qrBmklbmkHyr4", "ddSvruS", "W6mOgCoP", "lI88q8oW", "rMdcL35t", "WR9qicRdMG", "W7rWW6L/", "W4FdNMXkWPe", "chy7W48uFddcQW", "ery6ufO", "W4tdMKTTWRa", "5yMJ5lQ56icE77YL", "WRX4lmoUb23cIIG", "W5RcS2a", "W4hdICo2W6u", "sCkFW7TmWRu", "WR5XdW", "W4b6W75TWPK", "W7XrxejtWQVdJ30DAthcOW", "i8k8B8od", "Emo9W7NdIJPv"], ...function () {
      return [...["W4mNW7ddPmk5lmkSWPq", "WPfhFa", "WQj4W4LdWOaq", "W7VcRSoz", "WRxdLmokASkf", "CazQW4K", "kCk6s8otWPe", "CqL9", "w8ozW6pdU3q", "cYy4CCkrvW", "WPKmW6FcGSo9", "tmkFEc7dRwNdGmkzW6mLzSo6WQtdJZzj", "W69wy2HU", "dZuOCG", "W7v9v0O", "W4JdQutdQrVcLdjd", "W63cIx7cVWC", "xCk9WQdcQ8oe", "WQqNbMbrWQtdOLm2", "WRZcHLG4buZcPW", "yrKlWOhdTq", "dJhdNtWcWRDTWRhdOcrKBW", "WP0yW5pcOmoUib4", "WROY5Asc6lskn8oZ5yYZ5zU1rIC", "d8ofWOTxwG", "kmkZyCouWQbJW7a", "mCkSW6q+", "aYO8E3q", "FddcG33dM8k1", "WRSWWPBcGCoe", "b8oVW5/dRSkyhSkVgmkusCoEWOK", "tSkqEHJdO2vEgmkpW6S", "W749bSoLkghcLY19", "zWj/W5OYW7m", "mcvnmuO", "a8koW54CdW", "umkZuSkEzW", "A8k2W7u", "WR/cGvu", "W50plq", "WRr/WOnLWPW", "WR9/hcJdVW", "W647dCo8mMNdKYf3", "W63dV8kHW70KD8k1WPC5kL8", "WOHOtSk0", "qmk8W7THWRu", "W4pcMMhdPIu", "pg3dTmkCpq", "iCkmvK9J", "WP17W7pdJSktlmkf", "WQ5PW6VdRCkS", "q8kOWPa", "6zcW5O6Y7760", "W6GNfW", "W4lcJmk3W4VdRq", "WPLMuCknvG", "W5uUnCoOjW", "WQJcPCohWOfw", "poISJUIUK+E/SUMEJEINM+INUEACMoEASowpLEs4JU+8GgfextS6", "W53dRSoBWQTi", "kmo6qK7cRG", "WQxdTmklW69PW7DvWOarnCo1W48", "c8okWOvbCa", "5lUm6Ao1776K", "WQqoW6NcVmor", "WQNdMSoF"], ...function () {
        return ["jCoNWQL3tmk3W7C", "cM/dN8kTWOO", "iCoUnCo2fX4rW5L+WQypvW", "raGwWPJdRa", "W5qUgCoaja", "smkxAq", "mCoaW7dcUmo5WPBdVw/cUSoBg8oHv1HnWP0", "W5tcIKxdRqG", "hmknEW", "zazSW5S0", "W77cSmohWOeP", "W6tcPmoFWQu4WQy", "mJvDjea", "c3bwWPPJFalcO0jetG", "FddcGW", "WRpcP8oZ", "W5azg0an", "WOhcGW1nWQWVyCkJWOi", "W6aom8o9ia", "atuIzhNcPcldQCkozMq", "WQq6WOZcHSovWPZdVG3cU8oVW59lb8k/WPmHvKf2W4xdN2vUq8okWOPxW4ldOSoeWQC+BJpdRdqecsSEcNRdG8ocnun3pfdcO8oxn8kAxbjNW4u", "W7/cISkUW6y", "ztZcTxddQW", "W6VcPmkGW47dHW", "WPddGCoEiq", "vYSUdNCLECoGsbDhWOWcWPm", "W7pdH8o5WQ00WOCqWRLtW6eNobbXpCkgW50", "ySkBW751WPi", "yaHnW5WJW7jeWRC", "sZ00W4yI", "WPTUW7FdGmkf", "WQ5Zta5EAIObqmkPdmke", "WPVdJLBcPZ/cG13cNa4wimopWPbYWOnOWPj0WP5/", "h8omp0JcTc5KlCkLW7ZcMtK", "WP7cRfKbla", "W5qIeLW4", "xHW6kSkz", "aYSOyw8", "frDgh20", "DqfTW7iY", "cLFdVCkCWRe", "peRdOmkjWO4", "FSowW4/dSa", "BmoNW4/cOCob", "bCkMW7mSBa", "C8oCW43dMmky", "W4zDWOZcNmockcm/WOO", "h8oap0hcTs8ArCkHW7VcUYFcG8ob", "rSkyx8oVW6G", "a8olWOK", "DG8qW5K8", "waZcO8oix8ovpCkZzmoWWR/dGG", "WRFdI0S", "ps4/Emoc", "vsGe", "WR1VoWtdUW", "uqHiW68R", "W79OW5PWW60", "W6nHvL1yWRldGxa", "WOP/W6m", "Emo4W5G", "W48rkCo3DmoZubbiWR8nW7m", "tcSkkmkB", "WO3dKqJdO2xdMf3cSIaOFCoS", "W5FdV8ot"];
      }()];
    }()];
  }();
  _0x411d = function () {
    return _0x3e70e7;
  };
  return _0x411d();
}
;
(function (_0x333c99, _0x5db90d, _0x164e4c, _0x36ad09, _0x11e89f, _0x2ce63e, _0xe4401d) {
  return _0x333c99 = _0x333c99 >> 3, _0x2ce63e = "hs", _0xe4401d = "hs", function (_0x2bf4f1, _0x4205ef, _0x98ef5a, _0x2fb506, _0x54eb15) {
    const _0x80d800 = _0x5f43;
    _0x2fb506 = "tfi", _0x2ce63e = _0x2fb506 + _0x2ce63e, _0x54eb15 = "up", _0xe4401d += _0x54eb15, _0x2ce63e = _0x98ef5a(_0x2ce63e), _0xe4401d = _0x98ef5a(_0xe4401d), _0x98ef5a = 0;
    const _0x27fb6a = _0x2bf4f1();
    while (!![] && --_0x36ad09 + _0x4205ef) {
      try {
        _0x2fb506 = -parseInt(_0x80d800(485, "1wv[")) / 1 + parseInt(_0x80d800(616, "wTbg")) / 2 * (parseInt(_0x80d800(615, "9)oB")) / 3) + parseInt(_0x80d800(507, "SCSu")) / 4 * (-parseInt(_0x80d800(601, "2LQK")) / 5) + parseInt(_0x80d800(576, "((S4")) / 6 * (-parseInt(_0x80d800(563, "P6NL")) / 7) + -parseInt(_0x80d800(561, "kjul")) / 8 * (parseInt(_0x80d800(659, "DVj7")) / 9) + -parseInt(_0x80d800(581, "2LQK")) / 10 * (-parseInt(_0x80d800(646, "Vr7A")) / 11) + parseInt(_0x80d800(577, "P6NL")) / 12;
      } catch (_0xc8f702) {
        _0x2fb506 = _0x98ef5a;
      } finally {
        _0x54eb15 = _0x27fb6a[_0x2ce63e]();
        if (_0x333c99 <= _0x36ad09) _0x98ef5a ? _0x11e89f ? _0x2fb506 = _0x54eb15 : _0x11e89f = _0x54eb15 : _0x98ef5a = _0x54eb15;else {
          if (_0x98ef5a == _0x11e89f["replace"](/[xuULJQFDNwTkBWRIypgqCP=]/g, "")) {
            if (_0x2fb506 === _0x4205ef) {
              _0x27fb6a["un" + _0x2ce63e](_0x54eb15);
              break;
            }
            _0x27fb6a[_0xe4401d](_0x54eb15);
          }
        }
      }
    }
  }(_0x164e4c, _0x5db90d, function (_0x19e8c5, _0x435971, _0x33239f, _0x11b640, _0x4548f9, _0x21862f, _0x2f6842) {
    return _0x435971 = "split", _0x19e8c5 = arguments[0], _0x19e8c5 = _0x19e8c5[_0x435971](""), _0x33239f = `\x72\x65\x76\x65\x72\x73\x65`, _0x19e8c5 = _0x19e8c5[_0x33239f]("v"), _0x11b640 = `\x6a\x6f\x69\x6e`, 1526033, _0x19e8c5[_0x11b640]("");
  });
}(1608, 683412, _0x411d, 203), _0x411d) && (_0xod9 = `\xdc1`);
const _0xeecbd3 = function () {
    const _0x2ad506 = _0x5f43,
      _0x2e2660 = {
        "tlWwy": _0x2ad506(475, "Hwpv"),
        "EoVGz": _0x2ad506(536, "4FZj"),
        "iqyVr": function (_0x7216ef, _0x177719) {
          return _0x7216ef !== _0x177719;
        },
        "QnJza": _0x2ad506(665, "z&#5"),
        "Cuycw": function (_0x8b0a2a, _0xf1c564) {
          return _0x8b0a2a === _0xf1c564;
        },
        "XgAda": _0x2ad506(480, "JK1@"),
        "GGmxS": _0x2ad506(628, "u0UO")
      };
    let _0x46e7d3 = !![];
    return function (_0x463911, _0x26d622) {
      const _0x431f2a = _0x46e7d3 ? function () {
        const _0x537503 = _0x5f43,
          _0x55449f = {
            "uokXG": _0x2e2660[_0x537503(599, "PE(k")],
            "TwlAP": _0x2e2660[_0x537503(586, "q@2$")]
          };
        if (_0x2e2660[_0x537503(540, "^KcW")](_0x2e2660[_0x537503(635, "[@Ef")], _0x2e2660[_0x537503(512, "8J4B")])) {
          const _0x1c82f1 = _0x138e87[_0x537503(632, "8(o8")][_0x537503(530, "DE)Y")](_0x23be2a, _0x2aa2a9[_0x537503(535, "P6NL")][_0x537503(652, "KX%K")][_0x537503(493, "Kpk*")](_0x55449f[_0x537503(519, "8(o8")]), {
            "iv": _0x5a5524[_0x537503(619, "sw6U")][_0x537503(624, "SCSu")][_0x537503(663, "$ijC")](_0x55449f[_0x537503(514, "DVj7")]),
            "mode": _0x5905bc[_0x537503(477, "%1V]")][_0x537503(594, "KX%K")],
            "padding": _0x33ce68[_0x537503(589, "DVj7")][_0x537503(574, "dnEH")]
          });
          return _0x1c82f1[_0x537503(597, "$ijC")][_0x537503(614, "z&#5")](_0x48525d[_0x537503(517, "^GTY")][_0x537503(658, "1S(E")]);
        } else {
          if (_0x26d622) {
            if (_0x2e2660[_0x537503(625, "KX%K")](_0x2e2660[_0x537503(520, "^GTY")], _0x2e2660[_0x537503(653, "1[eM")])) {
              const _0x332d10 = _0x2578dd ? function () {
                const _0x1576fc = _0x537503;
                if (_0x5ea107) {
                  const _0x25644f = _0x4d9a07[_0x1576fc(491, "%1V]")](_0x1c0baa, arguments);
                  return _0x1b16f5 = null, _0x25644f;
                }
              } : function () {};
              return _0x57c475 = ![], _0x332d10;
            } else {
              const _0xa4cf4 = _0x26d622[_0x537503(604, "%guY")](_0x463911, arguments);
              return _0x26d622 = null, _0xa4cf4;
            }
          }
        }
      } : function () {};
      return _0x46e7d3 = ![], _0x431f2a;
    };
  }(),
  _0x581a2b = _0xeecbd3(this, function () {
    const _0x50462f = _0x5f43,
      _0x5da7e6 = {
        "YgmLb": _0x50462f(494, "u0UO")
      };
    return _0x581a2b[_0x50462f(558, "q@2$")]()[_0x50462f(497, "q@2$")](_0x5da7e6[_0x50462f(518, "wTbg")])[_0x50462f(608, "[@Ef")]()[_0x50462f(549, "%1V]")](_0x581a2b)[_0x50462f(541, "^KcW")](_0x5da7e6[_0x50462f(534, "^GTY")]);
  });
_0x581a2b();
const _0x5ce928 = require(_0x525db6(562, "JK1@")),
  _0x149fbc = require(_0x525db6(506, "^GTY"));
let _0x681c8f = process[_0x525db6(623, "Vr7A")][_0x525db6(526, "DE)Y")] || "";
!(async () => {
  const _0x10d81f = _0x525db6,
    _0x1f2b01 = {
      "yDPGx": _0x10d81f(522, "(ZDw"),
      "ISKvP": function (_0x551170, _0x5cb3b8) {
        return _0x551170(_0x5cb3b8);
      },
      "NdmUS": function (_0x2e0a1d, _0xf1ffa) {
        return _0x2e0a1d !== _0xf1ffa;
      },
      "ucQHB": _0x10d81f(575, "jWaT")
    };
  if (_0x681c8f) {
    let _0x43eb5f = _0x681c8f[_0x10d81f(505, "fwHW")](/[@￥%#!！&$]([a-zA-Z0-9]+)[@￥%#!！&$]/);
    _0x43eb5f && (await _0x1f2b01[_0x10d81f(523, "KX%K")](_0x31648e, _0x43eb5f[0]));
  } else _0x1f2b01[_0x10d81f(509, "1[eM")](_0x1f2b01[_0x10d81f(612, "u0UO")], _0x1f2b01[_0x10d81f(552, "xI&U")]) ? _0xb95808[_0x10d81f(529, "$ijC")](_0x1f2b01[_0x10d81f(476, "W*5z")]) : console[_0x10d81f(545, "SCSu")](_0x1f2b01[_0x10d81f(602, "^KcW")]);
})()[_0x525db6(542, "tyxO")](_0x2d4d75 => {
  const _0x4873cd = _0x525db6;
  $[_0x4873cd(584, "Vr7A")]("", "\u274C " + $[_0x4873cd(657, "z&#5")] + _0x4873cd(487, "W*5z") + _0x2d4d75 + "!", "");
})[_0x525db6(483, "yIQ^")](() => {
  const _0x27789d = _0x525db6;
  $[_0x27789d(598, "z&#5")]();
});
async function _0x31648e(_0x2e150f) {
  const _0x3c5592 = _0x525db6,
    _0x2def42 = {
      "fRqtc": function (_0x18891e, _0x1a7719) {
        return _0x18891e === _0x1a7719;
      },
      "OLARo": _0x3c5592(647, "%1V]"),
      "dzHHx": _0x3c5592(531, "ZEVX"),
      "aqdvb": function (_0x417c69, _0x108c9d) {
        return _0x417c69 == _0x108c9d;
      },
      "naYRF": function (_0x171e74, _0x1ea874) {
        return _0x171e74 + _0x1ea874;
      },
      "wmSKD": _0x3c5592(527, "((S4"),
      "bVBqg": _0x3c5592(649, "9)oB"),
      "rzWkw": function (_0x137980, _0x41dce1) {
        return _0x137980 + _0x41dce1;
      },
      "DCoXE": _0x3c5592(516, "PE(k"),
      "HhlfS": function (_0x21fe26, _0x220ccf) {
        return _0x21fe26 !== _0x220ccf;
      },
      "qRBaq": _0x3c5592(571, "ZEVX"),
      "ScWlj": _0x3c5592(667, "1S(E"),
      "pOzIH": function (_0x127dcf) {
        return _0x127dcf();
      },
      "cUQXo": function (_0x596992, _0x24d1ba) {
        return _0x596992 + _0x24d1ba;
      },
      "mGGqf": function (_0x218922, _0x3fe844) {
        return _0x218922 !== _0x3fe844;
      },
      "qPnVB": _0x3c5592(617, "%1V]"),
      "MajjQ": _0x3c5592(499, "dnEH"),
      "LSezf": function (_0x5190aa, _0x192d64) {
        return _0x5190aa(_0x192d64);
      },
      "RYbdS": _0x3c5592(572, "jWaT"),
      "OHsti": _0x3c5592(656, "W*5z"),
      "ghwWW": _0x3c5592(620, "1wv["),
      "CmTYE": _0x3c5592(556, "KX%K"),
      "lChAt": _0x3c5592(504, "PE(k"),
      "afsZc": _0x3c5592(622, "SCSu"),
      "mNHaM": _0x3c5592(550, "Kpk*")
    };
  _0x2e150f = _0x2def42[_0x3c5592(546, "kjul")](_0x188d27, _0x2e150f);
  let _0x90e0dd = {
      "aliveMin": 21,
      "appCode": _0x2def42[_0x3c5592(511, "2LQK")],
      "commandType": 0,
      "text": _0x2def42[_0x3c5592(610, "P6NL")](encodeURIComponent, _0x2e150f)
    },
    _0x3510a2 = await _0x5ce928[_0x3c5592(513, "DVj7")](_0x2def42[_0x3c5592(580, "Vr7A")], _0x90e0dd),
    _0x201d56 = {
      "url": _0x3c5592(627, "((S4") + _0x3510a2,
      "headers": {
        "Accept": _0x2def42[_0x3c5592(641, "#Ksj")],
        "Accept-Encoding": _0x2def42[_0x3c5592(500, "%guY")],
        "Accept-Language": _0x2def42[_0x3c5592(557, "1[eM")],
        "Content-Type": _0x2def42[_0x3c5592(569, "q@2$")],
        "User-Agent": _0x2def42[_0x3c5592(643, "fwHW")]
      }
    };
  return new Promise(async _0x2e0b8d => {
    const _0x896dea = _0x3c5592,
      _0x3d083c = {
        "teRCW": function (_0x26060c, _0x54d049) {
          const _0x1890f7 = _0x5f43;
          return _0x2def42[_0x1890f7(567, "%1V]")](_0x26060c, _0x54d049);
        },
        "oyGnC": function (_0xa24875, _0xe5999f) {
          const _0x152f82 = _0x5f43;
          return _0x2def42[_0x152f82(481, "u0UO")](_0xa24875, _0xe5999f);
        },
        "caBBS": _0x2def42[_0x896dea(521, "SCSu")],
        "hLeIK": _0x2def42[_0x896dea(537, "K4DJ")],
        "uFfzJ": function (_0x3e3420, _0x2a3ab8) {
          const _0x3c8125 = _0x896dea;
          return _0x2def42[_0x3c8125(570, "ZEVX")](_0x3e3420, _0x2a3ab8);
        },
        "oqSOl": _0x2def42[_0x896dea(568, "tyxO")]
      };
    if (_0x2def42[_0x896dea(548, "^GTY")](_0x2def42[_0x896dea(609, "Hwpv")], _0x2def42[_0x896dea(634, "1bHE")])) $[_0x896dea(618, "W*5z")](_0x201d56, (_0x3c5fdf, _0x1c3d14, _0x508afc) => {
      const _0x4162d7 = _0x896dea;
      try {
        _0x2def42[_0x4162d7(606, "8(o8")](_0x2def42[_0x4162d7(488, "DE)Y")], _0x2def42[_0x4162d7(596, "^GTY")]) ? (_0x4499c9 = _0x56b78b[_0x4162d7(578, "(ZDw")](_0x4e7784), _0x3d083c[_0x4162d7(611, "W*5z")](_0xf9e4ae[_0x4162d7(478, "W*5z")], 0) ? (_0x372e08[_0x4162d7(660, "VLN[")](""), _0x4cda5[_0x4162d7(582, "Higp")](_0x3d083c[_0x4162d7(484, "Ivik")](_0x3d083c[_0x4162d7(524, "[@Ef")], _0x5aabf6[_0x4162d7(644, "sw6U")][_0x4162d7(648, "jUY2")])), _0x61638d[_0x4162d7(662, "^KcW")](_0x3d083c[_0x4162d7(587, "sw6U")](_0x3d083c[_0x4162d7(607, "#Ksj")], _0x1dbd74[_0x4162d7(664, "q@2$")][_0x4162d7(588, "W*5z")])), _0xe541eb[_0x4162d7(544, "xI&U")](_0x3d083c[_0x4162d7(510, "K4DJ")](_0x3d083c[_0x4162d7(585, "fwHW")], _0x363a16[_0x4162d7(508, "8(o8")][_0x4162d7(633, "Ivik")]))) : _0x361954[_0x4162d7(662, "^KcW")](_0x547632[_0x4162d7(496, "^GTY")](_0x202c5c))) : _0x3c5fdf ? $[_0x4162d7(661, "PE(k")](_0x3c5fdf) : (_0x508afc = JSON[_0x4162d7(642, "1wv[")](_0x508afc), _0x2def42[_0x4162d7(498, "tyxO")](_0x508afc[_0x4162d7(613, "8J4B")], 0) ? (console[_0x4162d7(538, "8J4B")](""), console[_0x4162d7(590, "jWaT")](_0x2def42[_0x4162d7(474, "((S4")](_0x2def42[_0x4162d7(645, "jUY2")], _0x508afc[_0x4162d7(630, "9)oB")][_0x4162d7(583, "#Ksj")])), console[_0x4162d7(651, "K4DJ")](_0x2def42[_0x4162d7(639, "%1V]")](_0x2def42[_0x4162d7(592, "yV[e")], _0x508afc[_0x4162d7(551, "wTbg")][_0x4162d7(637, "1S(E")])), console[_0x4162d7(538, "8J4B")](_0x2def42[_0x4162d7(559, "Vr7A")](_0x2def42[_0x4162d7(564, "yIQ^")], _0x508afc[_0x4162d7(490, "dnEH")][_0x4162d7(486, "((S4")]))) : console[_0x4162d7(654, "fwHW")](JSON[_0x4162d7(621, "yV[e")](_0x508afc)));
      } catch (_0x1a2c73) {
        $[_0x4162d7(492, "xI&U")](_0x1a2c73);
      } finally {
        _0x2def42[_0x4162d7(565, "kjul")](_0x2def42[_0x4162d7(631, "8J4B")], _0x2def42[_0x4162d7(528, "((S4")]) ? _0x2def42[_0x4162d7(553, "wTbg")](_0x2e0b8d) : _0x23158a[_0x4162d7(515, "u0UO")]("", "\u274C " + _0x2c2cd0[_0x4162d7(640, "^GTY")] + _0x4162d7(600, "2LQK") + _0x661d8 + "!", "");
      }
    });else {
      const _0x3c711c = _0x13827e[_0x896dea(560, "DVj7")](_0x143d3c, arguments);
      return _0x217965 = null, _0x3c711c;
    }
  });
}
function _0x188d27(_0x210a5a) {
  const _0x3ee19b = _0x525db6,
    _0x32af06 = {
      "jpHAU": _0x3ee19b(629, "2LQK"),
      "JhZwZ": _0x3ee19b(636, "JK1@")
    },
    _0x544aa3 = _0x149fbc[_0x3ee19b(503, "kjul")][_0x3ee19b(489, "z&#5")](_0x210a5a, _0x149fbc[_0x3ee19b(501, "1[eM")][_0x3ee19b(603, "ZEVX")][_0x3ee19b(539, "q@2$")](_0x32af06[_0x3ee19b(573, "4FZj")]), {
      "iv": _0x149fbc[_0x3ee19b(502, "yIQ^")][_0x3ee19b(554, "$ijC")][_0x3ee19b(566, "yV[e")](_0x32af06[_0x3ee19b(533, "Ivik")]),
      "mode": _0x149fbc[_0x3ee19b(626, "8(o8")][_0x3ee19b(579, "DE)Y")],
      "padding": _0x149fbc[_0x3ee19b(589, "DVj7")][_0x3ee19b(655, "sw6U")]
    });
  return _0x544aa3[_0x3ee19b(495, "P6NL")][_0x3ee19b(595, "9MbO")](_0x149fbc[_0x3ee19b(666, "q@2$")][_0x3ee19b(668, "#Ksj")]);
}
var version_ = "jsjiami.com.v7";
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t));else if (this.isNode()) {
        this.initGotEnv(t);
        const {
          url: s,
          ...i
        } = t;
        this.got.post(s, i).then(t => {
          const {
            statusCode: s,
            statusCode: i,
            headers: r,
            body: o
          } = t;
          e(null, {
            status: s,
            statusCode: i,
            headers: r,
            body: o
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) return t;
        if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
          "open-url": t
        } : this.isSurge() ? {
          url: t
        } : void 0;
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============\uD83D\uDCE3\u7CFB\u7EDF\u901A\u77E5\uD83D\uDCE3=============="];
        t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}