import { Paper, Tooltip, Box, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { checkTags } from '../../../Redux/slice';

import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const SelectedTagsList = ({ height, width }) => {

  const selectedTags = useSelector((state) => state.login.selectedTags)

  const dispatch = useDispatch()

  const removeSelectedTagHandler = (index) => {
    let tempArrSelectedTags = [...selectedTags]
    tempArrSelectedTags.splice(index, 1)
    dispatch(checkTags(tempArrSelectedTags))
  }

  return(
    <Paper sx={{ p: 2, m: 1, height: height - 164 }} elevation={10} square>
      <Box component="div" mb={0} p={1} sx={{ border: 'none', minHeight: '10px' }}>
        <Typography
          display="block" sx={{ color: '#666666', fontSize: 26, ml: 2 }}
        >
          Selected tags
          </Typography>
      </Box>
      <List
        sx={{
          paddingRight: '12px',
          bgcolor: 'background.paper'
        }}
      >
      {selectedTags.map((value, index) => { 
      const labelId = `checkbox-list-label-${value}`;
      const { id, name_tag, tag_table, address, data_type, comment, label } = value
      return (
        <Tooltip
            key={id}
            placement="right"
            title={
              <Typography sx={{m: 0}} paragraph={true}>
                Address: {address}<br/>
                Datatype: {data_type}<br/>
                Tagtable: {tag_table}<br/>
                Comment: {comment}
              </Typography>}
              >
            <ListItem 
              divider
              dense={true}
            >
              <ListItemText
                id={labelId}
                primary={
                  <Typography sx={{m: 0}} paragraph={true}>
                    Name tag: {name_tag}<br/>
                    Name group: {label}
                  </Typography>}
                />
            <IconButton
              onClick={() => removeSelectedTagHandler(index)}
              edge="end"
              aria-label="comments">              
            <DeleteIcon/>
          </IconButton>
        </ListItem>
      </Tooltip>
        )
      }
    )
  }
      </List>
    </Paper>  
  )
}
 export default SelectedTagsList
 