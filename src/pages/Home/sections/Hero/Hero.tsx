import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
// import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import AnimatedBackGround from "../../../../components/AnimatedBackGround/AnimatedBackGround";
import CV from "../../../../assets/pdfs/JuanHelpes_Att.pdf";
// import SecondAnimatedBackGround from "../../../../components/AnimatedBackGround/SecondAnimatedBackGround";

const Hero = () => {
  const StyledHero = styled("div")(({theme}) => ({
    position: "relative",
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    zIndex: 1,
  }));

  const StyledImg = styled("img")(({theme}) => ({
    width: "80%",
    borderRadius: "50%",
    border: `1px solid ${theme.palette.primary.contrastText}`,
  }));

  const handleDownload = () => {
    console.log("download")
    // Create a link element
    const link = document.createElement('a');
    link.href = CV
    link.download = 'JuanHelpes_CV.pdf'; // Set the download attribute to specify the file name
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger the click event
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
};

  const handleEmail = () => {
    window.open("https://www.linkedin.com/in/juan-helpes-61864a22b/")
    // const emailAddress = 'helpeshs@gmail.com';
    // const subject = 'Subject';
    // const body = 'Olá! Eu vi seu portifolio...';

    // const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    // window.open(mailtoLink);
}


  return (
    <>
      <StyledHero>
        <Box position="absolute"  width="100%" height="100%" zIndex={-1} >
          <AnimatedBackGround />
        </Box>
        <Container maxWidth= "lg">
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 5 }}>
              {/* <Box position={"relative"}>
                <Box position={"absolute"} top={-100} right={0} width="150%" >
                  <SecondAnimatedBackGround />
                </Box> */}
                <Box  textAlign="center">
                <StyledImg src={Avatar}  />
              </Box>
              {/* </Box> */}

            </Grid>
            <Grid alignContent="center" size={{ xs: 12, md: 7 }}>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">
                Juan Helpes
              </Typography>
              <Typography color="primary.contrastText" variant="h4" textAlign="center" pb={2}>
                Sou um Engenheiro de Computação
              </Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <StyledButton onClick={() => handleDownload()}>
                    <DownloadIcon />
                    <Typography>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <StyledButton onClick={() => handleEmail()}>
                    <LinkedInIcon />
                    <Typography>
                      LinkedIn
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
