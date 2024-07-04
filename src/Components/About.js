import React from "react";
import "../App.css";
import "../css/bootstrap.css";
import "../css/style.css";
import bgDecor9 from "../images/bg-decor-9.png";
import bgDecor10 from "../images/bg-decor-10.png";
import picI from "../assets/picI.jpg";

import vintageCollage from "../assets/one.jpg";

const About = () => {
  const features = [
    {
      icon: "linear-icon-feather",
      title: "Clean and Crispy Design",
      description:
        "Element is crafted by top industry leaders with love, care and customer needs in mind.",
    },
    {
      icon: "linear-icon-menu3",
      title: "Novi Builder",
      description:
        "Use our Novi Builder to customize and update your website within seconds.",
    },
    {
      icon: "linear-icon-bag2",
      title: "Advanced UI Toolkit",
      description:
        "Element comes with a powerful and flexible extended toolkit in addition to basic Bootstrap.",
    },
    {
      icon: "linear-icon-rocket",
      title: "Built For Speed",
      description:
        "Our template was built for speed. Get the best results at GTmetrix and Google PageSpeed.",
    },
    {
      icon: "linear-icon-equalizer",
      title: "Flexible and Multipurpose",
      description:
        "Element allows creating various websites for complex and scalable projects.",
    },
    {
      icon: "linear-icon-file-search",
      title: "SEO Friendly",
      description:
        "Valid code and performance optimized framework make SEO easy and hassle free.",
    },
  ];

  const aboutUsItems = [
    {
      icon: "linear-icon-menu3",
      title: "Award-winning designs",
      description:
        "We have received numerous awards for our designs, concepts, and ideas.",
    },
    {
      icon: "linear-icon-users2",
      title: "Expert team",
      description:
        "We are a team of dedicated web design and development professionals.",
    },
  ];

  const progressItems = [
    { title: "Dedication", value: 49 },
    { title: "Experience", value: 29 },
    { title: "Creativity", value: 86 },
  ];

  const accordionItems = [
    {
      headingId: "accordionHeading1",
      collapseId: "accordionCollapse1",
      title: "What are the advantages of purchasing a website template?",
      content:
        "The major advantage is price: You get a high quality design for just $20-$70. You don’t have to hire a web designer or web design studio. Second advantage is time frame: It usually takes 5-15 days for a good designer to produce a web page of such quality.",
    },
    {
      headingId: "accordionHeading2",
      collapseId: "accordionCollapse2",
      title:
        "Do you provide any scripts with your templates or could you do some custom programming?",
      content:
        "Our templates do not include any additional scripts. Newsletter subscriptions, search fields, forums, image galleries (in HTML versions of Flash products) are inactive. Basic scripts can be easily added at zemez.io If you are not sure that the element you’re interested in is active please contact our Support Chat for clarification.",
    },
    {
      headingId: "accordionHeading3",
      collapseId: "accordionCollapse3",
      title: "In what formats are your templates available?",
      content:
        "Website templates are available in Photoshop and HTML formats. Fonts are included with Photoshop file. In most templates HTML is compatible with Adobe® Dreamweaver® and Microsoft Frontpage®.",
    },
  ];

  return (
    <div>
      <style>
        {`
          html, body {
            height: 100% !important;
          }
          body {
            overflow-y: auto !important;
          }
        `}
      </style>

      <section
        className="section parallax-container context-dark"
        style={{ backgroundImage: `url(${vintageCollage})` }}
      >
        <div className="parallax-content parallax-header">
          <div className="parallax-header__inner context-dark text-center">
            <div className="parallax-header__content">
              <div className="container">
                <div className="row justify-content-sm-center">
                  <div className="col-md-10 col-xl-8">
                    <h2 className="heading-decorated">About</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-md bg-gray-lighter text-center decor-text"
        data-content="Services"
      >
        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-lg-10 col-xl-8">
              <h4 className="heading-decorated">Our Services</h4>
              <p>
                Our company offers flexible & reliable website templates as well
                as extensive customer support so you don’t have to worry about
                hiring an expensive web design company. We build all types of
                web templates and all of them can be used as a basis for your
                website.
              </p>
            </div>
          </div>
          <div className="row row-50">
            {features.map((feature, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <article className="blurb blurb-circle blurb-circle_centered">
                  <div className="blurb-circle__icon">
                    <span className={`icon ${feature.icon}`}></span>
                  </div>
                  <p className="blurb__title">{feature.title}</p>
                  <p>{feature.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="object-wrap decor-text" data-content="About">
        <div
          className="bg-decor d-flex align-items-center justify-content-center"
          data-parallax-scroll='{"y": 70, "x": 50, "smoothness": 30}'
        >
          <img src={bgDecor10} alt="Background Decor" />
        </div>
        <div className="section-lg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h4 className="heading-decorated">About us</h4>
                <p>
                  Element boasts clean and crispy design, bulletproof layout
                  consistency and intuitive navigation. The template was created
                  by top industry leaders in web design and user experience.
                  Improve your audience engagement and loyalty with simple and
                  user friendly tools offered by our template.
                </p>
                <div className="row row-30">
                  {aboutUsItems.map((item, index) => (
                    <div className="col-xl-6" key={index}>
                      <article className="blurb blurb-minimal">
                        <div className="unit flex-row unit-spacing-md">
                          <div className="unit-left">
                            <div className="blurb-minimal__icon">
                              <span className={`icon ${item.icon}`}></span>
                            </div>
                          </div>
                          <div className="unit-body">
                            <p className="blurb__title heading-6">
                              <a href="#">{item.title}</a>
                            </p>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </article>
                    </div>
                  ))}
                </div>
                <div className="row justify-content-md-center">
                  <div className="col-md-12">
                    {progressItems.map((progress, index) => (
                      <div
                        className="progress-linear progress-linear-modern"
                        key={index}
                      >
                        <div className="progress-header">
                          <p>{progress.title}</p>
                          <span className="progress-value">
                            {progress.value}
                          </span>
                        </div>
                        <div className="progress-bar-linear-wrap">
                          <div className="progress-bar-linear"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="object-wrap__body object-wrap__body-sizing-1 object-wrap__body-md-right bg-image"
          style={{ backgroundImage: `url(${picI})` }}
        ></div>
      </section>

      <section className="section-md bg-default">
        <div
          className="bg-decor d-flex align-items-center justify-content-end"
          data-parallax-scroll='{"x": -100, "y": -30, "smoothness": 30}'
        >
          <img src={bgDecor9} alt="Background Decor" />
        </div>
        <div className="container">
          <div className="row justify-content-md-center justify-content-lg-between row-50 align-items-center">
            <div className="col-md-8 col-lg-6">
              <div id="accordion" role="tablist">
                {accordionItems.map((accordionItem, index) => (
                  <div className="card card-custom" key={index}>
                    <div
                      className="card-custom-heading"
                      id={accordionItem.headingId}
                      role="tab"
                    >
                      <h5 className="card-custom-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href={`#${accordionItem.collapseId}`}
                          aria-controls={accordionItem.collapseId}
                        >
                          {accordionItem.title}
                        </a>
                      </h5>
                    </div>
                    <div
                      className="card-custom-collapse collapse"
                      id={accordionItem.collapseId}
                      role="tabpanel"
                      aria-labelledby={accordionItem.headingId}
                    >
                      <div className="card-custom-body">
                        <p>{accordionItem.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-8 col-lg-6 text-center"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
