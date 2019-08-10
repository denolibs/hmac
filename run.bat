:<<WINDOWS
  @echo off
  SETLOCAL
  Set DEBUG=*
  IF [%JUSTTERMINATE%] == [OKAY] (
    SET JUSTTERMINATE=
      deno.exe version >NUL 2>&1 && (
        deno.exe run --allow-env .\lib\mod.ts %*
      ) || (
        echo 'deno.exe' is not installed, or could not be found in your %%PATH%%
        echo See https://deno.land/x/install/README.md for installation instructions.
      )
  ) ELSE (
    SET JUSTTERMINATE=OKAY
    CALL %0 %* <NUL
  )
  exit /b
WINDOWS

#<<OTHEROS
  if which deno > /dev/null
    then
      DEBUG=* deno run --allow-env ./lib/mod.ts $@
    else
      echo "'deno' is not installed, or could not be found in your \$PATH"
      echo "See https://deno.land/x/install/README.md for installation instructions."
    fi
  exit;
OTHEROS

:////////////////////////////////////////////////////////////////
://                                                            //
://  Note: This is a multi-OS script to load our Deno module.  //
://  Arguments are passed to Deno, and environment variable    //
://  DEBUG is set to '*' for the debug module.                 //
://                                                            //
://  This file needs to be marked executable on Linux/Mac.     //
://  $ chmod +x run.bat                           ~OzJD 2019   //
://                                                            //
://  P.S. This avoids "Terminate batch job (Y/N)?" on Windows  //
://                                                            //
:////////////////////////////////////////////////////////////////
