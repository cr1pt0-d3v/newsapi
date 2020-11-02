import  {useState, useEffect} from "react";

const useFetch = (country = "de", category = "general") => {
    const [data, setData] = useState(null);
    const apiKey = "a468354129fc4eb98886d95539f176e2";
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`
        );
        const fetchData = await res.json();
        setData(fetchData);
      };
      fetchData();
    }, [country, category]);

    return data;
}

export default useFetch;