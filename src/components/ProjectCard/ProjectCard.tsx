import { Box, Grid, Typography, styled, Dialog, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
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

const DescriptionBox = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    minHeight: "100px",
    maxHeight: "200px",
    overflow: "auto",
    marginBottom: theme.spacing(2),
    "&::-webkit-scrollbar": {
        width: "6px",
    },
    "&::-webkit-scrollbar-track": {
        background: "transparent",
    },
    "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#232323",
        borderRadius: "4px",
    },
    "&::-webkit-scrollbar-button": {
        display: "none",
    },
    scrollbarWidth: "thin",
    scrollbarColor: "#4f8e3e transparent",
}));

const StyledCard = styled("div")(({ theme }) => ({
    borderRadius: "3px",
    border: `0.5px solid ${theme.palette.primary.contrastText}`,
    backgroundColor: "transparent",
    color: theme.palette.primary.contrastText,
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    height: "680px",
    [theme.breakpoints.up("md")]: {
        height: "700px",
    },
    [theme.breakpoints.up("lg")]: {
        height: "750px",
    },
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
    },
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    subtitle,
    description,
    imgs,
    technologies,
    codeURL,
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledCard>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography gutterBottom>{subtitle}</Typography>

                <Box onClick={() => setOpen(true)} sx={{ cursor: "pointer" }}>
                    <SliderComp images={imgs || []} />
                </Box>

                <DescriptionBox>
                    <Typography textAlign={"justify"} fontSize={15}>
                        {description}
                    </Typography>
                </DescriptionBox>
                <Typography fontWeight={600} pt={2}>
                    {technologies}
                </Typography>
                <Grid container spacing={1} pt={2}>
                    <StyledButton onClick={() => window.open(codeURL)}>
                        View Code
                    </StyledButton>
                </Grid>
            </StyledCard>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="lg"
                fullWidth
                sx={{
                    zIndex: 1302,
                    "& .MuiDialog-paper": {
                        background: "transparent",
                        boxShadow: "none",
                        overflow: "visible",
                        position: "relative",
                        margin: "16px",
                    },
                    "& .MuiBackdrop-root": {
                        background: "rgba(0,0,0,0.85)",
                        backdropFilter: "blur(6px)",
                    },
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: -40,
                        right: 0,
                        zIndex: 1,
                    }}
                >
                    <IconButton onClick={() => setOpen(false)} sx={{ color: "#fff" }}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Box sx={{ width: "100%", p: 1 }}>
                    <SliderComp images={imgs || []} fullSize />
                </Box>
            </Dialog>
        </>
    );
};

export default ProjectCard;