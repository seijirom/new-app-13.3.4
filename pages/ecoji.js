import dynamic from 'next/dynamic'

const WasmComponent = dynamic({
    loader: async () => {
	
	const wasmModule = await import('../node_modules/ruby-head-wasm-wasi/dist/ruby+stdlib.wasm');
	const module = await WebAssembly.compile(wasmModule);
	return () => <div>Adding two numbers: {wasmModule.add(3, 4)}</div>
    },
})

export default function Index() {
    return (
	    <div>
	    <WasmComponent/>
	    </div>
    )
}
