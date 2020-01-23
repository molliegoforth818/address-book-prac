const container = document.getElementById("container")
// container is where i want the below actions to happen id needs to match in html //

document.getElementById("saveWishlist").addEventListener("click", event => {
    /*
        "saveWishlist" is the button you are creating so the id of the button needs to match
        with the above id and 
        you want it to listen to the event of being clicked on
    */

   // these are the fields you are populating below//
    const thing = document.querySelector("#wishListItem").value
    const place = document.querySelector("#wishListLocation").value

    /* Once you have collected all the values, update the DOM with some HTML
    make sure your HTML matches 
    */
    container.innerHTML += `
    <section>  
    <div id="container"></div>      
    <h1> I can purchase ${thing} at ${place}</h1>
    </section>
    `

})
