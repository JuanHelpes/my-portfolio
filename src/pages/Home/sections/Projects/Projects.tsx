import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import eCommerceHome from "../../../../assets/images/eCommerce/eCommerceHome_1.png";
import eCommerceCarrinho from "../../../../assets/images/eCommerce/carrinhoEcommerce.png";
import eCommerceLogin from "../../../../assets/images/eCommerce/loginEcommerce.png";
import eCommerceDados from "../../../../assets/images/eCommerce/meusDadosEcommerce.png";

import loginMobile from "../../../../assets/images/appMobile/login.png";
import userMobile from "../../../../assets/images/appMobile/user.png";
import eventoMobile from "../../../../assets/images/appMobile/eventos.png";
import presencaMobile from "../../../../assets/images/appMobile/registrarPresenca.png";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Projeto E-commerce",
            subtitle: "",
            description: "Projeto de E-commerce Full Stack desenvolvido com React (Material UI), Node.js, Express e MongoDB. Este é um site de e-commerce básico, ainda em desenvolvimento, que já conta com funcionalidades essenciais como registro e autenticação de usuários, utilizando bcrypt para criptografia de senhas e JWT (jsonwebtoken) para controle de acesso a rotas protegidas. Os produtos são carregados dinamicamente a partir de uma base de dados MongoDB, e os usuários têm a capacidade de adicionar ou remover itens do carrinho de compras, além de editar suas informações pessoais por meio de uma interface moderna construída com Material UI. O projeto foca na implementação de um backend seguro e uma experiência de usuário fluida, servindo como base para evoluções futuras.",
            technologies: "Tecnologias: React, Node.js, Express, Material UI, MongoDB",
            imgs: [eCommerceCarrinho, eCommerceDados, eCommerceHome, eCommerceLogin],
            codeURL: "https://github.com/JuanHelpes/e-commerce-test",
        },
        {
            title: "App Mobile Register",
            subtitle: "",
            description: "Aplicativo mobile para Android, desenvolvido durante a disciplina de Computação Móvel, que permite criar eventos, cadastrar atividades e gerenciar presenças. Utiliza React Native com Expo para facilitar o uso de recursos nativos e um backend em Node.js com Express para comunicação com o servidor. O projeto está em desenvolvimento e serviu como primeiro contato com aplicações móveis e integração com APIs.",
            technologies: "Technologies: React Native, Node.js, Express, Expo, Expo router",
            imgs: [loginMobile, userMobile, eventoMobile, presencaMobile],
            codeURL: "https://github.com/JuanHelpes/register_appMobile",
        }
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3} alignItems="stretch">
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
                                    imgs={project.imgs}
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