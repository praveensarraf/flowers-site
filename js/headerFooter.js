// Header
class myHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!-- Top-Nav -->
        <div class="top-nav">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 contact">
                        <div class="row">
                            <div class="col-5">
                                <a href="https://maps.app.goo.gl/FHifpA4xDuLTbBsw6" target="_blank"><i class="fa-solid fa-location-dot"></i> Muzaffarpur, Bihar, 802301</a>
                            </div>
                        
                            <div class="col-7">
                                <a href="tel:+917717796650"><i class="fa-solid fa-phone-volume"></i> +91 77177 96650</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 social">
                        <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://web.whatsapp.com" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <hr style="margin: 0;">

        <!-- Navbar starts from here -->
        <div id="topMenu">
            <nav class="navbar navbar-expand-lg py-lg-0" id="topMenuNav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="../index.html"><img src="../images/mylogo.png" alt="Praveen Kumar's Flowers Logo" title="Praveen Flowers Logo"></a>
                    
                    <button class="navbar-toggler mr-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContents" aria-controls="navbarContents" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarContents">
                        <ul class="navbar-nav mx-lg-auto me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                            </li>

                            <li class="nav-item dropdown" id="aboutDropdown">
                                <a class="nav-link dropdown-toggle dropdownHeading" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Flowers
                                </a>

                                <ul class="dropdown-menu dropdown-content" id="aboutDropdownMenu">
                                    <li><a class="dropdown-item" href="../pages/basket.html">Basket Arrangements</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/flowerbuquet.html">Flower Bouquet</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/basket.html">Best Sellers</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/Rose.html">Roses</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/lilly.html">Lilies</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/carnations.html">Carnations</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/orchid.html">Orchids</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/gerbera.html">Gerbera</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/mix.html">Mix Flowers</a></li>
                                </ul>
                            </li>

                            <li class="nav-item dropdown" id="servicesDropdown">
                                <a class="nav-link dropdown-toggle dropdownHeading" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Occasions
                                </a>
                                <ul class="dropdown-menu dropdown-content" id="servicesDropdownMenu">
                                    <li><a class="dropdown-item" href="../pages/birthday.html">Birthday Flowers</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/aniversy.html">Anniversary Flowers</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/Rose.html">Love & Romance</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/sorry.html">I'm Sorry</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/congratulation.html">Congratulations</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/getwellsoon.html">Get Well Soon</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/sympathy.html">Sympathy Funeral</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/valentineday.html">Valentines Day</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="../pages/birthday.html">Birthday</a>
                            </li>

                            <li class="nav-item dropdown" id="projectDropdown">
                                <a class="nav-link dropdown-toggle dropdownHeading" href="#"  role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Gifts
                                </a>

                                <ul class="dropdown-menu dropdown-content" id="projectDropdownMenu">
                                    <li><a class="dropdown-item" href="../pages/cake.html">Cakes</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/fruitbasket.html">Fruit Basket</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/baloonboquet.html">Balloon Bouquet</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/chacolet.html">Chocolate Bouquet</a></li>
                                    <li><hr class="dropdown-divider"></li>
                                    <li><a class="dropdown-item" href="../pages/flowerwithcake.html">Flowers with Cake</a></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="../pages/motherdayspecial.html">Mother's Day Special</a>
                            </li>
                        </ul>

                        <div id="signInBox2">
                            <ul>
                                <li><a href="../pages/signup.html" title="Sign Up"><i class="fa-regular fa-user"></i></a></li>
                                <li style="margin: 0 15px;"><a href="#" title="Search" id="searchLink2"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                                <li><a href="#" title="Cart"><i class="fa-solid fa-cart-shopping"></i></a></li>
                            </ul>
                        </div>
                    </div> 

                    <div id="signInBox">
                        <ul>
                            <li><a href="../pages/signup.html" title="Sign Up"><i class="fa-regular fa-user"></i></a></li>
                            <li style="margin: 0 15px;"><a href="#" title="Search" id="searchLink"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                            <li><a href="#" title="Cart"><i class="fa-solid fa-cart-shopping"></i></a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div class="container py-4" id="searchBox" style="display: none;">
                <div class="row">
                    <div class="col-7 col-md-10">
                        <input type="search" placeholder=" Type Something to Search Here" class="form-control w-100">
                    </div>
            
                    <div class="col-5 col-md-2">
                        <button type="button" class="btn btn-light searchBtn w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navbar closed here -->


        <!-- Top Marquee -->

        <marquee id="topMarquee">
           <span id="marqueeSpan1">Breaking</span> Best deal of the Month - Get upto 25% OFF on our all products. Use Promo "<span id="marqueeSpan2">PraveenKumar</span>"
        </marquee>

        <!-- Top Marquee closed here -->
        
        <hr class="m-0">
        <script src="searchBox.js"></script>
        `
    }
}

customElements.define('my-header', myHeader)




// ------------------------------------------------------------------------------------------------------------

// Footer
class myFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <!-- Footer starts from here -->
        <div class="container-fluid mt-2 pt-3 pb-0" id="footer">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <div class="d-flex justify-content-center" id="footerlogo">
                        <img src="../images/mylogo.png" alt="Praveen Kumar's Flowers Logo">
                    </div>

                    <p class="my-3" style="text-align: justify;">
                        Welcome to the Praveen Kumar's Flowers, where floral dreams bloom! Discover a vibrant array of fresh, hand-picked flowers to brighten any occasion. From elegant bouquets to charming arrangements, we offer a kaleidoscope of colors and fragrances to delight your senses. Whether it's a romantic gesture, a heartfelt apology, or a joyful celebration, let our exquisite blooms speak your language of love and appreciation. With easy browsing and secure checkout, let us be your trusted partner in spreading beauty, one blossom at a time.
                    </p>

                    <div id="footerConnect">
                        <div class="row my-2">
                            <div class="col-12">
                                <a href="mailto:kumar78praveen@gmail.com"><i class="fa-regular fa-envelope"></i> kumar78praveen@gmail.com</a>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <a href="tel:7717796650"><i class="fa-solid fa-phone-volume"></i> +91 77177 96650</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-2 col-sm-4 my-5 mx-sm-auto">
                    <h3 class="fw-bold">Quick Links</h3>

                    <ul class="mt-4" id="quickLinks">
                        <li><a target="_blank" href="#">About Us</a></li>
                        <li><a target="_blank" href="#">Occasions</a></li>
                        <li><a target="_blank" href="../pages/mix.html">Flowers</a></li>
                        <li><a target="_blank" href="../pages/gerbera.html">Gifts</a></li>
                        <li><a target="_blank" href="#">Blogs</a></li>
                        <li><a target="_blank" href="../pages/mix.html">Gallery</a></li>
                        <li><a target="_blank" href="#">Contact Us</a></li>
                        <li><a target="_blank" href="#">Career</a></li>
                    </ul>
                </div>

                <div class="col-md-2 col-sm-4 mt-sm-5 mx-sm-auto" id="footerOffice">
                    <div class="row">
                        <div class="col-12">
                            <h3 class="fw-bold">Head Office</h3>
                            <p class="mt-3">Bhagwanpur, Muzaffarpur,<br>Bihar, India,<br>842001</p>
                        </div>
                    </div>

                    <div class="row my-4">
                        <div class="col-12">
                            <h3 class="fw-bold">Branch Office</h3>
                            <p class="mt-3">Chhattarpur Enclave,<br>Chhattarpur, New Delhi, India,<br>110074</p>
                        </div>
                    </div>

                    <div class="row mt-md-3">
                        <div class="col-12">
                            <h3 class="fw-bold">Office Time</h3>
                            <p class="mt-3">Monday - Sunday<br>08:00 AM - 08:00 PM</p>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-4 col-sm-8 my-5 mx-sm-auto" id="footerStayTuned">
                    <div class="row">
                        <div class="col-12" style="text-align: justify;">
                            <h3 class="fw-bold">Stay Tuned With Us</h3>
                            <p class="mt-3">Stay in the loop with the latest floral trends, exclusive offers, and exciting updates by subscribing to our newsletter. Be the first to know about seasonal specials, new arrivals, and helpful tips for caring for your flowers. Join our growing community of flower enthusiasts and let's cultivate beauty together. Sign up today and never miss a petal.</p>
                        </div>
                    </div>

                    <div class="row" id="footerSubscribe">
                        <div class="col-12 mt-4 form-group">
                            <input type="email" class="form-control" placeholder=" Email Address">

                            <div class="d-grid mt-3">
                                <button class="btn btn-light">Subscribe Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-4 mb-2">

            <div class="row" id="footerCopyright">
                <div class="col-md-4 text-center" id="copyright">
                    <p>copyright @2024 <span><a href="#" id="copyrightAnchor">Praveen Kumar's Flowers</a></span><br>- all rights reserved</p>
                </div>

                <div class="col-md-3 mt-md-0 mt-3" id="footarSocial">
                    <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                    <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://web.whatsapp.com" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
            </div>
        </div>
        <!-- Footer closed here -->
        `
        
    }
}

customElements.define('my-footer', myFooter)