Picks is a simple photo utility app and action extension for iOS that I designed and built with three friends in 36 short hours at PennApps Winter 15. I designed the product and handled interactions and visuals. The product aims to address two separate but related problems people face with photos on their phones. The first is choosing the best photo out of a set of photos to share, whether through messages or Instagram or any social network. The second problem is how to deal with an excess of photos in camera roll, which quickly becomes unwieldy and depletes precious remaining storage space.

Many photographers will tell you the way to get the best photo is simply to take a lot of them. For a lot of people, their phone is their primary camera, and it's difficult to determine your favorite from a large set of photos on a small screen. Thumbnails are unhelpful in scale and aspect ratio, so most people will expand photos and swipe through them to find their favorite, which can be difficult at times since this relies on your memory to retain the last few photos as you are processing similar ones. Additionally, the habit of taking a lot of similar shots can lead to clutter in camera roll and eat up storage space. 

We made Picks to make photo management easier and encourage sharing. I know the issue of taking and sharing photos isn't a huge problem facing mankind, but I felt that the problem and solution were narrow enough in scope to be addressed in a single weekend. I also knew that the product had to be easy and enjoyable enough to use for people to justify opening an app or extension for a seemingly simple task of choosing a photo from a set. 

The core concept behind the app is that the fastest way to get someone to choose their favorite photo from a set is to compare them two at a time. It's really difficult to show someone seven photos and ask them their favorite. It's an unmanageable amount of cognitive load on a user to somehow be able to evaluate that many options with so many potentially subtle differences. I had headshots taken for a directory once and after the photographer took four photos, he had me choose my favorite of the group by asking “Photo on the left or right?” until I had my preference. This made total sense to me and was the experience I was looking to replicate on the phone.

## Smart Selection
I wanted to allow users to select similar photos as quickly as possible. Selecting multiple photos is not necessarily a huge chore, but it still takes time and potentially needless repetition. We came up with Smart Select, which intelligently picks similar photos when a user makes their initial pick. 

<div class="project-detail-image-one-across-with-caption project-detail-image-one-across-with-caption--small-width">
  <div class="image-wrapper">
  	<video autoplay="autoplay" loop="loop">
      <source src="http://d1697b2w85msn7.cloudfront.net/videos/picks-smart-select-2.mp4" type="video/mp4"/>
      <source src="http://d1697b2w85msn7.cloudfront.net/videos/picks-smart-select-2.webm" type="video/webm"/>
    </video>
  </div>
  <div class="caption">The thumbnails animate in with Facebook's Pop framework. One thing I want to improve ASAP is to have the tapped thumbnail react immediately and then load the selections of the other thumbnails as we determine similarity, not all at once.</div>
</div>

We use rudimentary computer vision to run the analysis on the photos. It works shockingly well and we think it’s a killer feature and helps make using a separate app for a small task a viable expectation. We needed it to be fast so we actually scale down images dynamically before running the analysis, with no visible loss in selection accuracy.


## SplitPick

For the actual photo comparing experience, I wanted something that was engaging and fun but ultimately allowed a user to determine their preferred photo as fast as possible. Accommodating different aspect ratios of images was a huge challenge for me, also. My initial instinct was to have images stacked one on top of the other if the phone was in portrait orientation, but this is not very helpful for two photos taken in portrait to begin with. We might as well give them thumbnails again at that point. This need for economical layout and interactions motivated me to look for an alternative, which we call SplitPick.

<div class="project-detail-image-one-across-with-caption project-detail-image-one-across-with-caption--small-width">
  <div class="image-wrapper">
  	<video autoplay="autoplay" loop="loop">
      <source src="http://d1697b2w85msn7.cloudfront.net/videos/picks-splitpick.mp4" type="video/mp4"/>
      <source src="http://d1697b2w85msn7.cloudfront.net/videos/picks-splitpick.webm" type="video/webm"/>
    </video>
  </div>
  <div class="caption">Ideally we give the user some indicator that is less intrusive, but for hackathon purposes we displayed the semi-opaque check mark.</div>
</div>

The basic concept of SplitPick is that a user reveals more of their favorite photo until it “wins” versus the other photo. By dragging to unveil more of one photo and conceal more of the other they can examine the subtleties in the content of the photos, in addition to focus, lighting, etc. As you near the edge of the display, a check mark fades in and the phone vibrates to indicate that if you lift up your finger now, the photo you’ve revealed more of will be your pick. This made sense to me for the interaction since it’s intuitive that you would expose the largest space on the photo you prefer, and it also made sense spatially since it’s sort of like you are pushing the lesser photo away. This interaction was meant to be playful and experimental.

When a user picks a photo, we display an interstitial overlay while we replace the old photo with a new one. The main function of this is to “reset” the user’s memory so the new comparison feels unfamiliar in a way. If you left the winning image there and simply replaced the losing one, a user may be biased one way or another. By flashing the overlay, you cause them to forget and make, perhaps, a more objective comparison. Additionally, by bouncing in encouraging text, we reward them for continuing to make picks and help reinforce their choice.

## Share & Delete
Once someone has finished their picks, we congratulate them because they may have just scrutinized a lot of photos. Now they get  their reward of getting to share the photo that they’ve now vetted, and/or clear out more space on their phone and de-clutter their camera roll.

<div class="project-detail-image-one-across-with-caption project-detail-image-one-across-with-caption--small-width">
  <div class="image-wrapper">
  	<video autoplay="autoplay" loop="loop">
      <source src="http://d1697b2w85msn7.cloudfront.net/videos/picks-share.mp4" type="video/mp4"/>
      <source src="http://d1697b2w85msn7.cloudfront.net/videos/picks-share.webm" type="video/webm"/>
    </video>
  </div>
  <div class="caption">iOS handles the interaction between the user and the actual deletion process. Even after that they can recover the photos for 30 days.</div>
</div>

How to handle deletion of photos was a big challenge for me to figure out. Luckily, iOS is super strict about deleting users photos and handles the final interactions and messaging with the user, to ensure they do want to delete the photos. Even if they do delete them, they have 30 days to recover them from a folder iOS creates called “Recently Deleted”. Deletion in Picks works by deleting the photos a user has discarded.

When first coming up with the idea, I figured that our users would have two discrete mental models of how they use the app. One would be for selection of a single photo to share, and one would be a single photo to keep from a set that needs to be deleted. I felt it was important to add the option to “Share and Delete” so that you can subtly encourage users to be proactive about keeping their camera roll clear. If we make it easy enough for a user to be happy with one photo, they may eventually be okay deleting the rest.


## The iOS 8 Action Extension
My original minimum viable product I pitched to my team did not include Smart Select, but rather was simply an iOS 8 Action Extension that worked directly from the Photos app in iOS.

<div class="project-detail-image-one-across-with-caption project-detail-image-one-across-with-caption--small-width">
  <div class="image-wrapper stroked">
  	<video autoplay="autoplay" loop="loop">
      <source src="http://d1697b2w85msn7.cloudfront.net/videos/picks-action-extension.mp4" type="video/mp4"/>
      <source src="http://d1697b2w85msn7.cloudfront.net/videos/picks-action-extension.webm" type="video/webm"/>
    </video>
  </div>
  <div class="caption">At present, the action extension is sort of buggy but its stability should improve with time. Extensions are new to iOS 8.</div>
</div>

A user’s mental model of sharing a photo likely involves selection of the photo from it’s originating source (Camera/Photos) and then sharing directly from there. Going to a separate app may require getting used to, which is why we made the action extension. If a user is browsing through their photos in the default app, they may encounter the problem of wanting to sort through similar photos upon squinting at the thumbnails or furiously swiping through photo detail views. Rather than force them to leave the Photos app, we allow a user to make a selection right in that context and send all of those photos to the Picks extension to find their favorite.

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper stroked"><img src="/images/picks-split-vs-stacked.png"/></div>
  <div class="caption">Ultimately, because of challenges of varying aspect ratios and lack of screen real estate, you need multiple modes. "Stacked" relies on double-tap to indicate a pick.</div>
</div>

One thing of note: SplitPick is economical and engaging, but I knew I wanted to allow a user to have a stacked or side-by-side view as well. I didn’t actually get to implement it, but my idea was to allow a user to touch a control or drag down on one photo or the other to switch into the stacked view. In this view you can simply double-tap the preferred photo to keep that one. This made sense to me since users who are particular about their photos likely use Instagram, and the interaction for expressing positive feelings about something in Instagram is double-tap.


## Reception
The general reaction from judges, hackers, and journalists alike was overwhelmingly positive. Most people could instantly see utility both in terms of finding their favorite to share or their least favorites to delete. We let people use the app themselves and they were shocked at the level of polish and execution for a hackathon project. (Though I still see all of the  ways in which it *isn’t* polished.)

Judges were impressed enough that we moved on to the round of thirty and then were selected again to go to the top ten and do our demo. The final expo was done in front of a packed auditorium and live streamed, so we were really excited. Out of 230+ projects and over a thousand hackers, we were honored to have been so successful. Though we didn’t win a top three prize, we  feel incredibly proud that we executed in developing a fully functioning product and companion extension in such a short period of time.

The reaction from the crowd and twitter was overwhelmingly positive as well. I searched for tweets discussing our app, and seeing so many specifically complement the design, polish, and practicality of Picks was super encouraging.

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper"><img src="/images/picks-1.jpg"/></div>
  <div class="caption">Giving a timed pitch on multiple days of no sleep is just as stressful as it sounds.</div>
</div>

I considered the hackathon to be hugely successful and I look forward to finishing and shipping the product. Again, none of us have any illusions about the importance of this product in the world. We know this is a small problem for a small group of people in the grand scheme of things. At the same time, something being of small relative importance shouldn’t dissuade anyone from putting anything into the world that will make someone’s day easier or a little more interesting.

For me, Picks in and of itself was a design exercise if nothing else. I had no idea how SplitPick would feel as an interaction so I was happy it was at least okay since my team sunk about twenty person-hours into actually implementing it. When we release it, if no one besides us uses it, I’ll still be happy because at least we have something useful that we’re proud of, but I do know that at least some other people would give it a try, and that makes me happy.