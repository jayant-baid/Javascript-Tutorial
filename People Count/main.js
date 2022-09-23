// This makes the value 0 to 5
// document.getElementById("count-el").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

//          html doc get me the element that has id count-el
let countEL = document.getElementById("count-el")


// SAVE KE ANDAR CHANGES
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")

// console.log(countEL)
// console.log(saveEl)
let count = 0

function increment() {
    // we add console to find bug easily, when bug encounters
    // console.log("clicked")
    count++
    //   Inside text in that element(h2 element)
    countEL.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

    if (count != 0) {
        let countStr = count + " -  "
        // saveEl.innerText += countStr
        /* innerText me spacing dhang se nhi aa rhi dash ke baad wali space include nhi ho rhi
    
        MDN REFERENCES
    1.  textContent gets the content of all elements, including <script> and <style> elements. In contrast, innerText only shows "human-readable" elements.
    2.  textContent returns every element in the node. In contrast, innerText is aware of styling and won't return the text of "hidden" elements. 
    MTLB innerText last space jo kind of hidden h usse return nhi karta h
    */
        saveEl.textContent += countStr
        // When we hit save, count should go to 0 & 0 should be displayed
        count = 0
        countEL.textContent = 0
    }
    // console.log(count)
}
