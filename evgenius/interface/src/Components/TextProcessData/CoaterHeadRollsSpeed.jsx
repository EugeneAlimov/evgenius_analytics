import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListSubheader from "@mui/material/ListSubheader";
import Typography from "@mui/material/Typography";

const CoaterHeadRollsSpeed = ({ matchesDownLG }) => {
  const style = { backgroundColor: "f9f8f800", boxShadow: 2 };
  
  const styleListItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-around",
    padding: "0px",
    width: "240px",
  };

  const listItemFontStyle = {
    fontSize: "15px",
    lineHeight: "1.6",
  };

  const listSubheaderStyle = {
    fontSize: "23px",
    lineHeight: "2.0",
    padding: "0px",
    color: "#212121a3",
  };

  return (
    <Stack
      direction={matchesDownLG ? "row" : "column"}
      sx={{
        marginY: "5px",
        alignItems: "center",
        justifyContent: matchesDownLG ? "space-evenly" : "space-around",
        width: matchesDownLG ? "98vw" : "588px",
        ...style,
      }}
      spacing={0}
    >
      <Stack mt={0} direction="row" sx={{ justifyContent: "space-around" }} spacing={5}>
        <List>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listSubheaderStyle }} fontWeight={700}>
              Prime coater speed:
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={400}>
              Top Applicator
            </Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ color: "#00d52b", ...listItemFontStyle }}>Top Pick Up</Typography>
            <Typography sx={{ color: "#00d52b", ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ color: "#fd0136", ...listItemFontStyle }}>Bottom Applicator</Typography>
            <Typography sx={{ color: "#fd0136", ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Pick Up</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
        </List>
        <List>
          <ListItem sx={{ ...listSubheaderStyle }}>
            <Typography sx={{ ...listSubheaderStyle }} fontWeight={700}>
              Prime coater ratio:
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Applicator</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ color: "#00d52b", ...listItemFontStyle }}>Top Pick Up</Typography>
            <Typography sx={{ color: "#00d52b", ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ color: "#fd0136", ...listItemFontStyle }}>Bottom Applicator</Typography>
            <Typography sx={{ color: "#fd0136", ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Pick Up</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
        </List>
      </Stack>
      {matchesDownLG ? <Divider orientation="vertical" flexItem /> : null}
      <Stack mt={0} direction="row" sx={{ justifyContent: "space-around" }} spacing={5}>
        <List>
          <ListItem sx={{ ...listSubheaderStyle }}>
            <Typography sx={{ ...listSubheaderStyle }} fontWeight={700}>
              Finish coater speed:
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Applicator A</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up A</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Applicator B</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up B</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Applicator C</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Pick Up C</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39} m/min
            </Typography>
          </ListItem>
        </List>
        <List>
          <ListItem sx={{ ...listSubheaderStyle }}>
            <Typography sx={{ ...listSubheaderStyle }} fontWeight={700}>
              Finish coater ratio:
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Applicator A</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up A</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Applicator B</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up B</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Applicator C</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Pick Up B</Typography>
            <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
              {39}%
            </Typography>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};

export default CoaterHeadRollsSpeed;
