import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";


gsap.registerPlugin(SplitText);

export const splitTextElements = (
    selector,
    type = "words, chars",
    addFirstChar = false
) => {

    const element = gsap.utils.toArray(selector)

    element.forEach((el) => {
        const splitText = new SplitText(el, {
            type,
            linesClass: 'line',
            wordsClass: 'word',
            charsClass: 'char'
        })

        if (type.includes('chars')) {
            splitText.chars.forEach((char, idx) => {
                const originalText = char.textContent;

                char.innerHTML = `<span>${originalText}</span>`;

                if (addFirstChar && idx === 0) {
                    char.classList.add('first-char')
                }
            })
        } else if (type.includes('lines')) {
            splitText.lines.forEach((line) => {
                const originalText = line.textContent;

                line.innerHTML = `<span class='line-span block'>${originalText}</span>`;
            })
        }
    })
}

