import { Box, Container, IconButton } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer: React.FC = () => {

    return (
        <>
            <Box pt={2} pb={2}>
                <Container maxWidth="sm">
                    <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                        <IconButton onClick={() => window.open("https://github.com/JuanHelpes")}>
                            <GitHubIcon />
                        </IconButton>
                        <IconButton onClick={() => window.open("https://www.linkedin.com/in/juan-helpes-61864a22b/")}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton href="mailto:helpeshs@gmail.com" target="_blank">
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Footer