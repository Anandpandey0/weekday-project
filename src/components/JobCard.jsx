/* eslint-disable react/prop-types */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function JobCard({ job }) {
  const avatarUrl =
    "https://storage.googleapis.com/weekday-assets/airtableAttachment_1713271734116_1ci60.png";
  return (
    <Card sx={{ minWidth: 350, minHeight: 500 }}>
      <CardContent>
        <Typography
          sx={{ fontSize: 9 }}
          color="text.secondary"
          gutterBottom
          style={{
            border: "solid 1px",
            width: "max-content",
            padding: "5px",
            borderRadius: "20px",
          }}
        >
          ⏳ Posted 19 days ago
        </Typography>
        <Typography
          variant="body1"
          component="div"
          display="flex"
          alignItems="center"
          gap="5px"
          //style={{ display: "flex", alignItems: "center", gap: "5px" }}
        >
          <Avatar variant="square" src={avatarUrl} />
          <Typography component="div">
            <Typography
              component="h3"
              color="grey"
              fontWeight="600"
              // fontSize="13px"
              letterSpacing="1px"
            >
              {job.companyName}
            </Typography>
            <Typography component="h2" lineHeight="21px">
              {job.jobRole}
            </Typography>
            <Typography component="p" fontWeight="500">
              {job.location}
            </Typography>
          </Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h6" color="text.secondary">
          Estimated Salary: ₹ {job.minJdSalary ? +job.minJdSalary + " - " : " "}{" "}
          {job.maxJdSalary} LPA ✅
        </Typography>

        <Typography variant="p" fontSize="15px" component="p">
          About Company
        </Typography>
        <Typography variant="p" component="p" fontWeight="500">
          About Us
        </Typography>
        <Typography variant="div" component="div" fontWeight="500">
          {job.jobDetailsFromCompany}
        </Typography>
        <Button
          size="small"
          style={{
            margin: "5px auto",
            border: "solid 2px black",
            display: "flex",
            justifySelf: "center",
          }}
        >
          View Job
        </Button>
        <Typography component="p">Minimum Experience</Typography>
        <Typography component="p">{job.minExp} years </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          style={{
            width: "80%",
            backgroundColor: "#55EFC4",
            margin: "0px auto",
          }}
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}
