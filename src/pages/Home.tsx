import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import selfPortrait from '../assets/self.jpeg';
import firebaseLogo from '../assets/firebase.png';
import pythonLogo from '../assets/python-logo.svg';
import mssqlLogo from '../assets/mssql-server.svg';
import cSharpLogo from '../assets/c-sharp-logo.svg';
import tsLogo from '../assets/ts-logo-128.svg';
import nodeLogo from '../assets/nodejs-logo.svg'
import './Home.css';

export default function Home() {

	return (
		<>
			<div className='flex w-[75%] mx-auto justify-around content-center'>

				<img src={selfPortrait} alt="Self Portrait"
					width={500}
					height={500}
				/>

				<div className='flex flex-col justify-center align-middle'>
					<h1>Isaac Hamm</h1>
					<h2>Software Engineer</h2>
					<h3>Tennis player / coach</h3>
					<h3>Writer</h3>
					<h3>Cinema Junkie</h3>
					<h3>Bookworm</h3>
					<h3>Human</h3>

				</div>
			</div>

			<hr />

			<div>
				<button>Learn more about me</button>
				<button>Learn more about this website</button>
				<button>Learn more about my other websites</button>
			</div>

			<hr />


			<div className='w-[75%] grid grid-cols-3'>
				<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
					<h1>Frontend</h1>
					<h2>Specialties:</h2>
					<div className='flex justify-center align-middle'>

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
					<h2>Want to learn:</h2>
					<p>Svelte, Ember, Ruby on Rails</p>
				</div>

				<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
					<h1>Backend</h1>

					<h2>Specialties:</h2>
					<div className='flex justify-center align-middle'>

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
					<h2>Want to learn:</h2>
					<p>Rust, Ruby</p>
				</div>

				<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
					<h1>DB</h1>

					<h2>Specialties:</h2>
					<div className='flex justify-center align-middle'>

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
					<h2>Want to learn:</h2>
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
					<h2>PM</h2>

					<p>Scrum, Theory of Constraints</p>
				</div>
			</div>
		</>
	)
}