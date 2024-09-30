import ReactMarkdown from "react-markdown"
import projectsMarkdown from './Projects.md';
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Projects() {

	return (
		<>
			<div className='w-full text-left px-20'>

				<h1 className='w-fit my-4'>Current projects list and details</h1>
				<hr />
				<ReactMarkdown
					className="markdown"
					children={projectsMarkdown}
					remarkPlugins={[remarkGfm] as any}
					rehypePlugins={rehypeRaw as any}
				/>
				
			</div>

			<hr />
			
		</>
	)
}