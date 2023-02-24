import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const ParametersItem = ({ content, section }) => {
  const listItemFontStyle = {
    fontSize: "15px",
    lineHeight: "1.6",
  };

  const styleListItem = {
    marginX: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-around",
    padding: "0px",
    width: "154px",
  };

  const listSubheaderStyle = {
    marginLeft: "10px",
    fontSize: "23px",
    lineHeight: "2.0",
    padding: "0px",
    color: "#212121a3",
  };

  console.log(content);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginLeft: "5px",
        marginRight: "5px",
        width: "286px",
        boxShadow: 2,
      }}
    >
      <Typography sx={{ ...listSubheaderStyle }} fontWeight={700}>{section}</Typography>
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
  );
};

export default ParametersItem;
