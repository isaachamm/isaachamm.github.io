import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import selfPortrait from '../assets/self.jpeg';

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

			
			<div>
				<h1 className='w-fit ml-20'>Specialties</h1>
				<div className=' grid grid-cols-3 mx-20'>
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
						</div>
						<p>Vite + React + Typescript + Node</p>
						<h2>Experience with:</h2>
						<p>Angular, Next, Vue, Astro, Bun</p>
						<h2>Want to learn:</h2>
						<p>Svelte, Ember</p>
					</div>

					<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
						<h1>Backend</h1>
						<div className='flex justify-center align-middle'>

							{/* <a href="https://vitejs.dev" target="_blank">
								<img src={viteLogo} className="logo" alt="Vite logo" />
							</a>
							<a href="https://react.dev" target="_blank">
								<img src={reactLogo} className="logo react" alt="React logo" />
							</a> */}
						</div>
						<h2>.NET (C#) + Python</h2>
					</div>

					<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
						<h1>DB</h1>
						<div className='flex justify-center align-middle'>

							{/* <a href="https://vitejs.dev" target="_blank">
								<img src={viteLogo} className="logo" alt="Vite logo" />
							</a>
							<a href="https://react.dev" target="_blank">
								<img src={reactLogo} className="logo react" alt="React logo" />
							</a> */}
						</div>
						<h2>MSSQL + Firebase</h2>
					</div>

					<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
						<h1>Code Tools</h1>
						<div className='flex justify-center align-middle'>

							{/* <a href="https://vitejs.dev" target="_blank">
								<img src={viteLogo} className="logo" alt="Vite logo" />
							</a>
							<a href="https://react.dev" target="_blank">
								<img src={reactLogo} className="logo react" alt="React logo" />
							</a> */}
						</div>
						<h2>Git, Gitlab, Github</h2>
					</div>

					<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
						<h1>Design</h1>
						<div className='flex justify-center align-middle'>

							{/* <a href="https://vitejs.dev" target="_blank">
								<img src={viteLogo} className="logo" alt="Vite logo" />
							</a>
							<a href="https://react.dev" target="_blank">
								<img src={reactLogo} className="logo react" alt="React logo" />
							</a> */}
						</div>
						<h2>Figma + FlutterFlow</h2>
					</div>

					<div className=' border-white border-2 rounded-3xl m-8 flex flex-col justify-center'>
						<h1>PM</h1>
						<div className='flex justify-center align-middle'>

							{/* <a href="https://vitejs.dev" target="_blank">
								<img src={viteLogo} className="logo" alt="Vite logo" />
							</a>
							<a href="https://react.dev" target="_blank">
								<img src={reactLogo} className="logo react" alt="React logo" />
							</a> */}
						</div>
						<h2>Scrum, Agile, Waterfall, Lean, 
							{/* Sigma Six? Toyota? Chain of management? */}
							</h2>
					</div>

				</div>
			</div>
		</>
	)
}