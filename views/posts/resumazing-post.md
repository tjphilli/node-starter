In the spring of 2014, I was contracted to do the marketing website for a startup coming out of RPI. They had won a few business plan competitions to raise some money, and after getting to know the founder and the rest of the team, I joined the team on a more long-term basis. Since designing and building the original website, I’ve gone on to design the public facing product and build the beta version of our front end, and even help a little on the Python API that supports the AngularJS app I made.

Resumazing is a product focused on helping job seekers get noticed. When I first joined the team, the experience for users was described to me in this manner: “We help people looking to get a job do resume screening on their own time.” I’ve found this to be a fairly succinct description of what Resumazing aims to do. We’ve built up an understanding of what companies are looking for in candidates through big data and machine learning, and by a user giving us their resume and job description, we’re able to see how fit they are for the job they’re trying to get. We provide different types of feedback, so users can see what they need to alter or potentially tailor about their resume to make them more likely to avoid the automated screening that a given company is likely doing to narrow down candidates. The guiding vision for Resumazing is that we help people looking for jobs get noticed.

## The Website
In designing the visuals and writing basic copy for the marketing website, I was also defining the personality of the product, so I spent time up front thinking about what that should be. Right away, I spotted a certain contradiction in criticizing companies for using automated resume screening, and then offering an equally impersonal alternative in Resumazing. The difference is that I’m confident in the natural language processing that our brilliant engineers have written that powers our resume-parser, and in their machine-learning system that determines how fit a candidate is for a job. It contrasts with the system that most companies use which simply searches resumes for keywords.

My solution to this was to make Resumazing a company that seemed kind and enthusiastic, and to personify NLP, machine learning and big data. By using words like “we” and “our”, we draw no distinction between our technology and the engineers who have made it. Our tech and our team make Resumazing. This makes users feel more like they are getting advice from a really smart friend than mechanistic bits of data from automated software.

The animations on the home page contribute to this feeling. The “springiness” makes us feel fun and approachable, which is important if we want users to trust us with their data and their time. It’s also important long because data visualizations can easily be boring and arbitrary, and since most of the feedback users get is visualized, we need to create visualizations that are engaging and feel nice to interact with. In order to achieve these animations I drew the illustrations and used SVG to mark them up in code and animate them using CSS; no JavaScript required. I learned a ton about SVG along the way and I’m convinced it’s the way forward for non-photographic imagery.

<div class="project-detail-image-one-across"><img src="/images/rz-gif.gif"/>
  <div class="caption">Getting SVG to perform correctly across browsers is no easy task.</div>
</div>

The animations tell the story of how Resumazing actually works. The issues of resume screening, job hunting, NLP, machine learning, are all complex topics, and all we want to do is communicate at a high level to users what the system does and why they should use it. Requiring users to read massive blocks of text on these topics could intimidate them, and in reality they don’t need to know much to start using our product anyway.

I felt that demonizing the screening tactics of big companies was key to explaining how we at Resumazing are different. I tried to demonstrate that with the illustrations I did for the home page that have been used elsewhere since then. I describe other companies automated systems as “mean robots” to contrast that with how smart and understanding our system is. What we’re telling users is that we help you beat the mean robots because we’re smarter than they are. We are able to determine how users should alter their resumes to minimize their chances of getting screened out and maximize the chance of getting a call from the company. It probably seems obvious at this point, but this provides value to businesses seeking potential employees as well as users because we’re able to provide much smarter recommendations to companies on who to look into contacting.

<div class="project-detail-image-two-across">
  <div class="image-wrapper"><img src="/images/resumazing-sketches.png"/>
    <div class="caption">My original sketches for the illustrations</div>
  </div>
  <div class="image-wrapper"><img src="/images/resumazing-illustrations.png"/>
    <div class="caption">We’ve wound up using these to illustrate succinctly what we do and how we bring value</div>
  </div>
</div>

The marketing website has been successful, especially given the pace that I had to build it at, and we now rank number one for the search term “Resumazing”, even though similar attempts and business-puns have been attempted. It’s also worth noting that I inherited the name, and have no further comment on it \*cough cough*. I mean, at leasts it’s memorable. And we know from WhatsApp that ultimately names are meaningless once you reach a critical mass of users.

## The Product
At a high level, we wanted a low-friction way of getting users to use the system and get as much value out of our analysis as possible. The more people using Resumazing, the better for everyone, because our analysis gets smarter the more resumes and job-descriptions we parse, so it’s not just good for users because they get analysis, but they ensure the analysis down the road is even more accurate. We wanted our users to be able to be as liberal with entering their information as possible, since this is an unfamiliar experience, and some folks might have some scars from uploading their resumes to websites and not getting the results they want – namely a job.

Once a user uploads a resume and job description, I wanted to provide a flexible results experience, suitable for a job seeker looking for validation that their resume is as good as they were expecting, as well as suitable for people looking to spend some serious time working on their resume and skills. This was a struggle to balance at times, so I focused on the interactivity of results to be inviting to the users looking to delve deeper into a particular area of feedback. We’ve done testing in a private beta and after making some adjustments have moved into public beta. Many of the items displayed in this portfolio page come from visuals for our version 1 release I’ve prepared for investor pitches.

<div class="project-detail-image-one-across"><img src="/images/resumazing-upload.png"/>
  <div class="caption">The form element for "job description" changes from &lt;textarea&gt; to input[type=text] depending on whether a link or text job description is present.</div>
</div>

Our front end is an AngularJS app which I built, completely decoupled from the Resumazing API, to provide flexibility and separation of concerns. This enables a more seamless experience from upload to results, and we can use browser localStorage to save users results for them, rather than having to authenticate them and persist their data for them. This also reduces friction for new users get up and running with Resumazing. We accept resumes as well as users’ LinkedIn profile, and we take job descriptions as text or a link to the job; our system is smart enough to sort it out, and we don’t want users to have to worry about details like this. That’s all we need from them, and from there we can provide solid analytics by comparing the two.

I was tasked with making a flexible results experience that can accommodate variable amounts of analysis, since there are certain data points we know we will be able to provide to our users, and others we aren’t certain of, or will take a substantial amount of time. I came up with a card-based design that would separate analysis into discrete, interactive modules. This serves to help users focus on specific types of resume analysis without getting too overwhelmed, as well as it addresses our prior challenge of balancing users who want to skim results with those who want to dive deep.

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper"><img src="/images/resumazing-results-cards.png"/></div>
  <div class="caption">The info cards in Resumazing Results allow users to explore the data they’re most interested in.</div>
</div>

Specific visualizations have been challenging to come up with, even though I spent weeks knee-deep in my Tufte books. It can be tempting to retrofit data to meet a specific visualization paradigm, and I’ve struggled to come up with fitting ways of representing data visually to allow for casual skimming of results – even still they are constantly changing as the product evolves.

One of the advantages to the way Resumazing works is that we don’t charge users for our service. These are people who obviously either don’t have a job or are dissatisfied with their current one, so we don’t want to make any assumptions about what people can afford. By charging, we are subtly fostering a privilege complex by giving those who can pay more an advantage in the job market, and we also want to make high quality resume feedback available to everyone.

Because of this, we instead prefer to allow sponsor companies, typically small and medium size businesses, to recruit through our system. We know what our sponsor companies are looking for in candidates, so if a user matches those criteria, we can give them the option right in their results to apply to a given company with one click. This brings value to users by showing them new job opportunities as well as encouraging them in the job-seeking process by demonstrating companies are looking for candidates like them, no matter how insecure one can feel applying for jobs.

<div class="project-detail-image-one-across"><img src="/images/resumazing-one-click-apply.png"/>
  <div class="caption">I initially had several actions, but realized later that action cards should have one primary action.</div>
</div>

## Protecting Users & Offering Advice
I often see what I do as being a gatekeeper to the users of the product I’m working on, especially in this case being the only designer on our team. I realized a few things really early on that made me uncomfortable; first, that we were handling users professional and personal data without authentication and have to take that very seriously, and second, that in providing feedback on professional documents we are implicitly making suggestions to users about how they handle their job-search. The first concern is intuitive, and the second may seem overblown, but it’s really not. Learning new skills or taking a specific job is a big decision, so we have to be very careful with a system that encourages users to improve their chances of landing a particular job by learning a particular skill that could take months to get a grasp on. Just because a user could be better suited knowing Objective-C, doesn’t mean we should tell them to go learn it if they don’t need to or don’t have an interest in it, and the same goes for taking additional jobs on or encouraging exaggeration of abilities.

Instead, the way I prefer to be responsible with suggestions is to frame our analysis in an honest manner, showing that it’s suggestions from a really smart system, but it’s not canon. At the end of the day, our team isn’t sorting through resumes and giving results, our software is, but we are responsible for what it provides for users. Our users have already acknowledged they don’t feel 100% fit for the job their applying for by even using our system, so I want to make completely sure we respect the potential insecurities of job hunting and wanting to improve oneself professionally.
