import "./body.css"

const Body = () => {
    return(
        <div className="body">
             <h2 className="bodyHeader">Pepsi <span>Classic</span></h2>
          <div className="bodyContainer">
              <div className="bodyDesc">
                <p>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with
                  <div>
                    <button className="bodyDescButton">Buy Now</button>
                  </div>
                </p>
               

                <div className="bodyImg">
                <img src="image/pepps.png" alt="" className="bodyDescImg" />  
              </div>  
              </div>

                          
          </div>
      </div>    
    )
}

export default Body