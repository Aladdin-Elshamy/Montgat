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

/**
 * Calculates the image index based on the given index.
 *
 * @param {number} index - The index to calculate the image index for.
 * @return {number} The calculated image index.
 */
export function categoryImgIndex(index:number): number{
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

/**
 * Generates an array of unique random colors.
 *
 * @param {number} maxElements - The maximum number of elements in the generated array.
 * @return {string[]} An array of unique random colors.
 */
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


export function commaAdder(num: number) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}