//// Making an HTTP request
// const url = Deno.args[0];
// const res = await fetch(url);

// const body = new Uint8Array(await res.arrayBuffer());
// await Deno.stdout.write(body);

// Reading a file
const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename);
  await Deno.copy(file, Deno.stdout);
  file.close();
}
