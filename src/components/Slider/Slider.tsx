import { styled } from "@mui/material";
import Slider from "react-slick";
import eCommerceHome from "../../assets/images/eCommerceHome_1.png";
import eCommerceCarrinho from "../../assets/images/carrinhoEcommerce.png";
import eCommerceLogin from "../../assets/images/loginEcommerce.png";
import eCommerceDados from "../../assets/images/meusDadosEcommerce.png";

export interface SliderProps {
  images: string[];
}

const SliderComp: React.FC<SliderProps>  = ({
images
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "auto",
        maxHeight: "45vh",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "35vh",
        },
    }));

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    Height: "35vh",
    arrows: false,
    fade: false,
    autoplay: true,
    variableWidth: false,
  };

const SliderWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  height: "30vh", // altura desejada
  overflow: "hidden",

  [theme.breakpoints.up("xl")]: {
    height: "38vh", // exemplo de ajuste para telas maiores
  },

  [theme.breakpoints.up("md")]: {
    height: "38vh", // exemplo de ajuste para telas maiores
  },

  "& .slick-slide": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%", // importante para ocupar a altura do wrapper
  },

  "& .slick-track": {
    height: "100%",
  },

"& .slick-dots": {

    [theme.breakpoints.up("md")]: {
    bottom: "5px", // distancia do fundo do slider (padrão costuma ser 20px)
  marginBottom: "0px", // evita espaço extra após o slider
  },
  

},
    // Estilo das bolinhas (dots)
  "& .slick-dots li button:before": {
    fontSize: "10px", // tamanho da bolinha
    color: "#888",    // cor padrão
    opacity: 1,       // se quiser evitar o efeito fade-out
  },

    "& .slick-dots li.slick-active button:before": {
    color: theme.palette.secondary.light, // cor da bolinha ativa (usando tema)
  },
}));

  return (
    <>
    <SliderWrapper>
      <Slider useCSS={true}  {...settings}>
        {images.map((image, index) => (
          <StyledImg key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </Slider>
    </SliderWrapper>

    </>
  )
}

export default SliderComp