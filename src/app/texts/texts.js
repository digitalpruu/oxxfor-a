const title = "OXXFOR.A";
const email = "corbaparrarosamaria@gmail.com"; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = "+573143957223";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "OXXFOR.A se especializa en la venta de blusas con un enfoque en la moda y el estilo. Nuestro objetivo es ofrecer prendas elegantes y versátiles que se adapten a diferentes ocasiones y gustos. Cada blusa está diseñada para proporcionar confort y un toque de distinción.",
        description2: "En OXXFOR.A, nos enorgullece brindar productos de alta calidad que complementan tu guardarropa. Visita nuestra página web para explorar nuestra colección y encontrar la blusa perfecta que se ajuste a tu estilo personal."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "Elegancia y estilo en cada blusa",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/share/SAuERpf3xrAGUBMo/?mibextid=qi2Omg",
        instagram: "https://www.instagram.com/lina.lune.artisane?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
