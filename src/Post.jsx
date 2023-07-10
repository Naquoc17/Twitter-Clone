import { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import BarChartIcon from "@mui/icons-material/BarChart";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__headerText">
            <h3>
              {displayName}
              <span className="post__headerSpecial">
                {verified && <VerifiedRoundedIcon className="post__badge" />}@
                {username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineRoundedIcon fontsize="small" />
            <RepeatIcon fontsize="small" />
            <FavoriteBorderIcon fontsize="small" />
            <BarChartIcon fontsize="small" />
            <PublishIcon fontsize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
