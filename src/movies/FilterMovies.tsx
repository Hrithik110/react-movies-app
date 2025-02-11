import { Field, Formik,Form, FormikHelpers } from 'formik';
import React from 'react'
import { inTheatres } from '../MockData/MockData';
import { genreDTO } from './genre.model';
import Button from '../utils/Button';

const FilterMovies = () => {
  const initialValues: filterMoviesForm = {
    title: '',
    genreId: 0,
    upcomingReleases:false,
    inTheatres: false,
  }

  const genres: genreDTO[] = 
   [ {id: 1, name: 'Drama'},
    {id:2, name: 'Comedy'}]
  
  return (
    <>
      <h3>Filter Movies</h3>

      <Formik
        initialValues={initialValues}   
        onSubmit={(value)=>
          console.log(value)
        }
        >
{(formikProps)=>(
   <Form>
    <div className='row gx-3 align-items-center'>
    <div className='col-auto'>
    <input type='text' className='form-control' id='title'
   placeholder='Title of the movie'
   {...formikProps.getFieldProps("title")}
    />
    </div>

    <div className='col-auto'>
      <select className='form-select'
      {...formikProps.getFieldProps('genreId')}
      >

        <option value="0">---Choose a genre---</option>
        {genres.map((genre)=>(
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>

    <div className='col-auto'>
      <div className='form-check'>
        <Field type='checkbox' className='form-check-input' id='upcomingReleases'
           name='upcomingReleases'
        />
        <label className='form-check-label' htmlFor="upcomingReleases">Upcoming Release</label>
      </div>
      </div>
      <div className='col-auto'>
      <div className='form-check'>
        <Field type='checkbox' className='form-check-input' id='inTheatres' name='inTheatres'
        
        />
        <label className='form-check-label' htmlFor="inTheatres">In Theatres</label>
      </div>
    </div>
      <div className='col-auto'>
        <Button className='btn btn-primary'disabled={false}>Filter</Button>
        <Button className='btn btn-danger ms-3' onClick={()=>formikProps.setValues(initialValues) } disabled={false}>Cancel</Button>

      </div>
    </div>


   </Form>
)}
 

      </Formik>
    </>
  )
}

interface filterMoviesForm{
  title: string;
  genreId: number;
  upcomingReleases: boolean;
  inTheatres: boolean;

}
export default FilterMovies
