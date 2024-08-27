import { Link } from 'wouter';
import linkedinLogo from '../assets/LI-In-Bug.png';
import githubLogo from '../assets/github-mark-white.png';

export default function Header() {

	return (
		<>
			<div className='flex justify-between w-full max-w-[1280px]'>
				<div className='flex'>
					<Link href='/'>
						<button>Home</button>
					</Link>
					<Link href='/projects'>
						<button>Projects</button>
					</Link>
					<Link href='/about'>
						<button>About</button>
					</Link>
				</div>

				<div className='flex mr-4'>
					<a href="https://www.linkedin.com/in/isaachamm/" target="_blank">
						<img src={linkedinLogo} className="logo" alt="Linkedin logo" />
					</a>
					<a href="https://github.com/isaachamm" target="_blank">
						<img src={githubLogo} className="logo" alt="Github logo" />
					</a>
				</div>
			</div>

			<hr />
		</>
	)
}