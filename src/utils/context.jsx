import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const Api = `https://www.omdbapi.com/?apikey=fd1c875f&`;

const AppProvider = ({ children }) => {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setmovie] = useState([]);
  const [isError, setisError] = useState({ show: false, msg: "" });
  const [searchValue, setSearchValue] = useState("john wick");
  const getMovies = async (url) => {
      setisLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      if (data.Response === "True") {
          setmovie(data.Search);
          setisLoading(false);
        setisError({
          show: false,
          msg: "",
        });
      } else {
        setisLoading(false)
        setisError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
            getMovies(`${Api}s=${searchValue}`);
    }, 1000);
    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <AppContext.Provider
      value={{ isLoading, isError, movie, searchValue, setSearchValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
