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