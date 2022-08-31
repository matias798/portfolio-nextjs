// Modules
import { useEffect } from "react";
import anime from "../node_modules/animejs/lib/anime.es.js";
// Styles
import Styles from "./../styles/Loading.module.css";

const LoadingComponent = () => {
  useEffect(() => {
    anime({
      targets: "#line-drawing-demo path",
      strokeDashoffset: [anime.setDashoffset, 0],
      direction: "alternate",
      easing: "easeOutExpo",
      duration: 2500,
    });

    var textWrapper = document.querySelector(".move");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    var textWrapper2 = document.querySelector(".move2");
    textWrapper2.innerHTML = textWrapper2.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime({
      targets: ".move .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 700 + 30 * i,
    });

    anime({
      targets: ".move2 .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2500,
      delay: (el, i) => 1250 + 30 * i,
    });
  }, []);

  return (
    <div className={Styles.Bg}>
      <span  >
        <div className={Styles.logo}>
          <svg
            width="275"
            height="100"
            viewBox="0 0 275 275"
            className="css-1j8o68f"
            id="line-drawing-demo"
          >
            <defs id="SvgjsDefs9499">
              <linearGradient id="SvgjsLinearGradient9504">
                <stop id="SvgjsStop9505" stopColor="#7f00ff" offset="0"></stop>
                <stop id="SvgjsStop9506" stopColor="#e100ff" offset="1"></stop>
              </linearGradient>
              <linearGradient id="SvgjsLinearGradient9507">
                <stop id="SvgjsStop9508" stopColor="#7f00ff" offset="0"></stop>
                <stop id="SvgjsStop9509" stopColor="#e100ff" offset="1"></stop>
              </linearGradient>
            </defs>
            <g
              id="SvgjsG9500"
              featurekey="rootContainer"
              transform="matrix(2.2800427691386624,0,0,2.2800427691386624,0,0)"
              fill="url(#SvgjsLinearGradient9504)"
            >
              <path
                stroke="#566573"
                fill="none"
                strokeWidth="1"
                xmlns="http://www.w3.org/2000/svg"
                d="M58.2 116.4c-5.8 0-11.1-2.5-16.2-4.9l-5-2.3-5.2-2c-5.3-1.9-10.9-3.9-14.8-7.9s-6-9.5-7.9-14.8c-.6-1.7-1.3-3.5-2-5.2s-1.5-3.3-2.3-5C2.5 69.3 0 64 0 58.2S2.5 47.1 4.9 42c.8-1.6 1.6-3.3 2.3-5s1.3-3.5 2-5.2C11.1 26.5 13.1 21 17 17s9.5-6 14.8-7.9l5.2-2 5-2.3C47.1 2.5 52.4 0 58.2 0s11.1 2.5 16.2 4.9l5 2.3 5.2 2c5.3 1.9 10.8 3.9 14.8 7.9s6 9.5 7.9 14.8c.6 1.7 1.3 3.5 2 5.2s1.5 3.3 2.3 5c2.4 5.1 4.9 10.4 4.9 16.2s-2.5 11.1-4.9 16.2c-.8 1.6-1.6 3.3-2.3 5s-1.3 3.5-2 5.2c-1.9 5.3-3.9 10.8-7.9 14.8s-9.5 6-14.8 7.9l-5.2 2-5 2.3c-5.1 2.2-10.4 4.7-16.2 4.7zM58.2.7c-5.7 0-10.9 2.4-15.9 4.8l-5 2.3-5.2 2c-5.3 1.9-10.7 3.9-14.6 7.8s-5.8 9.3-7.8 14.6c-.6 1.7-1.3 3.5-2 5.2s-1.5 3.4-2.3 5C3.1 47.3.7 52.5.7 58.2s2.4 10.9 4.8 15.9c.8 1.6 1.6 3.3 2.3 5s1.4 3.5 2 5.2c1.9 5.3 3.9 10.7 7.8 14.6s9.3 5.8 14.6 7.8l5.2 2 5 2.3c5 2.4 10.2 4.8 15.9 4.8s10.9-2.5 15.9-4.8l5-2.3 5.2-2c5.3-1.9 10.7-3.9 14.6-7.8s5.8-9.3 7.8-14.6c.6-1.7 1.3-3.5 2-5.2s1.5-3.3 2.3-5c2.4-5 4.8-10.2 4.8-15.9s-2.5-10.9-4.8-15.9c-.8-1.6-1.6-3.3-2.3-5s-1.4-3.5-2-5.2c-1.9-5.3-3.9-10.7-7.8-14.6s-9.3-5.8-14.6-7.8l-5.2-2-5-2.3C69.1 3.1 63.9.7 58.2.7z"
              ></path>
            </g>
            <g
              id="SvgjsG9501"
              featurekey="8L6ael-0"
              transform="matrix(5.0458073850241085,0,0,5.0458073850241085,39.842607745067866,68.77097029296482)"
              fill="url(#SvgjsLinearGradient9507)"
            >
              <path
                stroke="#566573"
                fill="none"
                strokeWidth="1"
                d="M15.36 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 13.4 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.3 0 -0.5 -0.21 t-0.2 -0.49 l0 -9.04 l-3.7 4.76 q-0.22 0.26 -0.56 0.26 l0 0 q-0.16 0 -0.32 -0.07 t-0.24 -0.21 l-6.56 -8.68 q-0.12 -0.14 -0.14 -0.35 t0.08 -0.38 t0.26 -0.28 t0.36 -0.11 l1.76 0 q0.34 0 0.56 0.28 l4.24 5.6 l4.14 -5.6 q0.22 -0.28 0.58 -0.28 l1.76 0 z M3.84 14.7 q0.28 0 0.49 0.2 t0.21 0.5 l0 3.7 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -3.7 q0 -0.3 0.21 -0.5 t0.49 -0.2 l1.52 0 z M32.448 14.36 q-0.12 -0.12 -0.17 -0.29 t-0.01 -0.33 q0.1 -0.64 0.1 -1.14 q0 -2.06 -1.22 -3.36 q-1.28 -1.34 -3.38 -1.34 t-3.38 1.34 q-1.22 1.3 -1.22 3.36 t1.22 3.36 q1.28 1.34 3.38 1.34 q0.84 0 1.5 -0.2 l-1.14 -1.14 q-0.2 -0.24 -0.2 -0.5 t0.2 -0.5 l1.08 -1.08 q0.22 -0.22 0.51 -0.22 t0.49 0.22 l4.34 4.34 q0.22 0.2 0.22 0.49 t-0.22 0.51 l-1.08 1.08 q-0.18 0.2 -0.49 0.2 t-0.51 -0.2 l-0.98 -1 q-1.64 0.9 -3.72 0.9 q-3.32 0 -5.46 -2.22 q-2.08 -2.18 -2.08 -5.38 t2.08 -5.38 q2.16 -2.22 5.47 -2.22 t5.45 2.24 q2.08 2.14 2.08 5.36 q0 1.42 -0.46 2.74 q-0.06 0.18 -0.19 0.3 t-0.31 0.14 q-0.38 0.1 -0.66 -0.18 z"
              ></path>
            </g>
          </svg>
        </div>
        <h1 className={`${Styles.Title} move mt-2`}>Matías  Quiroga</h1>
        <h1 className={`${Styles.Title} move2`}> Desarrollador Web</h1>
      </span>
    </div>
  );
};
export default LoadingComponent;
