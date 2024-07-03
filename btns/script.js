let card = `<section class="card">
        <h1>Are You Sure, You Want To Follow This Button? </h1>
        <div class="btn">
            <ul>
                <li class="yes">Yes</li>
                <li class="no">No</li>
            </ul>
        </div>
    </section>`

document.querySelectorAll(".link").forEach(element => {
    element.addEventListener("click", () => {
        console.log("clicked");
        document.body.innerHTML = card
        document.querySelector(".yes").addEventListener("click", ()=>{
            console.log("clicked yes");
            window.close()
        })
        let d=document.querySelector(".no");
        d.addEventListener("click", () => {
            console.log("clicked no");
            document.body.innerHTML = `<div class="buttons">
                <ul>
                    <li class="link">
                        
                            Get 10$
                        
                    </li>
                    <li class="link">
                        
                            Get 100$
                        
                    </li>
                    <li class="link">
                        
                            Get 1000$
                        
                    </li>
                </ul>
            </div>
            <script src="script.js"></script>`
        })

    })    
});    
