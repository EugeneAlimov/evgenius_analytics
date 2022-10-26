import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {
  Paper,
  ListItem,
  Box,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Tooltip,
  TextField,
  Stack,
  Autocomplete,
  Typography,
} from '@mui/material';
import { FixedSizeList } from "react-window";
import { useEffect } from "react";
import { checkTags } from "../../../Redux/slice";
import binarySearch from "../../../Libs/binarySearch"

const AllTagsList = ({ height, width }) => {

  const dispatch = useDispatch()

  const tags = useSelector((state) => state.login.tags)
  const groups = useSelector((state) => state.login.groups)
  const selectedTags = useSelector((state) => state.login.selectedTags)

  const [groupFilter, setGroupFilter] = useState(null);
  const [searchValue, setSearchValue] = useState('')
  const [value, setValue] = useState(null)
  const [filteredByGroupTags, setFilteredByGroupsTags] = useState([])
  const [searchedAndFilteredByGroupTags, setSearchedAndFilteredByGroupTags] = useState([])
console.log('groups: ', groups);
  useEffect(() => {
    setGroupFilter(value)
  }, [value])

  useEffect(() => {
    if (groupFilter === null) {
      setFilteredByGroupsTags(tags)
      return
    }
    const tagsArr = tags.filter(tag => tag.label === groupFilter.id)
    setFilteredByGroupsTags(tagsArr)
  }, [groupFilter, tags])

  useEffect(() => {
    const tagsArr = filteredByGroupTags
    .filter(
      tag => tag.name_tag
      .toLowerCase()
      .includes(searchValue.toLowerCase())
    )
    setSearchedAndFilteredByGroupTags(tagsArr)
  }, [filteredByGroupTags, searchValue])

  const createCheckedTagsArray = (id) => {
    let tempArrSelectedTags = [...selectedTags]

     const obj = selectedTags.find(el => el.id === id)
     const elemIndex = binarySearch(tags, id)

     if (!!obj) {
        tempArrSelectedTags = selectedTags.filter(el => el.id !== id)
      } else {
        tempArrSelectedTags.push(tags[elemIndex])
     }

     dispatch(checkTags(tempArrSelectedTags))
  }

  const lisTtagsLength = searchedAndFilteredByGroupTags.length
  const rowHeith = height - 332

  const Row = ({ index, style }) => (
    <Tooltip
        key={index}
        placement="right"
        title={
          <Typography sx={{m: 0}} paragraph={true}>
            Address: {searchedAndFilteredByGroupTags[index].address}<br/>
            Datatype: {searchedAndFilteredByGroupTags[index].data_type}<br/>
            Tagtable: {searchedAndFilteredByGroupTags[index].tag_table}<br/>
            Comment: {searchedAndFilteredByGroupTags[index].comment}
          </Typography>}
        style={style} >
      <ListItem divider dense={true} >
        <ListItemButton
          role={undefined}
          onClick={() => createCheckedTagsArray(searchedAndFilteredByGroupTags[index].id)}
          dense={true}
        >
          <ListItemIcon sx={{ minWidth: '35px' }} >
            <Checkbox
              edge="start"
              checked={!!selectedTags.find(el => el.id === searchedAndFilteredByGroupTags[index].id)}
              tabIndex={-1}
              disableRipple={true}
              inputProps={{'aria-labelledby': searchedAndFilteredByGroupTags[index].id}}
            />
          </ListItemIcon>
          <ListItemText
            id={searchedAndFilteredByGroupTags[index].id}
            primary={
              <Typography sx={{m: 0}} paragraph={true}>
                Tag: {searchedAndFilteredByGroupTags[index].name_tag} <br/>
                Group: {searchedAndFilteredByGroupTags[index].label}
              </Typography>}
          />
        </ListItemButton>
      </ListItem>
     </Tooltip>
  )

  return(
    <Paper sx={{ p: 2, m:1, height: height - 164 }} elevation={10} square>
      <Box component="div" mb={0} p={1} sx={{ border: 'none', minHeight: '10px' }}>
        <Typography
          display="block" sx={{ color: '#666666', fontSize: 26, ml: 2 }}
        >
          Please, select a tags from list
          </Typography>
      </Box>
      <Paper sx={{ m: 0 }} elevation={3} square>
        <Box component="div" mb={1} p={2} sx={{ border: 'none', minHeight: '10px' }}>
          <Stack direction="row" spacing={3}>
            <TextField
              value={searchValue}
              onChange={(event) => setSearchValue(event.currentTarget.value)}
              id="outlined-search"
              label="Search tag"
              type="search"
              size="small"
            />
            <Autocomplete
              size="small"
              disablePortal
              id="combo-box-demo"
              options={ groups }
              sx={{ width: 300, offset: 100 }}
              freeSolo
              value={ value }
              onChange={(_, newText) => {setValue(newText)}}
              renderInput={(params) => <TextField  {...params} label="Filter by group" />}
            />
          </Stack>
        </Box>
      </Paper>
      <FixedSizeList
        height={rowHeith}
        width={'100%'}
        itemSize={64}
        itemCount={ lisTtagsLength }
        layout='vertical'
        overscanCount={8}
      >
        { Row }
      </FixedSizeList>
    </Paper>  
  )
}

 export default AllTagsList
 