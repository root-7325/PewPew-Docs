console.log("by root7325 xdd");

//this was done in ~1 minute, and mainly this works so /shrug

var ntohs = new NativeFunction(Module.findExportByName('libc.so', 'ntohs'), 'uint16', ['uint16']);
var inet_addr = new NativeFunction(Module.findExportByName('libc.so', 'inet_addr'), 'int', ['pointer']);

function redirect(host, port) {
    Interceptor.attach(Module.findExportByName('libc.so', 'connect'), {
        onEnter: function(args) {
            if (ntohs(Memory.readU16(args[1].add(2))) === 80) {
                log("redirected to " + host);
                var redirected = Memory.allocUtf8String(host);
                Memory.writeInt(args[1].add(4), inet_addr(redirected));
                Memory.writeU16(args[1].add(2), ntohs(port));
            }
        }
    });
}

function log(str) {
    console.log("[*] " + str);
}

rpc.exports.init = function() {
    redirect("127.0.0.1", 7325);
};