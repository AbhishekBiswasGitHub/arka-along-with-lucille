import Contact from "./Contact";

import "./Contacts.css";

const Contacts = () => {
  const contacts = [
    {
      link: "tel:+918293656130",
      icon: "fa-solid fa-phone",
      iconColor: "#007700",
      content: "+91-8293656130",
    },
    {
      link: "https://instagram.com/arka_along_with_lucille",
      icon: "fa-brands fa-instagram",
      iconColor: "#c13584",
      content:
        "instagram.com/arka_along_with_lucille",
    },
    {
      link: "mailto:arkagnrdas@gmail.com",
      icon: "fa-solid fa-at",
      iconColor: "#000077",
      content: "arkagnrdas@gmail.com",
    },
    {
      link: "https://facebook.com/ArkaalongwithLucille",
      icon: "fa-brands fa-facebook",
      iconColor: "#4267b2",
      content:
        "facebook.com/ArkaalongwithLucille",
    },
    {
      link: "https://goo.gl/maps/vLZBA5iYAmfM4aeH9",
      icon: "fa-solid fa-location-dot",
      iconColor: "#770000",
      content: "A/6 New Raipur, Kolkata-86",
    },
    {
      link: "https://youtube.com/@ArkaalongwithLucille",
      icon: "fa-brands fa-youtube",
      iconColor: "#ff0000",
      content:
        "youtube.com/@ArkaalongwithLucille",
    },
  ];
  return (
    <div id="contacts-container">
      <h2 id="contacts-heading">
        <i className="fa-solid fa-address-book"></i>
        contacts
      </h2>
      <div id="contacts">
        {contacts.map(
          (
            { link, icon, iconColor, content },
            index
          ) => (
            <Contact
              key={index}
              link={link}
              icon={icon}
              iconColor={iconColor}
              content={content}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Contacts;
