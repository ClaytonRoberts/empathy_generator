# Coding Challenge - by Clayton Roberts.

---

## Overview

I pull together 3 public APIs, one from a random user/person API , a second from a weather API, and a third from an image API.

Notes:
      
1)  The .env file with api keys is not in repo

2)  I can share my bitbucket repo if the commit history is needed (i figured a public github repo was prefered)

Deployed at: [empathy-generator.web.app](https://empathy-generator.web.app/)


---

### Process

The first request is just a fetch without special arguments. The second, however, passes the random person’s location(s) as an argument to get the weather for that person. And the third fetch passes data from the weather response and person response as arguments; This third api gets a photo using the person’s country name and the weather description.

These functions are called asynchronously in a “FetchUniter” component, and the results are displayed on a React app hosted on Firebase. I use Styled-Components for the CSS. React State is managed using the Easy-Peasy library, which uses Redux but takes care of most boilerplate.

---

## Reflection

**Weakest Point:**
I know it’s better (usually? always?) to make API requests server side. But I’m making mine client side, using non-sensitive keys (or no keys in some cases). I do at least put them in a .env file.

**Next Steps:**

1.  I’m working on adding a Firebase Functions Node.js function to get a Twitter quote and deliver it to my client upon request. The Twitter API uses sensitive keys, so that’s why I’m doing it server-side. The quote will be related to the person’s name or their location, etc. and show up under the weather image. (...My schedule suddenly got crazy, so I wasn’t able to complete this part yet.)
2.  The RandomUser API’s photo resolution is way too low. Human connection is the focus of the app, so I need to get that fixed. I’ve looked into replacing the photo with an image from other APIs (eg. unsplash) , but most searches return unrelated images or an image of the wrong gender. Bing’s API seems to have good searchability, and I’ve made some headway signing up with them, but it’s a bit too tall of a task to navigate their documentation etc in the given time frame.
