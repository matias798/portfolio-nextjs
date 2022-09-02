// Modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import Link from "next/link";

// Styles
import Styles from "./../styles/Project.module.css";

// Data
import { projects } from "./../helpers/Data/Projects";
import { isMobile } from "./../helpers/IsMobile";

const Projects = () => {
  return (
    <div className={Styles.Bg}>
      <div className="g-Container">
        <h2 className="text-center m-0">Portafolio</h2>
        <hr className="Hr" />

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            delay: 3500,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={isMobile?.() ? 1 : 2}
          className="container"
        >
          {projects.map((item) => (
            <div key={Math.random()}>
           <h2>DSSS</h2>
              <SwiperSlide key={Math.random()} className={Styles.Item}>
                {" "}
                <Link href={item.link}>
                  <a
                    className={Styles.Link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/*  image */}
                    <div className={Styles.CardContainer}>
                      <div className={Styles.Card}>
                        <span
                          className={Styles.imagen}
                          style={{ backgroundColor: item.color }}
                        >
                          <Image
                            src={item.image}
                            alt={item.title}
                            width={400}
                            height={200}
                            className={Styles.Image}
                            placeholder="blur"
                            blurDataURL={item.image}
                            title={item.title}
                          />
                        </span>
                        <h3 className={Styles.Title}>{item.title}</h3>
                        <p className={Styles.Subtitle}>{item.subtitle}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
