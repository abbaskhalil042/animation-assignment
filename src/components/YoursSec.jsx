import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const YoursSec = () => {
  useGSAP(() => {
    gsap.from(".parallax-image", {
      scale: 0.5,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".parallax-image",
        start: "top center",
        end: "bottom 40%",
        pin: true,
        scrub: 1,
      },
    });
  });

  return (
    <section>
      <div className="flex flex-col items-center mt-10">
        <h2
          className="chr-headline-1 lg:text-5xl sm:text-[2.3rem] text-[2rem] sm:leading-tight font-bold text-center"
          aria-label="Make it yours and take it with you"
        >
          Make it
          <span className="chr-highlight sm:px-[1rem] sm:py-[0.5rem] relative rounded-full text-red-500 lg:pr-10 m-4 bg-red-200 lg:py-[0.4rem] lg:pb-3 lg:text-4xl font-medium lg:px-[4rem]">
            <svg className="lg:w-[100%] sm:hidden pl-1 sm:w-[30%] lg:h-[100%] inline absolute lg:bottom-[-0.1rem] lg:right-[-0rem]">
              <g clipPath="url(#__lottie_element_104)">
                <g transform="matrix(1,0,0,1,33,4.184999942779541)" opacity="1" style={{ display: "block" }}>
                  <path
                    fill="rgb(246,174,169)"
                    fillOpacity="1"
                    d="M-12,-5.010000228881836 C-12,-5.010000228881836 12,-5.010000228881836 12,-5.010000228881836 C12,-5.010000228881836 12,17.5 12,17.5 C12,17.5 -12,17.5 -12,17.5 C-12,17.5 -12,-5.010000228881836 -12,-5.010000228881836z"
                  />
                </g>
                <g transform="matrix(1,0,0,1,36,33.75)" opacity="1" style={{ display: "block" }}>
                  <path
                    fill="rgb(234,67,53)"
                    fillOpacity="1"
                    d="M11,-16 C11,-16 11,-18 11,-18 C11,-19.100000381469727 10.100000381469727,-20 9,-20 C9,-20 -15,-20 -15,-20 C-16.100000381469727,-20 -17,-19.100000381469727 -17,-18 C-17,-18 -17,-10 -17,-10 C-17,-8.899999618530273 -16.100000381469727,-8 -15,-8 C-15,-8 9,-8 9,-8 C10.100000381469727,-8 11,-8.899999618530273 11,-10 C11,-10 11,-12 11,-12 C11,-12 13,-12 13,-12 C13,-12 13,-4 13,-4 C13,-4 -5,-4 -5,-4 C-6.099999904632568,-4 -7,-3.0999999046325684 -7,-2 C-7,-2 -7,18 -7,18 C-7,19.100000381469727 -6.099999904632568,20 -5,20 C-5,20 -1,20 -1,20 C0.10000000149011612,20 1,19.100000381469727 1,18 C1,18 1,0 1,0 C1,0 15,0 15,0 C16.100000381469727,0 17,-0.8999999761581421 17,-2 C17,-2 17,-14 17,-14 C17,-15.100000381469727 16.100000381469727,-16 15,-16 C15,-16 11,-16 11,-16z"
                  />
                </g>
              </g>
            </svg>
            yours
          </span>
          and take <br /> <p className="mt-5">it with you</p>
        </h2>
      </div>
      <div className="parallax-image">
        <img
          className="rounded-lg"
          src="https://www.google.com/chrome/static/images/v2/yours-take-over/theme-arches-2x.webp"
          alt=""
        />
      </div>
    </section>
  );
};

export default YoursSec;