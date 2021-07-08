import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChartLine, faMobileAlt, faSearch, faShieldAlt, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

/**
* @author
* @class Header
**/
let i = 0;
class Header extends Component {
    //1. Property
    state = {
        ty: 0,
        y: '',
        z: 'd-none',
        slideRbox: {
            rot: 0,
            opact: 1
        }
    }

    //2. constructor

    //3.Method
    handleScroll = () => {
        console.log('ok' + window.scrollY);
        if (window.scrollY > 0) {
            //Add 
            //position-fixed top-0 start-0
            this.setState({ ty: -30 });
        } else {
            //Remove
            this.setState({ ty: 0 });
        }
        if (window.scrolly >= 787) {
            this.setState({ y: 'position-fixed aside d-none' });
            this.setState({ z: 'd-block' });

        } else {
            this.setState({ y: 'd-none' });
        }
    }
    asideNavShow = () => {
        this.setState({ y: 'position-fixed aside d-block' });
    }
    componentDidMount() {
        //This method will be called when page/component is loaded
        //object.method();
        window.addEventListener('scroll', this.handleScroll);
    }
    p_sliderrbox = (e) => {
        console.log('clicked');
        e.preventDefault();
        console.log(i);
        let curElem = e.currentTarget.closest('.p_sliderrbox');
        curElem.style.zIndex = '1000';
        curElem.style.opacity = 0;
        curElem.style.visibilty = 'hidden';
        curElem.style.transform = 'rotateZ(45deg)';
        console.log(curElem);

        if (i % 2 === 0) {
            console.log('prev');
            curElem.previousElementSibling.style.xIndex = '100';
            curElem.style.opacity = 1;
            curElem.style.transform = 'rotateZ(0deg)';
            i++;
        } else {
            console.log('next');
            curElem.nextElementSibling.style.xIndex = '1010';
            curElem.style.opacity = 1;
            curElem.style.transform = 'rotateZ(0deg)';
            i--;
        }

        // this.setState({slideRbox:{rot:45,opact:0}});
        // style={{ transform: 'rotateZ(' + this.state.slideRbox.rot + 'deg)', opacity: this.state.slideRbox }}
        //style={{ transform: 'rotateZ(' + this.state.slideRbox.rot + 'deg)', opacity: this.state.slideRbox }}
    }

    render() {
        return (
            <React.Fragment>

                <div className="modal cartModel" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" style={{ 'top': 53 + 'px' }}>
                        <div className="modal-content">
                            <div className="text-center position-relative">
                                <h5 className="modal-title p-3 mt-3 text-secondary" id="exampleModalLabel">Shopping Cart is empty!</h5>
                                <h5 className="modal-title p-3 text-secondary" id="exampleModalLabel22">BROWSE CATEGORIES</h5>
                                <button type="button" className="btn-close position-absolute" style={{ 'right': 30 + 'px', 'top': 30 + 'px' }} data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <ul className="list-unstyled">
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>
                                    <li><a href="#">Appliances</a></li>

                                </ul>
                            </div>
                            <div className="modal-footer d-flex justify-content-center">
                                <button type="button" className="btn btn-danger btn-lg ps-5 pe-5"> Start Shopping Now</button>
                            </div>
                            <p className="text-center">
                                <span className="me-3"><FontAwesomeIcon icon={faShieldAlt} /> Safe and Secure Payments</span>
                                <span><FontAwesomeIcon icon={faShieldAlt} />100% Payment Protection, Easy Returns Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
                <header className={'position-fixed w-100 top-0 start-0'} style={{transform:'translateY('+this.state.ty+'px)'}}>
                    <div className="p_header_top">
                        <div className="container p-0">
                            <span className="text-white">India's Fastest Online Shopping Destination</span>
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
                    <div className="p_header_bottom w-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-2">
                                    <a href="#" className="btn  mt-2 p-0 float-start">
                                        <img src="./logo.png" />
                                    </a>
                                    <a href="#" onMouseMove={this.asideNavShow} className={'mt-3 btn btn-sm btn-light float-end' + this.state.z}><FontAwesomeIcon icon={faBars} /></a>
                                </div>
                                <div className="col-7">
                                    <form className="mt-3 p_hfrom">
                                        <div className="row m-0">
                                            <div className="col-md-10 p-0 position-relative">
                                                <input placeholder="Search product &amp; brands" className="ps-5 h-100 rounded-0 form-control" />
                                                <div className="bg-white inputBox w-100 position-absolute"><h6 className="ps-3 mt-3"><FontAwesomeIcon icon={faChartLine} /> Trending Searches</h6>
                                                    <ul className="list-unstyled">
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Shoes For Girls</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Baby Girls Frock</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Boy Shoes</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Saree below 1000</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Plazzo pant</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Silk Saree</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">One Piece Dress</a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#">Full TShirt Men</a>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                            <div className="col-md-2 p-0">
                                                <div className="d-grid">
                                                    <button className="btn btn-dark rounded-0" type="submit"><FontAwesomeIcon icon={faSearch} />Search</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-3">
                                    <ul className="nav p_hbot_nav float-end">
                                        <li className="nav-item border-start border-end ">
                                            <a className="nav-link text-white" aria-current="page" href="#">Cart<FontAwesomeIcon className="fs-5" icon={faShoppingCart} /></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="pt-3 pb-3 text-white p_bl rounded-top" href="#">Sign in
                                                <span className="fauserbox"><FontAwesomeIcon className="fs-5" icon={faUser} /></span>
                                            </a>
                                            <ul className=" nav rounded-bottom">
                                                <li className="nav-item">
                                                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Link</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="#">Link</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                                                </li>
                                            </ul>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </header>
            </React.Fragment>
        )
    }
}


Header.propTypes = {}
export default Header