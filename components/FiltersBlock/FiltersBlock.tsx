import { Formik, Form, Field, FormikHelpers } from "formik";
import { useId } from "react";
import css from "./FiltersBlock.module.css";
import { useFilterData } from "@/lib/store/filterStore";
import { Icon } from '../ui/Icon/Icon';

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
         <Icon name={'icon-map'} width={20} height={20} />
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

        <div className={css.checkboxItems}>
    <label className={css.checkboxItem}>
      <Icon name={'icon-wind'} width={32} height={32} />
          <Field type="checkbox" name="equipment" value="AC"  className={css.visuallyHidden}/>
          AC
        </label>
        <label className={css.checkboxItem}>
          <Icon name={'icon-diagram'} width={32} height={32} />
          <Field type="checkbox" name="equipment" value="automatic" className={css.visuallyHidden}/>
          Automatic
        </label>
        <label className={css.checkboxItem}>
          <Icon name={'icon-cup-hot'} width={32} height={32} />
          <Field type="checkbox" name="equipment" value="kitchen" className={css.visuallyHidden}/>
          Kitchen
        </label>
        <label className={css.checkboxItem}>
          <Icon name={'icon-tv'} width={32} height={32} />
          <Field type="checkbox" name="equipment" value="TV" className={css.visuallyHidden}/>
          TV
        </label>
        <label className={css.checkboxItem}>
          <Icon name={'icon-shower'} width={32} height={32} />
          <Field type="checkbox" name="equipment" value="bathroom" className={css.visuallyHidden}/>
          Bathroom
        </label>
        </div>
</div>

<div className={css.redioBtnWrp}>
    <h2 className={css.redioBtnTitle}>Vehicle type</h2>

    <div className={css.redioBtnItems}>
       <label>
        <Icon name={'icon-grid-1x2'} width={32} height={32} />
          <Field type="radio" name="form" value="panelTruck" />
          Van
        </label>
        <label>
          <Icon name={'icon-grid-2x2'} width={32} height={32} />
          <Field type="radio" name="form" value="fullyIntegrated" />
          Fully Integrated
        </label>
        <label>
          <Icon name={'icon-grid-3x3'} width={32} height={32} />
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