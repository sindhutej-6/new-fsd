import t1 from './images/t1.png'
import t2 from './images/t2.png'
import t3 from './images/t3.png'
import t4 from './images/t4.png'
import t5 from './images/t5.png'
import t6 from './images/t6.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import CCNA from './images/CCNA.png'
import juniper from './images/juniper.png'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';


function Home(){
    setTimeout(image1,2000)
                function image1(){
                    
                    document.getElementById('one').setAttribute('src',t1)
                    setTimeout(image2,3000)
                }
                function image2() {
                
                document.getElementById('one').setAttribute('src',t2)
                
                setTimeout(image3,3000)
                
                }
                function image3(){
                    
                    document.getElementById('one').setAttribute('src',t3)
                    
                    setTimeout(image4,3000)
                }
                function image4() {
                
                document.getElementById('one').setAttribute('src',t4)
                
                setTimeout(image5,3000)
                
                }
                function image5(){
                    
                    document.getElementById('one').setAttribute('src',t5)
                    
                    setTimeout(image6,3000)
                }
                function image6(){
                    
                    document.getElementById('one').setAttribute('src',t6)
                    
                    setTimeout(image1,3000)
                }
    return(
        <>
        <div>
        <img src={t1} id="one"/>
        </div>
        <div className='Container'>
            <div className='row'>
            <div className='col-12 ' id='two'>
                <h4 >What we offer</h4>
            </div>
            </div>
            <div className='row'>
                <div className='col-4 ' id='icondiv'>
                        <div >
                            <img src={icon1} id='icon1'></img>
                        </div>
                    <div className='row'>
                        <div className='col-12 '>
                            <h5 id='icon1-a'>Certification</h5>
                            <p id='content'>We offer a wide range of globally recognized certifications from reputed organizations like Cisco, Red Hat, AWS, Microsoft and Automation Anywhere. These certifications are issued directly by the vendor and are accepted worldwide.</p>
                        </div>
                    </div>    
                </div>
            
                <div className='col-4 ' id='icondiv'>
                        <div >
                            <img src={icon2} id='icon1'></img>
                        </div>
                    <div className='row'>
                        <div className='col-12 '>
                            <h5 id='icon1-a'>Placements</h5>
                            <p id='content'>We regularly conduct mock interviews with the help of experienced professionals. These interviews help prepare our trainees for their future placements and help them analyze and upgrade their skills accordingly.</p>
                        </div>
                    </div>    
                </div>
                <div className='col-4 ' id='icondiv'>
                        <div >
                            <img src={icon3} id='icon1'></img>
                        </div>
                    <div className='row'>
                        <div className='col-12 ' >
                            <h5 id='icon1-a'>Product Development</h5>
                            <p id='content'>Our in-house development team focuses on providing the best to our customers. Whether you're looking for a custom build product or in house automation, our products are guaranteed to help make your work easier.</p>
                        </div>
                    </div>    
                </div>
            </div>
            <div className='row'>
                <div className='col-12 ' id='thirddiv'>
                    <div className='row'>
                    <div className='col-6 '>
                    <h1 className='thirddiva'>Technical Hub</h1>
                    <h4 className='thirddivb'>#Ready to hire</h4><br></br>
                    <p id='content'>Founded back on the 3rd of February 2016, our journey has been quite an adventurously successful one. Over time our team has taken up commercial
                    and social projects and developed apps, games, softwares, websites and a whole lot more.
                    Our experienced developers are certified in an array of languages and can handle anything that comes their way.</p>
                    </div>
                    <div className='col-6 '>
                       <div className='framelayer1'>
                        <div className='framelayer2'>
                        <iframe  src="https://www.youtube.com/embed/J1AaijZLehQ?si=YYJw6gIFTeypqYWZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                        </div>
                       </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12' id='fourthdiv'>
                    <div className='row'>
                        <div className='col-5'>
                            <h1 className='fourthdiva'>Get<br></br> Certified
                            </h1><br></br>
                            <p id='content'>Technical Hub provides the trainings which are certification aligned and associated with various vendors that
                             are top in the industry. Members who are part of this program are given a constant practical example on various topics, thus
                             keeping them abreast of their technological world.</p>
                        </div>
                        <div className='col-7'>
                            <img src={CCNA}></img>
                            <img src={juniper}></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12' id='fifthdiv'>
                    <center><h4>Our Learning Paths</h4><br></br>
                    <a href='' id='link'>Competitative coding</a><a href='' id='link'>T-Shaped Engineer</a><a href='' id="link">Drive Ready</a>
                    </center>
                    <div className='col-12' id='fifthdiv2'>
                        hello
                    </div>
                
                </div>
                
            </div>
            </div>
        </div>
        
        </>  
    )
}
export default Home 