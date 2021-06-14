import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'


//this is a functional component
function App() {
  return (
    <div>
      <header>
        <div className="p_header_top">
          <div className="container p-0">
            <ul className="nav float-end">
              <li className="nav-item">
                <a className="nav-link p-1 ps-3 active text-white" aria-current="page" href="#"> Gift Cards </a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-1 ps-3 text-white" href="#">Help Center</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-1 ps-3 text-white" href="#"> Sell On Snapdeal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-1 ps-3 text-white" href="#" ><FontAwesomeIcon icon={faMobileAlt} />Download App</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p_header_bottom">
          <div className="container"></div>
        </div>

      </header>
      <div className="p_main pb-5">
        <div className="container p-0 p_main1 mt-3">
          <div className="row m-0 p_main1_b1">
            <div className="col-2">A</div>
            <div className="col-10">
              <div className="p_slider row">
                <div className="col-10">
                  <div id="carouselExampleIndicators" className="carousel slide h-100" data-bs-ride="carousel">
                    <div className="bg-white carousel-indicators m-0 justify-content-center">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active m-0" aria-current="true" aria-label="Slide 1">Men's Apparel</button>
                      <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">Sarees</button>
                      <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">Kid's Apparel</button>
                      <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4">Men's Sports Wear</button>
                      <button className="m-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5">Bed Sheets</button>
                    </div>
                    <div className="carousel-inner h-100">
                      <div className="carousel-item  active">
                        <img src="./images/slider/1.jpg" className="h-100 w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="./images/slider/2.jpg" className="h-100 w-100 " alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="./images/slider/3.jpg" className="h-100 w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="./images/slider/4.jpg" className="h-100 w-100" alt="..." />
                      </div>
                      <div className="carousel-item">
                        <img src="./images/slider/5.jpg" className="h-100 w-100" alt="..." />
                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="col-2">B</div>

              </div>

              <div className="p_trending_products"></div>
            </div>
          </div>
        </div>
        <div className="container-fluid p_main2 "></div>
      </div>
      <footer>
        <div className="container p_foot1"></div>
        <div className="container p_foot2"></div>
        <div className="container p_foot3"></div>
      </footer>
    </div>
  );
}

export default App;
