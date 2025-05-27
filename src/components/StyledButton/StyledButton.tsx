import { styled } from "@mui/system";
import type { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode;
    onClick?: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {

  const StyledButton = styled("button")(({theme}) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: "3px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,        
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: "10px",

  }));

    return(
        <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
    )
}

export default StyledButton;