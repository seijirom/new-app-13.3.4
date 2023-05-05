import { NextPage } from "next";
import { useCallback, useEffect } from "react";
import dynamic from "next/dynamic.js";

const WasmSample = dynamic({
    loader: async () => {
	/* const initWasm = await import('../ruby.debug+stdlib.wasm') */
	const initWasm = await import('../ruby.wasm')
	const { Greeting } = initWasm;
	const onClick = useCallback(async () => {
	    const result = await Greeting.hello()
	    console.log(result)
	}, []);
	
	useEffect(() => {
	    initWasm.default();
	}, []);
	
	return () => {
	    return (
		    <button onClick={onClick}>Execute</button>
	    )
	}
    }
}, { ssr: false })
/*
const Example: NextPage = () => {
    return <WasmSample />
}
*/
