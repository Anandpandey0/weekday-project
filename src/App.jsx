import { useState, useEffect } from "react";
import useDataFetcher from "./api/fetchData";
import { Box, Grid } from "@mui/material";
import JobCard from "./components/JobCard";

function App() {
  // jobs will be an array which will be filled with the data coming from API
  const [jobs, setJobs] = useState([]);
  //const [isLoading, setIsLoading] = useState(false);

  const { data, isLoading: dataIsLoading, error } = useDataFetcher();

  useEffect(() => {
    // Set jobs data when data is fetched
    if (data) {
      //console.log(data);
      setJobs(data.jdList);
    }
  }, [data]);
  return (
    <>
      {data ? (
        <Box sx={{ flexGrow: 1 }} padding={{ md: 5 }} borderRadius="20px">
          {error && <p>Error: {error.message}</p>}
          <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
            {jobs.map((job, index) => (
              <Grid item xs={1} sm={1} md={1} key={index}>
                <JobCard job={job} />
              </Grid>
            ))}
            {dataIsLoading && <p>Loading...</p>}
          </Grid>
        </Box>
      ) : (
        <div>No data</div>
      )}
    </>
  );
}

export default App;
