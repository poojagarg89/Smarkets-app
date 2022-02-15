import axios from "axios";

const baseURL = `https://api.github.com/search/repositories`;

const getGitRepList = () => {
  const URL = `${baseURL}?q=created:>2017-01-10&sort=stars&order=desc`;
  return axios.get(URL);
};

export default getGitRepList;
