/**
 * @name  pxxjs
 * @description  娱乐一下 测试效果
 * @author  pxx917144686 <> (http://localhost:4000)
 * @version  0.0.2
 * @copyright  pxx917144686 2017
 * @license  MIT
 */

/* globals EvalDecode, ArrayDecode, _NumberDecode, JSFuckDecode, ObfuscatorIO, CleanSource, AADecode, JJdecode, Urlencoded, P_A_C_K_E_R, JavascriptObfuscator, MyObfuscate, Wise_EvalDecode, Wise_FunctionalDecode */
/* eslint-disable no-console */

self.addEventListener('message', (e) => {
  self.importScripts('/pxxjs/third_party/mathjs/math.min.js');
  self.importScripts('/pxxjs/lib/utils.js');

  let source = e.data.source;
  const packer = e.data.packer;
  const options = e.data.options;

  const methods = {
    evalencode: () => {
      self.importScripts('/pxxjs/lib/evaldecode.js');
      return EvalDecode(source);
    },
    _numberencode: () => {
      self.importScripts('/pxxjs/lib/numberdecode.js');
      return _NumberDecode(source);
    },
    arrayencode: () => {
      self.importScripts('/pxxjs/lib/arraydecode.js');
      return ArrayDecode(source, options);
    },
    jsfuck: () => {
      self.importScripts('/pxxjs/lib/jsfuckdecode.js');
      return JSFuckDecode(source);
    },
    obfuscatorio: () => {
      self.importScripts('/pxxjs/lib/obfuscatorio.js');
      return ObfuscatorIO(source, options);
    },
    cleansource: () => {
      self.importScripts('/pxxjs/lib/cleansource.js');
      return CleanSource(source, options);
    },
    aaencode: () => {
      self.importScripts('/pxxjs/third_party/cat-in-136/aadecode.js');
      return AADecode.decode(source);
    },
    jjencode: () => {
      self.importScripts('/pxxjs/third_party/decoder-jjencode/jjdecode.js');
      return JJdecode.decode(source);
    },
    urlencode: () => {
      self.importScripts('/pxxjs/third_party/js-beautify/unpackers/urlencode_unpacker.js');
      if (Urlencoded.detect(source)) return Urlencoded.unpack(source);
      throw 'Not matched';
    },
    p_a_c_k_e_r: () => {
      self.importScripts('/pxxjs/third_party/js-beautify/unpackers/p_a_c_k_e_r_unpacker.js');
      if (P_A_C_K_E_R.detect(source)) return P_A_C_K_E_R.unpack(source);
      throw 'Not matched';
    },
    javascriptobfuscator: () => {
      self.importScripts('/pxxjs/third_party/js-beautify/unpackers/javascriptobfuscator_unpacker.js');
      if (JavascriptObfuscator.detect(source)) return JavascriptObfuscator.unpack(source);
      throw 'Not matched';
    },
    myobfuscate: () => {
      self.importScripts('/pxxjs/third_party/js-beautify/unpackers/myobfuscate_unpacker.js');
      if (MyObfuscate.detect(source)) return MyObfuscate.unpack(source);
      throw 'Not matched';
    },
    wiseeval: () => {
      self.importScripts('/pxxjs/third_party/NotSoWise/unpacker.js');
      return Wise_EvalDecode(source);
    },
    wisefunction: () => {
      self.importScripts('/pxxjs/third_party/NotSoWise/unpacker.js');
      return Wise_FunctionalDecode(source);
    },
  };

  try {
    source = methods[packer]();
  } catch (err) {
    throw new Error(err);
  }

  self.postMessage(source);
});
