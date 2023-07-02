import React from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { CardActionArea, Card, CardContent, Fab } from "@mui/material";
// import { ReplayCircleFilledOutlined } from "@mui/icons-material";

const ImageUploadCard = ({
  toggleImage,
  userContentImage,
  handleUploadClick,
  handleToggle,
  imageResetHandler,
}) => {
  const renderInitialState = () => {
    return (
      <CardContent>
        <input
          accept="image/*"
          className=""
          id="contained-button-file"
          type="file"
          value={userContentImage}
          onChange={handleUploadClick}
        />
        <label htmlFor="contained-button-file">
          <Fab component="span">
            <AddPhotoAlternateIcon />
          </Fab>
        </label>
      </CardContent>
    );
  };
  const renderUploadedState = () => {
    return (
      <React.Fragment>
        <CardActionArea onClick={imageResetHandler}>
          <img width="100%" src={userContentImage} alt="" />
        </CardActionArea>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <>
        <Card className="">
          {(toggleImage == "initial" && renderInitialState()) ||
            (toggleImage === "uploaded" && renderUploadedState())}
        </Card>
      </>
    </React.Fragment>
  );
};

export default ImageUploadCard;
