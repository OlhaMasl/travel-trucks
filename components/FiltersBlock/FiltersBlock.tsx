import { Formik, Form, Field, FormikHelpers } from "formik";
import { useId } from "react";
import css from "./FiltersBlock.module.css";
import { useFilterData } from "@/lib/store/filterStore";

interface FiltersBlockValues {
  location: string;
  equipment: string[];
  form: string;

}

const initialValues: FiltersBlockValues = {
  location: "Ukraine, Kyiv",
  equipment: [],
  form: "",
};

const FiltersBlock = () => {

    const fieldId = useId();

    const { setFilterData } = useFilterData();

    const handleSubmit = (
    values: FiltersBlockValues,
    actions: FormikHelpers<FiltersBlockValues>
  ) => {
   setFilterData(values);
    actions.resetForm();
  };


  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>

        <div className={css.locationWrp}>
        <label htmlFor={`${fieldId}-location`}  className={css.locationLabel}>Location</label>
          <Field as="select" name="location" id={`${fieldId}-location`} className={css.locationInput}>
      <option value="" disabled>Choose a city</option>
      <option value="Ukraine, Kyiv" >Ukraine, Kyiv</option>
      <option value="Ukraine, Poltava">Ukraine, Poltava</option>
      <option value="Ukraine, Dnipro">Ukraine, Dnipro</option>
      <option value="Ukraine, Odesa">Ukraine, Odesa</option>
      <option value="Ukraine, Kharkiv">Ukraine, Kharkiv</option>
      <option value="Ukraine, Sumy">Ukraine, Sumy</option>
       <option value="Ukraine, Lviv">Ukraine, Lviv</option>
    </Field>
    </div>

    <div className={css.checkboxWrp}>
        <h2 className={css.checkboxTitle}>Vehicle equipment</h2>

        <div className={css.checkboxItem}>
    <label>
          <Field type="checkbox" name="equipment" value="AC" />
          AC
        </label>
        <label>
          <Field type="checkbox" name="equipment" value="automatic" />
          Automatic
        </label>
        <label>
          <Field type="checkbox" name="equipment" value="kitchen" />
          Kitchen
        </label>
        <label>
          <Field type="checkbox" name="equipment" value="TV" />
          TV
        </label>
        <label>
          <Field type="checkbox" name="equipment" value="bathroom" />
          Bathroom
        </label>
        </div>
</div>

<div className={css.redioBtnWrp}>
    <h2 className={css.redioBtnTitle}>Vehicle type</h2>

    <div className={css.redioBtnItems}>
       <label>
          <Field type="radio" name="form" value="panelTruck" />
          Van
        </label>
        <label>
          <Field type="radio" name="form" value="fullyIntegrated" />
          Fully Integrated
        </label>
        <label>
          <Field type="radio" name="form" value="alcove" />
          Alcove
        </label>
        </div>
</div>


        <button type="submit" className={css.submitBtn}>Search</button>
      </Form>
    </Formik>
  )
}

export default FiltersBlock