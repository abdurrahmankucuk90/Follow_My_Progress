import { Typography, Container, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const TypoButtons = () => {
  return (
    <div>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h4"
          align="center"
          color="error.light"
          sx={{ background: "lightgrey", mt: 4, border: "1px solid green" }}
        >
          Typography, Buttons, Container, Box
        </Typography>
        <Typography variant="body1" align="justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          officiis laboriosam? Suscipit ea, qui labore earum dignissimos impedit
          nostrum in nemo adipisci totam excepturi deleniti corporis velit
          corrupti dicta distinctio!
        </Typography>
        <Typography
          variant="button"
          align="justify"
          color="secondary"
          sx={{ mt: 4, display: "inline-block" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam,
          officiis laboriosam? Suscipit ea, qui labore earum dignissimos impedit
          nostrum in nemo adipisci totam excepturi deleniti corporis velit
          corrupti dicta distinctio!
        </Typography>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
            gap: 2,
            mt: 4,
          }}
        >
          <Button variant="contained" color="secondary">
            Click
          </Button>
          <Button variant="outlined" color="success" startIcon={<SendIcon/>} >
            Send
          </Button>
          <Button variant="contained" color="error" endIcon={<DeleteIcon/>} >
            Delete
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default TypoButtons;
