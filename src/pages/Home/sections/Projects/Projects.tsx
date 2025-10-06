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

import loginWebChat from "../../../../assets/images/webChat/Login.png";
import registroWebChat from "../../../../assets/images/webChat/registro.png";
import chatWebChat from "../../../../assets/images/webChat/chat.png";

import encurtador from "../../../../assets/images/encurtador/encurtador.png";

import summoner from "../../../../assets/images/summoner/summoner.png";

import qrcode from "../../../../assets/images/qrcodeGenerator/qrcode.png";

import classifica from "../../../../assets/images/classificaEmail/classifica.png";



const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Projeto E-commerce",
            subtitle: "",
            description: "Projeto de E-commerce Full Stack desenvolvido com React (Material UI), Node.js, Express e MongoDB. Este é um site de e-commerce básico, ainda em desenvolvimento, que já conta com funcionalidades essenciais como registro e autenticação de usuários, utilizando bcrypt para criptografia de senhas e JWT (jsonwebtoken) para controle de acesso a rotas protegidas. Os produtos são carregados dinamicamente a partir de uma base de dados MongoDB, e os usuários têm a capacidade de adicionar ou remover itens do carrinho de compras, além de editar suas informações pessoais por meio de uma interface moderna construída com Material UI. O projeto foca na implementação de um backend seguro e uma experiência de usuário fluida, servindo como base para evoluções futuras. (Em produção: API utilizando Nest.js e TypeScript para aprimorar a estrutura do backend).",
            technologies: "Tecnologias: React, Node.js, Nest.js, Express, Docker, Material UI, Prisma, MongoDB",
            imgs: [eCommerceCarrinho, eCommerceDados, eCommerceHome, eCommerceLogin],
            codeURL: "https://github.com/JuanHelpes/e-commerce-test",
        },
        {
            title: "QrCode Generator",
            subtitle: "",
            description: "Aplicação em Spring Boot que gera QR Codes a partir de um texto e armazena o resultado no Supabase Storage. O QR Code é gerado usando a biblioteca Google ZXing e a API retorna o link do PNG salvo.",
            technologies: "Technologies: Java, Maven, Spring Boot, Docker, Supabase (Storage Bucket), Google ZXing (QR Code)",
            imgs: [qrcode],
            codeURL: "https://github.com/JuanHelpes/spring-qrcode-generator",
        }
        ,
        {
            title: "Web Chat",
            subtitle: "",
            description: "Este projeto consiste em um sistema de chat em tempo real com autenticação de usuários, desenvolvido com foco nas tecnologias de backend. Os usuários podem se registrar, realizar login (inclusive com o Google, utilizando a biblioteca @react-oauth/google) e trocar mensagens em uma sala de chat. O sistema foi construído com Node.js, Express, Socket.IO para comunicação em tempo real, MongoDB para armazenamento dos dados de usuários, bcrypt para hash de senhas e jsonwebtoken (JWT) para autenticação segura. No frontend, foi utilizado React com Vite, TypeScript, Material UI para a interface visual e React Toastify para notificações. A conexão com o WebSocket ocorre somente ao entrar na página de chat, mantendo o sistema leve e eficiente mesmo com uma interface simplificada.",
            technologies: "Technologies: Node.js, Express, Socket.io, MongoDB, TypeScript, Material UI",
            imgs: [loginWebChat, registroWebChat, chatWebChat],
            codeURL: "https://github.com/JuanHelpes/login-and-chat",
        },
        {
            title: "Encurtador URL",
            subtitle: "",
            description: "Encurtador de URLs com React + TypeScript no frontend e Node.js + Socket.IO no backend. Permite gerar links curtos aleatórios de até 6 caracteres (via crypto), com um tempo de validade (10 minutos). A interface utiliza Material UI e DataGrid para exibir as URLs e a quantidade cliques realizados na URL encurtada, que são atualizados em tempo real via WebSockets. A API REST permite criar, listar e excluir URLs, com foco principal na estrutura do backend, integração com banco de dados e comunicação em tempo real.",
            technologies: "Technologies: Node.js, Express, Socket.io, MongoDB, TypeScript, Material UI, Crypto",
            imgs: [encurtador],
            codeURL: "https://github.com/JuanHelpes/url-shortener",
        },
        {
            title: "Summoner Chat",
            subtitle: "",
            description: "O Summoner Chat é uma aplicação web que une dados do League of Legends com inteligência artificial para oferecer recomendações táticas personalizadas. O usuário informa seu nickname e o sistema busca automaticamente a última partida recente via API da Riot (simulando uma partida em tempo real para facilitar o desenvolvimento). As informações coletadas (como campeão, rota, aliados e inimigos) são enviadas a uma LLM (foi utilizado o Gemini - Google AI), que responde com sugestões de build e dicas estratégicas. O usuário pode então fazer perguntas em linguagem natural, tipo, como jogar contra certos campeões ou qual item fazer. O sistema foi desenvolvido com React, Node.js e Express, e foi projetado para ser flexível, permitindo a substituição do modelo de IA por qualquer outro via API, como GPT-4, Claude ou modelos locais usando Ollama.",
            technologies: "Technologies: Node.js, Express, TypeScript, Material UI, React, Gemini API (Google AI), Riot API",
            imgs: [summoner],
            codeURL: "https://github.com/JuanHelpes/summoner-chat",
        },
        // {
        //     title: "App Mobile Register",
        //     subtitle: "",
        //     description: "Aplicativo mobile para Android, desenvolvido durante a disciplina de Computação Móvel, que permite criar eventos, cadastrar atividades e gerenciar presenças. Utiliza React Native com Expo para facilitar o uso de recursos nativos e um backend em Node.js com Express para comunicação com o servidor. O projeto está em desenvolvimento e serviu como primeiro contato com aplicações móveis e integração com APIs.",
        //     technologies: "Technologies: React Native, Node.js, Express, Expo, Expo router",
        //     imgs: [loginMobile, userMobile, eventoMobile, presencaMobile],
        //     codeURL: "https://github.com/JuanHelpes/register_appMobile",
        // }
        {
            title: "Classificador de E-mails",
            subtitle: "",
            description: "Este projeto permite que usuários insiram ou façam upload de e-mails em formato texto ou arquivo (.pdf/.txt) para que o sistema realize o pré-processamento de linguagem natural, classificação e gere automaticamente uma sugestão de resposta utilizando a API do Gemini. O frontend foi construído em React, com interface intuitiva para envio e visualização de respostas. O backend foi desenvolvido em FastAPI, integrando bibliotecas de NLP para pré-processar o texto antes do envio ao modelo de IA.",
            technologies: "Technologies: React + Vite, Python, FastAPI, Gemini API, Docker ",
            imgs: [classifica],
            codeURL: "https://github.com/JuanHelpes/classifica-email",
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
                        <Grid size={{ md: 6 }} key={index}>
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