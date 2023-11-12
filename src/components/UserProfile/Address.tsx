import React from "react";
import { AddressModel } from "@models/userModels";
import { Paper, Typography } from "@mui/material";

interface AddressProps {
  address: AddressModel;
}

export const Address: React.FC<AddressProps> = ({ address }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6">Address</Typography>
      <Typography variant="body1">
        {address.street}, {address.suite}
      </Typography>
      <Typography variant="body1">
        {address.city}, {address.zipcode}
      </Typography>
      <Typography variant="body1">
        Geo: {address.geo.lat}, {address.geo.lng}
      </Typography>
    </Paper>
  );
};
