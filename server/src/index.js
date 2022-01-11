import express from "express";
import axios from "axios";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const getGithubActivity = async (username, year) => {
  try {
    const activity = await axios.get(
      `https://skyline.github.com/${username}/${year}.json`
    );
    return [activity, null];
  } catch (error) {
    return [null, error];
  }
};

app.get("/github/activity/:username", async (req, res) => {
  const username = req.params.username;
  const [activity, error] = await getGithubActivity(username, 2021);

  if (error) res.status(error.response.status).json(error.response.data);
  else res.status(activity.status).json(activity.data);
});

app.listen(5000);
