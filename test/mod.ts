// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.

import { runTests, test } from "https://deno.land/std/testing/mod.ts";
import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import hmac from "../lib/mod.ts";

// Hi world!!!
const msg = Uint8Array.from([72, 105, 32, 119, 111, 114, 108, 100, 33, 33, 33]);
// SeCrEtKeY
const key = Uint8Array.from([83, 101, 67, 114, 69, 116, 75, 101, 89]);
const shortReverse = (uint8Array: Uint8Array): Uint8Array => {
  return uint8Array.slice(5, 15).reverse();
};

test({
  name: "test.ts - reverseFn()",
  fn(): void {
    assertEquals(
      shortReverse(msg),
      Uint8Array.from([33, 33, 33, 100, 108, 114]) // '!!!dlrow i'
    );
  }
});

test({
  name: "hmac()",
  fn(): void {
    assertEquals(
      hmac(msg, key, shortReverse, 10, 10),
      Uint8Array.from([72, 105, 32, 119, 111, 92, 5, 57, 23, 40]) // '!!dlrow '
    );
  }
});

runTests();

// TODO: Some better tests with MD5 function or similar.
