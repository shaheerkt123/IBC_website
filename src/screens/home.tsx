import React from "react";
export const HomeScreen = () => {
  return (
    <html lang="eng">
      <head>
        <meta charSet="utf-8" />
        <meta
          name={"viewport"}
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Index</title>
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/plugins/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/font/flaticon.css" />
        <link rel="stylesheet" href="assets/css/all.min.css" />
        <link rel="stylesheet" href="assets/css/fontawsom-all.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
      </head>

      <body>
        <header>
          <div className="my-nav">
            <div className="container">
              <div className="nav-items">
                <div className="menu-toggle">
                  <div className="menu-burger"></div>
                </div>
                <div className="logo">
                  <img
                    // style="border-radius: 10px; width: 153px; height: 45px"
                    src="..assets/images/logo/logo.png"
                  />
                </div>

                <div className="menu-items">
                  <div className="menu">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="services-india.html">Services</a>
                      </li>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="contact-us.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main>
          <section className="slider">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-ride="carousel"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="banner-content">
                    <span
                    //  style="color: white; font-size: 50px"
                    >
                      Welcome to IBC
                    </span>
                    <span
                    //  style="color: white"
                    >
                      Your partner in incorporations and business consultancy
                    </span>
                    <ol>
                      <li>
                        <a href="#">Learn More</a>
                      </li>
                      <li>
                        <a href="#">Get In Touch</a>
                      </li>
                    </ol>
                  </div>
                  <img
                    className="d-block w-100"
                    src="assets/images/banner/slider-01.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <div className="banner-content">
                    <h1>
                      Making your business <span>ideas Come true</span>
                    </h1>
                    <ol>
                      <li>
                        <a href="#">Learn More</a>
                      </li>
                      <li>
                        <a href="#">Get In Touch</a>
                      </li>
                    </ol>
                  </div>
                  <img
                    className="d-block w-100"
                    src="assets/images/banner/slider-02.jpg"
                  />
                </div>
                <div className="carousel-item">
                  <div className="banner-content">
                    <h1>
                      Making your business <span>ideas Come true</span>
                    </h1>
                    <ol>
                      <li>
                        <a href="#">Learn More</a>
                      </li>
                      <li>
                        <a href="#">Get In Touch</a>
                      </li>
                    </ol>
                  </div>
                  <img
                    className="d-block w-100"
                    src="assets/images/banner/slider-03.jpg"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-01">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    <span>What We Offer</span>
                    <h2>Only unique solutions for business</h2>
                    <p>
                      Unlock your business potential with our expert services in
                      Company Incorporation, LLP Incorporation, Trust/Society
                      Formation, and Partnership Establishment.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="wrapper">
                    <div className="icons">
                      <i className="flaticon-data-driven"></i>
                    </div>
                    <div className="content w-100">
                      <h4>Cost Consultancy</h4>
                      <p>
                        Identify and implement cost-saving opportunities to
                        enhance operational efficiency and financial
                        sustainability.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="wrapper">
                    <div className="icons">
                      <i className="flaticon-money"></i>
                    </div>
                    <div className="content w-100">
                      <h4>Pricing</h4>
                      <p>
                        Develop competitive and profitable pricing strategies
                        through market analysis and cost structure evaluation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                  <div className="wrapper">
                    <div className="icons">
                      <i className="flaticon-computer"></i>
                    </div>
                    <div className="content w-100">
                      <h4>Budgeting</h4>
                      <p>
                        Create accurate and efficient budgets to align with
                        business objectives and monitor financial performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-02">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="image">
                    <img src="assets/images/abt-img/1000-1000.jpg" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="heading">
                    <span>How we work</span>
                    <h2>find a new competitive edge</h2>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Laudantium officia doloremque praesentium ullam odio eaque
                      ab consectetur voluptas vel nostrum doloribus
                    </p>
                  </div>

                  <div className="wrapper">
                    <div className="row">
                      <div className="col-md-6 col-sm-12">
                        <div className="icon">
                          <i className="flaticon-archer"></i>
                          <h4>15</h4>
                          <h5>years of experience</h5>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="icon">
                          <i className="flaticon-customer-satisfaction"></i>
                          <h4>255</h4>
                          <h5>truster clients</h5>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="icon">
                          <i className="flaticon-video-call"></i>
                          <h4>20</h4>
                          <h5>visited Conferences</h5>
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-12">
                        <div className="icon">
                          <i className="flaticon-medal"></i>
                          <h4>40</h4>
                          <h5>master certifications</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-03">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    <span>Services</span>
                    <h2>
                      We position our clients at the forefront of their field by
                      advancing an agenda.
                    </h2>
                    <p>
                      Easily apply to multiple jobs with one click! Quick Apply
                      shows you recommended jobs based off your most recent
                      search and allows you to apply to 25+ jobs in a matter of
                      seconds!
                    </p>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="wrapper">
                    <div className="content">
                      <i className="flaticon-flowchart"></i>
                      <h4>Business Planning</h4>
                      <p>
                        We develop the relationships that underpin the next
                        phase in your organisation’s growth. We do this
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="wrapper">
                    <div className="content">
                      <i className="flaticon-coding"></i>
                      <h4>Program management</h4>
                      <p>
                        The development of your next business plan will be
                        executed by a brilliant team who will indicate your
                        grand success.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="wrapper">
                    <div className="content">
                      <i className="flaticon-chess-pieces"></i>
                      <h4>Strategy</h4>
                      <p>
                        The development of your next business plan will be
                        executed by a brilliant team who will indicate your
                        grand success.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="wrapper">
                    <div className="content">
                      <i className="flaticon-research"></i>
                      <h4>chart management</h4>
                      <p>
                        The development of your next business plan will be
                        executed by a brilliant team who will indicate your
                        grand success.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="wrapper">
                    <div className="content">
                      <i className="flaticon-optimization"></i>
                      <h4>SEO Optimization</h4>
                      <p>
                        The development of your next business plan will be
                        executed by a brilliant team who will indicate your
                        grand success.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-6">
                  <div className="wrapper">
                    <div className="content">
                      <i className="flaticon-market-research"></i>
                      <h4>Market Research</h4>
                      <p>
                        The development of your next business plan will be
                        executed by a brilliant team who will indicate your
                        grand success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/*<!-- <section className="bg-04">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h2>
                  Flexible Plans For <br />
                  Small To Fast-Growing Company.
                </h2>
                <p>Switch to annual plan and get 25% offer.</p>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="wrapper">
                <div className="head-content">
                  <div
                    className="d-flex align-items-center flex-wrap justify-content-between"
                  >
                    <h4>Basic Blan</h4>
                    <h5>$20.00 <span>/ mo</span></h5>
                  </div>
                </div>
                <div className="inner-content">
                  <div className="list-content">
                    <h5>Most Recommended</h5>
                  </div>
                  <h6>
                    Power of choice is untrammelled and do what we like best.
                  </h6>
                  <ol>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>4-5 Weeks from to
                      finish
                    </li>
                    <li>
                      <i className="fal fa-arrow-circle-right"></i>Data sprint
                    </li>
                    <li>
                      <i className="fal fa-arrow-circle-right"></i>Results revision
                    </li>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>20 Days of support
                    </li>
                  </ol>
                  <a href="#">Get Started a free trail</a>
                  <p>no credit card required</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="wrapper">
                <div className="head-content">
                  <div
                    className="d-flex align-items-center flex-wrap justify-content-between"
                  >
                    <h4>for Large Business</h4>
                    <h5>$30.00 <span>/ mo</span></h5>
                  </div>
                </div>
                <div className="inner-content">
                  <div className="list-content">
                    <h5 className="active-plan">Most Recommended</h5>
                  </div>
                  <h6>
                    Power of choice is untrammelled and do what we like best.
                  </h6>
                  <ol>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>4-5 Weeks from to
                      finish
                    </li>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>Data sprint
                    </li>
                    <li>
                      <i className="fal fa-arrow-circle-right"></i>Results revision
                    </li>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>20 Days of support
                    </li>
                  </ol>
                  <a className="active-a" href="#">Get Started a free trail</a>
                  <p>no credit card required</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="wrapper">
                <div className="head-content">
                  <div
                    className="d-flex align-items-center flex-wrap justify-content-between"
                  >
                    <h4>Advanced Pack</h4>
                    <h5>$50.00 <span>/ mo</span></h5>
                  </div>
                </div>
                <div className="inner-content">
                  <div className="list-content">
                    <h5>Most Recommended</h5>
                  </div>
                  <h6>
                    Power of choice is untrammelled and do what we like best.
                  </h6>
                  <ol>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>4-5 Weeks from to
                      finish
                    </li>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>Data sprint
                    </li>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>Results revision
                    </li>
                    <li className="se-color">
                      <i className="fal fa-check-circle"></i>20 Days of support
                    </li>
                  </ol>
                  <a href="#">Get Started a free trail</a>
                  <p>no credit card required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->*/}

          <section className="textimonial-client">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    <h2>
                      <span>Testimonials</span>
                    </h2>
                  </div>
                </div>
                <div className="col-12">
                  <div className="wrapper">
                    <div
                      id="custCarousel-02"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <div className="content">
                            <h3>Hisham, CEO</h3>
                            <p>
                              IBC made our company incorporation process smooth
                              and hassle-free. Highly recommended!
                            </p>
                            <a>
                              <img src="assets/images/team/1.jpg" />
                            </a>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <div className="content">
                            <h3>Hisham2, CFO</h3>
                            <p>
                              Their consultancy services helped us optimize our
                              budget and improve cost efficiency.
                            </p>
                            <a>
                              <img src="assets/images/team/2.jpg" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="0"
                          className="active"
                        ></li>
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to="1"
                        ></li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-05">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    <h2>Our Team</h2>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="team-wrapper">
                    <div className="team-img">
                      <img src="assets/images/team/1.jpg" />
                    </div>
                    <div className="team-content">
                      <h3>James</h3>
                      <p>Designer</p>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="team-wrapper">
                    <div className="team-img">
                      <img src="assets/images/team/3.jpg" />
                    </div>
                    <div className="team-content">
                      <h3>Albert</h3>
                      <p>Art Designer</p>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="team-wrapper">
                    <div className="team-img">
                      <img src="assets/images/team/2.jpg" />
                    </div>
                    <div className="team-content">
                      <h3>Johns</h3>
                      <p>SEO</p>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                  <div className="team-wrapper">
                    <div className="team-img">
                      <img src="assets/images/team/4.jpg" />
                    </div>
                    <div className="team-content">
                      <h3>Smith</h3>
                      <p>Developer</p>
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-google-plus-g"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-behance"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-06">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    <h2>Our News</h2>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <article className="blog-sub">
                    <div className="blog-content">
                      <img src="assets/images/blog/1.jpg" />
                    </div>
                    <div className="blog-content-section">
                      <div className="blo-content-title">
                        <h4>The National Minimum Wage Is An Important Part</h4>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Neque at numquam, asperiores aut praesentium
                          facilis ratione! Voluptatibus neque dignissimos ipsa
                          atque veniam sint omnis in blanditiis, nemo fugit
                          animi assumenda.
                        </p>
                      </div>
                      <div className="blog-admin">
                        <ol>
                          <li>
                            <i className="fal fa-user-tie"></i> By Admin
                          </li>
                          <li>
                            <i className="fal fa-calendar-alt"></i> july 28,
                            2020
                          </li>
                        </ol>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <article className="blog-sub">
                    <div className="blog-content">
                      <img src="assets/images/blog/2.jpg" />
                    </div>
                    <div className="blog-content-section">
                      <div className="blo-content-title">
                        <h4>The National Minimum Wage Is An Important Part</h4>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Neque at numquam, asperiores aut praesentium
                          facilis ratione! Voluptatibus neque dignissimos ipsa
                          atque veniam sint omnis in blanditiis, nemo fugit
                          animi assumenda.
                        </p>
                      </div>
                      <div className="blog-admin">
                        <ol>
                          <li>
                            <i className="fal fa-user-tie"></i> By Admin
                          </li>
                          <li>
                            <i className="fal fa-calendar-alt"></i> july 28,
                            2020
                          </li>
                        </ol>
                      </div>
                    </div>
                  </article>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <article className="blog-sub">
                    <div className="blog-content">
                      <img src="assets/images/blog/3.jpg" />
                    </div>
                    <div className="blog-content-section">
                      <div className="blo-content-title">
                        <h4>The National Minimum Wage Is An Important Part</h4>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Neque at numquam, asperiores aut praesentium
                          facilis ratione! Voluptatibus neque dignissimos ipsa
                          atque veniam sint omnis in blanditiis, nemo fugit
                          animi assumenda.
                        </p>
                      </div>
                      <div className="blog-admin">
                        <ol>
                          <li>
                            <i className="fal fa-user-tie"></i> By Admin
                          </li>
                          <li>
                            <i className="fal fa-calendar-alt"></i> july 28,
                            2020
                          </li>
                        </ol>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="wrapper">
                  <div className="content">
                    <h2>About Us</h2>
                    <p>
                      We’re reimagining how you buy, sell and rent. It’s now
                      easier to get into a place you love. So let’s do this,
                      together.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="wrapper">
                  <div className="content">
                    <h2>Quick Links</h2>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="wrapper">
                  <div className="content">
                    <h2>contact us</h2>
                    <ol>
                      <li>info@findhouse.com</li>
                      <li>Collins Street West, Victoria 8007, Australia.</li>
                      <li>+1 246-345-0695</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="wrapper">
                  <div className="content">
                    <h2>follow us</h2>
                    <div className="social-media">
                      <ol>
                        <li>
                          <i className="fab fa-facebook-f"></i>
                        </li>
                        <li>
                          <i className="fab fa-twitter"></i>
                        </li>
                        <li>
                          <i className="fab fa-instagram"></i>
                        </li>
                        <li>
                          <i className="fab fa-pinterest-p"></i>
                        </li>
                        <li>
                          <i className="fab fa-dribbble"></i>
                        </li>
                        <li>
                          <i className="fab fa-google"></i>
                        </li>
                      </ol>
                    </div>
                    <h2>subscribe</h2>
                    <div className="submit-card">
                      <div className="form-group">
                        <input
                          className="form-control"
                          name="email"
                          placeholder="Your Email"
                        />
                        <i className="fal fa-chevron-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>

      <script src="assets/js/jquery-3.2.1.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/plugins/owl.carousel.min.js"></script>
      <script src="assets/js/script.js"></script>
    </html>
  );
};
