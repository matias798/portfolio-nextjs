// Modules
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import coderCompletedTask from "../../assets/images/coder-focused.jpg";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Styles
import Styles from "../../styles/Project.module.css";
import "swiper/css";

const projects = [
  { image: coderCompletedTask, color: "#FFEBF4" },
  { image: coderCompletedTask, color: "#F2EEFF" },
  { image: coderCompletedTask, color: "#FFCDE0" },
];

const Projects = () => {
  return (
    <div className={Styles.Bg}>
      <h3 className="text-center ">Consulta mi Portafolio</h3>

      {/* buttons */}
      <div className="d-flex justify-content-end container">
        <div className={Styles.roundedButton}>
          <AiOutlineLeft size={15} />
        </div>
        <div className={Styles.roundedButton}>
          <AiOutlineRight size={15} />
        </div>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        spaceBetween={50}
        slidesPerView={2}
        className="container"
      >
        {projects.map((product) => (
          <SwiperSlide
            key={Math.random()}
            style={{ cursor: "pointer" }}
            className={Styles.Card}
          >
            {/* image */}
            <div
              className={Styles.Image}
              style={{ backgroundColor: product.color }}
            >
              <Image
                src={coderCompletedTask}
                alt="s"
                width={400}
                height={200}
                className={Styles.Image}
              />
            </div>
            <h4 className="mt-2">Lorem KIpsim </h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
