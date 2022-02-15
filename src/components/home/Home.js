import React, { useEffect, useState } from "react";
import HeaderComponent from "../../common-components/HeaderComponent";
import { useLocation } from "react-router-dom";
import DataTable from "../../common-components/DataTable";
import columnHeader from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { getGitRepList, updateGitRepList } from "../../action/action";
import transformGitRepoList from "../../utlis/Transform";
import SearchIcon from "../../assets/search-icon.svg";
import ClearIcon from "../../assets/closeIcon.svg";
import LoaderImg from "../../assets/loader.svg";

export default function Home() {
  const { state } = useLocation();
  const loginDetails = state && state.name;
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState("");
  const [tableData, setTableData] = useState("");
  const filterColumns = ["repoName", "language"];
  const getGitRepoListDetails = useSelector((state) => state.getGitRepoDetails);
  const gitRepoList =
    getGitRepoListDetails && getGitRepoListDetails.gitRepoList;

  useEffect(() => {
    if (!gitRepoList.length) {
      dispatch(getGitRepList());
    }
  }, [gitRepoList, dispatch]);

  const transformGitRepoDetails = transformGitRepoList(gitRepoList);
  const isLoading = getGitRepoListDetails && getGitRepoListDetails.isFetching;
  const onSearchChange = (val) => {
    const lowercasedValue = val.toLowerCase().trim();
    setSearchVal(lowercasedValue);
    if (lowercasedValue === "") {
      setTableData(transformGitRepoDetails);
    } else {
      const filteredData =
        transformGitRepoDetails &&
        transformGitRepoDetails.filter((item) => {
          return Object.keys(item).some((key) =>
            filterColumns.includes(key)
              ? item[key] &&
                item[key].toString().toLowerCase().includes(lowercasedValue)
              : false
          );
        });
      setTableData(filteredData);
    }
  };

  const onSearchTextClear = () => {
    setSearchVal("");
    setTableData(transformGitRepoDetails);
  };

  const markFavourite = (row, value) => {
    dispatch(
      updateGitRepList({
        repoList: transformGitRepoDetails,
        rowItem: row,
        value: value,
      })
    );
  };

  return (
    <div className="home-details">
      <HeaderComponent showUser={state && state.name} />

      {loginDetails && (
        <>
          <div className="search-section">
            <div className="git-repo-search-input">
              <img
                src={SearchIcon}
                alt="search-icon"
                className="git-repo-search-icon"
              />
              <input
                onChange={(event) => onSearchChange(event.target.value)}
                value={searchVal}
                className="git-repo-search"
                placeholder="Search by repo Name, Language"
              />
              {searchVal && (
                <img
                  src={ClearIcon}
                  alt="clear-icon"
                  onClick={onSearchTextClear}
                  className="git-repo-search-clear"
                />
              )}
            </div>
          </div>

          {isLoading ? (
            <img src={LoaderImg} alt="loader-img" className="loader-img" />
          ) : (
            <div className="table-details">
              {transformGitRepoDetails &&
                transformGitRepoDetails.length > 0 && (
                  <DataTable
                    tableCols={columnHeader}
                    tableData={tableData || transformGitRepoDetails}
                    markFavourite={markFavourite}
                  />
                )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
