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
        "JavaScript", "TypeScript", "React", "Git", "HTML", "CSS", "Material UI", "Node.js", "Nest.js", "Express", "Prisma", "MongoDB", "MySQL", "Python", "Java", "C++", "Power Platform"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >Sobre</Typography>
                </Box>
                <Grid container display="flex" justifyContent="center" >
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
                    <Grid size={{ xs: 9, md: 2.5 }}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Educação</Typography>
                                <Typography textAlign="center">Bacharelado em</Typography>
                                <Typography textAlign="center">Engenharia de Computação</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Graduado em Engenharia de Computação pelo CEFET-MG, com foco em desenvolvimento de software e constante busca por aprimoramento profissional.
                        Possuo experiências acadêmicas como monitor em disciplinas da área de computação, além de atuação em projetos de pesquisa, extensão e em empresa
                        incubada como desenvolvedor, onde atuei principalmente no backend utilizando Node.js e PHP. Também realizei estágio na área de
                        desenvolvimento de aplicações low-code e automações digitais de processos e fluxos de trabalho, ampliando minha visão sobre integração de
                        sistemas e otimização de processos.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size={{ xs: 5, sm: 4, md: 2, lg: 2 }}>
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