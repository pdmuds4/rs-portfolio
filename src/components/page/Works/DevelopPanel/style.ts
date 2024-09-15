import { SxProps } from "@mui/material";
import { SkillsDTO } from "@models/entity/skills";

export const body: SxProps = {
    height: "300px",
    boxShadow: "0 2px 4px 0 rgba(0 0 0 / 20%)",
    backgroundImage: "linear-gradient(135deg, #e8e8e8, #e6e6e6, #f5f5f5, #dddddd)",
}

export const container: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    color: "#3C4858",
    height: "100%",
    boxSizing: "border-box",
}

export const title: SxProps = {
    fontFamily: "Times New Roman",
    fontWeight: "bold",
}

export const header: SxProps = {
    display: 'flex',
    alignItems: 'center',
}

export const access: SxProps = {
    marginLeft: 'auto',
}

export const chips: SxProps = {
    display: 'flex',
    gap: 1,
}

export const description: SxProps = {
    fontSize: {xs: "0.9rem", md: "1rem"},
    lineHeight: {xs: "1.5", md: "1.7"},
}

export const techs_group: SxProps = {
    padding: "0 8px"
}

export const techs: SxProps = {
    padding: 1,
    display: 'flex',
    gap: 1,
    marginTop: 'auto',
    overflow: 'auto',
    width: '100%',
    scrollSnapType: 'x mandatory',
    '& > *': {
        scrollSnapAlign: 'center',
        flexShrink: 0,
    },
    '::-webkit-scrollbar': { display: 'none' },
}

export const tech_avatar = (category: SkillsDTO["category"]): SxProps => {
    const color = category === "frontend" ? "#1976d2"
                : category === "backend"  ? "#2e7d32"
                : category === "database" ? "#9c27b0"
                : category === "devops"   ? "#ed6c02"
                : null;

    return {
        bgcolor: "white",
        border: `2px solid ${color} !important`,
        boxShadow: `0px 1px 7px ${color}`,
    }
}