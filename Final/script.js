let prevButton = document.querySelector("button.previous");
let nextButton = document.querySelector("button.next");
prevButton.addEventListener('click', previous);
nextButton.addEventListener('click', next);

let theTxt = document.querySelector('p');

let textArray = ["The McLuhan reading was an interesting read for class. I particularly enjoyed reading about how McLuhan described technology as mediums through which information is conveyed.", 
                "The medium that McLuhan refers to is defined as the device or way that individuals receive information. McLuhan emphasizes the technology or medium as the core catalyst of change rather than the content or media that it is transmitting.",
                "Examples of such a medium include the Internet, the printing press, the mobile phone and the television. All of these technologies, in their own time, spurred great change, whereas the content that they produced was not the main catalyst.",
                "I also personally really liked the formatting and the style of the text with its spacing and formatting throughout the book. It was a really engaging and interesting way to present ideas, and it wasn't really boring to read the whole thing."]

let i = 0;
theTxt.textContent = textArray[i];

function previous(){
    if (i > 0){
        i = i-1;
    } else {
        i = textArray.length - 1;
    }

    theTxt.textContent = textArray[i];
}

function next(){
    if (i < textArray.length - 1){
        i = i+1;
    } else {
        i = 0;
    }
    
    theTxt.textContent = textArray[i];
}