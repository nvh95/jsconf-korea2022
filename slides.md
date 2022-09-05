---
theme: seriph
background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
css: unocss
title: How I got 1600 stars on GitHub in 2 months of Open Source work
download: true
---

# How I got 1600 stars on GitHub in 2 months of Open Source work

<!-- TODO:
- Show slide number
 -->

<div class="pt-13 relative">
  <div class="absolute px-2 py-1 rounded cursor-pointer right-0" hover="bg-white bg-opacity-10">
    <div>https://twitter.com/hung_dev</div>
     <div>https://github.com/nvh95</div>
  </div>
</div>


<style>
  .slidev-layout.cover h1, .slidev-layout.intro h1 {
    font-size: 2.5rem;
  }
</style>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: image-right
image: /hung.jpg
---

# Hi, My name is Hung 👋

- Full-time Open Source contributor
- Creator of <a href="https://github.com/nvh95/jest-preview">Jest Preview</a>
- Core member of <a href="https://www.bestofjs.org">bestofjs.org</a>
- Ex - Lead Frontend Engineer @ Got It Inc.
- Obsession with DX
- Connect with me:
  - <carbon-logo-twitter />: <a href="https://twitter.com/hung_dev" target="_blank">@hung_dev</a>
  - <carbon-logo-github />: <a href="https://github.com/nvh95" target="_blank">@nvh95</a>
  - 🔗: <a href="https://hung.dev" target="_blank">hung.dev</a>

<!--
QR Code
-->

---

# Table of Contents
- What is Jest Preview and why I built it?
- What struggles do I have to overcome when building an OSS project?
- What did I receive from doing OSS?
- Some tips if you want to dip your toes into OSS
- Q&A


---

# What is Jest Preview and why I built it?


<img src="/debug-terminal.png" width="600" class="mx-auto" />


---

# What is Jest Preview and why I built it?


<img src="/jest-preview-demo.gif" width="600" class="mx-auto" />


---
layout: center
class: text-center
---

# What struggles do I have to overcome when building an OSS project?


---

# Struggles

- It's difficult.

```js 
import styles from './styles.module.css';

<div className={styles.button}>Click me</div>
```
E.g: We might know how to use CSS Modules, but we might not need to know how CSS Modules work under the hood

<v-click>
```js
require('postcss-modules')({
  getJSON: (cssFileName, json, outputFileName) => {
    console.log(JSON.stringify(json));
  },
  generateScopedName: function (name, filename, css) {
    const stringHash = require('string-hash');
    const i = css.indexOf('.' + name);
    const line = css.substr(0, i).split(/[\\r\\n|\\n|\\r]/).length;
    const removedNewLineCharactersCss = css.replace(/(\\r\\n|\\n|\\r)/g, '');
    const hash = stringHash(removedNewLineCharactersCss).toString(36).substr(0, 5);
    return '_' + name + '_' + hash + '_' + line;
  },
})
```
</v-click>


---
layout: image-right
image: https://source.unsplash.com/L0xOtAnv94Y/1920x1080
---

# Struggles

- It takes a lot of time

<v-click>

=> You need to manage your time well

</v-click>

<v-click>

=> Always have a plan 

(A Good Plan Today is Better than a Perfect Plan Tomorrow)

</v-click>


---
layout: image-right
image: https://source.unsplash.com/Md73pphIB-U/1920x1080
---

# Struggles


- Since it's an open source project, many people will come to help you


<v-click>

- Not really

</v-click>

<v-click>

- Sometimes you want to give up/ archive the project

</v-click>

<v-click>

=> Why do you start OSS in the first place?

</v-click>


---
layout: image-right
image: https://source.unsplash.com/-8a5eJ1-mmQ/1920x1080
---

# Struggles

<v-click>

- Financially 💸

</v-click>

<v-click>

- GitHub Sponsors

</v-click>

<v-click>

- Open Collective

</v-click>

<v-click>

- Freemium model

</v-click>

<v-click>

- Just do it for fun

</v-click>


---

# What did I receive from doing open source software?


- Knowledge. A lot of knowledge.

<img src="/meme/knowledge.jpg" width="300" />


<v-click>

- Read open source code a lot => code reading/ debugging skills improved
- Understand how the tools you use everyday work under the hood => Better programmer



- Rabbit hole: Jest, Vite core, CRA core, Websocket, chokidar, shebang, PostCSS, Babel...

</v-click>


---

# What did I receive from doing open source software?


- **Opportunities:**



<v-click>

- Nominated for the Most Exciting Use of Technology, React Open Source Awards, React Summit
<img src="/jest-preview-nominee.png" width="300" class="mx-auto"/>
</v-click>

<v-click>

- Jobs: Companies reach out

</v-click>

<v-click>

- Conferences/ Tech events
<!-- Insert image -->

</v-click>


---

# What did I receive from doing open source software?


Know great developers:


- Twitter
<div class="flex gap-1 m-b-2">
<img src="/nw1.png" />
<img src="/nw2.png" />
</div>
<div class="flex gap-1 m-b-2">
<img src="/nw3.png" />
<img src="/nw4.png" />
</div>
<img src="/nw5.png" />


---

# What did I receive from doing open source software?


Know great developers:


- In-person

<div class="flex gap-1 m-b-2">
  <img src="/network/maya.jpg" class="object-cover" width="200" />
  <img src="/network/evan.jpg" class="object-cover" width="200" />
  <img src="/network/tan.jpg" class="object-cover" width="300" />
</div>

<!--
- Maya
- Tan Li Hau
- Evan You
-->

---

# What did I receive from doing open source software?


I received a lot of thanks:
<div class="flex gap-1 m-b-2">
  <img src="/thanks/thanks1.jpg" class="object-contain" width="300" />
  <img src="/thanks/thanks2.jpg" class="object-contain" width="200" />
  <img src="/thanks/thanks5.png" class="object-contain" width="300" />
</div>
<div class="flex gap-1 m-b-2">
  <img src="/thanks/thanks3.jpg" class="object-contain" width="250" />
  <img src="/thanks/thanks4.jpg" class="object-contain" width="250" />
  <img src="/thanks/thanks6.png" class="object-contain" width="280" />
</div>

<!--
=> Motivation for me to keep doing it . 9-5
-->

---
layout: image-right
image: https://source.unsplash.com/QUHuwyNgSA0
---

# So...


How to do that?


---
layout: center
class: text-center
---

# Some tips to start your OSS journey


---

# How to choose an open source project to work on?

- Should be projects you use every day
<Tweet id="1543771988333715456" scale="0.65" />

- Should solve your own problem


---

# Find a maintainer

- Building an OS project is hard and stressful. 
- It would be easier to have someone to discuss technical and motivate you to continue the project. 

<img src="https://pbs.twimg.com/media/FVxLXjtUYAESaYE?format=jpg&name=medium"  width="500"/>


---

# Do not start at 1.x

- A new project is full of PoC and experiments
- 1.x means your software must be backward compatible
- Major version zero (0.y.z) is for initial development. Anything MAY change at any time. The public API SHOULD NOT be considered stable.

<img src="/glass-broken.jpg" width="400" />


---

# Use your own software

- When you use it as a normal user, you know if you need to adjust or add more features to make it usable

<img src="/use-own-software.jpg" width="400" />


---

# Ask for feedback

- Your software can be subjective

<img src="https://pbs.twimg.com/media/FVxLZAkUsAAlP9L?format=jpg&name=medium" width="500"/>


---

# Learn from others

![](https://pbs.twimg.com/media/FVxLZjfUcAAcByv?format=jpg&name=900x900)

<!--
Do not reinvent the wheel. There is much good software out there already solved your problems. Learn from them, read their source code to see how they do.
-->

---
layout: iframe-right
url: https://www.jest-preview.com
---

# Write documentations

Use static site generator:
- If you prefer React: https://docusaurus.io
- If you prefer Vue: https://vitepress.vuejs.org


---
layout: two-cols
---

# Share it with the world

- Twitter
- Blog Posts
- Tech events

::right::

<Tweet id="1537041278956756992" scale="0.7" />

<!--
Last but not least
-->

---
layout: center
class: text-center
---

# Last but not least


---
layout: center
class: text-center
---

# Contribute to Open Source today

I hope you will have a lot of fun and learn a ton doing open source software.


---
layout: center
class: text-center
---

# Thanks for your attention!

Q&A
<div>
<img src="/qr-jest-preview.png" width="200" class="mx-auto" />
</div>

<p class="text-xs">Try <a href="https://github.com/nvh95/jest-preview" target="_blank">Jest Preview</a> and give it a star since it's free 😝</p>

<small>Slides available at <a href="https://jsconf.hung.dev/" target="_blank">https://jsconf.hung.dev/</a></small>
