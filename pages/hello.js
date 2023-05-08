import { NextPage } from "next";
import { useCallback, useEffect } from "react";
import dynamic from "next/dynamic.js";
import { DefaultRubyVM } from "ruby-head-wasm-wasi/dist/browser.umd.js";

/* const { DefaultRubyVM } = window["ruby-wasm-wasi"]; */

const test = () => {console.log('test!')}

const WasmSample = dynamic({
    loader: async () => {
	const response = await fetch(
	    "https://cdn.jsdelivr.net/npm/ruby-head-wasm-wasi@latest/dist/ruby.wasm"
	    /* "../node_modules/ruby-head-wasm-wasi/dist/ruby+stdlib.wasm" */
	);
	
	const buffer = await response.arrayBuffer();
	const module = await WebAssembly.compile(buffer);	
	const { vm } = await DefaultRubyVM(module);
	/* console.log(vm.eval(`(1..10).inject(:*)`).toString()); */
	
	console.log('log');

	vm.printVersion();
	/*
	vm.eval(await fs.readFile("./hello.rb"));
	const today = vm.eval(await fs.readFile("./today.rb"));
	console.log(today.call("get_today").toString());
	*/
	/* return <div>About</div> */
	return () => <div>{vm.eval(`Dir.glob('*')`).toString()}</div>
    },
})

export default function test2() {
    return (
        <WasmSample/>
    )
}

