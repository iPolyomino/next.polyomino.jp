import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

interface Props {
  children?: React.ReactNode;
}

const CenterrizedHorizontalGrid = ({ children }: Props) => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default CenterrizedHorizontalGrid;
