import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { informAction } from "../store/information";
import { itemsAction } from "../store/siteitem";

const Serverload = () => {
  const fetchDone = useSelector((state) => state.inform.fetchDone);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(informAction.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched data:", data); // 👀 check here
        dispatch(informAction.markFetchDone());
        dispatch(informAction.markFetchingFinished());
        dispatch(itemsAction.addinitialpost(data.items[0]));
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
        }
      });

    return () => controller.abort();
  }, [fetchDone, dispatch]);

  return null;
};

export default Serverload;
