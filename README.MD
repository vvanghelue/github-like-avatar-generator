# Github-like random avatar generator

# Example :
![alt text](https://github.com/vvanghelue/github-like-avatar-generator/blob/main/example.png?raw=true)

https://codesandbox.io/s/generate-random-avatar-9mqum?file=/src/index.js

```bash
npm i --save github-like-avatar-generator
```

```javascript
import generateAvatar from "github-like-avatar-generator";

// directly get svg DOM element
let avatar = generateAvatar({
  blocks: 6, // must be multiple of two
  width: 100
});
document.querySelector("#app").appendChild(avatar.svgElement);


// or base64 fashion way
avatar = generateAvatar({
  blocks: 6, // must be multiple of two
  width: 100
});
const image = document.createElement("img");
image.src = avatar.base64;
document.querySelector("#app").appendChild(image);
```
