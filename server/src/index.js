import express from "express";
import axios from "axios";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const requestGithubActivity = async (username, year) => {
  try {
    const activity = await axios.get(
      `https://skyline.github.com/${username}/${year}.json`
    );
    return [activity, null];
  } catch (error) {
    return [null, error];
  }
};

app.get("/github/activity/:username/:year", async (req, res) => {
  const username = req.params.username;
  const year = req.params.year;

  const [activity, error] = await requestGithubActivity(username, year);
  if (error) res.status(error.response.status).json(error.response.data);
  else res.status(activity.status).json(activity.data);
});

app.listen(5000);
