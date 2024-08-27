import { Link } from 'wouter';
import selfPortrait1 from '../assets/IMG_2431-1.jpg';
import selfPortrait2 from '../assets/ihammProfile.jpg';
import gradPortraitBYU from '../assets/grad.jpg'

export default function About() {

	return (
		<>

				<h1 className='w-fit'>About</h1>
			<div className='w-[70%] text-left px-20'>

				<br />
				<div className='min-w-96 text-left'>
					<h2 className='w-fit'>About Me</h2>
					<h3 className='w-fit'>Education</h3>
					<img src={selfPortrait1} alt="Self Portrait" width={352} height={235} className='float-right' />
					<p>I graduated with a B.S. in Psychology with Honors (Summa Cum Laude) from BYU in May of 2023. While at BYU, I also received minors in Computer Science, English, and Professional Writing & Rhetoric, as well as a language certificate for Portuguese.</p>
					<p>I was also an active community member at BYU, participating in the Phi Kappa Phi honor society, where I acted as the social media chair and as an advisor, and starting the BYU Sport Psychology Club, acting as co-founder and president.</p>
					<p>Currently, I am attending UVU to complete a B.S. in Computer Science as well as other pre-requisites for a Master's program in either computer science or information systems.</p>


					<h3 className='w-fit'>Work Experience</h3>
					<p><strong>***Note***:</strong> a detailed summary of workplace experiences and associated accomplishments can be found on my <a href='https://www.linkedin.com/in/isaachamm/'>LinkedIn</a>; this section is meant to be more biographical in nature.</p>
					<p>I have had a wide range of work experiences throughout my life, including starting my own tennis coaching business in my hometown during high school, and coaching tennis during college. I also worked for multiple years as a research assistant at BYU, where I participated in 4 different labs: an fMRI-focused lab, where we studied memory and decision-making; a clinical psychology lab, where we studied teletherapy and suicidality, among other clinical psychology phenomena; a health-psychology lab, where we studied health behaviors from a psychosocial perspective; and a human-computer interaction lab, where we studied individuals' experiences with UI/UX design from both a psychological and technological perspective. I also acted as a teaching assistant at BYU where I helped with the Cognition course for Neuroscience and Psychology majors.</p>
					<img src={gradPortraitBYU} alt="Self Portrait"
						width={267}
						height={400}
						className='float-left mr-4'
					/>
					<p>My experience in the tech world began during my time at BYU, where I worked as an IT maintenance worker with my local school district during summers. This exposed me to a wide variety of technologies that educational settings use daily, in addition to giving me basic skills for dealing with and understanding tech (a.k.a., googling). This was my first exposure to working in the technology sector, and I surprised myself with how much I enjoyed the challenges that technology presented day-in and day-out. This is what led me to began taking computer science classes at BYU, and eventually obtain a minor.</p>
					<p>Although I had opportunities to code in my research at BYU in addition to my tech work and other classes at BYU, finding a software engineering job with just a minor was a challenge. Thankfully, the awesome engineers at Select Bankcard (also known as Etogy) were willing to take a chance on me and hired me to start as an intern just a few days after graduating. Then, after the summer months, I was offered a full-time position. This job formed a strong basis for my philosophy on software (which I talk about in greater detail below) and business. I loved the challenges of fintech, where security and quality were our highest priorities. There, we focused on depth and understanding, as well as continual lifelong learning in both software and business. It gave me a great base to launch a career in software.</p>
					<p>After nearly a year at Select Bankcard, I had the incredible chance to work on a small-business opportunity in Lehi, UT, with a friend of a friend. I had always been interested in small-business and entrepreneurial work, and pounced on the opportunity to work in more of a small-business environment. Thus began my employment at The Reasoning. We acted as a third-party contractor for AI-imbued technologies, where other companies that didn't have a major AI/tech focus would bring problems to us and we would see if we could help them solve those problems. I spent most of my time here acting as a frontend engineer, helping implement the client-side design from scratch. The work here was a large contrast to working in the fintech world, because we had to iterate and code quickly to fit within budget and time constraints. Thankfully, I learned to love this fast-paced, adaptable kind of work as well, and was able to add more tools to engineering toolbelt.</p>
					<p>At this point, I realized that I wanted to have more formal education and training on different topics in computer science. Although I felt that was growing as an engineer, I felt that I lacked in a lot of different general areas that would be difficult to cover on my own. So, I decided to return to school and am currently attending UVU to take more math, business, and computer science courses and improve myself as an engineer. I am still deciding exactly how that education will shake out, but I hope to either obtain a B.S. in Computer Science or get accepted and complete a Master's degree in Information Systems.</p>
					<p>I am currently working on personal projects and looking for my next opportunity to work as a software engineer. If you're hiring, I'd love to chat with you!</p>
					<img src={selfPortrait2} alt="Self Portrait"
						width={267}
						height={400}
						className='float-right'
					/>


					<h3 className='w-fit'>Life/Hobbies</h3>
					<p>I grew up in a small town outside of Salt Lake City, Utah. Without much to do in our town, I became an avid sports fan, and reader. Most of my childhood consisted either of playing sports and being outside, or school and learning. </p>

				</div>
				<hr />

				<div className='w-full text-left'>

					<h2 className='w-fit'>Coding Philosophy</h2>

					<p>My meta-philosophy of coding revolves around coding <em>principles</em>, rather than coding <em>specifics</em>. This is in part due to <a target='_blank' href='https://www.joelonsoftware.com/2002/11/11/the-law-of-leaky-abstractions/'>the law of leaky abstractions</a>, and in part to my belief that coding languages are a means of accessing a computer's potential (computing power), and not the potential itself. While language depth and knowledge are important, I believe that general coding practices such as good architecture and design, writing quality code, debugging efficiently, accessibility for users, and other principles are transferable across coding languages and code bases. My main tenet is "Design and engineer that which you would want to use."</p>
					<p>I believe strongly that our greatest strength as coders is actually other humans—perhaps a blasphemy in the age of AI—nevertheless, I believe that the most important part of any team that I work on is the relationships that I have with the people that I work with. Code can be rebuilt and refactored as needed; but relationships and trust are invaluable, both with coworkers and clients. Besides the logistics of it, I really believe that better code comes from better relationships between coworkers. While I do use AI for help when coding and designing, I am of the opinion that trying to do something without AI help first is a better strategy. First, because coming to rely on AI is a dangerous precedent; second, because I feel like I learn more when I try to do something myself that I don't know how to do; and third, because I believe in the human factor behind and within the technology.</p>
					<p>Most of my more specific philosophies regarding coding are developed from Joel Spoelsky, and other software-writers, who I read a lot of at my first SE job when I felt like I was floundering. However, regarding specific coding policies and architecture decisions, I am always open to new ideas and methods, and think it's best to make decisions with a team, rather than always flying solo. As a driven, independent worker, I find the challenge of working interdependently a meaningful and fulfilling one.</p>
					<p>Most of my business philosophies actually come from my background as an entrepreneur, as well as my backgrounds in Psychology and English Literature studies. Honesty and integrity are the most important principles, both for me personally, and as a way of building trust with clients and coworkers. Part of "Design and engineer that which you want to use" is building products that are technically robust, but also building products that are enjoybale to use, and helpful for the user.</p>
				</div>

				<hr />

				<div className='w-full text-left'>
					<h3>...this website</h3>

					<h3 className='w-fit'>Built using React + Typescript + Vite + Tailwind</h3>

				</div>

				<hr />
				<div className='w-full text-left'>
					<h3>...my other projects</h3>

					<h3 className='w-fit'>See <Link href="/projects">projects</Link> for more info</h3>

				</div>
			</div>
		</>
	)
}