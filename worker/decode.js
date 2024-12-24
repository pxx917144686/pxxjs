self.addEventListener('message', (e) => {
  // 确保 importScripts 路径正确
  self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/mathjs/math.min.js');
  self.importScripts('https://pxx917144686.github.io/pxxjs/worker/lib/utils.js');

  let source = e.data.source;
  const packer = e.data.packer;
  const options = e.data.options;

  const methods = {
    evalencode: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/lib/evaldecode.js');
      return EvalDecode(source);
    },
    _numberencode: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/lib/numberdecode.js');
      return _NumberDecode(source);
    },
    arrayencode: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/lib/arraydecode.js');
      return ArrayDecode(source, options);
    },
    jsfuck: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/lib/jsfuckdecode.js');
      return JSFuckDecode(source);
    },
    obfuscatorio: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/lib/obfuscatorio.js');
      return ObfuscatorIO(source, options);
    },
    cleansource: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/lib/cleansource.js');
      return CleanSource(source, options);
    },
    aaencode: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/cat-in-136/aadecode.js');
      return AADecode.decode(source);
    },
    jjencode: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/decoder-jjencode/jjdecode.js');
      return JJdecode.decode(source);
    },
    urlencode: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/js-beautify/unpackers/urlencode_unpacker.js');
      if (Urlencoded.detect(source)) return Urlencoded.unpack(source);
      throw 'Not matched';
    },
    p_a_c_k_e_r: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/js-beautify/unpackers/p_a_c_k_e_r_unpacker.js');
      if (P_A_C_K_E_R.detect(source)) return P_A_C_K_E_R.unpack(source);
      throw 'Not matched';
    },
    javascriptobfuscator: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/js-beautify/unpackers/javascriptobfuscator_unpacker.js');
      if (JavascriptObfuscator.detect(source)) return JavascriptObfuscator.unpack(source);
      throw 'Not matched';
    },
    myobfuscate: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/js-beautify/unpackers/myobfuscate_unpacker.js');
      if (MyObfuscate.detect(source)) return MyObfuscate.unpack(source);
      throw 'Not matched';
    },
    wiseeval: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/NotSoWise/unpacker.js');
      return Wise_EvalDecode(source);
    },
    wisefunction: () => {
      self.importScripts('https://pxx917144686.github.io/pxxjs/worker/third_party/NotSoWise/unpacker.js');
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
