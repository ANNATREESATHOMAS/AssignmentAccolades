import React from "react";
import "./ContactPage.css";
import OfficeAddress from "../../component/OfficeAddress";
import Form from "../../component/Form";
import Button from "../../component/Button";
const officeAddress = [
  {
    icon: "fa-solid fa-location-dot",
    tag: "Accolades Integrated Pvt Ltd",
    text: `No.32/3071 - B | First Floor Anjiparambil Building
Ponnurunni NH Bypass, Vyttila, Kochi, Kerala 682019.
    `,
  },
  {
    icon: "fa-solid fa-house",
    tag: null,
    text: "mail@accoladesmedia.co.in",
  },
  {
    icon: "fa-solid fa-phone",
    tag: null,
    text: "+91 90726 19922 | 87143 04849",
  },
];

const formButton = "SUBMIT NOW";
const ContactPage = () => {
  return (
    <>
      <div className="ContactPage">
        <div className="banner flex-center">
          <div className="max-container d-flex ">
            <h1 className="textt">CONTACT</h1>
          </div>
        </div>
        <div className="contact py-5">
          <h4 className="text1">IDENTIFY AND CONNECTED</h4>
          <h1 className="text2">
            Reach out to know the cost to attain your potential clients
          </h1>
          <div className="container">
            <div className="seperator"></div>
          </div>
          <h3 className="text3">Corporate Office [Kochi, Kerala]</h3>
        </div>
        <div>
          <div className="d-flex kochi width-85 m-auto">
            {officeAddress.map((item) => {
              return <OfficeAddress address={item} />;
            })}
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.442520431508!2d76.31419447479333!3d9.980256590124133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08736f17e870e3%3A0xb309628df468c385!2sAccolades%20Integrated!5e0!3m2!1sen!2sin!4v1712220973724!5m2!1sen!2sin"
            width="950"
            height="300"
            style={{ border: 0, background: "#0000" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
        <div className="demoParent">
          <div className="demoChild">
            <div className="d-flex bran">
              <div className=" col-lg-6 col-md-12 p-5 demo">
                <span className="text3">Calicut Office</span>
                {officeAddress.map((item) => {
                  return <OfficeAddress address={item} />;
                })}
              </div>
              <div className=" col-lg-6 col-md-12 p-5 demo">
              <span className="text3">Calicut Office</span>
                {officeAddress.map((item) => {
                  return <OfficeAddress address={item} />;
                })}
              </div>
            </div>
            <div className="d-flex bran">
              <div className=" col-lg-6 col-md-12 p-5 demo">
            <span className="text3">Calicut Office</span>
                {officeAddress.map((item) => {
                  return <OfficeAddress address={item} />;
                })}
              </div>
              <div className=" col-lg-6 col-md-12 p-5 demo">
              <span className="text3">Calicut Office</span>
                {officeAddress.map((item) => {
                  return <OfficeAddress address={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="formBox">
          <div className="width-85 m-auto">
            <div className="d-flex form">
              <div className="col-lg-6 col-md-12 justify-content-center align-items-center">
                <form action="" className="w-100 p-5">
                  <div className="d-flex flex-column gap-5">
                    <Form />
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-md-12 justify-content-center align-items-center">
                <div className="p-5 textarea">
                  <div className="d-flex flex-column gap-5">
                    <textarea
                      cols="40"
                      rows="7"
                      className="wpcf7-form-control wpcf7-textarea form-control holder"
                      aria-invalid="false"
                      placeholder="Your Message"
                      name="your-message"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="formButton px-5 py-2">
              <Button button={formButton} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactPage;
