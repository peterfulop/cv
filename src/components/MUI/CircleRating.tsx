import { Box, Rating, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import CircleIcon from "@mui/icons-material/Circle";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

export function CircleRating(props: {
  rate: number;
  label: string;
  level: string;
}) {
  const StyledRating = styled(Rating)({
    color: "cadetblue",
  });

  return (
    <Box
      sx={{
        "& > legend": { mb: 1 },
      }}
    >
      <Typography component="legend">{props.label.toUpperCase()}</Typography>
      <StyledRating
        name="customized-color"
        readOnly
        defaultValue={props.rate}
        precision={1}
        icon={<CircleIcon fontSize="inherit" />}
        emptyIcon={<CircleOutlinedIcon fontSize="inherit" htmlColor="white" />}
      />
    </Box>
  );
}
