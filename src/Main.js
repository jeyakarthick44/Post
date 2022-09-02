import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  CardContent,
  Grid,
  Avatar,
  Card,
  Box,
  CardMedia,
  Typography,
  CardActionArea
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const Main = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.facthunt.in/fostergem/v1/post/list/public")
      .then(function (response) {
        setPost(response.data.content);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Typography variant="h6" component="span">
        Discover
      </Typography>
      <AddIcon sx={{ position: "relative", left: "90%" }} />
      <Grid container direction="row" spacing={2} mt={1}>
        {post.map((item) => (
          <Grid item key={item.postId} xs={12} md={4} lg={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={item.coverImageUrl}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2">
                    {item.title.slice(11)}
                  </Typography>
                  <Box sx={{ display: "flex", flexDirection: "row", mt: 2 }}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Avatar
                        alt="Remy Sharp"
                        src={item.user.profilePic}
                        sx={{ width: 24, height: 24 }}
                      />
                      <Typography
                        variant="body2"
                        component="span"
                        ml={2}
                        mt={0.3}
                      >
                        {item.user.fname + " " + item.user.lname}
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 0.3, ml: 5 }}>
                      <Typography variant="body2">
                        Published : {item.date.slice(0, 10)}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default Main;
