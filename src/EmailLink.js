import React from "react";

const EmailLink = ({ emailAddress, subject, body }) => {
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}&taget="_blank"`;

  return (
    <a href={mailtoLink} target="_blank">
      Enviar correo
    </a>
  );
};

export default EmailLink;