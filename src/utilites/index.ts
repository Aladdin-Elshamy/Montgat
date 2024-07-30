import { colors } from "../data"

/**
 * Slices a given text to a specified limit and appends '...' if the text is longer than the limit.
 *
 * @param text - The text to be sliced.
 * @param limit - The maximum length of the returned text. Defaults to 50.
 * @returns The sliced text with '...' appended if the original text is longer than the limit.
 */
export function textSlicer(text : string,limit = 50) : string {
    if(text.length > limit){
        return text.slice(0,limit) + '...'
    }
    return text
}

export function categoryImgIndex(index:number){
    console.log(index)
    let imgIndex = 0
    if(index >= 5 && index < 7){
        imgIndex = 1
    }
    else if(index >= 7  && index < 9){
        imgIndex = 2
    }
    else if(index >= 9 && index < 12){
        imgIndex = 3
    }
    else if(index >= 12 && index < 16){
        imgIndex = 4
    }
    return imgIndex
}

export function generateRandomUniqueColors(maxElements: number): string[] {
    const uniqueColors: string[] = [];
    const colorsLength = colors.length;
  
    while (uniqueColors.length < maxElements && uniqueColors.length < colorsLength) {
      const randomIndex = Math.floor(Math.random() * colorsLength);
      const randomColor = colors[randomIndex];
  
      if (!uniqueColors.includes(randomColor)) {
        uniqueColors.push(randomColor);
      }
    }
  
    return uniqueColors;
}