import React from "react";
import { Container, Button, lightColors } from "react-floating-action-button";
import { FaWhatsapp } from "react-icons/fa";

const FloatingMessage = () => (
  <Container fuild>
    <Button
      tooltip="Si tienes dudas contactanos"
      className="msg-green"
      styles={{ color: lightColors.white }}
      onClick={e => {
        e.preventDefault();
        window.location.href =
          "https://api.whatsapp.com/send?phone=522224890610";
      }}
    >
      <FaWhatsapp />
    </Button>
  </Container>
)

export default FloatingMessage;
