import { Avatar, Divider, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import dot from "../../assets/dot.png";
import dots from "../../assets/dots.png";
import dot2 from "../../assets/dot2.png";
import { useDispatch, useSelector } from "react-redux";
import { GetListNotification } from "../../store/actions/notification";
export default function NotificationMenu() {
  const dispatch = useDispatch();
  const [values, setValues] = React.useState({
    showBlue: false,
  });
  const [titre, setTitre] = useState("#2B29D4");
  const [text, setText] = useState("  #595CA4");
  const [dateText, setDateText] = useState("#3683E7");
  const handleClickIsRead = (e) => {
    e.stopPropagation();
    setValues({
      showBlue: true,
    });
    setTitre("#CCCCCC");
    setText("#CCCCCC");
    setDateText("#CCCCCC");
  };
  const [isActive, setIsActive] = useState(false);
  const [notificationData, setNotificationData] = useState({});
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  const { user } = useSelector((state) => state.userReducer);
  const { listNotification } = useSelector(
    (state) => state.notificationReducer
  );
  useEffect(() => {
    dispatch(GetListNotification(user?.result.AccessToken));
  }, []);

  useEffect(() => {
    setNotificationData(listNotification);
  }, [listNotification]);

  const handleClick = () => {
    setIsActive((current) => !current);

    // 👇️ or set to true
    // setIsActive(true);
  };
  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",

              color: "#2B29D4",
            }}
          >
            Notification
          </Typography>
          {/*           <Typography
            variant="p"
            gutterBottom
            component="div"
            style={{
              textAlign: "left",

              color: " #525B94 ",
            }}
          >
            Click on the  .
          </Typography> */}
        </div>
        <div
          style={{ marginRight: 10, display: "flex", alignItems: "center " }}
        >
          <img
            src={dots}
            alt="logo"
            style={{
              width: 30,
              height: 30,
              objectFit: " contain",
            }}
          />
        </div>
      </div>
      {/*   //////////////////////////////////////debuut notiiif */}
      {listNotification.map((item, index) => (
        <div onClick={(event) => handleClickIsRead(event)} style={{}}>
          <div
            style={{
              width: 365,

              display: "flex",
            }}
          >
            <div
              style={{
                width: 85,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {" "}
              <Avatar
                style={{
                  width: 46,
                  height: 46,
                }}
              >
                <img
                  src={
                    "https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-6/269685212_3060751380839777_2317685994731860454_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HW-7Pl3qG8kAX9nNGWz&_nc_ht=scontent.ftun16-1.fna&oh=00_AT-EdWJCPxuTQdvAVfiU5ngGAybi2wVdKUGq76P-EsBi1A&oe=628C90F8"
                  }
                  alt="logo"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Avatar>
            </div>{" "}
            <Divider
              style={{ backgroundColor: "#cdcaed8d", marginBlock: 40 }}
            />
            <div
              onClick={(event) => handleClickIsRead(event)}
              style={{
                width: "100%",
                marginTop: 10,
              }}
            >
              <Typography
                variant="body1"
                gutterBottom
                component="div"
                style={{
                  fontWeight: "bold",
                  textAlign: "left",
                  color: titre,
                  /*  color: "#2B29D4", */
                  display: "inline-block",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                component="div"
                style={{
                  textAlign: "flex-start",
                  color: text,
                  display: "inline-block",
                }}
              >
                <br />
                <br />
              </Typography>{" "}
              <Typography
                variant="caption"
                gutterBottom
                component="div"
                style={{
                  fontWeight: "bold",
                  textAlign: "center",
                  color: dateText,
                  display: "inline-block",
                }}
              >
                {" "}
                {item.description}
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center " }}>
              {" "}
              <IconButton aria-label="toggle notification status">
                {values.showBlue ? (
                  <img
                    src={dot2}
                    alt="logo"
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                ) : (
                  <img
                    src={dot}
                    alt="logo"
                    style={{
                      width: 40,
                      height: 40,
                    }}
                  />
                )}
              </IconButton>
            </div>{" "}
          </div>
        </div>
      ))}

      {/*   //////////////////////////////////////fin notiiif */}
    </div>
  );
}
