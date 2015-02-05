Walk With Me is an iOS app created for the purpose of minimizing personal safety concerns. The app was created during PennAppsX in the fall of 2014  and received top awards from Uber and Facebook. As a result, my team and I were given the opportunity to compete at the Facebook Global Hackathon Finals. Walk With Me is a simple app that broadcasts location in real time to a pre-selected group of friends, determines an appropriate time frame for a given trip, and alerts friends if the user does not return home within the time allotted. Personal safety is a significant issue, and Walk With Me isn’t meant to be a magic bullet, but we wanted to see if we could make a product in a weekend that could attempt to address some personal safety concerns. I designed the product and helped with UI code and iOS view animations.

## Background
Apple and Facebook were among the sponsors for PennAppsX, which made us decide up front we wanted to make a native iOS app with a Parse backend. I’d been playing with CoreAnimation in iOS on my own and was looking for an occasion to fiddle with Facebook’s Pop Animation Framework. I now had my opportunity.

At PennApps Winter 2014, our team placed in the top 10 with Trump, a social game which was like Apples to Apples or Cards Against Humanity but with photos . Some of the team had recently created [Bathchat](/projects/bathchat), which was more of an art piece than an actual product. These products we had recently worked on, along with those created by the most recent Hackathon winners were games, productivity hacks, jokes and magic tricks that do little to solve problems that most people have. Upon reflection of this, we decided to work on something more ambitious that would address a more serious problem.

## The Problem
As a Resident Director at Rensselaer, I wind up being privy to some really awful things that occur around campus, a lot of them being related to personal safety issues. During the training for my position, I considered how little innovation there is in this area, while the demand for improvement in it is high. We are trained to give students advice on how to stay safe while leading reasonable social lives.  We encourage them to stay together and make friends aware of plans, intentions and whereabouts. If people have a plan of where they are going and how they are getting home, there is less uncertain that can go wrong. However, situations may still occur where a student may not have access to their closest friends and will have to travel somewhere alone.

The more we thought about the experience of someone returning home alone, the more we realized that this is not just a student problem. It really is problem for anyone in highly populated areas at specific times of day/night, and further, members of marginalized groups find themselves predisposed to being unsafe in the first place.  The biggest thing we felt nervous about was the prospect of a decidedly un-diverse group of people working on an app that solves a problem that we don’t necessarily experience every day. We really didn’t want to seem overconfident and tried to maintain a good perspective throughout.

## Our Solution
We wanted to create a product that allowed a group of users to stay connected and aware of each other at all times. Most people already have tactics to stay safe when walking alone. We didn't want to do away with them, but rather to extend them. Some people like to call a friend while they’re walking, so that the walk feels faster, and those around them know that they are connected to someone else. Since phones are exensive, some people might prefer to leave it in their pocket. Many people panic when a friend’s battery dies and they are unable to contact them. We kept these aspects of behavior in mind when creating Walk With Me. Our desire was to provide users a way to get home safely with peace-of-mind, while not requiring them to alter any existing behavior that make them feel safe.

The core of the Walk With Me experience would be the “walking” screen, while much of the rest of the application relies heavily on push notifications. Our idea was that if someone is leaving to go home alone, they can open Walk With Me and hit “go”. The user’s closest friends get a notification that says “Jamie is starting a walk home.” If the designated friends open the notification, they can see Jamie’s route in real time, with an estimate of when they should arrive home. Assuming Jamie arrives home safely, all of the designated friends get a notification when the geo-fence of Jamie’s home is encountered, that reads “Jamie arrived home safely.” This mimics the existing behavior of when someone says, “Hey, text me when you’re home.” What that person is really saying is, “I care about you. Stay safe.” But often a person arrives home safely and goes to bed without texting their friends. When the individual wakes up the next morning, several text messages are awaiting a response to the question, “are you home yet?” Walk With Me removes the need for this practice because it sends notifications to close friends automatically. Additionally, since Walk With Me knows where Jamie is going, it can alert friends if Jamie does not make it home in a reasonable window of time. Since we are able to access the battery percentage of the individual’s phone, we can alert friends when Jamie’s phone shuts off, and drop a pin on the map so friends know what happened, where, and that Jamie is fine.

<div class="project-detail-image-one-across">
	<div class="gif-wrapper"><img src="/images/wwm-sketches.png"/></div>
	<div class="caption">My iterations of the "walking screen". I started trying to use mostly standard components, but it could actually serve to make the experience more confusing since the interactions aren't standard</div>
</div>

One other significant aspect of the product was the concept of “pinging” friends. We've seen through apps like Yo that binary communication is actually a thing people want. The content of a Yo doesn’t mean anything, but the context does, and the context is agreed upon amongst the people sending the Yo. In the same way, I imagined that a “ping” is like a “Yo” within Walk With Me. It means whatever a friend group has decided it to mean. By default, when a walker, in this case Jamie, “pings” friends by hitting the big ping button, these friends receive a push notification that reads “Ping from Jamie. Call?”  If you act upon that notification it calls Jamie. This is really effective, as often times a walker may want someone to chat with, but does not want to systematically call a group of friends and worry about waking or inconveniencing them. Pinging friends avoids that feeling of burdening all your friends, and assumes at least one of your group is available; one friend can make sure that all is well.

<div class="project-detail-image-one-across">
  <div class="gif-wrapper"><img src="/images/wwm-screens.png"/></div>
  <div class="caption">While I was initially enamored with image-blur to show depth, I realized Control Center already sort of owns image-blur at the bottom of the display. I moved towards solid colors in the end.</div>
</div>

One of the core premises of the product is that by using it, you have the feeling that your friends are “with you.” If a friend has opened a notification, their photo appears with a green light. This allows the walker to know that a friend is “there” and is tracking the walk. The way we imagined it is that when a walker sees that green light, they would be a little more at ease and feel less alone. When a red light is on a friend’s photo it means that friend is walking. By a simple tap on the screen it allows you to view the walk – and “Walk With Me.” Your loved one is no longer alone.


## Implementation
We were exctied to be able to get working version of this built in less than 36 hours! All of our core features were working properly—we were able to share and view walks, and ping and call friends. The walks were being broadcast properly and our route planning and time estimates were working perfectly.

I implemented a fair amount of the the view code for the “walking” screen, and created all the animations. I felt that the animations in Walk With Me were quite practical and added value to the experience. The purpose of our app is serious in nature, however, we didn't want a UI that reflected a somber tenor. Instead I went the other direction and tried to use bold colors and squishy animations to make it feel engaging and personal. It’s just you and your closest friends using this app together, so Walk With Me should feel friendly, not cold.
<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper">
    <video autoplay="autoplay" loop="loop">
      <source src="https://s3-us-west-2.amazonaws.com/new-portfolio/videos/wwm-interactions.mp4" type="video/mp4"/>
      <source src="https://s3-us-west-2.amazonaws.com/new-portfolio/videos/wwm-interactions.webm" type="video/webm"/>
    </video>
  </div>
  <div class="caption">The squishy animations I made with Pop emphasize the Ping button extra when a user is walking</div>
</div>

## Reception
We feel as though Walk With me was incredibly successful. At the PennApps expo, most people were really impressed, and I was happy that people were incredibly complimentary of the visuals and interactions. Obviously some people didn’t see the need for this to exist, but they were basically all 6 foot and over white dudes who wouldn't necessarily feel fearful walking alone, so we weren’t exactly surprised. Some people were genuinely touched that we made the app, and wanted us to finish it and release it and let them know if we did, which was awesome. We were successful in trying to help address some serious problems without being overconfident or insensitive.

Our team was honored to receive "Best Use of Location from Uber", which awarded us Uber credit, and "Best Use of Facebook" from Facebook, which gave us an all expenses paid trip to Menlo Park, CA to compete in Facebook’s Global Hackathon Finals (Within the app we used Facebook Auth, Parse, and Pop.)

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper"><img src="/images/uber-image.jpeg"/></div>
  <div class="caption">Our team with the team from Uber</div>
</div>

As a designer, it was a really valuable exercise in seeing others perspectives. Ways to share location in real time exist, and we knew this. iOS 8 location sharing, Find My Friends, and Google Plus all allow for location broadcasting, but what I realized is that those products are designed around sharing and being social, not around personal safety issues. A product designed around the problems we were trying to solve leads to fundamentally different conclusions, like those we arrived at.  We wanted our users to not share as much as they can, but rather only as much as they need to in order to have peace of mind.



