import styles from './AddComment.module.scss'
import {TextField} from "@mui/material"
import {Avatar} from "@mui/material"
import {Button} from "@mui/material"

export const Index = () => {
    return (
        <>
            <div className={styles.root}>
                <Avatar
                    classes={{root: styles.avatar}}
                    src="https://mui.com/static/images/avatar/5.jpg"
                />
                <div className={styles.form}>
                    <TextField
                        label="Write comment"
                        variant="outlined"
                        maxRows={10}
                        multiline
                        fullWidth
                    />
                    <Button variant="contained">Send</Button>
                </div>
            </div>
        </>
    );
};