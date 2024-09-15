import { Divider } from "@mui/material";
import * as styles from "./style";

const HiddenDivider: React.FC = () => {
    return (
        <Divider sx={styles.body} />
    )
}

export default HiddenDivider;