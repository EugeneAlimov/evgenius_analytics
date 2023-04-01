import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const Alcaly = () => {
  const style = {
    // padding: "5px",
    // marginX: "5px",
    marginY: "5px",
    minWidth: "196px",
    // minWidth: "214px",
    // maxWidth: "332px",
    // width: "230px",
    // width: "200px",
    width: "15vw",
    backgroundColor: "f9f8f800",
    boxShadow: 2,
  };

  const listItemFontStyle = {
    fontSize: "15px",
    lineHeight: "1.6",
  };

  const styleListItem = {
    // marginLeft: "10px",
    // marginRight: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-around",
    // padding: "0px,",
    paddingTop: "0px",
    paddingBottom: "0px",
    // width: "180px",
  };

  const listSubheaderStyle = {
    fontSize: "23px",
    lineHeight: "2.0",
    padding: "0px",
    color: "#212121a3",
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        // marginLeft: "auto",
        // marginRight: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "no-wrap",
          // justifyContent: "space-between",
        }}
      >
        <Box sx={{ ...style }}>
          <List sx={{ margin: "0px", padding: "0px" }}>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listSubheaderStyle }}>Alcaly 1</Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                45℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                54℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                60℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                56℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Pump </Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                STARTED
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ ...style }}>
          <List>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listSubheaderStyle }}>Hot Rinse 1</Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                45℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                54℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                60℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                56℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Pump </Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                STARTED
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ ...style }}>
          <List>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listSubheaderStyle }}>Alcaly 2</Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                45℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                54℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                60℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }}>56℃</Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Pump </Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                STARTED
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "no-wrap" }}>
        <Box sx={{ ...style }}>
          <List>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listSubheaderStyle }}>Hot Rinse 2</Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                45℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                54℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                60℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                56℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Pump </Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                STARTED
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ ...style }}>
          <List>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listSubheaderStyle }}>Alcaly 3</Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                45℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                54℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                60℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                56℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Pump </Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                STARTED
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ ...style }}>
          <List>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listSubheaderStyle }}>Hot Rinse 3</Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                45℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                54℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Set temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                60℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>HE Act temp</Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                56℃
              </Typography>
            </ListItem>
            <ListItem sx={{ ...styleListItem }}>
              <Typography sx={{ ...listItemFontStyle }}>Pump </Typography>
              <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
                STARTED
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Alcaly;
