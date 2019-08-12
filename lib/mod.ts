// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.

// HMAC = H(K XOR opad, H(K XOR ipad, text))
const hmac = (
  data: Uint8Array,
  key: Uint8Array,
  hash: (message: Uint8Array) => Uint8Array,
  blockSize: number,
  outputSize: number
): Uint8Array => {
  if (key.length > blockSize) {
    key = hash(key);
  }
  const inner = new Uint8Array(blockSize + data.length).fill(
    0x36,
    0,
    blockSize
  );
  const outer = new Uint8Array(blockSize + outputSize).fill(0x5c, 0, blockSize);
  key.forEach((value: number, index: number): void => {
    if (value !== 0) {
      inner[index] ^= value;
      outer[index] ^= value;
    }
  });
  inner.set(data, blockSize);
  const innerHash = hash(inner);
  outer.set(innerHash, blockSize);
  return hash(outer);
};

export default hmac;
