import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent"

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "React", "Git", "HTML", "CSS", "Material UI", "Node.js", "Express", "MongoDB", "MySQL", "Python", "Java", "C++"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container  display="flex" justifyContent="center" >
                    {/* <Grid size= {{xs:9, md:2.5}}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">1+ years</Typography>
                                <Typography textAlign="center">Frontend Development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid> */}
                    <Grid size= {{xs:9, md:2.5}}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Bachelors Degree</Typography>
                                <Typography textAlign="center">Computer Engineer</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Graduado em Engenharia de Computação pelo CEFET-MG com foco em desenvolvimento profissional e obtenção de 
                        novos conhecimentos na área de desenvolvimento de software. Experiências acadêmicas como monitor em disciplina 
                        da área de computação, desenvolvimento de sistemas web e mobile, participação em empresa incubada como 
                        desenvolvedor e estágio na área de desenvolvimento de aplicativos em low-code e automações digitais de fluxos de 
                        trabalho. 
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size = {{xs: 5, sm: 4, md: 2, lg: 2}}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection