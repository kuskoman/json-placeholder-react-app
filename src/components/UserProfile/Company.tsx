import React from "react";
import { CompanyModel } from "@models/userModels";
import { Paper, Typography } from "@mui/material";

interface CompanyProps {
  company: CompanyModel;
}

export const Company: React.FC<CompanyProps> = ({ company }) => {
  return (
    <Paper elevation={3} sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6">Company</Typography>
      <Typography variant="body1">{company.name}</Typography>
      <Typography variant="body1">Catchphrase: {company.catchPhrase}</Typography>
      <Typography variant="body1">BS: {company.bs}</Typography>
    </Paper>
  );
};
