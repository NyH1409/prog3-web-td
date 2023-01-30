import { Receipt } from "@mui/icons-material";
import { Card, CardActions, CardContent, FormControlLabel, FormGroup, Paper, Typography } from "@mui/material";
import { pink, red } from "@mui/material/colors";
import React from "react";

export function Task(props) {
    const {data, doneTask, title} = props;
    return (
        <>
        <Paper elevation={3} className="todo-container" 
        sx={{ width: 275, minHeight: 400, bgcolor: red[300], }}>
            <Typography variant="h5" sx={{ textAlign: "center" , fontWeight: "bold", color: "white" }}>TODO</Typography>
            {
                data?.map((elt)=>(
                    <Card sx={{ width : 275, margin : "8px 0" }} elevation={5}>
                        <CardContent>
                            <Receipt sx={{ color: pink[500]}} />
                            <Typography color="text.secondary">{title}</Typography>
                            <Typography sx={{ mb: 1.5 }} color="blue">{new Date().toISOString().slice(0, 10)}</Typography>
                            <Typography variant="body2" sx={{paddingRight: 2}}>{elt?.title}<br /></Typography>
                        </CardContent>
                        <CardActions sx={{ paddingLeft: 2}}>
                            <FormGroup>
                                <FormControlLabel control={<input className="to-check" type="checkbox" onClick={()=>doneTask(elt)}/>} label="Check if done"/>
                            </FormGroup>
                        </CardActions>
                    </Card>
                ))
            }
        </Paper>
        </>
    )
}