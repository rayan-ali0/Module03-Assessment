import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import article from '../Images/article.jpg'
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Input from '@mui/material/Input'
import Modal from '@mui/material/Modal';


export default function ImgMediaCard({article,onDelete}) {
const [loading,setLoading]=React.useState(false)

const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

  const deleteArticle=async()=>{
    try{
      setLoading(true)
      const response=await axios.delete(`${process.env.REACT_APP_PATH}/article/delete/${article.id}`)
      if(response){
        console.log(response.data)
        
        setLoading(false)
        onDelete()
      }
      else{
        console.log('Error deleting Article')
      
        setLoading(false)
      }
      }
      catch(error){
        console.log(error.message)
        setLoading(false)
      }
  }


const updateProfile=async(req,res)=>{

  const title = document.querySelector('#title').value.trim()
  const category = document.querySelector('#category').value.trim()
  const author = document.querySelector('#author').value.trim()
  const body = document.querySelector('#body').value.trim()
  const updatedData={
    title:title,
    category:category,
    author:author,
    body:body
  }
  try{
    const res = await axios.put(`${process.env.REACT_APP_PATH}/article/update/${article.id}`, updatedData)
    if(res){
      console.log('Profile Updated')
      setOpen(false)
    }
  }
  catch(error){

  }


}









  return (
    <Card sx={{ maxWidth: 400,height:350, }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        image={`${process.env.REACT_APP_PATH}/${article.image}`}
        sx={{objectFit:"contain"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
{article.category} 

       </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"sx={{color:"red"}} onClick={deleteArticle}>Delete</Button>
        <Button size="small"  onClick={handleOpen}>Edit</Button>
        <Button size="small">Read More</Button>
      </CardActions>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
Edit Article
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >

<Typography  sx={{ alignSelf: "center", color: "white"}}>     
                       <img src={`${process.env.REACT_APP_PATH}/${article.image}`} alt="article profile"></img>
              </Typography>
              <label htmlFor="file-input" 
              style={{ display: "flex",
            justifyContent: "center",
            alignItems:"center",
            flexDirection:"column",border:"1px solid blue"}}
            >
        <Input
          type="file"
          inputProps={{ accept: 'image/*' }}
          // onChange={handleFileChange}
          sx={{
            display: 'none',
            width:"100%" ,
            alignSelf: "center",

            border:"1px solid blue",
          }}
          id="file-input"
        />
        <Button
          component="span"
          sx={{
            color: "white",
            alignSelf: "center",
            backgroundColor: "transparent",
            // borderRadius: "8px",
            height: "35px",
            width: "100%",
            float:"center",
            zIndex:2,
            '&:hover': {
              backgroundColor: "#fff",
              color: "blue"
            },
          }}
        >
     </Button>
     Update Photo
        </label>
<TextField id="title" label="Title" variant="outlined"  type="text" value={article.title}                 readOnly={false}/>
<TextField id="category" label="Category" variant="outlined"  type="text" value={article.category}                 readOnly={false}/>
<TextField id="author" label="Author" variant="outlined"  type="text" value={article.author}                 readOnly={false}/>
<TextField id="body" label="Body" multiline variant="outlined" fullWidth row={40} maxRows={7} type="text" value={article.body}                 readOnly={false}/>

      </Box>
      <Button variant="contained" onClick={updateProfile}>Update Profile</Button>
        </Box>
      </Modal>
    </Card>
  );
}