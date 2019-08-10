// Copyright (c) 2019 Denolibs authors. All rights reserved. MIT license.
import Debug from "https://deno.land/x/debuglog/debug.ts";
const debug = Debug("deno_tamplate");

debug(
  "Deno v%s running with command line arguments %o",
  Deno.version.deno,
  Deno.args
);
