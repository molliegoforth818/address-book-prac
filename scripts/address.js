// Some starter code
const container = document.querySelector("#wishList")

document.querySelector("#saveWishList").addEventListener("click", event => {
    /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
    const thing = document.querySelector("#wishListItem").value
    const place = document.querySelector("#wishListLocation").value

    // Once you have collected all the values, update the DOM
    // with some HTML
    container.innerHTML += `
        <section>
            <h1>I can buy ${thing} at ${place}</h1>
        </section>
    `

})
