import { Box, Grid, Typography, styled } from "@mui/material";
import StyledButton from "../StyledButton/StyledButton";
import SliderComp from "../Slider/Slider";


export interface ProjectCardProps {
    title: string;
    subtitle: string;
    description: string;
    technologies: string;
    imgs: string[];
    codeURL: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    description,
    imgs,
    technologies,
    codeURL
}) => {

    // const StyledImg = styled("img")(({ theme }) => ({
    //     width: "100%",
    //     objectFit: "contain",
    //     height: "35vh",
    //     // height: "auto",
    //     // maxHeight: "45vh",
    //     padding: "10px 0",
    //     [theme.breakpoints.up('md')]: {
    //         height: "45vh",
    //     },
    // }));

    const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "3px",
        border: `0.5px solid ${theme.palette.primary.contrastText}`,
        backgroundColor: "transparent",
        color: theme.palette.primary.contrastText,
        padding: "20px",
        display: "flex",
        flexDirection: "column",


        
        // 🔸 Altura fixa para telas grandes
        [theme.breakpoints.up('md')]: {
            height: "900px",
        },

        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
    }));

//   var settings = {
//     dots: false,
//     dotsClass: "slick-dots slick-thumb",
//     infinite: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     adaptiveHeight: false,
//     arrows: false,
//     fade: false,
//     variableWidth: false,
//   };

    return (
        <StyledCard>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            <Typography gutterBottom>
                {subtitle}
            </Typography>
            <SliderComp images={imgs || []}/>
             {/* <StyledImg src={eCommerceHome} /> */}
             <Box flexGrow={1} minHeight={"100px"} mb={2}>
                <Typography >
                    {description}
                </Typography>
             </Box>
            
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