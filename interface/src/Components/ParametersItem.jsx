import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const ParametersItem = ({ content, section }) => {
  const listItemFontStyle = {
    fontSize: "17px",
    lineHeight: "1.6",
  };

  const styleListItem = {
    // marginX: "15px",
    // display: "flex",
    justifyContent: "space-between",
    // alignItems: "space-around",
    padding: "0px",
    width: "204px",
  };

  const listSubheaderStyle = {
    marginTop: "10px",
    fontSize: "23px",
    lineHeight: "1.2",
    padding: "0px",
    color: "#212121a3",
    letterSpacing: "12px",
  };

  return (
    <Box
      sx={{
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: "5px",
        marginRight: "5px",
        width: "286px",
        boxShadow: 2,
      }}
    >
      <Typography sx={{ ...listSubheaderStyle }} fontWeight={700}>
        {section}
      </Typography>
      <Box sx={{ marginY: "auto" }}>
        <List>
          {content.map((el) => (
            <ListItem sx={{ ...styleListItem }} key={el.name}>
              <Typography sx={{ ...listItemFontStyle }}>{el.name}</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                {el.value} {el.unit}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ParametersItem;
