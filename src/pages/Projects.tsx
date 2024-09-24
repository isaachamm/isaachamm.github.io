import ReactMarkdown from "react-markdown"
import projectsMarkdown from './Projects.md';

export default function Projects() {

	return (
		<>
			<div className='w-full text-left px-20'>

				<h1 className='w-fit'>Current projects list and details</h1>
				<hr />
				<ReactMarkdown
					className="markdown"
					children={projectsMarkdown}
				/>
				
			</div>

			<hr />
			
		</>
	)
}