import selfPortrait from '../assets/ihammProfile.jpg';

export default function About() {

	return (
		<>

			<h1 className='w-fit'>About Me</h1>
			<div className='sm:w-[70%] sm:max-w-full max-w-xs w-full text-left px-1'>

				<br />
				<div className='w-full text-left items-center sm:block flex flex-col'>
					<img src={selfPortrait} alt="Self Portrait"
						className='sm:float-right justify-center sm:pl-4 sm:pb-4 p-0 max-w-xs w-full h-auto '
					/>
				</div>
				<p>I'm Isaac Hamm, the architect of all the projects that you can access on this site. I'm a budding software engineer, always excited to learn about new technologies and try out new things. I love collaborating, so if there's an idea you'd like to chat about, feel free to reach out on my <a href='https://www.linkedin.com/in/isaachamm/'>LinkedIn</a>, where a detailed summary of workplace experiences and associated accomplishments can be found.</p>
				<p>I believe in the power of human-centered technology; technology was made for man, not man for technology. I'm passionate about using technology to enhance the wellbeing, power, and capacity of goodness in humans. That's the basis for my of my personal projects.</p>
				<p>Outside of software, I'm an avid poet, hopeful writer, and wannabe tennis and volleyball player. I take film pictures for fun, climb mountains to feel alive, and spend time with important people to stay sane.</p>
				<p>Thanks for visiting my site, hope you enjoy 🤙</p>
				<br />

				<hr />

				<div className='w-full text-left'>

					<h2 className='w-fit my-4'>Coding Philosophy</h2>

					<p>My meta-philosophy of coding revolves around coding <em>principles</em>, rather than coding <em>specifics</em>. This is in part due to my belief in <a target='_blank' href='https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/'>the law of leaky abstractions</a>, and in part to my belief that coding languages are a means of accessing a computer's potential (computing power), and not the potential itself. While language depth and knowledge are important, I believe that general coding practices such as good architecture and design, writing quality code, debugging efficiently, accessibility for users, and other principles are transferable across coding languages and code bases. My main tenet is "Design and engineer that which you would want to use."</p>
					<p>I believe strongly that our greatest strength as coders is actually other humans—perhaps a blasphemy in the age of AI—nevertheless, I believe that the most important part of any team that I work on is the relationships that I have with the people that I work with. Code can be rebuilt and refactored as needed; but relationships and trust are invaluable, both with coworkers and clients. Besides the logistics of it, I really believe that better code comes from better relationships between coworkers. While I do use AI for help when coding and designing, I am of the opinion that trying to do something without AI help first is a better strategy. First, because coming to rely on AI is a dangerous precedent; second, because I feel like I learn more when I try to do something myself that I don't know how to do; and third, because I believe in the human factor behind and within the technology.</p>
					<p>Most of my more specific philosophies regarding coding are developed from Joel Spoelsky, and other software-writers, who I read a lot of at my first SE job when I felt like I was floundering. However, regarding specific coding policies and architecture decisions, I am always open to new ideas and methods, and think it's best to make decisions as a unified team, rather than always flying solo. As a driven, independent worker, I find the challenge of working interdependently a meaningful and fulfilling one.</p>
					<p>Combine that with crucials like honesty, integrity, and a never-ending love for learning, and I believe that we can make some great software together.</p>
				</div>
			</div>
		</>
	)
}