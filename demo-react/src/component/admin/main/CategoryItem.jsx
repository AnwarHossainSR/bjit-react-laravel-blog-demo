import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteApiData,fetchAll } from '../../../api/Api'
import url from "../../../config";
import { toast } from 'react-toastify';

const CategoryItem = ( props ) => {

  const [data, setdata] = useState( [] );
  useEffect( () => {
     setdata(props.categories.categories);
  }, [props] );
 
  const deleteCategory = async ( id ) => {
    await deleteApiData( `${url.basePublicUrl}/categories/${id}` );
    toast.error('Category deleted successfully!');
    const result = (await fetchAll( `${url.basePublicUrl}/categories` )).data.categories;
    setdata(result);
  }
  return (
    <table>
      <thead>
        <th>SN</th>
        <th>Name</th>
        <th colSpan="2">Action</th>
      </thead>
      <tbody>
        {data &&
          data.map((category, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{category.name}</td>
              <td>
                <Link to={`/dashboard/categories/${category.slug}`} className="edit">
                  edit
                </Link>
                <Link to="#" onClick={(e)=>deleteCategory(category.id)} className="delete">
                  delete
                </Link>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CategoryItem;
