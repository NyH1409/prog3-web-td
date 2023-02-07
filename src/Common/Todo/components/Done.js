import { TaskAlt } from "@mui/icons-material";
import { Card, CardContent, Paper, Typography } from "@mui/material";
import { pink, red } from "@mui/material/colors";
import React from "react";

export function Done(props) {
    const {done, title} = props;

    return (
        <>
        <Paper elevation={3} className="done-container" sx={{ width: 275 }}>
        <Typography variant="h5" sx={{ textAlign: "center", fontWeight:"bold", color: red[300] }}>DONE</Typography>
            {
                done?.map((elt)=>(
                    <Card sx={{ width : 275, margin : "8px 0" }} elevation={5} key={elt?.id}>
                        <CardContent>
                            <TaskAlt sx={{ color: pink[500]}} />
                            <Typography data-testid="title" color="text.secondary">{title}</Typography>
                            <Typography sx={{ mb: 1.5 }} color="blue">{new Date().toISOString().slice(0, 10)}</Typography>
                            <Typography data-testid="element-title" variant="body2" sx={{paddingRight: 2}}>{elt?.title}<br /></Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </Paper>
        </>
    )
}