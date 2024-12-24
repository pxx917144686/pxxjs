/**
 * @name  {{ site.name }}
 * @description  {{ site.description }}
 * @author  {{ site.author }} <{{ site.author_email }}> ({{ site.url }})
 * @version  {{ site.version }}
 * @copyright  {{ site.author }} 2017
 * @license  {{ site.license }}
 */

/* globals EvalDecode, ArrayDecode, _NumberDecode, JSFuckDecode, ObfuscatorIO, CleanSource, AADecode, JJdecode, Urlencoded, P_A_C_K_E_R, JavascriptObfuscator, MyObfuscate, Wise_EvalDecode, Wise_FunctionalDecode */
/* eslint-disable no-console */

self.addEventListener('message', (e) => {
  // 假设模板已经正确解析或替换
  self.importScripts('third_party/mathjs/math.min.js');  // 修正后的路径
  self.importScripts('lib/utils.js');  // 修正后的路径

  let source = e.data.source;
  const packer = e.data.packer;
  const options = e.data.options;

  const methods = {
    evalencode: () => {
      self.importScripts('lib/evaldecode.js');  // 修正后的路径
      return EvalDecode(source);
    },
    _numberencode: () => {
      self.importScripts('lib/numberdecode.js');  // 修正后的路径
      return _NumberDecode(source);
    },
    arrayencode: () => {
      self.importScripts('lib/arraydecode.js');  // 修正后的路径
      return ArrayDecode(source, options);
    },
    jsfuck: () => {
      self.importScripts('lib/jsfuckdecode.js');  // 修正后的路径
      return JSFuckDecode(source);
    },
    obfuscatorio: () => {
      self.importScripts('lib/obfuscatorio.js');  // 修正后的路径
      return ObfuscatorIO(source, options);
    },
    cleansource: () => {
      self.importScripts('lib/cleansource.js');  // 修正后的路径
      return CleanSource(source, options);
    },
    aaencode: () => {
      self.importScripts('third_party/cat-in-136/aadecode.js');  // 修正后的路径
      return AADecode.decode(source);
    },
    jjencode: () => {
      self.importScripts('lib/jjdecode.js');  // 修改为正确的路径
      return JJdecode.decode(source);  // 调用解码函数
    },
    urlencode: () => {
      self.importScripts('third_party/js-beautify/unpackers/urlencode_unpacker.js');  // 修正后的路径
      if (Urlencoded.detect(source)) return Urlencoded.unpack(source);
      throw 'Not matched';
    },
    p_a_c_k_e_r: () => {
      self.importScripts('third_party/js-beautify/unpackers/p_a_c_k_e_r_unpacker.js');  // 修正后的路径
      if (P_A_C_K_E_R.detect(source)) return P_A_C_K_E_R.unpack(source);
      throw 'Not matched';
    },
    javascriptobfuscator: () => {
      self.importScripts('third_party/js-beautify/unpackers/javascriptobfuscator_unpacker.js');  // 修正后的路径
      if (JavascriptObfuscator.detect(source)) return JavascriptObfuscator.unpack(source);
      throw 'Not matched';
    },
    myobfuscate: () => {
      self.importScripts('third_party/js-beautify/unpackers/myobfuscate_unpacker.js');  // 修正后的路径
      if (MyObfuscate.detect(source)) return MyObfuscate.unpack(source);
      throw 'Not matched';
    },
    wiseeval: () => {
      self.importScripts('third_party/NotSoWise/unpacker.js');  // 修正后的路径
      return Wise_EvalDecode(source);
    },
    wisefunction: () => {
      self.importScripts('third_party/NotSoWise/unpacker.js');  // 修正后的路径
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
