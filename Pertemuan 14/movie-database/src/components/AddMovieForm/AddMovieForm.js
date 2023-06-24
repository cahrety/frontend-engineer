import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./AddMovieForm.module.css";
import Alert from "../Alert/Alert";
import Button from "../ui/Button/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMovie } from "../features/moviesSlice";

function AddMovieForm() {
  const navigation = useNavigate();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    image: "",
    type: "",
    isTitleError: false,
    isDateError: false,
    isImageError: false,
  });

  const { title, date, image, type, isTitleError, isDateError, isImageError } = formData;

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function validate() {
    if (title === "") {
      setFormData({
        ...formData,
        isTitleError: true,
        isDateError: false,
        isImageError: false,
      });
      return false;
    }
    else if (date === "") {
      setFormData({
        ...formData,
        isTitleError: false,
        isDateError: true,
        isImageError: false,
      });
      return false;
    }
    else if (image === "") {
      setFormData({
        ...formData,
        isTitleError: false,
        isDateError: false,
        isImageError: true,
      });
      return false;
    }
    else {
      setFormData({
        ...formData,
        isTitleError: false,
        isDateError: false,
        isImageError: false,
      });
      return true;
    }
  }
  function submitMovie() {
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      image: image,
    };
    dispatch(addMovie(movie));
    navigation("/");
  }
  function handleSubmit(e) {
    e.preventDefault();

    validate() && submitMovie();
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.left}>
          <img
            className={styles.image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>Add Movie</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.group}>
              <label className={styles.head}>Movie Title</label>
              <input
                className={styles.movie__title}
                type="text"
                placeholder="Title"
                name="title"
                value={title}
                onChange={handleChange}
              />
              {isTitleError && <Alert>Title is Required</Alert>}
            </div>
            <div className={styles.group}>
              <label className={styles.head}>Date Title</label>
              <input
                className={styles.date__title}
                type="date"
                placeholder="dd-mm-yyyy"
                name="date"
                value={date}
                onChange={handleChange}
              />
              {isDateError && <Alert>Date is Required</Alert>}
            </div>
            <div className={styles.group}>
              <label className={styles.head}>Image</label>
              <input
                className={styles.form__image}
                type="text"
                placeholder="https://dropurlink-image@here"
                name="image"
                value={image}
                onChange={handleChange}
              />
              {isImageError && <Alert>Image is Required</Alert>}
            </div>
            <div className={styles.group}>
              <label className={styles.head}>Genre</label>
              <select
                className={styles.genre}
                id="type"
                name="type"
                value={type}
                onChange={handleChange}
              >
                <option value="ac">Action</option>
                <option value="ad">Adventure</option>
                <option value="co">Comedy</option>
                <option value="dr">Drama</option>
                <option value="ro">Romance</option>
              </select>
            </div>
            <div>
              <Button variasi="secondary" full={true}>Added</Button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
