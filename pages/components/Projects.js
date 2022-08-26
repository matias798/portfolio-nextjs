// Modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

// Assets
import rameDeco from "../../assets/images/rameDeco.png";
import Glamira from "../../assets/images/glamira.png";
import Cobranzas from "../../assets/images/Cobranzas.png";

// Styles
import Styles from "../../styles/Project.module.css";

const projects = [
  {
    title: "Cobranzas Argentina",
    subtitle:
      "Sistema el cual utilizando un archivo csv con los datos de los clientes se envia un mensaje y un pdf predefinido.",
    image: Cobranzas,
    color: "#FFEBF4",
  },
  {
    title: "Glamira",
    subtitle:
      "Ecommerce enfocado en la venta de ropa y joyeria para hombres y mujeres realizado de forma individual",
    image: Glamira,
    color: "#F2EEFF",
  },
  {
    title: "Rame Deco",
    subtitle:
      "Ecommerce enfocado en la venta de productos de decoración realizado de forma conjunta en Digital House",
    image: rameDeco,
    color: "#e6daed",
  },
];

const Projects = () => {
  return (
    <div className={Styles.Bg}>
      <h2 className="text-center pb-4">Portafolio</h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
          delay:3500
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={50}
        slidesPerView={2}
        className="container"
      >
        {projects.map((item) => (
          <SwiperSlide
            key={Math.random()}
            style={{ cursor: "pointer" }}
            className={Styles.Card}
          >
            {/* image */}
            <div
              className={Styles.Image}
              style={{ backgroundColor: item.color }}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className={Styles.Image}
                placeholder="blur"
              />
            </div>
            <h3 className="mt-2">{item.title}</h3>
            <p className={Styles.Subtitle}>{item.subtitle}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
