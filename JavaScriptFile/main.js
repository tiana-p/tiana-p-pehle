$(document).ready
(function(){
var thing = $(`
  <header>
  <div id="wrap-header">
  <div id="headerLeft" class="headerContent">
  <a class="menuTab" href="index.html">Home</a>
  <a class="menuTab"  href="aboutme.html">About Me</a>
  </div>
  <div id="headerMiddle" class="headerContent">
  <img id="logo" src="images/logoimage2.png" />
  <div id="socialHeader">

<a href="https://github.com/tiana-p"><i class="fab fa-github"></i></a>
<a href="https://www.instagram.com/bananasplitter/"><i class="fab fa-instagram"></i></a>
<a href="https://codepen.io/tiana-p/"><i class="fab fa-codepen"></i></a>
<a href="https://www.linkedin.com/feed/"><i class="fab fa-linkedin-in"></i></a>
  </div>
</div>
<div id="headerRight" class="headerContent">
<a class="menuTab"  href="projects.html">Projects</a>
<a class="menuTab"  href="contact.html">Contact</a>
</div>
  </div>
</header>
      `    
    );
thing.appendTo('.navBar');
});
