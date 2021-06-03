const myVar: string = Deno.args[0];

console.log(`This is my string: ${myVar}`);

console.log("Hello", Deno.env.get("USER"));

import "https://deno.land/std@0.97.0/examples/welcome.ts";
// import "https://deno.land/std@0.97.0/examples/chat/server.ts";