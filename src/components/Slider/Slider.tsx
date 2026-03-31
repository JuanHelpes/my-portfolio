import { styled } from "@mui/material";
import Slider from "react-slick";

export interface SliderProps {
  images: string[];
  fullSize?: boolean;
}

const SliderComp: React.FC<SliderProps> = ({ images, fullSize = false }) => {

  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    objectFit: "contain",
    height: "auto",
    maxHeight: fullSize ? "80vh" : "45vh",
    padding: "10px 0",
    [theme.breakpoints.up('md')]: {
      height: fullSize ? "75vh" : "37vh",
    },
  }));

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: fullSize,
    fade: false,
    autoplay: !fullSize,
    variableWidth: false,
  };

  const SliderWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    height: fullSize ? "75vh" : "30vh",
    overflow: "hidden",

    [theme.breakpoints.up("xl")]: {
      height: fullSize ? "80vh" : "38vh",
    },

    [theme.breakpoints.up("md")]: {
      height: fullSize ? "75vh" : "38vh",
    },

    "& .slick-slide": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },

    "& .slick-track": {
      height: "100%",
    },

    "& .slick-dots": {
      bottom: fullSize ? "10px" : "-3px",
      [theme.breakpoints.up("md")]: {
        bottom: fullSize ? "10px" : "-3px",
        marginBottom: "0px",
      },
    },

    "& .slick-dots li button:before": {
      fontSize: "10px",
      color: "#888",
      opacity: 1,
    },

    "& .slick-dots li.slick-active button:before": {
      color: theme.palette.secondary.light,
    },

    "& .slick-prev, & .slick-next": {
      zIndex: 10,
      "&:before": {
        fontSize: "30px",
        color: "#fff",
      },
    },
    "& .slick-prev": { left: 10 },
    "& .slick-next": { right: 10 },
  }));

  return (
    <SliderWrapper>
      <Slider useCSS {...settings}>
        {images.map((image, index) => (
          <StyledImg key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </Slider>
    </SliderWrapper>
  );
};

export default SliderComp;