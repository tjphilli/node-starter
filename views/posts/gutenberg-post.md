Gutenberg is a tool for setting type for the web. It allows you to style text right in the browser in a visual manner, while still generating CSS for whatever the actual use of the styled text is. Gutenberg encourages you to experiment with type settings and download the result for practical use. You can edit the text you’re styling yourself or use one of several types of different placeholder text supplied via a REST API I wrote to back the front-end. Gutenberg is part practical tool, part learning exercise; it really depends on who is using it.
## Why I made it
I made Gutenberg because I often found myself frustrated with the disconnect between visual design applications (like Sketch, Illustrator and InDesign) and CSS. Typography in those applications feels really malleable, but when you’re done with it, you have to mentally translate values, colors, etc into code, and hope you remember the corresponding properties along the way. I also love how easy it is to modify type settings in a web inspector, but that has a lot of baggage because web inspectors are designed for all purpose debugging, not working with typography. I use CodePen a lot, but that doesn’t allow for incrementing values with directional keys or offer suggestions like a web inspector. I found myself making blank .html documents with &lt;p&gt; tags and just setting the type in the browser and copying the properties to my CSS. This all felt very unsatisfying so one weekend I made the beginnings of Gutenberg, what I wanted to be a type-tester designed around front-end development workflows, and not obfuscating code generation but celebrating it.

After making the beginnings of Gutenberg, a few friends who were designers with little development skills but interested in learning said they’d love for me to release it for their own use, so I decided I’d come up with a name and really make the thing. I settled on Gutenberg because, well, yeah. It’s an obvious choice, but other things about the design reflect my admiration for traditional typography. Thus far I’ve avoided using property names outright in several cases, and instead used traditional terms like “Leading” and “Tracking”. Also, it’s a ridiculous statement, but I hoped that Gutenberg might be to some people for web typography what his original work in the printing press was to publishers.

I also thought it would be a good opportunity to dive into more hardcore AngularJS and Node stuff, since I’d already been learning Angular for another project.

<div class="project-detail-image-one-across">
  <div class="gif-wrapper"><img src="http://giant.gfycat.com/BaggyVigorousFattaileddunnart.gif"/></div>
  <div class="caption">I initially was only going to support certain CSS-properties, but I realized that it's important to support all of them. In doing so, I and others have learned of some pretty obscure text-properties.</div>
</div>

## Process & Product
I knew pretty much how I wanted Gutenberg to work from the outset. Other type-testers for the web exist, but most of them try to hide from users the fact that they’re generating code by styling text. I didn’t want to hide it, because I think designers *should* learn how to code. Likewise, seeing code will mark familiarity to developers who want to learn more about typography. I wanted to serve both designers looking to learn to code and developers looking to learn to set type better.

Because of this, I realized I could reverse engineer my mental model of how I think about styling text. When I’m typesetting, I look at my text, decide what needs to change, add a selector if necessary, decide what property I need to add to modify the styles, and then add a value and tweak until I’m happy. This is much different than a visual design application where upon selecting a text object, you are presented simultaneously with all possible properties to modify. Imagine if writing CSS was simply filling in values for all possible properties a given DOM element could have. That would be a nightmare, which is part of why coding can be so much more fluid and frictionless than using a desktop application.

Some popular web typography tools rely on direct manipulation for resizing, changing typeface, etc. I like to think that Gutenberg uses *sort direct manipulation*. You aren’t acting *on* objects per se, but you have a more direct experience than writing code, hitting cmd+s and hoping you did it right. As you modify the property modules, you see the changes reflected to your text in real time. I’m okay with this abstraction because it reinforces my stated goal of forcing users into the mental model they will eventually assume when they learn to do front-end development.

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper"><img src="/images/gb-sketches.png"/></div>
  <div class="caption">Scans of early sketches: I wanted something as intuitive as Mac apps that still forced you to design like you write CSS.</div>
</div>

Gutenberg relies on design patterns familiar to a lot of Mac apps, where you have some sort of source-list or library on the left, a canvas or stage in the center making content primary, and an inspector on the right to view and modify details of content on the stage. The source list is where additional markup is generated, which supports the front-end development workflow as you generally choose an html tag before you fill it with content. You can change content on the stage and apply and modify properties in the inspector.

The design of the discrete property modules again subtly prepare users for thinking about typography the way that CSS requires you to. The label:value paradigm is exactly what CSS properties look like. Even though I provide UI elements like sliders and pickers to modify values, the user is still becoming acclimated to how CSS works because the way that they are modifying the value is apparent to them as they do it. It’s not as though they drag some mystery slider; they are always aware of the value.

When a user is satisfied with their settings, they can copy the CSS to clipboard of their project, or they can download their project as .html, which is simply the content they’ve marked up and and styled, to refer to it later or copy the code out, or even use it as a starter file.

<div class="project-detail-image-one-across">
  <div class="gif-wrapper"><img src="http://zippy.gfycat.com/AdeptUnawareGrison.gif"/></div>
  <div class="caption">Seeing code change as you work on your project allows you to better understand the relationship between what you're doing and the code you're generating.</div>
</div>

Additionally, while making Gutenberg, I became frustrated with the lack of consistency across placeholder-text APIs, so I wrote my own.[Check out how to call the API](http://github.com/tjphilli/gutenberg#gutenberg-api), it’s honestly something I use every day. I even wrote an Alfred task for it too. The API is written in Node and the download service that generates .html files for users is written in Node as well. The whole front-end is built in AngularJS, which was an incredible learning experience. I feel very strong with Angular as a result, as I had to solve an immense amount of UI and technical problems with it.

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper"><img src="/images/gb-weird-result.png"/></div>
  <div class="caption">One of my favorite things to do is pull down off the server all the things people have been generating and look through it. This is a particularly putrid gem.</div>
</div>

## Critical Acclaim

I demoed Gutenberg at my school at the request of one of my professors, and people either found it really neat or didn’t understand it, which is pretty much what I’d hoped for. A lot of guys in baggy pinstripe suits were grilling me about how I was going to make money off of it and I continuously explained that it’s not about making money, it’s about making a tool that is useful and can help a few people learn. If I would have had Gutenberg when I was first learning to do web design, it would have been a huge help. Heck, in building it, I learned a ton more CSS-properties I didn’t even know existed, and I also learned a lot about how the browser actually interprets and interpolates values.

<div class="project-detail-image-one-across-with-caption">
  <div class="image-wrapper"><img src="/images/gb-demo-day.jpeg"/></div>
  <div class="caption">A visitor goes wild over Gutenberg at Interactive Demo Day at RPI.</div>
</div>

I use Gutenberg all the time for experimenting with type, and as more and more font-purchases are web only, it’ll be even more important that we have good tools to work with typography if we can’t use visual design applications. I haven’t worked on Gutenberg for a few months but there is a beta version that has more features that I really want to clean up and release soon of I have the time. The beta more closely resembles what I want it to ultimately be which is a tool that allows for making entire articles or type-oriented pages and views.

<div class="project-detail-image-one-across">
  <div class="gif-wrapper"><img src="http://giant.gfycat.com/AptTallGnatcatcher.gif"/></div>
  <div class="caption">The beta version of Gutenberg has support for headings and element-relative styles. Ultimately I want someone to be able to mark up a whole page in Gutenberg.</div>
</div>

I’d encourage you to mess around with it. There are a lot of known bugs, and I’m sure I’ll work on it more eventually, but for the time being it serves my purposes and has helped some other folks learn. Use the API, too. A couple developers have frameworks and CMS-es that rely on the Gutenberg API for filling in blank pages/articles with dummy text upon installation or first launch. If there are any particular features you’d want to see in the future feel free to shoot me an email or tweet.
