import styles from "../../styles/Common.module.css";
import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "20%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Loading = () => {
  const classes = useStyles();
  const [loader, setloader] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setloader((loader) => getLoaderVal(loader));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getLoaderVal = (val) => {
    return Math.max((val + 1) % 4, 1);
  };

  return (
    <div className={styles.loading}>
      <div className={styles.loadingImg}>
        <div className={classes.root}>
          <LinearProgress />
        </div>
        <span className="mt-1">
          {[...Array(loader)].map((el) => (
            <span key={el}>.</span>
          ))}{" "}
          Please wait{" "}
          {[...Array(loader)].map((el) => (
            <span key={el}>.</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Loading;
