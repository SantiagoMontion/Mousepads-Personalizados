import React from "react";
import "./MousepadContainer.css";
const EmailLink = ({ emailAddress, subject, body }) => {
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}&taget="_blank"`;

  return (
    <a className="button-email" href={mailtoLink}>
      Enviar Diseño
    </a>
  );
};

export default EmailLink;
