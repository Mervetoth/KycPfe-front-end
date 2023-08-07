import * as React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";

export default function LoadingButtonsTransition() {
  const [loading, setLoading] = React.useState(true);

  return (
    <Box>
      <Box>
        <LoadingButton
          fullWidth
          sx={{ mt: 3, mb: 2 }}
          loading={loading}
          variant="outlined"
          disabled
        >
          disabled
        </LoadingButton>
      </Box>
    </Box>
  );
}
