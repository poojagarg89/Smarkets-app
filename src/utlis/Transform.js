const transformGitRepoList = (data) => {
  return (
    (data.length &&
      data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          html_url: item.html_url,
          description: item.description,
          language: item.language,
          favourite: item.favourite || false,
        };
      })) ||
    []
  );
};

export default transformGitRepoList;
