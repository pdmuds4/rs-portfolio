import { SxProps } from "@mui/material";

export const card_body: SxProps = {
    margin: "16px 0",
}

export const tablist_body: SxProps = {
    borderBottom: 1,
    borderColor: 'divider',
    backgroundImage: "linear-gradient(90deg, #e8e8e8, #ebebeb, #f5f5f5, #e6e6e6)",
    boxShadow: "0 2px 4px 0 rgba(0 0 0 / 20%)",
}

export const tabs_body: SxProps = {
    "& .MuiTabs-scroller" :{
        scrollbarWidth: "none",
        overflowX: "auto !important",
    }
}

export const tab_icon: SxProps = {
    color: "#3C4858"
}

export const tab_label: SxProps = {
    fontFamily: "Times New Roman",
    display: { xs: 'none', sm: 'block' },
    color: "#3C4858"
}

export const tab_item: SxProps = {
    minWidth: "0 !important",
    minHeight: "0 !important",
}