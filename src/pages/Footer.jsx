import './footer.css'

function Footer(){
    return(
        <>
      <div className='footer'>
        <div className="wa">

            <div className='about'>
           <div>  Sign to our news letter we will let you know <br></br>when we have new arrivals and stocks <br></br>
            just a friendly hi now and again!!
            </div>

            <div className='jn'>JOIN NOW</div>
            
            </div>

            <div className='email'>
                <input placeholder='Enter your email address' className='in'></input>
                <div className='jn'>SUBMIT</div>
            </div>

           
        </div>
        <div className='cy'>
            copywright@shopsphere2024
            </div>
        
            </div>
        </>
    )
}
export default Footer;