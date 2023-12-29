import React from "react";
import Link from "next/link";
import chat from "@/assets/Messaging.svg";

const Chatbot = () => {
  return (
    <Link
      style={{
        position: "fixed",
        bottom: "30px",
        right: "30px",
        height: "50px",
        width: "50px",
        background: "#0295a9",
        zIndex: "999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        backgroundImage: `url(${chat.src})`,
        backgroundSize: "65%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "pointer",
        border: "none",
      }}
      href={"/"}
      //   to="https://wa.me/923272026242"
      //   target="_blank"
    />
  );
};

export default Chatbot;
