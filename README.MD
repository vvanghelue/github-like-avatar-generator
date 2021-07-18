# Github-like random avatar generator

```bash
npm i --save github-like-avatar-generator
```

```javascript
import generateAvatar from "github-like-avatar-generator";

let avatar = generateAvatar({
  blocks: 6, // must be multiple of two
  width: 100
});

// get directly a SVG element
document.querySelector("#app").appendChild(avatar.svg);



// ...
avatar = generateAvatar({
  blocks: 6, // must be multiple of two
  width: 100
});
// or base64 fashion way
const image = document.createElement("img");
image.style.marginLeft = "50px";
image.src = avatar.base64;
document.querySelector("#app").appendChild(image);

```

# Example :
![alt text](https://github.com/vvanghelue/github-like-avatar-generator/blob/main/example.png?raw=true)
