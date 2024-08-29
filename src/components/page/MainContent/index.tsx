import { PropsWithChildren } from "react";
import { Card } from "@mui/material";
import { s__maincontent } from "./style";


const MainContent: React.FC<PropsWithChildren> = (props) => {
    return (
        <Card>
            {props.children}
        </Card>
    );
}

export default MainContent;