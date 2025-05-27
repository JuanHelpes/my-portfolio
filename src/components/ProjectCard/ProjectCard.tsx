import { Box, Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import Slider from "react-slick";
import eCommerceHome from "../../assets/images/eCommerceHome_1.png";
import eCommerceCarrinho from "../../assets/images/carrinhoEcommerce.png";
import eCommerceLogin from "../../assets/images/loginEcommerce.png";
import eCommerceDados from "../../assets/images/meusDadosEcommerce.png";
import SliderComp from "../Slider/Slider";

export interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string
    technologies: string
    // websiteURL: string;
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    description,
    technologies,
    // websiteURL,
    codeURL
}) => {

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        objectFit: "contain",
        height: "35vh",
        // height: "auto",
        // maxHeight: "45vh",
        padding: "10px 0",
        [theme.breakpoints.up('md')]: {
            height: "45vh",
        },
    }));

    const StyledCard = styled("div")(({ theme }) => ({
        borderRadius: "3px",
        border: `0.5px solid  ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

  var settings = {
    dots: false,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    fade: false,
    variableWidth: false,
  };

  const eCommerceImgs = [
    eCommerceHome,
    eCommerceCarrinho,
    eCommerceLogin,
    eCommerceDados
  ];

    return (
        <StyledCard>
            <Typography variant="h5">
                {title}
            </Typography>
            <Typography >
                {subtitle}
            </Typography>
            <SliderComp images={[eCommerceHome, eCommerceLogin, eCommerceCarrinho, eCommerceDados]}/>
             {/* <StyledImg src={eCommerceHome} /> */}
            <Typography>
                {description}
            </Typography>
            <Typography fontWeight={600} pt={2}>
                {technologies}
            </Typography>
            <Grid container spacing={1} pt={2}>
                {/* <Grid size={{xs: 6}}>
                    <StyledButton onClick={() => window.open(websiteURL)}>View Project</StyledButton>
                </Grid> */}
                <Grid size={{xs: 12}}>
                    <StyledButton onClick={() => window.open(codeURL)}>View Code</StyledButton>
                </Grid>
            </Grid>
        </StyledCard>
    )
}

export default ProjectCard