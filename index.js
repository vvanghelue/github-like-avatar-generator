function getRandomColor({ canBeBlank = true }) {
    if (canBeBlank && Math.random() < 0.3) {
      return "#FFFFFFAA";
    }
    return `hsl(${Math.floor(Math.random() * 256)}, 100%, 80%)`;
  }
  
  export default function generateAvatar({
    blocks = 6,
    width = 100,
    fromPixels
  }) {
    const blockSize = width / blocks;
  
    let pixels;
  
    if (fromPixels) {
      pixels = fromPixels;
    } else {
      pixels = new Array((blocks * blocks) / 2).fill(null).map((i, k) => {
        if (blocks === 4) {
          return getRandomColor({ canBeBlank: ![4, 5, 6].includes(k) });
        }
        if (blocks === 6) {
          return getRandomColor({ canBeBlank: ![13, 14].includes(k) });
        }
        return getRandomColor({});
      });
    }
  
    let pixelHTML = "";
    let pixelCursor = 0;
    for (let i = 0; i < blocks / 2; i++) {
      for (let j = 0; j < blocks; j++) {
        pixelHTML += `
          <rect 
            fill="${pixels[pixelCursor]}" 
            x="${blockSize * i}" 
            y="${blockSize * j}" 
            width="${blockSize}" 
            height="${blockSize}"
          ></rect>
        `;
        pixelCursor++;
      }
    }
  
    pixelCursor = 0;
    for (let i = blocks - 1; i > blocks / 2 - 1; i--) {
      for (let j = 0; j < blocks; j++) {
        pixelHTML += `
          <rect 
            fill="${pixels[pixelCursor]}" 
            x="${blockSize * i}" 
            y="${blockSize * j}" 
            width="${blockSize}" 
            height="${blockSize}"
          ></rect>
        `;
        pixelCursor++;
      }
    }
  
    const svgCode = `
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="${width}" 
        height="${width}" 
        version="1.1"
      >
        <rect 
          fill="#cccccc" 
          x="0" 
          y="0" 
          width="${width}" 
          height="${width}"
        ></rect>
        
        ${pixelHTML}
      </svg>
    `;
    var parser = new DOMParser();
    var doc = parser.parseFromString(svgCode, "image/svg+xml");
  
    return {
      svg: doc.firstChild,
      base64: `data:image/svg+xml;base64,${btoa(doc.firstChild.outerHTML)}`,
      pixels
    };
  }
  