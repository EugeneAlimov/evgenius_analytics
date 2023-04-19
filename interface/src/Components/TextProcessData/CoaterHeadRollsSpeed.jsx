import React from "react";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

const CoaterHeadRollsSpeed = ({ matchesDownLG }) => {
  const parameters = useSelector((state) => state.ws.wsGetDashboardData);

  const prime = [
    {
      name: "Prime coater speed:",
      topApplicator: Math.round10(
        parameters["act_speed - PROCESS - PRIME_COATER - TOP_HEAD - APPL_ROLL"]
      ),
      topPickUp: Math.round10(
        parameters["act_speed - PROCESS - PRIME_COATER - TOP_HEAD - PU_ROLL"]
      ),
      bottomApplicator: Math.round10(
        parameters["act_speed_percent - PROCESS - PRIME_COATER - BOTTOM_HEAD - APPL_ROLL"]
      ),
      bottomPickUp: Math.round10(
        parameters["act_speed_percent - PROCESS - PRIME_COATER - BOTTOM_HEAD - PU_ROLL"]
      ),
    },
    {
      name: "Prime coater ratio:",
      topApplicator: Math.round10(
        parameters["act_speed_percent - PROCESS - PRIME_COATER - TOP_HEAD - APPL_ROLL"]
      ),
      topPickUp: Math.round10(
        parameters["act_speed_percent - PROCESS - PRIME_COATER - TOP_HEAD - PU_ROLL"]
      ),
      bottomApplicator: Math.round10(
        parameters["act_speed_percent - PROCESS - PRIME_COATER - BOTTOM_HEAD - APPL_ROLL"]
      ),
      bottomPickUp: Math.round10(
        parameters["act_speed_percent - PROCESS - PRIME_COATER - BOTTOM_HEAD - PU_ROLL"]
      ),
    },
  ];

  const finish = [
    {
      name: "Finish coater speed:",
      applicatorA: Math.round10(
        parameters["act_speed - PROCESS - FINISH_COATER - TOP_HEAD_A - APPL_ROLL"]
      ),
      pickUpA: Math.round10(
        parameters["act_speed - PROCESS - FINISH_COATER - TOP_HEAD_A - PU_ROLL"]
      ),
      applicatorB: Math.round10(
        parameters["act_speed - PROCESS - FINISH_COATER - TOP_HEAD_B - APPL_ROLL"]
      ),
      pickUpB: Math.round10(
        parameters["act_speed - PROCESS - FINISH_COATER - TOP_HEAD_B - PU_ROLL"]
      ),
      applicatorC: Math.round10(
        parameters["act_speed - PROCESS - FINISH_COATER - BOTTOM_HEAD - APPL_ROLL"]
      ),
      pickUpC: Math.round10(
        parameters["act_speed - PROCESS - FINISH_COATER - BOTTOM_HEAD - PU_ROLL"]
      ),
    },
    {
      name: "Finish coater ratio:",
      applicatorA: Math.round10(
        parameters["act_speed_percent - PROCESS - FINISH_COATER - TOP_HEAD_A - APPL_ROLL"]
      ),
      pickUpA: Math.round10(
        parameters["act_speed_percent - PROCESS - FINISH_COATER - TOP_HEAD_A - PU_ROLL"]
      ),
      applicatorB: Math.round10(
        parameters["act_speed_percent - PROCESS - FINISH_COATER - TOP_HEAD_B - APPL_ROLL"]
      ),
      pickUpB: Math.round10(
        parameters["act_speed_percent - PROCESS - FINISH_COATER - TOP_HEAD_B - PU_ROLL"]
      ),
      applicatorC: Math.round10(
        parameters["act_speed_percent - PROCESS - FINISH_COATER - BOTTOM_HEAD - APPL_ROLL"]
      ),
      pickUpC: Math.round10(
        parameters["act_speed_percent - PROCESS - FINISH_COATER - BOTTOM_HEAD - PU_ROLL"]
      ),
    },
  ];

  const motorStatus = {
    prime: {
      topAPPL: parameters["Motor_status - PRIME_COATER - TOP_APP"],
      topPU: parameters["Motor_status - PRIME_COATER - TOP_PICKUP"],
      bottomAPPL: parameters["Motor_status - PRIME_COATER - Bottom_APP"],
      bottomPU: parameters["Motor_status - PRIME_COATER - Bottom_PICKUP"],
    },
    finish: {
      topA_APPL: parameters["Motor_status - FINISH_COATER - TOPA_APP"],
      topA_PU: parameters["Motor_status - FINISH_COATER - TOPA_PICKUP"],
      topB_APPL: parameters["Motor_status - FINISH_COATER - TOPB_APP"],
      topB_PU: parameters["Motor_status - FINISH_COATER - TOPB_PICKUP"],
      bottomAPPL: parameters["Motor_status - FINISH_COATER - Bottom_APP"],
      bottomPU: parameters["Motor_status - FINISH_COATER - Bottom_PICKUP"],
    },
  };
  console.log(motorStatus);
  const style = { backgroundColor: "f9f8f800", boxShadow: 2 };

  const styleListItem = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "space-around",
    padding: "0px",
    width: "240px",
  };

  const listItemFontStyle = {
    fontSize: "17px",
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
            <Typography
              color={() => {
                if (motorStatus.prime.topAPPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.prime.topAPPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {prime[0].topApplicator} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up</Typography>
            <Typography
              color={() => {
                if (motorStatus.prime.topPU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.prime.topPU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ color: "#00d52b", ...listItemFontStyle }}
              fontWeight={700}
            >
              {prime[0].topPickUp} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Applicator</Typography>
            <Typography
              color={() => {
                if (motorStatus.prime.bottomAPPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.prime.bottomAPPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {prime[0].bottomApplicator} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Pick Up</Typography>
            <Typography
              color={() => {
                if (motorStatus.prime.bottomPU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.prime.bottomPU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {prime[0].bottomPickUp} m/min
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
            <Typography
              color={() => {
                if (motorStatus.prime.topAPPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.prime.topAPPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {prime[1].topApplicator}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up</Typography>
            <Typography
              color={() => {
                if (motorStatus.prime.topPU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.prime.topPU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {prime[1].topPickUp}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Applicator</Typography>
            <Typography
              color={() => {
                if (motorStatus.prime.bottomAPPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.prime.bottomAPPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {prime[1].bottomApplicator}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Pick Up</Typography>
            <Typography
              color={() => {
                if (motorStatus.prime.bottomPU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.prime.bottomPU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {prime[1].bottomPickUp}%
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
            <Typography
              color={() => {
                if (motorStatus.finish.topA_APPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.topA_APPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[0].applicatorA} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up A</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.topA_PU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.topA_PU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[0].pickUpA} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Applicator B</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.topB_APPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.topB_APPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[0].applicatorB} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up B</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.topB_PU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.topB_PU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[0].pickUpB} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Applicator C</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.bottomAPPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.bottomAPPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[0].applicatorC} m/min
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Pick Up C</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.bottomPU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.bottomPU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[0].pickUpC} m/min
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
            <Typography
              color={() => {
                if (motorStatus.finish.topA_APPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.topA_APPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[1].applicatorA}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up A</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.topA_PU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.topA_PU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[1].pickUpA}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Applicator B</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.topB_APPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.topB_APPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[1].applicatorB}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Top Pick Up B</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.topB_PU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.topB_PU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[1].pickUpB}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Applicator C</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.bottomAPPL === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.bottomAPPL === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[1].applicatorC}%
            </Typography>
          </ListItem>
          <ListItem sx={{ ...styleListItem }}>
            <Typography sx={{ ...listItemFontStyle }}>Bottom Pick Up B</Typography>
            <Typography
              color={() => {
                if (motorStatus.finish.bottomPU === 65537) {
                  return "#00d52b";
                }
                if (motorStatus.finish.bottomPU === 131072) {
                  return "#fd0136";
                }
              }}
              sx={{ ...listItemFontStyle }}
              fontWeight={700}
            >
              {finish[1].pickUpC}%
            </Typography>
          </ListItem>
        </List>
      </Stack>
    </Stack>
  );
};

export default CoaterHeadRollsSpeed;
