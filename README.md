# hmac

This is a simple HMAC module that is designed to be consumed by other modules.
Eg. This HMAC module, combined with an MD5 module, could be used to make a HMAC-MD5 module.

# Usage

```typescript
import hmac from "https://raw.githubusercontent.com/denolibs/hmac/master/lib/mod.ts";
hmac(data: Uint8Array, key: Uint8Array, hash: Function, blockSize: number, outputSize: number);
```

The hash function should expect a callback with the signature ```(message: Uint8Array) => Uint8Array```.
Returns: ```Uint8Array``` containing the result.

<sup>This project is based on the open source [DenoLibs](https://github.com/denolibs) / **[deno_template](https://github.com/denolibs/deno_template)** template.</sup>