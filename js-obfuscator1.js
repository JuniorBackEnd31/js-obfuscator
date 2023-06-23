// Sistem modulüne referans verir.
var fs = require('fs');
// Javascript-obfuscator'a referans verir.
var JavascriptObfuscator = require('javascript-obfuscator');
// Dosyanın içeriğini okur.
var code = fs.readFileSync('input.js' , 'utf-8');
// Obfuskasyon seçeneklerini belirler.
var obfuscationOptions = {
    compact: true,
    controlFlowFlattening: true,
    conrolFlowFlatteningThreshold: 1,
    numbersToExpressions: true,
    simplify: true,
    shuffleStringsArray: true,
    splitStrings: true,
    stringArray: true,
    stringArrayThreshold: 1
};
// Obfuskasyon işlemini gerçekleştirir.
var obfuscatedCode = JavascriptObfuscator.obfuscate(code, obfuscationOptions).getObfuscatedCode();
// Çıktıyı verir.
console.log(obfuscatedCode);
// Obfuskasyonu yapılmış kodu output.js dosyasına kaydeder.
fs.writeFile("output.js",obfuscatedCode,function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Dosya başariyla kaydedildi.");
    }
});
