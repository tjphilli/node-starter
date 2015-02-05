I was part of the four-person team that created Trump at PennApps Spring 2014 (myself and three software engineers), which was my first real hackathon. A team member had the idea of combining the physical board game concept of games like Apples to Apples or Cards Against Humanity, with frictionless photo sharing apps like Snapchat. As judges would later put it so succinctly, "Trump is like Cards Against Humanity with photos." 

For this project, I took the core idea my team member Dan pitched to me and fleshed it out, sketching the primary flow of the game and working through some of the challenges of the product. A lot of things seemed simple up front but as I put pen to paper I realized all the things I'd initially overlooked. I designed all the interactions and visuals within Trump, and in the end, I was able to resolve most of the things about the product that initially left me feeling unsettled.

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper stroked"><img src="/images/trump-sketches.jpg"/></div>
  <div class="caption">Early on I separated out the two main possible tracks for the use of the product. I tried to come up with strategies to make those experiences feel familiar and similar yet easily differentiable.</div>
</div>

Playing Trump begins by signing up with your Facebook account and inviting  your friends (or are invited by them) to a game. A game consists of as many "rounds" of gameplay as a group of friends wants to play. Score is kept internally but not displayed as a core part of the experience. Trump is meant to be something fun you do to relax and keep up with your friends throughout the day.

<div class="project-detail-image-one-across-wide">
  <div class="image-wrapper stroked"><img src="/images/trump-screens-1.png"></div>
  <div class="caption">The name of the game, Trump, actually comes from a concept we didn't get to implement. Every player gets to store one photo at a time–their "trump card." The icon in the upper left lets you access/edit it.</div>
</div>

## Player's Perspective

Each round, the app randomly selects a member of the group to be the "judge", and the rest of the group are participants, responsible for submitting a photo. Trump also randomly selects an adjective from the list to use for the round. The adjective is displayed prominently, since it represents the idea that the photos submitted are supposed to embody. As a participant, you are shown the image and name of the person judging next to adjective. This is to replicate real world board game mechanics, where participants heavily tailor their submission to the person judging. If you know a certain person has a particular sense of humor, you will likely cater to it with your card.

After a participant submits a photo, all photos that have been submitted by the group are displayed heavily blurred, to tease the upcoming images while giving none of their content away.

<div class="project-detail-image-one-across-wide">
  <div class="image-wrapper stroked"><img src="/images/trump-screens-3.png"></div>
  <div class="caption">We agreed on forcing users to take square photos to normalize the aspect ratios and make our lives easier. Hey, Instagram does it!</div>
</div>

## Judge's Perspective
The judge sees as submissions come in to Trump and then taps to advance to the actual selection. Selection is done through a scrolling expereince where images are displayed with controls beneath to discard or pick as the winner. The design of this experience is meant to replicate familiar behavior, such as that of playing Apples to Apples or Cards Against Humanity. Often a judge will make a first pass through the cards, throw out those that are really weak, and focus on the stronger ones. In Trump, judges can do the same thing by discarding bad submissions to de-clutter the selection view. The judge can tap on "Winner" at any time and select the final winner after being presented with an alert.

<div class="project-detail-image-one-across-wide">
  <div class="image-wrapper stroked"><img src="/images/trump-screens-2.png"></div>
  <div class="caption">The rounds never time out. It's up to the discretion of the judge to decide when a reasonable time for people to submit is. We didn't want to stricly enforce any behavior.</div>
</div>

Once the judge's favorite submission has been picked, both the judge and the general players can view the results view, and see the submissions of all players and their names.

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper"><img src="/images/trump-screens-4.png"/></div>
  <div class="caption">We wanted to make some kind of customizable polaroid of your winning card available for the winning player, sort of similar to what Crossy Road does.</div>
</div>

## Reception
Trump was incredibly well received. We placed into the finals and made it all the way to the top 10. This was sort of shocking to us as at the time the app didn't really work at all, but people really loved the idea and the visuals I showed to communicate the direction we were moving in. A number of news outlets covering PennApps featured our project as the cover image, referring to it as a "sleek social game" or "gorgeous iOS app" which of course felt really great even though the visuals were (and are) super rough. In fact, this was the first iOS app I'd ever designed. Though we were critical of our execution it felt nice to have some positive feedback.


Initially, we made the mistake of building it using a framework instead of natively. Just recently, however, we built it as a native iOS app and have been testing it amongst ourselves to begin work on it again, and we hope to get it out, at least for our friends and our own use sometime in 2015.
