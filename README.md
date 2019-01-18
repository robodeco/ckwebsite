# ckwebsite
## Personal portfolio website in development!

I would like to stress that this is very much a work in progress, and I am still focusing heavily on functionality of various components before I get to implementing a flushed out UX. Every week or so I'm going to push a new version full of changes. Please check out the deployed version at https://robodeco.github.io/ckwebsite/ to follow along with my progress! 

**Projected completion time:** End of February/Beginning of March
<br>
**Reason for delay:** A combination of holidays, illness, job interviews, and other responsibilities in my personal life
<br>
<br>
**Latest Changes 01/17/19:** 
<ol>
 <li>Large overhaul of Coding Samples UI/UX</li>
 <li>Gallery thumbnails made more responsive, overall UI cleaned up</li>
 <li>Every previous "Down" button except for the one on the splash page has been temporarily commented out, pending further experimentation at a later date</li>
</ol>

**Technologies Utilized**
<ol>
 <li><i>HTML5/CSS3</i>
  <p>Reason: Rather necessary to use for a web application!</p>
 </li> 
 <li><i>jQuery</i>
  <p>Reason: JavaScript is my most well-known language (honestly the only hard-language at this time) and jQuery I've found makes the process much quicker and efficient.</p>
 </li>
 <li><i>Bootstrap</i>
  <p>Reason: Being an open-source library, Bootstrap is well-used, well-tested, and takes most of the stress out of making a responsive web application. It's the responsive framework I'm most familiar with.</p> 
 </li><i>SASS</i>
 <p>Reason: I've always wanted to thoroughly experiment with a more advanced style-sheet processor, and SASS's ability to compartmentalize different segments of CSS code makes it very powerful and efficient. Plus the name alone is fantastic.</p>
 </li>
 <li><i>Cloudinary</i>
  <p>Reason: Embedding youtube videos is powerful, efficient, and produces quality video players. I chose to challenge myself with this project in working with a technology I've never touched before, in order to test my ability to navigate unfamiliar docs. If I'm unable to get it entirely correct I'm going to fall back on the familiar though!</p>
 </li>
 <li><i>baguettebox.js</i>
  <p>I've tried making my own lightboxes from scratch in the past, and what I've found is that it is a rather time-consuming process. Further investigation in what was available on NPM yielded baguettebox, a fairly flushed-out lightbox library that I can customize for my own purposes.</p>
 </li>
</ol>

## More Info, and Overall Plans for Completion

<ol>
 <li><strong>A Note On Reaching Overall Functionality Goal</strong></li>
    <p>My own observations in regards to user experience and user interface design is that humans are impatient and modern web pages are generally flashy. These two occurrances occassionally conflict with each other, where the user, wanting to get to a webpage quickly, must first sit through transitions that may take seconds rather than microseconds. In order to work around this issue I'm creating a personal website that has two methods of navigation: a quick way in the form of a sticky navbar on the top, and a "fun" way that involves several flashy transitions and animations.</p>
 <li><strong>A Note On The Down Button</strong></li>
    <p>This button is still in its experimental stages as I figure out how exactly I want to implement it. Responsiveness with it will vary, and it has been known to jump around the page depending on screen height. Changing its location from the bottom of the screen to the side may help mitigate this issue, but further testing is required. 
     <li><strong>Further Detail on Implementing Animated Graphics and Transitions</strong></li>
    <p>Being a major fan of the Art Deco movement, I'm trying to create a webpage that illicits a similar feel. The navigation transitions are going to include spinning gears that move when an up/down button is clicked, almost like an elevator is going up and down, and changing background colors depending on what part of the page is being viewed. Further animations may be considered depending on success of this transition, which must only cycle when the up/down button is clicked, and never when the navbar links are clicked.</p>
</ol>

### The Road So Far:

<li>✓ Fix section layout heights and widths; readjust all section contents accordingly</li>
<li>✓ Implement scroll-down and scoll-up interactive buttons in each section</li>
<li>✓ Add 'About Me' section </li>
<li>✓ Add 'Contact' section </li>
<li>✓ Implement footer containing technologies used</li>
<li>✓ Added slideshow to each code video demo with a short summary for each</li>
<li>✓ Fixed package vulnerability in event-stream, rolling back to a previous version</li>
<li>✓ Include lightbox descriptions and titles</li>
<li>✓ Added width breakpoints</li>
<li>✓ Parallax functioning</li>
<li>✓ Cloudinary responding to API call</li>
<li>✓ Down button functioning with smooth-scroll</li>
<li>✓ Lightbox made more user-friendly</li>

### What's Left to Do?
<li>Adjust all fonts in accordance with brand</li>
<li>Fix video quality/look into possible solutions via Cloudinary; otherwise use youtube player</li>
<li>Clean up folder structure if necessary</li>
<li>Add reset css and cross-browser testing; fix bugs if necessary</li>
<li>Fix Down/Up Button layout and responsiveness; add height breakpoints, or remove altogether and pursue different solution</li>
<li>Create different sized photos for the lightbox that change based on breakpoints</li>
<li>Responsive font sizes</li>
<li>Full UX implementation and testing</li>

### Plans for Advanced Features
<li>Implement animated graphics and transitions</li>
<li>Implement email-sending functionality if possible</li>
<li>consolidate slideshows underneath coding samples into one (similar to a jumbotron), using a button underneath the videos instead to change whats viewed</li>
<li>Include download button for resumé PDF</li>
<li>Include hamburger navigation menu</li>


### Known Bugs
<li>FIXED: arrow glyphicons in bootstrap carousel disappearing after click, reappearing on click away from carousel and hover</li>
<li>PUT ON HOLD: down/button responsiveness and jumping around the page</li>

