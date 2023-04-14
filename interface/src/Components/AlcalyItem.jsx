import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const AlcalyItem = ({ data }) => {
  const { name, setTemp, actTemp, heSetTemp, heActTemp, pump } = data;

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

  const started = (
    <Typography sx={{ ...listItemFontStyle, color: "#02c629" }} fontWeight={700}>
      STARTED
    </Typography>
  );

  const stoped = (
    <Typography sx={{ ...listItemFontStyle, color: "#0c0c0c" }} fontWeight={700}>
      STOPED
    </Typography>
  );

  const inFault = (
    <Typography sx={{ ...listItemFontStyle, color: "#fd0136" }} fontWeight={700}>
      FAULT
    </Typography>
  );

  return (
    <Box sx={{ ...style }}>
      <List sx={{ margin: "0px", padding: "0px" }}>
        <ListItem sx={{ ...styleListItem }}>
          <Typography sx={{ ...listSubheaderStyle }}>{name}</Typography>
        </ListItem>
        <ListItem sx={{ ...styleListItem }}>
          <Typography sx={{ ...listItemFontStyle }}>Set temp</Typography>
          <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
            {setTemp}℃
          </Typography>
        </ListItem>
        <ListItem sx={{ ...styleListItem }}>
          <Typography sx={{ ...listItemFontStyle }}>Act temp</Typography>
          <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
            {actTemp}℃
          </Typography>
        </ListItem>
        <ListItem sx={{ ...styleListItem }}>
          <Typography sx={{ ...listItemFontStyle }}>HE Set temp</Typography>
          <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
            {heSetTemp}℃
          </Typography>
        </ListItem>
        <ListItem sx={{ ...styleListItem }}>
          <Typography sx={{ ...listItemFontStyle }}>HE Act temp</Typography>
          <Typography sx={{ ...listItemFontStyle }} fontWeight={700}>
            {heActTemp}℃
          </Typography>
        </ListItem>
        <ListItem sx={{ ...styleListItem }}>
          <Typography sx={{ ...listItemFontStyle }}>Pump </Typography>
          {pump === 0 ? stoped : null}
          {pump === 65536 ? started : null}
          {pump === 131072 ? inFault : null}
        </ListItem>
      </List>
    </Box>
  );
};
export default AlcalyItem;
