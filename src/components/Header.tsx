import { Link } from 'react-router-dom';
import personalLogo from '../assets/IH_Logo_Inverted_Blank.png';
import linkedinLogo from '../assets/LI-In-Bug.png';
import githubLogo from '../assets/github-mark-white.png';

export default function Header() {

	return (
		<>
			<div className='flex justify-between w-full items-center mx-4 max-w-[800px]'>
					<Link to='/'>
						<img src={personalLogo} className="logo" alt="Linkedin logo" />
					</Link>
					<Link to='/projects'>
						<button>Projects</button>
					</Link>
					<Link to='/about'>
						<button>About</button>
					</Link>
					<a href="https://www.linkedin.com/in/isaachamm/" target="_blank">
						<img src={linkedinLogo} className="logo" alt="Linkedin logo" />
					</a>
					<a href="https://github.com/isaachamm" target="_blank">
						<img src={githubLogo} className="logo" alt="Github logo" />
					</a>
			</div>

			<hr />
		</>
	)
}