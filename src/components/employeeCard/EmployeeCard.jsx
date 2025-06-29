import React from 'react';
import { Card, CardContent, Avatar, Typography } from "@mui/material";
import styles from "./EmployeeCard.module.css";

export default function EmployeeCard({ employee}) {
  return (
    <Card className={styles.card} elevation={1}>
      <Avatar
        src={employee.avatarUrl}
        className={styles.avatar}
      />
      <CardContent className={styles.content}>
        <Typography variant="subtitle1" className={styles.name}>
          {employee.name}
        </Typography>
      </CardContent>
    </Card>
  );
}