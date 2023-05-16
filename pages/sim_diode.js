import dynamic from 'next/dynamic'
// const execa = import('execa'); /* require('execa'); */
import { execa } from "execa";

const PlotIdVd = dynamic(() => import('./Plot_IdVd'), {
    ssr: false
})

export async function getServerSideProps() {
    const cwd = process.cwd();
    console.log(`current directory is ${cwd}`);
    process.chdir('c:/Users/seijirom/Seafile/PTS06_2022_8/BGR_TEG/');
    try {
	const {stdout, stderr} = await execa('ruby', ['dio_sim.rb']);
	console.log(stdout);
	console.log(stderr);
    } catch (error) {
	console.error(
	    `ERROR: The command failed. stderr: ${error.stderr} (${error.exitCode})`
	);
    }
    const plotdata = {x: [1,2,3], y: [1,4,3]};
    return {
	props: { plotdata, },
    }
}

export default function simulog({plotdata}) {
  return (
    <>
      <div><PlotIdVd traces={plotdata}/></div>
    </>
  )
}
