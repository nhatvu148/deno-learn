## Enable permissions:

- deno run --allow-env deno.ts
- deno run --allow-all deno.ts
- deno run -A deno.ts

## Install deno binaries with specific permissions:

- deno install --allow-env deno.ts

## Run Drakefile:

- deno run -A Drakefile.ts hello

## Save cached dependencies:

- export DENO_DIR=deno_dir
- deno cache main.ts

## Packages:

- https://deno.land/x

## Script source, - as stdin:

- deno run main.ts
- deno run https://mydomain.com/main.ts
- cat main.ts | deno run -

## Watch:

- deno run --watch example.ts
