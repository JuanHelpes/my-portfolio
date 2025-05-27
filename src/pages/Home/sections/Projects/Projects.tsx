import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Projeto E-commerce",
            subtitle: "",
            description: "Projeto de E-commerce Full Stack desenvolvido com React (Material UI), Node.js, Express e MongoDB. Este é um site de e-commerce básico, ainda em desenvolvimento, que já conta com funcionalidades essenciais como registro e autenticação de usuários, utilizando bcrypt para criptografia de senhas e JWT (jsonwebtoken) para controle de acesso a rotas protegidas. Os produtos são carregados dinamicamente a partir de uma base de dados MongoDB, e os usuários têm a capacidade de adicionar ou remover itens do carrinho de compras, além de editar suas informações pessoais por meio de uma interface moderna e responsiva construída com Material UI. O projeto foca na implementação de um backend seguro e uma experiência de usuário fluida, servindo como base para evoluções futuras.",
            technologies: "Tecnologias: React, Node.js, Express, Material UI, MongoDB",
            // websiteURL: "https://trello.com/",
            codeURL: "https://github.com/JuanHelpes/e-commerce-test",
        },
        {
            title: "App Mobile Register",
            subtitle: "",
            srcImg: "/src/assets/images/project-financas.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: React Native, Node.js, Express",
            // websiteURL: "https://trello.com/",
            codeURL: "https://github.com/JuanHelpes/register_appMobile",
        }
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size = {{md: 6}} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    description={project.description}
                                    technologies={project.technologies}
                                    // websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection