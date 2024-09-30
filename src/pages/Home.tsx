import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import selfPortrait from '../assets/self.jpeg';
import firebaseLogo from '../assets/firebase.png';
import pythonLogo from '../assets/python-logo.svg';
import mssqlLogo from '../assets/mssql-server.svg';
import cSharpLogo from '../assets/c-sharp-logo.svg';
import tsLogo from '../assets/ts-logo-128.svg';
import nodeLogo from '../assets/nodejs-logo.svg'
import { Link } from 'react-router-dom';

export default function Home() {

	return (
		<>
			<div className='flex md:w-[75%] md:max-w-[1000px] w-full flex-wrap mx-auto justify-around content-center'>

				<img src={selfPortrait} alt="Self Portrait"
					className=' max-w-lg w-full h-auto block'
				/>

				<div className=' max-w-sm flex flex-col justify-center text-start'>
					<h1>Hi there</h1>
					<br />
					<p>My name's Isaac. I'm the architect, designer, and implementer of everything you see here, and I'm stoked that you've taken the time to visit my site.</p>
					<p>Take a look at my specialties and interests below, or swing by the projects page to see what I'm currently working on.</p>
					<p>If you have any suggestions for anything that I'm working on, or just want to have a fun discussion about software, writing, or life, feel free to drop me a message via my LinkedIn or Github accounts.</p>

				</div>
			</div>

			<hr />

			<div>
				<Link to="/about">
					<button>Learn more about me</button>
				</Link>
				<a href="https://github.com/isaachamm/isaachamm.github.io">
					<button>Learn more about this website</button>
				</a>
				<Link to="/projects">
					<button>Learn more about my other projects</button>
				</Link>
			</div>

			<hr />


			<div className='md:w-[75%] w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<div className=' border-white border-2 rounded-3xl m-8 p-4 flex flex-col justify-center'>
					<h1>Frontend</h1>
					<h2>Specialties:</h2>
					<div className='flex justify-center items-center align-middle'>

						<a href="https://vitejs.dev" target="_blank">
							<img src={viteLogo} className="logo" alt="Vite logo" />
						</a>
						<a href="https://react.dev" target="_blank">
							<img src={reactLogo} className="logo react" alt="React logo" />
						</a>
						<a href="https://www.typescriptlang.org/" target="_blank">
							<img src={tsLogo} className="logo" alt="TypeScript logo" />
						</a>
						<a href="https://nodejs.org/en" target="_blank">
							<img src={nodeLogo} className="logo" alt="Node.JS logo" />
						</a>

					</div>
					<p>Vite + React + Typescript + Node</p>
					<h2>Experience with:</h2>
					<p>Angular, Next, Vue, Astro, Bun</p>
					<h2>Learning Now:</h2>
					<p>Svelte, Ember, Ruby on Rails</p>
				</div>

				<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
					<h1>Backend</h1>

					<h2>Specialties:</h2>
					<div className='flex justify-center items-center align-middle'>

						<a href="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" target="_blank">
							<img src={cSharpLogo} className="logo" alt="C Sharp logo" />
						</a>
						<a href="https://www.python.org/" target="_blank">
							<img src={pythonLogo} className="logo" alt="Python logo" />
						</a>
					</div>
					<p>.NET (C#) + Python</p>
					<h2>Experience with:</h2>
					<p>Java, C++, Flask, Express</p>
					<h2>Learning Now:</h2>
					<p>Rust, Ruby</p>
				</div>

				<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
					<h1>Database</h1>

					<h2>Specialties:</h2>
					<div className='flex justify-center items-center align-middle'>

						<a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank">
							<img src={mssqlLogo} className="logo" alt="MSSQL logo" />
						</a>
						<a href="https://firebase.google.com/" target="_blank">
							<img src={firebaseLogo} className="logo " alt="Firebase logo" />
						</a>
					</div>
					<p>MSSQL + Firebase</p>
					<h2>Experience with:</h2>
					<p>MongoDB, GraphQL, Apollo</p>
					<h2>Learning Now:</h2>
					<p>PostgreSQL, Neo4j</p>
				</div>

				<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
					<h2>Code Tools</h2>

					<p>Git, Gitlab, Github</p>
				</div>

				<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
					<h2>Design</h2>

					<p>Figma, FlutterFlow, SVGs</p>
				</div>

				<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
					<h2>Project Mgt.</h2>

					<p>Scrum, Theory of Constraints</p>
				</div>
			</div>
		</>
	)
}